// Offline "Export Video": renders an AUTO RUN frame by frame at exactly 1/60 s
// per frame (no requestAnimationFrame, so a slow machine still produces a
// smooth 60 fps file), encodes it with WebCodecs and muxes an .mp4
// (H.264 + AAC). The soundtrack is rendered sample-exact with an
// OfflineAudioContext. Falls back to .webm (VP9/VP8 + Opus) where AAC / H.264
// encoding is unavailable. The real-time RECORD button is untouched.
//
// Pass 1 runs only the gameplay simulation (cheap) to capture every audio cue
// and the exact run length; then the audio is rendered + encoded; pass 2
// renders and encodes the video frames.

import { Muxer as Mp4Muxer, StreamTarget as Mp4Target } from 'mp4-muxer';
import { Muxer as WebmMuxer, StreamTarget as WebmTarget } from 'webm-muxer';
import { GameAudio } from '../audio/audio.js';

const FPS = 60;
const SR = 48000;
const KEY_EVERY = 2 * FPS;
const AUDIO_CUES = ['play', 'startMusic', 'stopMusic', 'setIntensity'];
const AUDIO_MUTE = ['init', 'update', 'setPaused', 'setMusicVolume', 'setSfxVolume'];

export const EXPORT_SIZES = {
  '1280x720': { label: '1280 × 720 (HD)', size: [1280, 720], bitrate: 8_000_000 },
  '1920x1080': { label: '1920 × 1080 (Full HD)', size: [1920, 1080], bitrate: 14_000_000 },
  '1080x1920': { label: '1080 × 1920 (Vertical)', size: [1080, 1920], bitrate: 14_000_000 },
};

const AVC = ['avc1.64002A', 'avc1.4D402A', 'avc1.42E02A', 'avc1.640033', 'avc1.4D4033'];
const VPX = [
  ['vp09.00.41.08', 'V_VP9'],
  ['vp8', 'V_VP8'],
];

class Cancelled extends Error {}

/** Collects muxer output (which may seek back to patch headers) as Blob parts. */
class Sink {
  constructor() {
    this.parts = [];
    this.starts = [];
    this.size = 0;
  }

  write(data, pos) {
    let src = 0;
    if (pos < this.size) {
      for (let k = 0; k < this.parts.length && src < data.length; k++) {
        const p = this.parts[k];
        const s = this.starts[k];
        const at = pos + src;
        if (s + p.length <= at) continue;
        if (s >= pos + data.length) break;
        const from = at - s;
        const n = Math.min(p.length - from, data.length - src);
        p.set(data.subarray(src, src + n), from);
        src += n;
      }
    }
    if (src < data.length) {
      const at = pos + src;
      if (at > this.size) this._push(new Uint8Array(at - this.size));
      this._push(data.slice(src));
    }
  }

  _push(u8) {
    this.parts.push(u8);
    this.starts.push(this.size);
    this.size += u8.length;
  }
}

const yieldNow = (() => {
  // MessageChannel is not throttled in background tabs (setTimeout is)
  const ch = new MessageChannel();
  const q = [];
  ch.port1.onmessage = () => q.shift()();
  return () =>
    new Promise((r) => {
      q.push(r);
      ch.port2.postMessage(0);
    });
})();

const fmtTime = (s) => {
  s = Math.max(0, Math.round(s));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
};

export class Exporter {
  constructor(game) {
    this.g = game;
    this.busy = false;
    this.cancelled = false;
    this._buildUi();
  }

  static supported() {
    return typeof VideoEncoder !== 'undefined' && typeof VideoFrame !== 'undefined' && typeof OfflineAudioContext !== 'undefined';
  }

  // ── UI ──────────────────────────────────────────────────────────────────

