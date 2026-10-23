import * as THREE from 'three';
import { geometryFor, restPose, SH_X, SH_Y } from './characters.js';
import { MATS } from '../core/materials.js';
import { shadowProxy } from '../core/geo.js';

// Cheering roadside crowd, fully instanced: one InstancedMesh per kind and part
// (body, glow, left arm, right arm), so the whole crowd costs ~4 draw calls per
// kind no matter how many people stand by the road. All batches and handles are
// created up front; nothing is allocated while running.
// Styles: 0 wave · 1 jump · 2 clap · 3 fist pump.

const MAX = 90;
const CAP = 48; // per kind
export const CROWD_KINDS = ['pumpkinKid', 'ghostKid', 'witch', 'vampire', 'skeleton', 'werewolf'];

const _inner = new THREE.Matrix4();
const _body = new THREE.Matrix4();
const _arm = new THREE.Matrix4();
const _out = new THREE.Matrix4();
const _e = new THREE.Euler();

// Distance LOD: full detail up close, half the segments past LOD1_DIST, the
// chunkiest level past LOD2_DIST (already deep in the fog by then).
const LOD1_DIST = 16;
const LOD2_DIST = 32;
const LOD_DETAIL = [1, 0.5, 0.25];

class KindBatch {
  constructor(scene, kind) {
    this.kind = kind;
    this.float = geometryFor(kind).float;
    this.n = 0;
    this.lod1 = LOD1_DIST;
    this.lod2 = LOD2_DIST;
    this.cull = Infinity;
    this.items = [];
    this.free = [];
    for (let i = 0; i < CAP; i++) this.free.push({ batch: this, i: -1, kind, phase: 0, style: 0, root: new THREE.Matrix4() });
    const mk = (geo, mat, cast, order) => {
      if (!geo) return null;
      const m = new THREE.InstancedMesh(geo, mat, CAP);
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      m.count = 0;
      m.visible = false;
      m.castShadow = cast;
      m.matrixAutoUpdate = false;
      m.renderOrder = order; // near levels first: cheap early-z for the far ones
      scene.add(m);
      return m;
    };
    this.lods = LOD_DETAIL.map((d, li) => {
      const e = geometryFor(kind, d);
      const l = {
        body: mk(e.body, MATS.body, true, li + 1),
        glow: mk(e.glow, MATS.glow, false, li + 1),
        armL: mk(e.armL, MATS.body, true, li + 1),
        armR: mk(e.armR, MATS.body, true, li + 1),
        n: 0,
        // the far level stands outside the shadow box: its shadow could never land
        cast: li < 2,
      };
      // the glow shell shares the body's transforms
      if (l.glow) l.glow.instanceMatrix = l.body.instanceMatrix;
      l.meshes = [l.body, l.glow, l.armL, l.armR].filter(Boolean);
      return l;
    });
    // full-detail people throw their shadow from the half-detail mesh
    const near = this.lods[0];
    const mid = geometryFor(kind, LOD_DETAIL[1]);
    // (a part identical at both levels casts for itself)
    near.cast = false;
    this.proxies = [];
    for (const part of ['body', 'armL', 'armR']) {
      if (mid[part] === near[part].geometry) {
        near[part].userData.selfCast = true;
        continue;
      }
      const px = shadowProxy(mid[part], MATS.body, near[part].instanceMatrix, CAP);
      scene.add(px);
      near.meshes.push(px);
      this.proxies.push(px);
    }
    this.meshes = this.lods.flatMap((l) => l.meshes);
    this.setShadows(true);
  }

  setShadows(on) {
    for (const l of this.lods) {
      for (const p of ['body', 'armL', 'armR']) l[p].castShadow = on && (l.cast || !!l[p].userData.selfCast);
    }
    for (const px of this.proxies) px.castShadow = on;
  }

  add(matrix, phase, style) {
    const h = this.free.pop();
    if (!h) return null;
    h.root.copy(matrix);
    h.phase = phase;
    h.style = style;
    h.i = this.n++;
    this.items[h.i] = h;
    return h;
  }

  remove(h) {
    const last = --this.n;
    if (h.i !== last) {
      const moved = this.items[last];
      this.items[h.i] = moved;
      moved.i = h.i;
    }
    this.items[last] = null;
    h.i = -1;
    this.free.push(h);
  }

