import * as THREE from 'three';

// CPU-simulated point particles drawn with a soft round sprite shader.
// Two systems: additive (fire, sparks, fireflies, stars) and normal (smoke, fog).

const VS = /* glsl */ `
attribute float aSize;
attribute vec4 aColor;
uniform float uScale;
varying vec4 vColor;
#include <fog_pars_vertex>
void main() {
  vColor = aColor;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / max(0.1, -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`;

const FS = /* glsl */ `
varying vec4 vColor;
uniform float uSoft;
#include <fog_pars_fragment>
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  float a = 1.0 - smoothstep(uSoft, 1.0, d);
  if (a <= 0.001) discard;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
  #include <fog_fragment>
}`;

class System {
  constructor(scene, max, additive) {
    this.max = max;
    this.n = 0;
    this.p = new Float32Array(max * 3);
    this.v = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.age = new Float32Array(max);
    this.size0 = new Float32Array(max);
    this.size1 = new Float32Array(max);
    this.col = new Float32Array(max * 3);
    this.alpha = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.grav = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    this.posAttr = new THREE.BufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.sizeAttr = new THREE.BufferAttribute(new Float32Array(max), 1).setUsage(THREE.DynamicDrawUsage);
    this.colAttr = new THREE.BufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.posAttr);
    g.setAttribute('aSize', this.sizeAttr);
    g.setAttribute('aColor', this.colAttr);
    g.setDrawRange(0, 0);
    this.uniforms = THREE.UniformsUtils.merge([THREE.UniformsLib.fog, { uScale: { value: 500 }, uSoft: { value: additive ? 0.0 : 0.25 } }]);
    const mat = new THREE.ShaderMaterial({
      vertexShader: VS,
      fragmentShader: FS,
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      fog: !additive,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 6 : 5;
    scene.add(this.points);
  }

  /** Positional args so emitting never allocates. */
  emit(x, y, z, vx, vy, vz, life, size, size1, c, alpha = 1, drag = 0, grav = 0) {
    if (this.n >= this.max) return;
    const i = this.n++;
    this.p[i * 3] = x;
    this.p[i * 3 + 1] = y;
    this.p[i * 3 + 2] = z;
    this.v[i * 3] = vx;
    this.v[i * 3 + 1] = vy;
    this.v[i * 3 + 2] = vz;
    this.life[i] = life || 1;
    this.age[i] = 0;
    this.size0[i] = size;
    this.size1[i] = size1;
    this.col[i * 3] = c.r;
    this.col[i * 3 + 1] = c.g;
    this.col[i * 3 + 2] = c.b;
    this.alpha[i] = alpha;
    this.drag[i] = drag;
    this.grav[i] = grav;
  }

  _kill(i) {
    const j = --this.n;
    if (i === j) return;
    for (let k = 0; k < 3; k++) {
      this.p[i * 3 + k] = this.p[j * 3 + k];
      this.v[i * 3 + k] = this.v[j * 3 + k];
      this.col[i * 3 + k] = this.col[j * 3 + k];
    }
    this.life[i] = this.life[j];
    this.age[i] = this.age[j];
    this.size0[i] = this.size0[j];
    this.size1[i] = this.size1[j];
    this.alpha[i] = this.alpha[j];
    this.drag[i] = this.drag[j];
    this.grav[i] = this.grav[j];
  }

  clear() {
    this.n = 0;
    this.points.geometry.setDrawRange(0, 0);
  }

  update(dt, scale) {
    this.uniforms.uScale.value = scale;
    for (let i = this.n - 1; i >= 0; i--) {
      this.age[i] += dt;
      if (this.age[i] >= this.life[i]) this._kill(i);
    }
    const pa = this.posAttr.array;
    const sa = this.sizeAttr.array;
    const ca = this.colAttr.array;
    for (let i = 0; i < this.n; i++) {
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      this.v[i * 3] *= dr;
      this.v[i * 3 + 1] = this.v[i * 3 + 1] * dr - this.grav[i] * dt;
      this.v[i * 3 + 2] *= dr;
      this.p[i * 3] += this.v[i * 3] * dt;
      this.p[i * 3 + 1] += this.v[i * 3 + 1] * dt;
      this.p[i * 3 + 2] += this.v[i * 3 + 2] * dt;
      const t = this.age[i] / this.life[i];
      pa[i * 3] = this.p[i * 3];
      pa[i * 3 + 1] = this.p[i * 3 + 1];
      pa[i * 3 + 2] = this.p[i * 3 + 2];
      sa[i] = this.size0[i] + (this.size1[i] - this.size0[i]) * t;
      // fade in quickly, fade out over the last 40 %
      const fade = Math.min(1, t * 8) * Math.min(1, (1 - t) / 0.4);
      ca[i * 4] = this.col[i * 3];
      ca[i * 4 + 1] = this.col[i * 3 + 1];
      ca[i * 4 + 2] = this.col[i * 3 + 2];
      ca[i * 4 + 3] = this.alpha[i] * fade;
    }
    // upload only the live part of each buffer
    const n = this.n;
    this.points.visible = n > 0;
    if (n > 0) {
      this.posAttr.clearUpdateRanges();
      this.posAttr.addUpdateRange(0, n * 3);
      this.posAttr.needsUpdate = true;
      this.sizeAttr.clearUpdateRanges();
      this.sizeAttr.addUpdateRange(0, n);
      this.sizeAttr.needsUpdate = true;
      this.colAttr.clearUpdateRanges();
      this.colAttr.addUpdateRange(0, n * 4);
      this.colAttr.needsUpdate = true;
    }
    this.points.geometry.setDrawRange(0, n);
  }
}

const COL = {
  fire: new THREE.Color('#FF7A1A').multiplyScalar(1.6),
  fireCore: new THREE.Color('#FFE600').multiplyScalar(1.8),
  ember: new THREE.Color('#FFB040').multiplyScalar(1.6),
  smoke: new THREE.Color('#3A3046'),
  fog: new THREE.Color('#C8C6D4'),
  firefly: new THREE.Color('#D8FF5A').multiplyScalar(1.6),
  candle: new THREE.Color('#FFC23A').multiplyScalar(1.5),
  spark: new THREE.Color('#FFF2A0').multiplyScalar(2),
  star: new THREE.Color('#FFE600').multiplyScalar(2),
  toxic: new THREE.Color('#59FF00').multiplyScalar(1.5),
  white: new THREE.Color('#FFFFFF').multiplyScalar(1.4),
};

/**
 * Effects: owns both particle systems. Ambient emitters (torches, candles,
 * fireflies, fog wisps) are driven from the run clock; bursts are one-shots.
 */
export class Effects {
  constructor(scene) {
    this.add = new System(scene, 2400, true);
    this.norm = new System(scene, 900, false);
    this.density = 1;
    this.acc = 0;
    this.rand = Math.random;
    this._v = new THREE.Vector3();
  }