  _buildUi() {
    const o = document.createElement('div');
    o.className = 'export-overlay hidden';
    o.innerHTML = `
      <div class="panel export-panel">
        <h2 class="panel-title">EXPORTING VIDEO</h2>
        <div class="export-phase">Preparing…</div>
        <div class="export-bar"><div class="export-fill"></div></div>
        <div class="export-meta"><b class="export-pct">0%</b><span class="export-eta"></span></div>
        <div class="hint export-note">Rendering runs faster or slower than real time depending on your PC. The video is always a smooth 60 fps.</div>
        <div class="panel-buttons"><button class="btn btn-red export-btn">✕ CANCEL</button></div>
      </div>`;
    (this.g.ui || document.body).appendChild(o);
    this.el = o;
    this.elPhase = o.querySelector('.export-phase');
    this.elFill = o.querySelector('.export-fill');
    this.elPct = o.querySelector('.export-pct');
    this.elEta = o.querySelector('.export-eta');
    this.elNote = o.querySelector('.export-note');
    this.elBtn = o.querySelector('.export-btn');
    this.elBtn.addEventListener('click', () => {
      if (this.busy) this.cancelled = true;
      else this._close();
    });
  }

  _open() {
    this.el.classList.remove('hidden');
    this.el.classList.remove('done');
    this.elBtn.innerHTML = '✕ CANCEL';
    this.elNote.textContent = 'Rendering runs faster or slower than real time depending on your PC. The video is always a smooth 60 fps.';
    this._progress(0, 'Preparing…');
  }

  _close() {
    this.el.classList.add('hidden');
    this.g.menus.show('title');
  }

  _finishUi(text) {
    this.el.classList.add('done');
    this.elBtn.innerHTML = 'OK';
    this.elEta.textContent = '';
    this.elNote.textContent = text;
    this.elBtn.focus({ preventScroll: true });
  }

  _progress(p, phase) {
    if (phase && phase !== this._phase) {
      this._phase = phase;
      this.elPhase.textContent = phase;
    }
    p = Math.min(1, Math.max(0, p));
    this.elFill.style.width = (p * 100).toFixed(1) + '%';
    this.elPct.textContent = Math.floor(p * 100) + '%';
    const el = (performance.now() - this.t0) / 1000;
    this.elEta.textContent = p > 0.03 && p < 1 ? `ETA ${fmtTime((el * (1 - p)) / p)} · elapsed ${fmtTime(el)}` : '';
  }

  _check() {
    if (this.cancelled) throw new Cancelled();
  }

  // ── codecs ──────────────────────────────────────────────────────────────

  async _pickFormat(w, h, bitrate) {
    const vbase = { width: w, height: h, bitrate, framerate: FPS, latencyMode: 'quality' };
    const sup = async (Enc, cfg) => {
      try {
        return (await Enc.isConfigSupported(cfg)).supported ? cfg : null;
      } catch {
        return null;
      }
    };
    let avc = null;
    for (const codec of AVC) if ((avc = await sup(VideoEncoder, { ...vbase, codec, avc: { format: 'avc' } }))) break;
    const hasAE = typeof AudioEncoder !== 'undefined';
    const abase = { sampleRate: SR, numberOfChannels: 2 };
    const aac = hasAE ? await sup(AudioEncoder, { ...abase, codec: 'mp4a.40.2', bitrate: 192_000 }) : null;
    if (avc && aac) return { kind: 'mp4', video: avc, audio: aac };
    let vpx = null;
    let vpxName = '';
    for (const [codec, name] of VPX) {
      if ((vpx = await sup(VideoEncoder, { ...vbase, codec }))) {
        vpxName = name;
        break;
      }
    }
    const opus = hasAE ? await sup(AudioEncoder, { ...abase, codec: 'opus', bitrate: 160_000 }) : null;
    if (vpx && opus) return { kind: 'webm', video: vpx, audio: opus, vName: vpxName };
    // no audio encoder at all: still give the user the picture
    if (avc) return { kind: 'mp4', video: avc, audio: null };
    if (vpx) return { kind: 'webm', video: vpx, audio: null, vName: vpxName };
    return null;
  }