  update(time, cam, fwd) {
    const lods = this.lods;
    const l1 = this.lod1 * this.lod1;
    const l2 = this.lod2 * this.lod2;
    const cull = this.cull * this.cull;
    for (const l of lods) l.n = 0;
    for (let k = 0; k < this.n; k++) {
      const h = this.items[k];
      const re = h.root.elements;
      const dx = re[12] - cam.x, dy = re[13] - cam.y, dz = re[14] - cam.z;
      // people already passed (behind the camera) are never seen again
      if (dx * fwd.x + dy * fwd.y + dz * fwd.z < -3) continue;
      const d2 = dx * dx + dy * dy + dz * dz;
      if (d2 > cull) continue;
      const l = d2 < l1 ? lods[0] : d2 < l2 ? lods[1] : lods[2];
      const j = l.n++;
      const t = time + h.phase;
      let y = 0;
      let lx = 0, lz = 0, rx = 0, rz = 0;
      switch (h.style) {
        case 0: {
          // wave with one arm, the other on the hip
          rz = 2.6 + Math.sin(t * 9) * 0.45;
          lz = -0.35;
          break;
        }
        case 1: {
          // jump with both arms up
          const jj = Math.abs(Math.sin(t * 4.2));
          y = jj * 0.28;
          lz = -2.5 - jj * 0.3;
          rz = 2.5 + jj * 0.3;
          break;
        }
        case 2: {
          // clap in front
          const c = Math.sin(t * 10);
          lx = -1.25;
          lz = 0.35 + c * 0.3;
          rx = -1.25;
          rz = -0.35 - c * 0.3;
          y = Math.abs(Math.sin(t * 5)) * 0.05;
          break;
        }
        default: {
          // fist pump
          const p = Math.max(0, Math.sin(t * 6));
          rz = 2.2 + p * 0.7;
          lx = -0.3;
          lz = -0.25;
          y = p * 0.06;
        }
      }
      if (this.float) y += 0.25 + Math.sin(t * 2) * 0.1;

      _inner.makeRotationY(Math.sin(t * 1.3) * 0.15);
      _inner.elements[13] = y;
      _body.multiplyMatrices(h.root, _inner);
      _body.toArray(l.body.instanceMatrix.array, j * 16);

      _arm.makeRotationFromEuler(_e.set(lx, 0, lz));
      _arm.elements[12] = -SH_X;
      _arm.elements[13] = SH_Y;
      _out.multiplyMatrices(_body, _arm).toArray(l.armL.instanceMatrix.array, j * 16);

      _arm.makeRotationFromEuler(_e.set(rx, 0, rz));
      _arm.elements[12] = SH_X;
      _arm.elements[13] = SH_Y;
      _out.multiplyMatrices(_body, _arm).toArray(l.armR.instanceMatrix.array, j * 16);
    }
    for (const l of lods) {
      const n = l.n;
      for (const m of l.meshes) {
        m.count = n;
        m.visible = n > 0;
        if (n > 0) {
          m.instanceMatrix.clearUpdateRanges();
          m.instanceMatrix.addUpdateRange(0, n * 16);
          m.instanceMatrix.needsUpdate = true;
          // bounds follow the animated instances so frustum culling stays exact
          m.computeBoundingSphere();
        }
      }
    }
  }
}

export class Crowd {
  constructor(scene) {
    this.scene = scene;
    this.batches = new Map();
    for (const k of CROWD_KINDS) this.batches.set(k, new KindBatch(scene, k));
    this.total = 0;
    this._shadows = true;
    this.meshes = [];
    for (const b of this.batches.values()) for (const m of b.meshes) this.meshes.push(m);
    this._cam = new THREE.Vector3();
    this._fwd = new THREE.Vector3(0, 0, -1);
  }

  get shadows() {
    return this._shadows;
  }

  set shadows(on) {
    this._shadows = on;
    for (const b of this.batches.values()) b.setShadows(on);
  }

  /** Low quality: LOD distances × `scale`, nobody drawn past `cull` (fully fogged). */
  setLod(scale, cull) {
    for (const b of this.batches.values()) {
      b.lod1 = LOD1_DIST * scale;
      b.lod2 = LOD2_DIST * scale;
      b.cull = cull;
    }
  }

  add(kind, matrix, phase, style) {
    if (this.total >= MAX) return null;
    const b = this.batches.get(kind);
    const h = b ? b.add(matrix, phase, style) : null;
    if (h) this.total++;
    return h;
  }

  remove(h) {
    if (!h || h.i < 0) return;
    h.batch.remove(h);
    this.total--;
  }

  /** `camera` picks each person's detail level and skips those behind it. */
  update(time, camera) {
    const cam = this._cam;
    const fwd = this._fwd;
    if (camera) {
      camera.getWorldDirection(fwd); // also refreshes matrixWorld
      cam.setFromMatrixPosition(camera.matrixWorld);
    }
    for (const b of this.batches.values()) b.update(time, cam, fwd);
  }

  reset() {
    for (const b of this.batches.values()) while (b.n > 0) b.remove(b.items[b.n - 1]);
    this.total = 0;
  }
}

export { restPose };
