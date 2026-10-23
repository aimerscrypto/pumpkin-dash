import * as THREE from 'three';
import { Renderer } from './renderer.js';
import { Loop } from './loop.js';
import { Input } from './input.js';
import { loadSettings, saveSettings, QUALITY } from './settings.js';
import { seedFromValue } from './rng.js';
import { buildSchedule, segmentIndexAt } from './schedule.js';
import { updateMaterials } from './materials.js';
import { Director } from './director.js';
import { TIMELINE } from '../config/timeline.js';
import { CameraRig } from '../camera/rig.js';
import { Track } from '../world/track.js';
import { BiomeMap } from '../world/biomes.js';
import { Road } from '../world/road.js';
import { Scenery } from '../world/scenery.js';
import { Foliage } from '../world/foliage.js';
import { Sky } from '../world/sky.js';
import { Effects } from '../world/particles.js';
import { Crowd } from '../entities/crowd.js';
import { EntityManager } from '../entities/manager.js';
import { Hud } from '../ui/hud.js';
import { Menus } from '../ui/menus.js';
import { GameAudio } from '../audio/audio.js';
import { Recorder } from '../recording/recorder.js';
import { Exporter } from '../recording/exporter.js';
import { DebugOverlay } from './debug.js';

// States: menu (attract run behind the title) → run → (paused) → ended.
// The run clock `time` drives everything; every visual is a function of it,
// so the same seed always renders the same run.

const FOG_NEAR = 20;
const FOG_COL = new THREE.Color('#7E64A6');
const FOG_COL_THICK = new THREE.Color('#C8C6D4');
const BEST_KEY = 'pumpkin-dash-best-v1';
// Gameplay (events, judging, prompts, round flow) advances in fixed steps; the
// world itself is a pure function of the clock and is rendered at the exact time.
const STEP = 1 / 60;
const MAX_STEPS = 8;
const SHADOW_AHEAD = 12;

const smooth = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));