  // ── run ─────────────────────────────────────────────────────────────────

  async start(sizeKey) {
    if (this.busy) return;
    const g = this.g;
    if (!Exporter.supported()) {
      alert('Export Video needs WebCodecs (Chrome or Edge 94+). Use RECORD instead in this browser.');
      return;
    }
    const preset = EXPORT_SIZES[sizeKey] || EXPORT_SIZES['1920x1080'];
    const [w, h] = preset.size;
    const fmt = await this._pickFormat(w, h, preset.bitrate);
    if (!fmt) {
      alert('This browser cannot encode video at that size. Try 1280 × 720, or use RECORD.');
      return;
    }

    this.busy = true;
    this.cancelled = false;
    this.t0 = performance.now();
    g.menus.hide();
    this._open();

    const audio = g.audio;
    const wasPaused = audio.paused;
    audio.setPaused(true); // silence the live mix while exporting
    g.loop.stop();
    if (g.recorder.recording) g.stopRecording();

    const cues = [];
    let capture = false;
    for (const n of AUDIO_CUES) audio[n] = (...args) => capture && cues.push({ t: g.simTime, name: n, args });
    for (const n of AUDIO_MUTE) audio[n] = () => {};

    let venc = null;
    let exportQuality = null;
    let aenc = null;
    let file = null;
    let error = null;
    try {
      // pass 1: gameplay only → audio cues + exact length
      capture = true;
      this._startRun();
      let t = 0;
      while (g.state === 'run' && t < 3600) {
        t += 1 / FPS;
        g.time = t;
        g.simulate(t);
      }
      capture = false;
      const duration = g.simTime;
      const frames = Math.max(1, Math.round(duration * FPS));
      await yieldNow();
      this._check();

      // audio → encoded chunks (kept; they are small)
      const aChunks = [];
      if (fmt.audio) {
        this._progress(0.01, 'Rendering soundtrack…');
        const buf = await GameAudio.renderOffline(
          cues,
          duration,
          { musicVolume: g.settings.musicVolume, sfxVolume: g.settings.sfxVolume },
          (p) => this._progress(0.01 + p * 0.06),
          () => this.cancelled
        );
        this._check();
        this._progress(0.07, 'Encoding soundtrack…');
        let aErr = null;
        aenc = new AudioEncoder({ output: (c, m) => aChunks.push([c, m]), error: (e) => (aErr = e) });
        aenc.configure(fmt.audio);
        const mono = buf.getChannelData(0);
        const BLOCK = 4800;
        for (let i = 0; i < mono.length; i += BLOCK) {
          const n = Math.min(BLOCK, mono.length - i);
          const data = new Float32Array(n * 2);
          data.set(mono.subarray(i, i + n), 0);
          data.set(mono.subarray(i, i + n), n);
          const ad = new AudioData({ format: 'f32-planar', sampleRate: SR, numberOfFrames: n, numberOfChannels: 2, timestamp: Math.round((i / SR) * 1e6), data });
          aenc.encode(ad);
          ad.close();
          if (aenc.encodeQueueSize > 32) await yieldNow();
        }
        await aenc.flush();
        if (aErr) throw aErr;
        aenc.close();
        aenc = null;
      }
      this._check();

      // muxer
      const sink = new Sink();
      const onData = (data, pos) => sink.write(data, pos);
      let muxer;
      if (fmt.kind === 'mp4') {
        muxer = new Mp4Muxer({
          target: new Mp4Target({ onData, chunked: true, chunkSize: 8 * 1024 * 1024 }),
          video: { codec: 'avc', width: w, height: h, frameRate: FPS },
          audio: fmt.audio ? { codec: 'aac', numberOfChannels: 2, sampleRate: SR } : undefined,
          fastStart: false,
          firstTimestampBehavior: 'offset',
        });
      } else {
        muxer = new WebmMuxer({
          target: new WebmTarget({ onData, chunked: true, chunkSize: 8 * 1024 * 1024 }),
          video: { codec: fmt.vName, width: w, height: h, frameRate: FPS },
          audio: fmt.audio ? { codec: 'A_OPUS', numberOfChannels: 2, sampleRate: SR } : undefined,
          firstTimestampBehavior: 'offset',
        });
      }
      for (const [c, m] of aChunks) muxer.addAudioChunk(c, m);
      aChunks.length = 0;

      // pass 2: video frames
      let vErr = null;
      venc = new VideoEncoder({ output: (c, m) => muxer.addVideoChunk(c, m), error: (e) => (vErr = e) });
      venc.configure(fmt.video);
      // exports always render at full quality, whatever the live setting is
      if (g.settings.quality !== 'high') {
        exportQuality = g.settings.quality;
        g.settings.quality = 'high';
        g.applySettings();
      }
      g.renderer.setDynScale(1);
      g.renderer.setResolution(`${w}x${h}`);
      this._startRun();
      const base = 0.08;
      let lastYield = performance.now();
      for (let i = 0; i < frames; i++) {
        g.frame(i === 0 ? 0 : 1 / FPS);
        const vf = new VideoFrame(g.canvas, { timestamp: Math.round((i * 1e6) / FPS), duration: Math.round(1e6 / FPS) });
        venc.encode(vf, { keyFrame: i % KEY_EVERY === 0 });
        vf.close();
        if (vErr) throw vErr;
        while (venc.encodeQueueSize > 6) {
          await new Promise((r) => venc.addEventListener('dequeue', r, { once: true }));
        }
        const now = performance.now();
        if (now - lastYield > 120) {
          this._progress(base + (i / frames) * 0.9, `Rendering video… frame ${i + 1} / ${frames}`);
          await yieldNow();
          lastYield = performance.now();
          this._check();
        }
      }
      this._progress(0.985, 'Finishing file…');
      await venc.flush();
      if (vErr) throw vErr;
      venc.close();
      venc = null;
      muxer.finalize();

      const ext = fmt.kind;
      const seed = String(g.settings.seed).replace(/[^\w-]+/g, '_') || 'run';
      file = `pumpkin-dash-${seed}-${w}x${h}-${stamp()}.${ext}`;
      const blob = new Blob(sink.parts, { type: ext === 'mp4' ? 'video/mp4' : 'video/webm' });
      sink.parts.length = 0;
      download(blob, file);
      this._progress(1, 'Done!');
    } catch (e) {
      error = e;
    } finally {
      for (const enc of [venc, aenc]) {
        if (enc && enc.state !== 'closed') {
          try {
            enc.close();
          } catch {
            /* already closed */
          }
        }
      }
      for (const n of AUDIO_CUES.concat(AUDIO_MUTE)) delete audio[n];
      if (exportQuality) {
        g.settings.quality = exportQuality;
        g.applySettings();
      }
      g.renderer.setResolution(g.settings.resolution);
      g.enterMenu(true);
      g.menus.hide();
      audio.setPaused(wasPaused);
      g.loop.start();
      this.busy = false;
    }

    if (error instanceof Cancelled || (error && error.message === 'cancelled')) {
      this._close();
    } else if (error) {
      console.error('export failed', error);
      this._progress(0, 'Export failed');
      this._finishUi(`Something went wrong: ${error.message || error}. Try a smaller size, or use RECORD.`);
    } else {
      const extra = fmt.audio ? '' : ' (this browser has no audio encoder, so the file is silent)';
      this._finishUi(`🎬 Saved ${file}${extra}`);
    }
  }

  _startRun() {
    const g = this.g;
    g.startRun('auto');
    g.menus.setRunBar(false);
    g.input.showTouch(false);
  }
}

function download(blob, name) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60_000);
}

function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`;
}