  setDensity(d) {
    this.density = d;
  }

  /** Live particles (debug overlay). */
  get count() {
    return this.add.n + this.norm.n;
  }

  clear() {
    this.add.clear();
    this.norm.clear();
  }

  /** Called every frame. `emitters` from Scenery, `fogMix` 0..1. */
  update(dt, camera, heightPx, emitters, fogMix, forward) {
    const scale = heightPx / (2 * Math.tan((camera.fov * Math.PI) / 360));
    const r = this.rand;
    const d = this.density;
    const cp = camera.position;
    if (dt > 0) {
      // ambient emitters close to the camera
      for (let ei = 0; ei < emitters.length; ei++) {
        const e = emitters[ei];
        const dx = e.pos.x - cp.x;
        const dz = e.pos.z - cp.z;
        const dist2 = dx * dx + dz * dz;
        if (dist2 > 60 * 60) continue;
        if (e.type === 'fire') {
          if (r() < 30 * dt * d) this.add.emit(e.pos.x + (r() - 0.5) * 0.25, e.pos.y, e.pos.z + (r() - 0.5) * 0.25, (r() - 0.5) * 0.4, 1.6 + r() * 1.2, (r() - 0.5) * 0.4, 0.45 + r() * 0.3, 0.55, 0.1, r() < 0.4 ? COL.fireCore : COL.fire, 1, 1);
          if (r() < 4 * dt * d) this.norm.emit(e.pos.x, e.pos.y + 0.6, e.pos.z, (r() - 0.5) * 0.3, 1.1, (r() - 0.5) * 0.3, 1.6, 0.4, 1.4, COL.smoke, 0.35, 0.5);
        } else if (e.type === 'candle') {
          if (r() < 6 * dt * d) this.add.emit(e.pos.x + (r() - 0.5) * 0.3, e.pos.y, e.pos.z + (r() - 0.5) * 0.3, 0, 0.6 + r() * 0.4, 0, 0.8, 0.14, 0.04, COL.candle);
        } else if (e.type === 'toxic') {
          if (r() < 9 * dt * d) this.add.emit(e.pos.x + (r() - 0.5) * 0.6, e.pos.y, e.pos.z + (r() - 0.5) * 0.6, (r() - 0.5) * 0.2, 0.5 + r() * 0.5, (r() - 0.5) * 0.2, 1.1, 0.2, 0.05, COL.toxic);
        } else if (e.type === 'ember') {
          if (r() < 5 * dt * d) this.add.emit(e.pos.x + (r() - 0.5) * 0.5, e.pos.y, e.pos.z + (r() - 0.5) * 0.5, (r() - 0.5) * 0.6, 0.9, (r() - 0.5) * 0.6, 1.4, 0.12, 0.05, COL.ember, 1, 0.4);
        }
      }
      // fireflies drifting around the verges
      if (r() < 10 * dt * d) {
        const side = r() < 0.5 ? -1 : 1;
        const ahead = 5 + r() * 30;
        const rx = -forward.z;
        const rz = forward.x;
        const lat = side * (3.2 + r() * 5);
        this.add.emit(cp.x + forward.x * ahead + rx * lat, cp.y - 0.6 + r() * 2.2, cp.z + forward.z * ahead + rz * lat, (r() - 0.5) * 0.6, (r() - 0.5) * 0.4, (r() - 0.5) * 0.6, 2.5 + r() * 2, 0.14, 0.1, COL.firefly);
      }
      // fog wisps inside fog bridges
      if (fogMix > 0.05 && r() < 24 * fogMix * dt * d) {
        const ahead = 6 + r() * 26;
        const lat = (r() - 0.5) * 18;
        const rx = -forward.z;
        const rz = forward.x;
        this.norm.emit(cp.x + forward.x * ahead + rx * lat, cp.y - 1.2 + r() * 1.6, cp.z + forward.z * ahead + rz * lat, (r() - 0.5) * 0.8, 0.05, (r() - 0.5) * 0.8, 3, 4, 7, COL.fog, 0.28 * fogMix);
      }
    }
    this.add.update(dt, scale);
    this.norm.update(dt, scale);
  }

