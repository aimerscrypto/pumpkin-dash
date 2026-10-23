// F3 performance overlay: FPS, frame / CPU time, renderer counters and how
// many pooled things are alive. Updated 4× a second; costs nothing while hidden.
// While it is open the number keys switch individual GPU costs off and on, so
// the frame time can be attributed (1 bloom … 0 road).

const PERIOD = 0.25;

const TOGGLES = [
  ['Digit1', 'bloom', 'bloom'],
  ['Digit2', 'post', 'post-processing'],
  ['Digit3', 'shadows', 'shadows'],
  ['Digit4', 'sky', 'sky dome / clouds'],
  ['Digit5', 'foliage', 'foliage (corn/grass)'],
  ['Digit6', 'crowd', 'crowd'],
  ['Digit7', 'props', 'props'],
  ['Digit8', 'particles', 'particles'],
  ['Digit9', 'fog', 'fog / transparent fx'],
  ['Digit0', 'road', 'road / terrain'],
];

// per-system CPU timers, in frame order ('render' = scene + post + HUD submit
// without the shadow pass, which is timed on its own)
const SYSTEMS = ['director', 'road', 'props', 'foliage', 'sky', 'crowd', 'entities', 'particles', 'hud', 'shadows', 'render'];

export class DebugOverlay {
  constructor(game) {
    this.g = game;
    this.on = false;
    this.acc = 0;
    this.frames = 0;
    this.cpu = 0;
    this.worstMs = 0;
    // true = that cost is switched off
    this.off = {};
    for (const [, k] of TOGGLES) this.off[k] = false;
    this.any = false;
    this._fog = null;
    this.sys = {};
    for (const k of SYSTEMS) this.sys[k] = 0;
    this._t0 = 0;
    // the shadow pass runs inside renderer.render: time it separately
    const sm = game.renderer.renderer.shadowMap;
    const shadowRender = sm.render.bind(sm);
    sm.render = (...args) => {
      if (!this.on) return shadowRender(...args);
      const t = performance.now();
      shadowRender(...args);
      this.sys.shadows += performance.now() - t;
    };
    // GPU time of the whole frame, where the browser exposes timer queries
    this.gl = game.renderer.renderer.getContext();
    this.timer = this.gl.getExtension('EXT_disjoint_timer_query_webgl2');
    this.query = null;
    this._querying = false;
    this.gpuSum = 0;
    this.gpuN = 0;
    this.el = document.createElement('pre');
    this.el.id = 'debug-overlay';
    this.el.style.cssText =
      'position:fixed;left:8px;top:8px;z-index:9999;margin:0;padding:8px 10px;font:12px/1.35 ui-monospace,Consolas,monospace;' +
      'color:#d8ffcf;background:rgba(10,4,20,0.78);border-radius:6px;pointer-events:none;white-space:pre;display:none;';
    document.body.appendChild(this.el);
    window.addEventListener('keydown', (e) => {
      if (e.code === 'F3') {
        e.preventDefault();
        this.toggle();
        return;
      }
      if (!this.on || e.repeat) return;
      const t = TOGGLES.find((x) => x[0] === e.code);
      if (!t) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      this.off[t[1]] = !this.off[t[1]];
      this._changed(t[1]);
    }, true);
  }

  /** Starts the per-system stopwatch (no-op while hidden). */
  begin() {
    if (this.on) this._t0 = performance.now();
  }

  /** Charges the time since the last begin()/lap() to system `k`. */
  lap(k) {
    if (!this.on) return;
    const t = performance.now();
    this.sys[k] += t - this._t0;
    this._t0 = t;
  }

  /** Brackets renderer.render with a GPU timer query (one in flight). */
  gpuBegin() {
    if (!this.on || !this.timer || this.query) return;
    this.query = this.gl.createQuery();
    this.gl.beginQuery(this.timer.TIME_ELAPSED_EXT, this.query);
    this._querying = true;
  }

  gpuEnd() {
    if (!this._querying) return;
    this.gl.endQuery(this.timer.TIME_ELAPSED_EXT);
    this._querying = false;
  }

  _pollGpu() {
    const gl = this.gl;
    const q = this.query;
    if (!q || this._querying || !gl.getQueryParameter(q, gl.QUERY_RESULT_AVAILABLE)) return;
    if (!gl.getParameter(this.timer.GPU_DISJOINT_EXT)) {
      this.gpuSum += gl.getQueryParameter(q, gl.QUERY_RESULT) / 1e6;
      this.gpuN++;
    }
    gl.deleteQuery(q);
    this.query = null;
  }

  toggle() {
    this.on = !this.on;
    this.el.style.display = this.on ? 'block' : 'none';
    this.acc = 0;
    this.frames = 0;
    this.cpu = 0;
    this.worstMs = 0;
  }

