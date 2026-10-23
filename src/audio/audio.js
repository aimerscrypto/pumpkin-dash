// All sound is synthesised with the Web Audio API — no audio files.
//   music  → musicGain ┐
//   sfx    → sfxGain   ┴→ bus → compressor → master → speakers
//                                               └──→ recDest (for recording)
// Music: 130 BPM spooky electro-swing (swung 8ths) over Dm – Bb – Gm – A7.
//
// The same graph can be built on an OfflineAudioContext (renderOffline) so the
// video exporter gets a sample-exact soundtrack. Every note's nodes disconnect
// themselves when the note ends, so long sessions don't pile up dead nodes.

const BPM = 130;
const BEAT = 60 / BPM;
const SWING = 2 / 3; // off-beat 8th lands 2/3 through the beat
const LOOKAHEAD = 0.25;

const BELL = [
  [1, 1],
  [2.76, 0.45],
  [5.4, 0.22],
  [8.9, 0.1],
];

const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

const CHORDS = [
  { bass: 38, fifth: 45, notes: [62, 65, 69] }, // Dm
  { bass: 34, fifth: 41, notes: [58, 62, 65] }, // Bb
  { bass: 31, fifth: 38, notes: [58, 62, 67] }, // Gm
  { bass: 33, fifth: 40, notes: [57, 61, 64, 67] }, // A7
];

// Lead riff, one row per bar, 8 swung eighths (null = rest).
const LEAD_A = [
  [74, null, 77, 76, 74, null, 69, null],
  [70, null, 74, 72, 70, 69, 70, null],
  [67, null, 70, 69, 67, null, 62, null],
  [69, 73, 76, 73, 69, null, 64, 61],
];
const LEAD_B = [
  [81, 79, 77, null, 76, 77, 74, null],
  [74, null, 77, 74, 70, null, 72, 74],
  [79, null, 77, 74, 70, 67, 70, null],
  [73, null, 76, 79, 81, null, 76, null],
];

export class GameAudio {
  constructor() {
    this.ctx = null;
    this.musicVolume = 0.7;
    this.sfxVolume = 0.9;
    this.intensity = 'calm';
    this.playing = false;
    this.step = 0;
    this.nextTime = 0;
    this.paused = false;
    this.clock = null; // when set, used instead of ctx.currentTime (offline render)
  }

  get ready() {
    return !!this.ctx;
  }

