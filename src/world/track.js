import * as THREE from 'three';
import { RNG } from '../core/rng.js';

const DEG = Math.PI / 180;
const START = -300; // first sampled distance (metres)
const GROW = 2048; // samples added at a time

const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _sc = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

/**
 * The road centre-line: a gentle S-curve (±13° bends) over rolling hills (±3°).
 * Distance `s` is metres along the road; position is integrated at 1 m steps.
 * Conventions: forward = (sin h, 0, -cos h), right = (cos h, 0, sin h).
 * Props are modelled facing +Z (towards the approaching camera).
 */
export class Track {
  constructor(seed = 1) {
    this.setSeed(seed);
  }

  setSeed(seed) {
    const r = new RNG((seed ^ 0x5eed) >>> 0);
    this.p1 = r.range(0, Math.PI * 2);
    this.p2 = r.range(0, Math.PI * 2);
    this.p3 = r.range(0, Math.PI * 2);
    this.p4 = r.range(0, Math.PI * 2);
    this.xs = [0];
    this.ys = [0];
    this.zs = [0];
    this.maxS = START;
    this._extend(GROW);
  }

  heading(s) {
    return 8.5 * DEG * Math.sin((s / 300) * Math.PI * 2 + this.p1) + 4.5 * DEG * Math.sin((s / 113) * Math.PI * 2 + this.p2);
  }

  slope(s) {
    return 2.1 * DEG * Math.sin((s / 210) * Math.PI * 2 + this.p3) + 0.9 * DEG * Math.sin((s / 79) * Math.PI * 2 + this.p4);
  }

  _extend(n) {
    const { xs, ys, zs } = this;
    for (let k = 0; k < n; k++) {
      const i = xs.length - 1;
      const sm = START + i + 0.5;
      const h = this.heading(sm);
      xs.push(xs[i] + Math.sin(h));
      zs.push(zs[i] - Math.cos(h));
      ys.push(ys[i] + Math.tan(this.slope(sm)));
    }
    this.maxS = START + xs.length - 1;
  }

  pos(s, out = new THREE.Vector3()) {
    if (s < START) s = START;
    while (s >= this.maxS - 1) this._extend(GROW);
    const f = s - START;
    const i = Math.floor(f);
    const t = f - i;
    const { xs, ys, zs } = this;
    return out.set(xs[i] + (xs[i + 1] - xs[i]) * t, ys[i] + (ys[i + 1] - ys[i]) * t, zs[i] + (zs[i + 1] - zs[i]) * t);
  }

  /** World point at distance s, lateral offset (+ = right), height above road. */
  point(s, lat = 0, up = 0, out = new THREE.Vector3()) {
    this.pos(s, out);
    const h = this.heading(s);
    out.x += Math.cos(h) * lat;
    out.z += Math.sin(h) * lat;
    out.y += up;
    return out;
  }

  /**
   * Transform for an object at (s, lat, up). yaw rotates relative to "facing
   * the camera": right-side props facing the road use -PI/2, left-side +PI/2.
   */
  matrix(s, lat = 0, up = 0, yaw = 0, scale = 1, out = new THREE.Matrix4()) {
    this.point(s, lat, up, _v);
    _q.setFromAxisAngle(UP, -this.heading(s) + yaw);
    if (typeof scale === 'number') _sc.set(scale, scale, scale);
    else _sc.set(scale[0], scale[1], scale[2]);
    return out.compose(_v, _q, _sc);
  }
}