export class Game {
  constructor(canvas, ui) {
    this.canvas = canvas;
    this.ui = ui;
    this.timeline = TIMELINE;
    this.speed = TIMELINE.speed;
    this.settings = loadSettings();

    this.renderer = new Renderer(canvas, document.getElementById('stage') || canvas.parentElement);
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(FOG_COL.clone(), FOG_NEAR, 45);
    this.camera = new THREE.PerspectiveCamera(45, 16 / 9, 0.1, 200);
    this.camera.rotation.order = 'YXZ';

    // lights: cool moonlit fill + warm key that follows the camera
    this.hemi = new THREE.HemisphereLight('#C4AEFF', '#3A2416', 1.5);
    this.scene.add(this.hemi);
    this.ambient = new THREE.AmbientLight('#8A6CC0', 0.5);
    this.scene.add(this.ambient);
    this.sun = new THREE.DirectionalLight('#FFD9B0', 2.6);
    this.sun.shadow.camera.left = -22;
    this.sun.shadow.camera.right = 22;
    this.sun.shadow.camera.top = 22;
    this.sun.shadow.camera.bottom = -22;
    this.sun.shadow.camera.near = 1;
    this.sun.shadow.camera.far = 90;
    this.sun.shadow.bias = -0.0006;
    this.sun.shadow.normalBias = 0.03;
    this.scene.add(this.sun, this.sun.target);
    this.sunOffset = new THREE.Vector3(-14, 26, 10);
    // the light direction never changes, so its view basis is constant; the
    // shadow box is snapped to whole texels along it (no shimmering edges)
    const lb = new THREE.Matrix4().lookAt(this.sunOffset, new THREE.Vector3(), new THREE.Vector3(0, 1, 0));
    this._sunX = new THREE.Vector3().setFromMatrixColumn(lb, 0);
    this._sunY = new THREE.Vector3().setFromMatrixColumn(lb, 1);

    // world
    this.track = new Track(1);
    this.biomes = new BiomeMap();
    this.crowd = new Crowd(this.scene);
    this.road = new Road(this.scene, this.track, this.biomes);
    this.scenery = new Scenery(this.scene, this.track, this.biomes, this.crowd);
    this.foliage = new Foliage(this.scene, this.track, this.biomes, this.scenery);
    this.sky = new Sky(this.scene);
    this.effects = new Effects(this.scene);
    this.manager = new EntityManager(this.scene, this.track, this.effects);
    this.rig = new CameraRig(this.camera, this.track);
    this.emitters = [];

    this.hud = new Hud(this.renderer);
    this.audio = new GameAudio();
    this.recorder = new Recorder(canvas, this.audio);
    this.director = new Director(this);

    this.input = new Input();
    this.input.buildTouch(ui);
    this.input.on((a, down) => this.onInput(a, down));
    this.rig.onStart = (a, t) => this.director.started(a, t);

    this.menus = new Menus(ui, {
      settings: this.settings,
      rounds: TIMELINE.rounds,
      onAction: (name, data) => this.onMenu(name, data),
      onSettings: (s, key) => this.onSettings(key),
    });
    this.recorder.onState = (on) => this.menus.setRecording(on);
    this.exporter = new Exporter(this);
    this.debug = new DebugOverlay(this);

    this.renderer.onResize = (w, h) => this.rig.setAspect(w / h);

    this.state = 'menu';
    this.mode = 'auto';
    this.time = 0;
    this.simTime = 0;
    this.schedule = null;
    this.segIndex = -1;
    this.lastCountStep = -1;
    this.recordingRun = false;
    this._shadowTick = false;
    this._fpsAvg = 60;
    this._resWait = 1;
    this.prevResolution = null;
    this.savedFile = null;
    this.endAt = 0;
    this._fogCol = new THREE.Color();
    this._fwd = new THREE.Vector3();
    // reused every frame (no per-frame allocation)
    this._hud = {
      time: 0,
      seg: null,
      segT: 0,
      roundFrac: 0,
      prompts: this.director.prompts,
      showStats: false,
      score: 0,
      lives: 3,
      maxLives: 3,
      distance: 0,
      watermark: '',
      hidden: true,
      flashOnly: false,
    };

    this.applySettings();
    this.renderer.resize();
    this.rig.setAspect(this.renderer.aspect);
    this.loop = new Loop((dt) => this.frame(dt));

    // the very first gesture unlocks audio; the listeners go away once it worked
    const unlock = () => {
      this.audio.init();
      if (!this.audio.ready) return;
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
      if (this.state === 'menu' && !this.audio.playing) this.audio.startMusic('calm');
    };
    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('keydown', unlock);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.state === 'run' && !this.recorder.recording && !this.exporter.busy) this.pause();
    });
  }

  start() {
    this.enterMenu();
    this.warmup();
    this.loop.start();
  }

  /**
   * Runs once under the loading screen: builds the entity pools a full run
   * needs, then compiles every shader and uploads every buffer by drawing one
   * frame with all pooled / hidden objects forced visible.
   */
  warmup() {
    const s = this.settings;
    const sched = buildSchedule(TIMELINE, { seed: this.seed, roundLength: s.roundLength, roundIndex: -1 });
    this.manager.setSchedule(sched);
    this.manager.setSchedule({ events: [], speed: this.speed });

    const vis = [];
    const counts = [];
    const culled = [];
    this.scene.traverse((o) => {
      if (!o.visible) {
        o.visible = true;
        vis.push(o);
      }
      if (o.isInstancedMesh && o.count === 0) {
        o.count = 1;
        counts.push(o);
      }
      if ((o.isMesh || o.isPoints) && o.frustumCulled) {
        o.frustumCulled = false;
        culled.push(o);
      }
    });
    try {
      this.renderer.renderer.compile(this.scene, this.camera);
      this.renderer.render(this.scene, this.camera);
    } catch (e) {
      console.warn('warm-up failed', e);
    }
    for (const o of vis) o.visible = false;
    for (const o of counts) o.count = 0;
    for (const o of culled) o.frustumCulled = true;
  }

  // ── settings ──────────────────────────────────────────────────────────────

  applySettings() {
    const s = this.settings;
    const q = QUALITY[s.quality] || QUALITY.high;
    this.quality = q;
    this.renderer.setQuality(s.quality);
    if (!this.recordingRun) this.renderer.setResolution(s.resolution);
    const shadows = q.shadows > 0;
    const r = this.renderer.renderer;
    if (r.shadowMap.enabled !== shadows) {
      r.shadowMap.enabled = shadows;
      this.scene.traverse((o) => {
        if (o.material) for (const m of [].concat(o.material)) m.needsUpdate = true;
      });
    }
    this.sun.castShadow = shadows;
    const sc = this.sun.shadow.camera;
    const box = q.shadowBox || 16;
    if (sc.right !== box) {
      sc.left = sc.bottom = -box;
      sc.right = sc.top = box;
      sc.far = 70;
      sc.updateProjectionMatrix();
    }
    if (shadows && this.sun.shadow.mapSize.x !== q.shadows) {
      this.sun.shadow.mapSize.set(q.shadows, q.shadows);
      if (this.sun.shadow.map) {
        this.sun.shadow.map.dispose();
        this.sun.shadow.map = null;
      }
    }
    this.crowd.shadows = shadows;
    this.manager.shadows = shadows;
    this.scenery.setShadows(shadows);
    this.effects.setDensity(q.particles);
    this.foliage.setDensity(Math.max(0.5, q.particles));
    this.scenery.setAhead(q.ahead);
    this.manager.setAhead(q.ahead + 6);
    this.fogFar = q.fogFar;
    // Low: coarser LODs sooner, and nothing drawn past the fog wall
    const lodScale = q.lodScale || 1;
    const cull = q.cull ? q.fogFar + 2 : Infinity;
    this.scenery.setLod(lodScale, cull);
    this.crowd.setLod(lodScale, cull);
    this.foliage.setLod(lodScale, cull);
    this.audio.setMusicVolume(s.musicVolume);
    this.audio.setSfxVolume(s.sfxVolume);
  }

  onSettings(key) {
    saveSettings(this.settings);
    if (key === 'roundSelection' || key === 'seed' || key === 'roundLength' || key === 'watermark') {
      if (key === 'seed' && this.state === 'menu') this.enterMenu(true);
      return;
    }
    if (key === 'cleanRecording' || key === 'autoRes') return;
    this.applySettings();
  }

  // ── flow ──────────────────────────────────────────────────────────────────

  get seed() {
    return seedFromValue(this.settings.seed);
  }

  resetWorld(seed) {
    this.track.setSeed(seed);
    this.road.reset(seed);
    this.scenery.reset(seed);
    this.crowd.reset();
    this.foliage.reset(seed);
    this.effects.clear();
    this.rig.reset();
    this.hud.clearTransient();
  }

  enterMenu(keepScreen = false) {
    this.state = 'menu';
    this.input.active = false;
    this.time = 0;
    this.simTime = 0;
    this.schedule = null;
    this.resetWorld(this.seed);
    this.manager.setSchedule({ events: [], speed: this.speed });
    this.director.setSchedule({ events: [] }, 'auto');
    this.rig.setMode('auto');
    this.renderer.setBlur(0);
    this.input.showTouch(false);
    this.menus.setRunBar(false);
    if (!keepScreen) this.menus.show('title');
    if (this.audio.ready) this.audio.startMusic('calm');
  }

  startRun(mode, record = false) {
    Input.blurActive();
    this.audio.init();
    const s = this.settings;
    const seed = this.seed;
    const roundIndex = s.roundSelection === 'all' ? -1 : Number(s.roundSelection);
    this.schedule = buildSchedule(TIMELINE, { seed, roundLength: s.roundLength, roundIndex });
    this.mode = mode;
    this.resetWorld(seed);
    this.manager.setSchedule(this.schedule);
    this.director.setSchedule(this.schedule, mode);
    this.rig.setMode(mode);
    this.time = 0;
    this.simTime = 0;
    this.segIndex = -1;
    this.lastCountStep = -1;
    this.savedFile = null;
    this.endAt = 0;
    this.state = 'run';
    this.input.active = mode === 'play';
    this.audio.setPaused(false);
    this.audio.stopMusic(0.2);
    this.menus.hide();
    this.menus.setRunBar(true);
    this.input.showTouch(mode === 'play' && Input.isTouch());

    if (record) this.startRecording();
  }

  startRecording() {
    if (this.recorder.recording) return;
    if (!Recorder.supported()) {
      alert('Recording is not supported in this browser. Try Chrome, Edge or Firefox.');
      return;
    }
    this.recordingRun = true;
    if (this.settings.resolution === 'window') {
      this.prevResolution = 'window';
      this.renderer.setResolution('1920x1080');
    }
    const name = `pumpkin-dash-${String(this.settings.seed).replace(/[^\w-]+/g, '_') || 'run'}-${stamp()}.webm`;
    if (this.recorder.start(name)) {
      this.savedFile = name;
      document.body.classList.toggle('clean-rec', !!this.settings.cleanRecording);
    } else {
      this.recordingRun = false;
      this.restoreResolution();
    }
  }

  stopRecording() {
    if (!this.recorder.recording) return;
    this.recorder.stop();
    document.body.classList.remove('clean-rec');
    this.recordingRun = false;
    this.restoreResolution();
  }

  restoreResolution() {
    if (this.prevResolution) {
      this.renderer.setResolution(this.prevResolution);
      this.prevResolution = null;
    }
  }

  pause() {
    if (this.state !== 'run') return;
    this.state = 'paused';
    this.input.active = false;
    this.input.releaseAll();
    this.audio.setPaused(true);
    this.recorder.setPaused(true);
    document.body.classList.remove('clean-rec');
    this.menus.show('pause');
    this.menus.setRunBar(false);
    this.input.showTouch(false);
  }

  resume() {
    if (this.state !== 'paused') return;
    Input.blurActive();
    this.state = 'run';
    this.input.active = this.mode === 'play';
    this.audio.setPaused(false);
    this.recorder.setPaused(false);
    if (this.recorder.recording && this.settings.cleanRecording) document.body.classList.add('clean-rec');
    this.menus.hide();
    this.menus.setRunBar(true);
    this.input.showTouch(this.mode === 'play' && Input.isTouch());
  }

  finishRun() {
    if (this.state !== 'run') return;
    this.state = 'ended';
    this.input.active = false;
    const saved = this.recorder.recording ? this.savedFile : null;
    this.stopRecording();
    this.audio.stopMusic(1.5);
    this.menus.setRunBar(false);
    this.input.showTouch(false);
    const best = this.mode === 'play' ? this.updateBest(this.director.score) : null;
    this.menus.show('victory', { play: this.mode === 'play', score: this.director.score, distance: this.speed * this.time, seed: this.settings.seed, best, savedFile: saved });
  }

  onGameOver() {
    if (this.state !== 'run') return;
    this.state = 'ended';
    this.input.active = false;
    const saved = this.recorder.recording ? this.savedFile : null;
    this.stopRecording();
    this.audio.stopMusic(0.4);
    this.audio.play('gameover');
    this.menus.setRunBar(false);
    this.input.showTouch(false);
    const best = this.updateBest(this.director.score);
    this.menus.show('gameover', { play: true, score: this.director.score, distance: this.speed * this.time, best, savedFile: saved });
  }

  updateBest(score) {
    let best = 0;
    try {
      best = Number(localStorage.getItem(BEST_KEY)) || 0;
      if (score > best) {
        best = score;
        localStorage.setItem(BEST_KEY, String(best));
      }
    } catch {
      best = Math.max(best, score);
    }
    return best;
  }

  // ── input ─────────────────────────────────────────────────────────────────

  onInput(a, down = true) {
    if (this.exporter.busy) return;
    if (!down) {
      // releases always reach the rig, so a duck can't stay stuck after a pause
      if (this.mode === 'play' && (this.state === 'run' || this.state === 'paused')) this.director.input(a, this.time, false);
      return;
    }
    if (a === 'pause') {
      if (this.state === 'run') this.pause();
      else if (this.state === 'paused') this.resume();
      else if (this.menus.current === 'settings') this.onMenu('settingsBack');
      return;
    }
    // applied at once with the time of the last frame: the next frame already
    // shows one frame of motion (no fixed-step polling, nothing waits)
    if (this.state === 'run' && this.mode === 'play') this.director.input(a, this.time, true);
  }

  onMenu(name, data) {
    if (this.exporter.busy) return;
    switch (name) {
      case 'click':
        this.audio.init();
        this.audio.play('click');
        break;
      case 'auto':
        this.startRun('auto');
        break;
      case 'play':
        this.startRun('play');
        break;
      case 'record':
        this.startRun('auto', true);
        break;
      case 'export':
        this.menus.show('export');
        break;
      case 'exportStart':
        this.settings.exportSize = data;
        saveSettings(this.settings);
        this.exporter.start(data);
        break;
      case 'settings':
        this.menus.show('settings', { back: this.state === 'paused' ? 'pause' : 'title' });
        break;
      case 'exportBack':
        this.menus.show('title');
        break;
      case 'settingsBack':
        this.menus.show(this.menus.back === 'pause' && this.state === 'paused' ? 'pause' : this.state === 'menu' ? 'title' : this.menus.back);
        break;
      case 'pause':
        this.pause();
        break;
      case 'resume':
        this.resume();
        break;
      case 'restart': {
        const wasRec = this.recorder.recording;
        this.stopRecording();
        this.audio.setPaused(false);
        this.startRun(this.mode, wasRec);
        break;
      }
      case 'quit':
        this.stopRecording();
        this.audio.setPaused(false);
        this.enterMenu();
        break;
      case 'toggleRec':
        if (this.recorder.recording) this.stopRecording();
        else {
          this.startRecording();
          this.recorder.setPaused(true); // still paused until RESUME
        }
        break;
      case 'stopRec':
        this.stopRecording();
        break;
    }
  }

  // ── per-frame ─────────────────────────────────────────────────────────────

  /** Advance gameplay in fixed steps up to `time`. */
  simulate(time) {
    let n = 0;
    while (this.state === 'run' && this.schedule && this.simTime + STEP <= time + 1e-9) {
      // after a long stall, drop the backlog instead of spiralling
      if (++n > MAX_STEPS) this.simTime = Math.max(this.simTime, time - STEP);
      this.simTime += STEP;
      this.step(this.simTime);
    }
  }

  step(t) {
    const sch = this.schedule;
    const i = segmentIndexAt(sch, t);
    const seg = sch.segments[i];
    const segT = t - seg.start;
    if (i !== this.segIndex) this.onSegment(seg, i);
    if (seg.kind === 'countdown') {
      const step = Math.floor(segT / (seg.duration / 4));
      if (step !== this.lastCountStep && step < 4) {
        this.lastCountStep = step;
        this.audio.play(step < 3 ? 'beep' : 'go');
      }
    }
    this.director.update(t);
    if (t >= sch.duration) {
      if (!this.endAt) this.endAt = t;
      if (t - this.endAt > 0.3) this.finishRun();
    }
  }

  frame(dt) {
    const cpu0 = performance.now();
    const d = this.debug;
    d.begin();
    if (this.state !== 'paused') this.time += dt;
    const time = this.time;
    this.audio.update();
    this.simulate(time);
    d.lap('director');

    let seg = null;
    let segT = 0;
    if (this.schedule && this.state !== 'menu') {
      seg = this.schedule.segments[segmentIndexAt(this.schedule, time)];
      segT = time - seg.start;
    }

    // camera + world
    const camS = this.speed * time;
    this.rig.update(time, camS);
    this.road.update(camS);
    d.lap('road');
    this.scenery.update(camS, this.camera);
    d.lap('props');
    this.foliage.update(camS);
    d.lap('foliage');
    const fogMix = this.biomes.fog(camS + 10);
    const heading = this.track.heading(camS);
    this._fogCol.copy(FOG_COL).lerp(FOG_COL_THICK, fogMix * 0.8);
    const fog = this.scene.fog;
    fog.color.copy(this._fogCol);
    fog.near = FOG_NEAR - 12 * fogMix;
    fog.far = this.fogFar - 17 * fogMix;
    this.sky.update(time, this.camera, heading, fogMix, this._fogCol);
    d.lap('sky');
    this.crowd.update(time, this.camera);
    d.lap('crowd');
    this.manager.update(time, camS);
    d.lap('entities');

    const em = this.emitters;
    em.length = 0;
    for (const e of this.scenery.emitters) em.push(e);
    for (const e of this.manager.emitters) em.push(e);
    this._fwd.set(Math.sin(heading), 0, -Math.cos(heading));
    this.effects.update(this.state === 'paused' ? 0 : dt, this.camera, this.renderer.height, em, fogMix, this._fwd);
    d.lap('particles');

    // the key light rides along so its shadow box always covers the view
    const cp = this.camera.position;
    const tgt = this.sun.target.position;
    tgt.set(cp.x + this._fwd.x * SHADOW_AHEAD, 0, cp.z + this._fwd.z * SHADOW_AHEAD);
    const texel = (2 * this.sun.shadow.camera.right) / this.sun.shadow.mapSize.x;
    const a = tgt.dot(this._sunX);
    const b = tgt.dot(this._sunY);
    tgt.addScaledVector(this._sunX, Math.round(a / texel) * texel - a).addScaledVector(this._sunY, Math.round(b / texel) * texel - b);
    this.sun.position.copy(tgt).add(this.sunOffset);
    this.sun.target.updateMatrixWorld();

    updateMaterials(time);

    // background blur behind title / between-round / outro cards
    let blur = 0;
    if (seg && this.state !== 'menu') {
      const k = Math.min(smooth(segT / 0.4), smooth((seg.duration - segT) / 0.4));
      if (seg.kind === 'card') blur = 9 * k;
      else if (seg.kind === 'title') blur = 5 * k;
      else if (seg.kind === 'outro') blur = 7 * k;
    }
    this.renderer.setBlur(blur);
    d.lap('sky'); // sun follow, material clocks, blur

    const hudOn = this.state === 'run' || this.state === 'paused';
    const h = this._hud;
    h.time = time;
    h.seg = seg;
    h.segT = segT;
    h.roundFrac = seg && seg.kind === 'round' ? segT / seg.duration : 0;
    h.showStats = this.mode === 'play' && !!seg && seg.kind === 'round';
    h.score = this.director.score;
    h.lives = this.director.lives;
    h.maxLives = this.director.maxLives;
    h.distance = camS;
    h.watermark = this.settings.watermark;
    h.hidden = !hudOn;
    this.hud.draw(h);
    d.lap('hud');

    // the shadow map follows the sun every other frame (the view moves a few
    // centimetres in between); an export renders every frame at full quality
    const rr = this.renderer.renderer;
    const exporting = this.exporter.busy;
    this._shadowTick = !this._shadowTick;
    rr.shadowMap.autoUpdate = false;
    if (exporting || this._shadowTick) rr.shadowMap.needsUpdate = true;
    this.autoResolution(dt, exporting);
    this.renderer.setHudInScene(exporting || this.recorder.recording);

    d.apply();
    d.gpuBegin();
    this.renderer.render(this.scene, this.camera);
    d.gpuEnd();
    d.lap('render');
    d.update(dt, performance.now() - cpu0);
  }

  /** Optional dynamic resolution: drops the render scale below 50 fps, climbs back with headroom. */
  autoResolution(dt, exporting) {
    const r = this.renderer;
    if (!this.settings.autoRes || exporting || this.recordingRun) {
      if (r.dynScale !== 1) r.setDynScale(1);
      this._fpsAvg = 60;
      this._resWait = 1;
      return;
    }
    if (dt <= 0 || dt > 0.5) return;
    this._fpsAvg += (1 / dt - this._fpsAvg) * 0.05;
    this._resWait -= dt;
    if (this._resWait > 0) return;
    if (this._fpsAvg < 50 && r.dynScale > 0.5) {
      r.setDynScale(r.dynScale - 0.1);
      this._resWait = 1.5;
    } else if (this._fpsAvg > 58 && r.dynScale < 1) {
      r.setDynScale(r.dynScale + 0.05);
      this._resWait = 2.5;
    }
  }

  onSegment(seg, i) {
    this.segIndex = i;
    const a = this.audio;
    switch (seg.kind) {
      case 'title':
        a.play('stinger');
        a.startMusic('calm');
        break;
      case 'countdown':
        this.lastCountStep = -1;
        break;
      case 'round':
        a.startMusic(seg.round.music === 'heavy' ? 'heavy' : 'normal');
        break;
      case 'card':
        a.play('chime');
        a.setIntensity('calm');
        break;
      case 'outro':
        if (this.schedule.segments[i - 1] && this.schedule.segments[i - 1].kind !== 'outro') {
          a.stopMusic(0.5);
          a.play('victory');
        } else a.play('stinger');
        break;
    }
  }
}

function stamp() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}-${p(d.getHours())}${p(d.getMinutes())}`;
}