  /** Must be called from a user gesture (click / key). */
  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended' && !this.paused) this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this._build(new AC({ latencyHint: 'interactive' }));
    this.recDest = this.ctx.createMediaStreamDestination();
    this.master.connect(this.recDest);
  }

  _build(ctx) {
    this.ctx = ctx;
    this.master = ctx.createGain();
    this.master.gain.value = 0.9;
    this.comp = ctx.createDynamicsCompressor();
    this.comp.threshold.value = -14;
    this.comp.knee.value = 12;
    this.comp.ratio.value = 4;
    this.comp.attack.value = 0.004;
    this.comp.release.value = 0.18;
    this.bus = ctx.createGain();
    this.musicGain = ctx.createGain();
    this.sfxGain = ctx.createGain();
    this.musicBus = ctx.createGain(); // fades for start/stop
    this.musicBus.gain.value = 0;
    this.musicBus.connect(this.musicGain);
    this.musicGain.connect(this.bus);
    this.sfxGain.connect(this.bus);
    this.bus.connect(this.comp);
    this.comp.connect(this.master);
    this.master.connect(ctx.destination);

    // Shared resources
    const len = ctx.sampleRate * 2;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    this.dist = ctx.createWaveShaper();
    this.dist.curve = this._curve(18);
    this.dist.oversample = '2x';
    this.distGain = ctx.createGain();
    this.distGain.gain.value = 0;
    this.dist.connect(this.distGain);
    this.distGain.connect(this.musicBus);
    // a small echo for lead + stabs
    this.delay = ctx.createDelay(1);
    this.delay.delayTime.value = BEAT * 0.75;
    this.fb = ctx.createGain();
    this.fb.gain.value = 0.28;
    this.delayLP = ctx.createBiquadFilter();
    this.delayLP.type = 'lowpass';
    this.delayLP.frequency.value = 2600;
    this.delay.connect(this.delayLP);
    this.delayLP.connect(this.fb);
    this.fb.connect(this.delay);
    this.delayLP.connect(this.musicBus);

    this.setMusicVolume(this.musicVolume);
    this.setSfxVolume(this.sfxVolume);
  }

  /**
   * Render a captured cue list ({ t, name, args }, sorted by t) to a mono
   * AudioBuffer. Notes are scheduled a couple of seconds ahead of the render
   * position (OfflineAudioContext.suspend) so the node count stays small.
   */
  static renderOffline(cues, duration, { musicVolume, sfxVolume }, onProgress, isCancelled) {
    const SR = 48000;
    const ctx = new OfflineAudioContext(1, Math.max(1, Math.ceil(duration * SR)), SR);
    const a = new GameAudio();
    a.musicVolume = musicVolume;
    a.sfxVolume = sfxVolume;
    a.clock = 0;
    a._build(ctx);
    let i = 0;
    let t = 0;
    const feed = (until) => {
      for (; t < until; t += 0.05) {
        while (i < cues.length && cues[i].t <= t) {
          const c = cues[i++];
          a.clock = c.t;
          a[c.name](...c.args);
        }
        a.clock = t;
        a.update();
      }
    };
    const CH = 1;
    feed(CH * 2);
    return new Promise((resolve, reject) => {
      for (let s = CH; s < duration; s += CH) {
        ctx.suspend(s).then(() => {
          if (isCancelled && isCancelled()) {
            reject(new Error('cancelled'));
            return;
          }
          feed(s + CH * 2);
          if (onProgress) onProgress(s / duration);
          ctx.resume();
        });
      }
      ctx.startRendering().then(resolve, reject);
    });
  }

  _now() {
    return this.clock != null ? this.clock : this.ctx.currentTime;
  }

  _curve(k) {
    const n = 1024;
    const c = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = (i / (n - 1)) * 2 - 1;
      c[i] = ((1 + k) * x) / (1 + k * Math.abs(x));
    }
    return c;
  }

  setMusicVolume(v) {
    this.musicVolume = v;
    if (this.musicGain) this.musicGain.gain.setTargetAtTime(v * 0.75, this._now(), 0.05);
  }

  setSfxVolume(v) {
    this.sfxVolume = v;
    if (this.sfxGain) this.sfxGain.gain.setTargetAtTime(v, this._now(), 0.05);
  }

  setPaused(p) {
    this.paused = p;
    if (!this.ctx) return;
    if (p) this.ctx.suspend();
    else this.ctx.resume();
  }

  // ── music ─────────────────────────────────────────────────────────────────

  startMusic(intensity = 'normal') {
    if (!this.ctx) return;
    this.setIntensity(intensity);
    const now = this._now();
    if (!this.playing) {
      this.playing = true;
      this.step = 0;
      this.nextTime = now + 0.08;
    }
    this.musicBus.gain.cancelScheduledValues(now);
    this.musicBus.gain.setTargetAtTime(1, now, 0.08);
  }

  stopMusic(fade = 0.6) {
    if (!this.ctx || !this.playing) return;
    const now = this._now();
    this.musicBus.gain.cancelScheduledValues(now);
    this.musicBus.gain.setTargetAtTime(0, now, fade / 3);
    this.playing = false;
  }

  setIntensity(i) {
    this.intensity = i;
    if (this.distGain) this.distGain.gain.setTargetAtTime(i === 'heavy' ? 0.22 : 0, this._now(), 0.2);
  }

  /** Call every frame: schedules notes slightly ahead of the audio clock. */
  update() {
    if (!this.ctx || !this.playing || this.paused) return;
    const now = this._now();
    if (this.nextTime < now - 0.2) this.nextTime = now + 0.02; // tab was hidden
    while (this.nextTime < now + LOOKAHEAD) {
      this._scheduleStep(this.step, this.nextTime);
      // swung 8ths: long-short
      const onBeat = this.step % 2 === 0;
      this.nextTime += onBeat ? BEAT * SWING : BEAT * (1 - SWING);
      this.step++;
    }
  }

  _scheduleStep(step, t) {
    const i = this.intensity;
    const heavy = i === 'heavy';
    const calm = i === 'calm';
    const bar = Math.floor(step / 8);
    const e = step % 8; // eighth within bar
    const beat = e >> 1;
    const off = e % 2 === 1;
    const chord = CHORDS[bar % 4];
    const phrase = Math.floor(bar / 4) % 2;

    // drums
    if (!off) {
      if (!calm && (heavy || beat === 0 || beat === 2)) this._kick(t, heavy ? 1 : 0.9);
      if (calm && beat === 0) this._kick(t, 0.5);
      if (!calm && (beat === 1 || beat === 3)) this._snare(t, heavy ? 0.9 : 0.7);
    }
    this._hat(t, off ? 0.16 : 0.1, off && !calm);
    if (heavy && off && beat === 3) this._snare(t, 0.35);

    // bass: oom-pah walking root / fifth
    if (!off) {
      const n = beat % 2 === 0 ? chord.bass : chord.fifth;
      this._bass(t, n, BEAT * 0.8, calm ? 0.5 : 0.85, heavy);
    } else if (!calm && beat === 3) {
      this._bass(t, chord.bass + 12, BEAT * 0.25, 0.5, heavy);
    }

    // swing stabs on the "and" of 2 and 4
    if (!calm && off && (beat === 1 || beat === 3)) this._stab(t, chord.notes, heavy ? 0.24 : 0.2);
    if (calm && e === 0) this._pad(t, chord.notes, BEAT * 4);

    // lead
    if (!calm) {
      const row = (phrase ? LEAD_B : LEAD_A)[bar % 4];
      const n = row[e];
      if (n) this._lead(t, n + (heavy && phrase ? 12 : 0), BEAT * 0.45, 0.16);
    } else if (bar % 2 === 0 && (e === 0 || e === 3 || e === 6)) {
      const n = LEAD_A[bar % 4][e];
      if (n) this._lead(t, n, BEAT * 0.9, 0.07, true);
    }
  }

  _env(g, t, a, peak, d, sustain = 0.0001) {
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(peak, t + a);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, sustain), t + a + d);
  }

  _osc(type, f, t, dur) {
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f, t);
    o.start(t);
    o.stop(t + dur + 0.05);
    o.onended = () => o.disconnect();
    return o;
  }

  /** When `src` ends, disconnect it and the voice's other nodes. */
  _free(src, ...nodes) {
    src.onended = () => {
      src.disconnect();
      for (const n of nodes) n.disconnect();
    };
  }

  _noiseSrc(t, dur) {
    const s = this.ctx.createBufferSource();
    s.buffer = this.noise;
    s.start(t, Math.random() * 1.5);
    s.stop(t + dur + 0.05);
    s.onended = () => s.disconnect();
    return s;
  }

  _kick(t, v) {
    const ctx = this.ctx;
    const o = this._osc('sine', 160, t, 0.4);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.14);
    const g = ctx.createGain();
    this._env(g, t, 0.003, v, 0.32);
    o.connect(g).connect(this.musicBus);
    this._free(o, g);
  }

  _snare(t, v) {
    const ctx = this.ctx;
    const n = this._noiseSrc(t, 0.2);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1900;
    bp.Q.value = 0.8;
    const g = ctx.createGain();
    this._env(g, t, 0.002, v * 0.55, 0.16);
    n.connect(bp).connect(g).connect(this.musicBus);
    this._free(n, bp, g);
    const o = this._osc('triangle', 220, t, 0.1);
    o.frequency.exponentialRampToValueAtTime(140, t + 0.08);
    const g2 = ctx.createGain();
    this._env(g2, t, 0.002, v * 0.35, 0.08);
    o.connect(g2).connect(this.musicBus);
    this._free(o, g2);
  }

  _hat(t, v, open) {
    const ctx = this.ctx;
    const n = this._noiseSrc(t, open ? 0.14 : 0.05);
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 7500;
    const g = ctx.createGain();
    this._env(g, t, 0.001, v * 0.5, open ? 0.12 : 0.04);
    n.connect(hp).connect(g).connect(this.musicBus);
    this._free(n, hp, g);
  }

  _bass(t, m, dur, v, heavy) {
    const ctx = this.ctx;
    const o = this._osc('sawtooth', mtof(m), t, dur);
    const o2 = this._osc('square', mtof(m - 12), t, dur);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(heavy ? 1400 : 900, t);
    lp.frequency.exponentialRampToValueAtTime(220, t + dur);
    lp.Q.value = 4;
    const g = ctx.createGain();
    this._env(g, t, 0.005, v * 0.42, dur);
    o.connect(lp);
    o2.connect(lp);
    lp.connect(g);
    g.connect(this.musicBus);
    if (heavy) g.connect(this.dist);
    this._free(o2, lp, g);
  }

  _stab(t, notes, v) {
    const ctx = this.ctx;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(3200, t);
    lp.frequency.exponentialRampToValueAtTime(700, t + 0.18);
    const g = ctx.createGain();
    this._env(g, t, 0.004, v, 0.2);
    let o;
    for (const n of notes) {
      o = this._osc('sawtooth', mtof(n), t, 0.25);
      o.detune.value = (Math.random() - 0.5) * 14;
      o.connect(lp);
    }
    lp.connect(g);
    g.connect(this.musicBus);
    g.connect(this.delay);
    this._free(o, lp, g);
  }

  _pad(t, notes, dur) {
    const ctx = this.ctx;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1100;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.07, t + 0.4);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    let o;
    for (const n of notes) {
      o = this._osc('triangle', mtof(n), t, dur);
      o.detune.value = (Math.random() - 0.5) * 10;
      o.connect(lp);
    }
    lp.connect(g).connect(this.musicBus);
    this._free(o, lp, g);
  }

  _lead(t, m, dur, v, soft = false) {
    const ctx = this.ctx;
    const o = this._osc(soft ? 'sine' : 'square', mtof(m), t, dur + 0.1);
    // spooky theremin vibrato
    const lfo = this._osc('sine', 6, t, dur + 0.1);
    const lg = ctx.createGain();
    lg.gain.value = mtof(m) * 0.012;
    lfo.connect(lg).connect(o.frequency);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = soft ? 1800 : 2600;
    const g = ctx.createGain();
    this._env(g, t, 0.01, v, dur, v * 0.1);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.08);
    o.connect(lp).connect(g);
    g.connect(this.musicBus);
    g.connect(this.delay);
    this._free(o, lg, lp, g);
  }

  // ── sfx ───────────────────────────────────────────────────────────────────

  play(name) {
    if (!this.ctx || this.paused) return;
    const t = this._now() + 0.005;
    const fn = this['_sfx_' + name];
    if (fn) fn.call(this, t);
  }

  _out() {
    return this.sfxGain;
  }

  _sfx_jump(t) {
    // cartoon boing
    const ctx = this.ctx;
    const o = this._osc('sine', 180, t, 0.45);
    o.frequency.exponentialRampToValueAtTime(720, t + 0.16);
    o.frequency.exponentialRampToValueAtTime(420, t + 0.4);
    const lfo = this._osc('sine', 22, t, 0.45);
    const lg = ctx.createGain();
    lg.gain.value = 40;
    lfo.connect(lg).connect(o.frequency);
    const g = ctx.createGain();
    this._env(g, t, 0.01, 0.4, 0.42);
    o.connect(g).connect(this._out());
    this._free(o, lg, g);
    this._sfx_whoosh(t, 0.25);
  }

  _sfx_whoosh(t, v = 0.45, dur = 0.38, f0 = 400, f1 = 2400) {
    const ctx = this.ctx;
    const n = this._noiseSrc(t, dur);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 1.2;
    bp.frequency.setValueAtTime(f0, t);
    bp.frequency.exponentialRampToValueAtTime(f1, t + dur * 0.45);
    bp.frequency.exponentialRampToValueAtTime(f0 * 0.8, t + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(v, t + dur * 0.4);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    n.connect(bp).connect(g).connect(this._out());
    this._free(n, bp, g);
  }

  _sfx_duck(t) {
    this._sfx_whoosh(t, 0.5, 0.4, 1800, 300);
  }

  _sfx_dodge(t) {
    this._sfx_whoosh(t, 0.5, 0.32, 500, 3000);
  }

  _sfx_punch(t) {
    const ctx = this.ctx;
    // thud
    const o = this._osc('sine', 140, t, 0.3);
    o.frequency.exponentialRampToValueAtTime(38, t + 0.18);
    const g = ctx.createGain();
    this._env(g, t, 0.002, 1.0, 0.26);
    o.connect(g).connect(this._out());
    this._free(o, g);
    // crunch
    const n = this._noiseSrc(t, 0.2);
    const sh = ctx.createWaveShaper();
    sh.curve = this._curve(40);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 1400;
    bp.Q.value = 0.7;
    const g2 = ctx.createGain();
    this._env(g2, t, 0.001, 0.55, 0.14);
    n.connect(sh).connect(bp).connect(g2).connect(this._out());
    this._free(n, sh, bp, g2);
    // cartoon "pow" sweep
    const o2 = this._osc('square', 900, t + 0.02, 0.16);
    o2.frequency.exponentialRampToValueAtTime(160, t + 0.16);
    const g3 = ctx.createGain();
    this._env(g3, t + 0.02, 0.002, 0.1, 0.12);
    o2.connect(g3).connect(this._out());
    this._free(o2, g3);
  }

  _bell(t, f, v, dur) {
    const ctx = this.ctx;
    const g = ctx.createGain();
    this._env(g, t, 0.003, v, dur);
    BELL.forEach(([r, a], k) => {
      const o = this._osc('sine', f * r, t, dur);
      const og = ctx.createGain();
      og.gain.value = a;
      o.connect(og).connect(g);
      // the partials end together; the shared gain goes with the last one
      if (k === BELL.length - 1) this._free(o, og, g);
      else this._free(o, og);
    });
    g.connect(this._out());
  }

  _sfx_chime(t) {
    this._bell(t, 1568, 0.32, 1.2);
    this._bell(t + 0.09, 2093, 0.26, 1.3);
    this._sfx_whoosh(t + 0.02, 0.35, 0.5, 600, 3500);
  }

  _sfx_beep(t) {
    const o = this._osc('square', 880, t, 0.16);
    const g = this.ctx.createGain();
    this._env(g, t, 0.003, 0.22, 0.15);
    o.connect(g).connect(this._out());
    this._free(o, g);
  }

  _sfx_go(t) {
    for (const [f, d] of [[1320, 0], [1760, 0.04], [2640, 0.08]]) {
      const o = this._osc('square', f, t + d, 0.5);
      const g = this.ctx.createGain();
      this._env(g, t + d, 0.003, 0.14, 0.45);
      o.connect(g).connect(this._out());
      this._free(o, g);
    }
  }

  _sfx_stinger(t) {
    // brassy minor-chord hit + cymbal swell
    const ctx = this.ctx;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(400, t);
    lp.frequency.exponentialRampToValueAtTime(3500, t + 0.08);
    lp.frequency.exponentialRampToValueAtTime(900, t + 0.9);
    const g = ctx.createGain();
    this._env(g, t, 0.02, 0.3, 1.0);
    let o;
    for (const m of [50, 57, 62, 65, 69]) {
      for (const dt of [-8, 8]) {
        o = this._osc('sawtooth', mtof(m), t, 1.1);
        o.detune.value = dt;
        o.connect(lp);
      }
    }
    lp.connect(g).connect(this._out());
    this._free(o, lp, g);
    const n = this._noiseSrc(t, 1.4);
    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 5000;
    const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.0001, t);
    g2.gain.exponentialRampToValueAtTime(0.25, t + 0.05);
    g2.gain.exponentialRampToValueAtTime(0.0001, t + 1.3);
    n.connect(hp).connect(g2).connect(this._out());
    this._free(n, hp, g2);
    this._kickSfx(t);
  }

  _kickSfx(t) {
    const o = this._osc('sine', 150, t, 0.4);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.2);
    const g = this.ctx.createGain();
    this._env(g, t, 0.002, 0.8, 0.35);
    o.connect(g).connect(this._out());
    this._free(o, g);
  }

  _sfx_victory(t) {
    const seq = [62, 66, 69, 74, 78, 81];
    seq.forEach((m, i) => {
      const tt = t + i * 0.1;
      const o = this._osc('square', mtof(m), tt, 0.3);
      const g = this.ctx.createGain();
      this._env(g, tt, 0.004, 0.13, 0.26);
      o.connect(g).connect(this._out());
      this._free(o, g);
    });
    const tt = t + seq.length * 0.1;
    for (const m of [62, 66, 69, 74]) {
      const o = this._osc('sawtooth', mtof(m), tt, 1.2);
      const g = this.ctx.createGain();
      this._env(g, tt, 0.01, 0.08, 1.1);
      o.connect(g).connect(this._out());
      this._free(o, g);
    }
    this._bell(tt, mtof(86), 0.25, 1.5);
  }

  _sfx_hit(t) {
    const ctx = this.ctx;
    const o = this._osc('sawtooth', 220, t, 0.45);
    o.frequency.exponentialRampToValueAtTime(55, t + 0.4);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 900;
    const g = ctx.createGain();
    this._env(g, t, 0.004, 0.45, 0.42);
    o.connect(lp).connect(g).connect(this._out());
    this._free(o, lp, g);
    this._kickSfx(t);
  }

  _sfx_click(t) {
    const o = this._osc('triangle', 1200, t, 0.06);
    o.frequency.exponentialRampToValueAtTime(700, t + 0.05);
    const g = this.ctx.createGain();
    this._env(g, t, 0.001, 0.18, 0.05);
    o.connect(g).connect(this._out());
    this._free(o, g);
  }

  _sfx_gameover(t) {
    [62, 61, 60, 59].forEach((m, i) => {
      const tt = t + i * 0.28;
      const o = this._osc('triangle', mtof(m), tt, 0.4);
      const g = this.ctx.createGain();
      this._env(g, tt, 0.01, 0.25, i === 3 ? 0.9 : 0.3);
      o.connect(g).connect(this._out());
      this._free(o, g);
    });
  }
}