  /** One-shot effects at a world position. */
  burst(kind, pos, n = 1) {
    const r = this.rand;
    const k = Math.max(1, Math.round(n * (0.5 + this.density * 0.5)));
    if (kind === 'punch') {
      for (let i = 0; i < 26 * k; i++) {
        const a = r() * Math.PI * 2;
        const b = (r() - 0.3) * Math.PI;
        const sp = 4 + r() * 6;
        this.add.emit(pos.x, pos.y, pos.z, Math.cos(a) * Math.cos(b) * sp, Math.sin(b) * sp + 2, Math.sin(a) * Math.cos(b) * sp, 0.4 + r() * 0.3, 0.25, 0.05, r() < 0.5 ? COL.star : COL.spark, 1, 3, 6);
      }
      for (let i = 0; i < 6 * k; i++) this.norm.emit(pos.x + (r() - 0.5) * 0.6, pos.y + (r() - 0.5) * 0.6, pos.z + (r() - 0.5) * 0.6, (r() - 0.5) * 2, r() * 1.5, (r() - 0.5) * 2, 0.8, 0.6, 1.8, COL.smoke, 0.4, 2);
    } else if (kind === 'dust') {
      for (let i = 0; i < 14 * k; i++) this.norm.emit(pos.x + (r() - 0.5) * 1.2, pos.y + 0.1, pos.z + (r() - 0.5) * 1.2, (r() - 0.5) * 3, r() * 1.8, (r() - 0.5) * 3, 0.9, 0.5, 1.6, COL.fog, 0.5, 2.5);
    } else if (kind === 'pose') {
      for (let i = 0; i < 40 * k; i++) {
        const a = r() * Math.PI * 2;
        this.add.emit(pos.x + Math.cos(a) * 1.8, pos.y + Math.sin(a) * 1.3, pos.z, Math.cos(a) * 3, Math.sin(a) * 3, (r() - 0.5) * 2, 0.7, 0.22, 0.05, r() < 0.5 ? COL.star : COL.white, 1, 2);
      }
    } else if (kind === 'toxic') {
      for (let i = 0; i < 3 * k; i++) this.add.emit(pos.x + (r() - 0.5) * 0.8, pos.y, pos.z + (r() - 0.5) * 0.8, 0, 0.5 + r() * 0.5, 0, 1.2, 0.18, 0.05, COL.toxic);
    } else if (kind === 'fire') {
      for (let i = 0; i < 2 * k; i++) this.add.emit(pos.x + (r() - 0.5) * 0.3, pos.y, pos.z + (r() - 0.5) * 0.3, (r() - 0.5) * 0.5, 1.4 + r(), (r() - 0.5) * 0.5, 0.4, 0.5, 0.1, r() < 0.4 ? COL.fireCore : COL.fire, 1, 1);
    } else if (kind === 'hit') {
      for (let i = 0; i < 18 * k; i++) {
        const a = r() * Math.PI * 2;
        this.add.emit(pos.x, pos.y, pos.z, Math.cos(a) * 3, r() * 3, Math.sin(a) * 3, 0.5, 0.2, 0.05, COL.fire, 1, 3);
      }
    }
  }
}