  /** Objects behind each toggle (looked up live; pools never change). */
  _objects(k) {
    const g = this.g;
    switch (k) {
      case 'sky':
        return [g.sky.group];
      case 'foliage':
        return g.foliage.meshes;
      case 'crowd':
        return g.crowd.meshes;
      case 'props': {
        const out = [g.scenery.backdrop];
        for (const b of g.scenery.batches.values()) for (const m of b.meshes) out.push(m);
        return out;
      }
      case 'particles':
        return [g.effects.add.points, g.effects.norm.points];
      case 'road': {
        const out = [g.road.rocks];
        for (const c of g.road.chunks) out.push(c.road, c.terrain);
        return out;
      }
      case 'fog':
        return g.sky.ghosts;
    }
    return null;
  }

  _changed(k) {
    const g = this.g;
    this.any = Object.values(this.off).some(Boolean);
    if (k === 'fog') {
      // dropping the fog changes every shader's variant; they recompile once
      if (this.off.fog) {
        this._fog = g.scene.fog;
        g.scene.fog = null;
      } else if (this._fog) {
        g.scene.fog = this._fog;
      }
    }
    if (k === 'shadows') g.applySettings();
    if (k === 'bloom' || k === 'post') g.renderer.setQuality(g.settings.quality);
    if (!this.off[k]) {
      // hand visibility back to the systems that own it
      const list = this._objects(k);
      if (list) for (const o of list) if (o) o.visible = !o.isInstancedMesh || o.count > 0;
      g.foliage.version = -1;
      g.scenery.forceSync = true;
    }
  }

  /** Called by the game after every system updated, right before rendering. */
  apply() {
    if (!this.any) return;
    const r = this.g.renderer;
    if (this.off.bloom) r.bloom.enabled = false;
    r.bypassPost = this.off.post;
    if (this.off.shadows) this.g.sun.castShadow = false;
    for (const k of ['sky', 'foliage', 'crowd', 'props', 'particles', 'road', 'fog']) {
      if (!this.off[k]) continue;
      const list = this._objects(k);
      if (list) for (const o of list) if (o) o.visible = false;
    }
  }

  update(dt, cpuMs) {
    if (!this.on) return;
    this._pollGpu();
    this.acc += dt;
    this.frames++;
    this.cpu += cpuMs;
    this.worstMs = Math.max(this.worstMs, dt * 1000);
    if (this.acc < PERIOD) return;
    const g = this.g;
    const info = g.renderer.renderer.info;
    const fps = this.frames / this.acc;
    const f = g.foliage;
    let foliage = 0;
    if (f && f.meshes) for (const m of f.meshes) if (m.visible) foliage += m.count;
    const r = g.renderer;
    let keys = '';
    for (const [code, k, label] of TOGGLES) keys += `\n ${code.slice(5)} ${this.off[k] ? 'OFF' : 'on '} ${label}`;
    const sys = this.sys;
    sys.render -= sys.shadows;
    let cpuSys = '';
    for (const k of SYSTEMS) {
      cpuSys += `\n ${k.padEnd(10)}${(sys[k] / this.frames).toFixed(2)}`;
      sys[k] = 0;
    }
    const gpu = !this.timer ? 'n/a (no timer queries)' : this.gpuN ? (this.gpuSum / this.gpuN).toFixed(1) : '…';
    this.gpuSum = 0;
    this.gpuN = 0;
    this.el.textContent =
      `FPS        ${fps.toFixed(0)}\n` +
      `frame ms   ${((this.acc / this.frames) * 1000).toFixed(1)}  (worst ${this.worstMs.toFixed(1)})\n` +
      `CPU ms     ${(this.cpu / this.frames).toFixed(2)}\n` +
      `GPU ms     ${gpu}\n` +
      `draw calls ${info.render.calls}\n` +
      `triangles  ${info.render.triangles}\n` +
      `geometries ${info.memory.geometries}\n` +
      `textures   ${info.memory.textures}\n` +
      `programs   ${info.programs ? info.programs.length : 0}\n` +
      `canvas     ${r.width}×${r.height}  (${g.settings.quality}${r.dynScale < 1 ? `, auto ${Math.round(r.dynScale * 100)}%` : ''})\n` +
      `props      ${g.scenery.propCount}\n` +
      `crowd      ${g.crowd.total}\n` +
      `entities   ${g.manager.list.length}\n` +
      `foliage    ${foliage}\n` +
      `particles  ${g.effects.count}\n` +
      `── CPU ms per system ──` +
      cpuSys +
      `\n` +
      `── toggles (keys) ──` +
      keys;
    this.acc = 0;
    this.frames = 0;
    this.cpu = 0;
    this.worstMs = 0;
  }
}
