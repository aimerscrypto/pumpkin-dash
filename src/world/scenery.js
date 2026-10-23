import * as THREE from 'three';
import { RNG, hash2, hashFloat } from '../core/rng.js';
import { makeProp, kitGeometry, PROP_TYPES, NO_FOG, NO_SHADOW } from './props.js';
import { MATS, toon } from '../core/materials.js';
import { shadowProxy } from '../core/geo.js';
import { BIOME_LEN, BRIDGE_SLOT, SLOT, LAP } from './biomes.js';

const HALF = Math.PI / 2;
const CROWD_KINDS = ['pumpkinKid', 'ghostKid', 'witch', 'vampire', 'skeleton', 'werewolf'];
const _m = new THREE.Matrix4();
const SIDES = [-1, 1];
const facing = (side) => (side > 0 ? -HALF : HALF);
// instance capacity per prop type (worst case inside the slot window)
const CAP = { archVillage: 4, cemeteryGate: 4, castleGate: 4 };
const DEFAULT_CAP = 64;

// Distance LOD (measured to the prop's near side): full detail up close, half
// the segments in the fog band, the chunkiest level deep in the fog.
const LOD1_DIST = 18;
const LOD2_DIST = 34;
const LOD_DETAIL = [1, 0.5, 0.25];
const _c = new THREE.Vector3();

/**
 * Every placed copy of one prop type is an instance of a few InstancedMeshes
 * (one per material bucket and detail level); the buckets of one level share a
 * matrix buffer → ~1–3 draw calls per prop type and level instead of per prop.
 * Handles are pre-allocated; removal swaps the last instance into the hole.
 * Transforms live in a CPU array and are spread over the levels by distance;
 * the GPU buffers are only rewritten when a prop changes level or the set changes.
 */
class PropBatch {
  constructor(scene, type) {
    const nofog = NO_FOG.has(type);
    this.type = type;
    this.cast = !NO_SHADOW.has(type);
    this.cap = CAP[type] || DEFAULT_CAP;
    this.n = 0;
    this.items = [];
    this.free = [];
    for (let i = 0; i < this.cap; i++) this.free.push({ batch: this, i: -1, lod: -1 });
    this.dirty = false;
    this.mats = new Float32Array(this.cap * 16);
    this.meshes = [];
    this.lod1 = LOD1_DIST;
    this.lod2 = LOD2_DIST;
    this.cull = Infinity;
    const full = kitGeometry(type);
    // signs are flat quads: one geometry + material serves every level
    const signs = full.signs.map((sg) => ({
      geo: new THREE.PlaneGeometry(sg.w, sg.h).translate(sg.pos[0], sg.pos[1], sg.pos[2]),
      mat: toon({ map: sg.tex }),
    }));
    let r = 0;
    for (const g of [full.body, full.flat]) {
      if (!g) continue;
      if (!g.boundingSphere) g.computeBoundingSphere();
      r = Math.max(r, g.boundingSphere.center.length() + g.boundingSphere.radius);
    }
    this.radius = r;
    const flatNoFog = nofog ? toon({ vc: true, flat: true, nofog: true }) : null;
    this.lods = LOD_DETAIL.map((d, li) => {
      const entry = kitGeometry(type, null, d);
      const l = { meshes: [], matrix: null, n: 0 };
      const add = (geo, mat, cast, part) => {
        if (!geo) return;
        const m = new THREE.InstancedMesh(geo, mat, this.cap);
        if (l.matrix) m.instanceMatrix = l.matrix;
        else l.matrix = m.instanceMatrix;
        m.count = 0;
        m.visible = false;
        m.matrixAutoUpdate = false;
        // the far level stands outside the shadow box: its shadow could never land
        m.userData.cast = cast && li < 2;
        m.userData.part = part;
        m.renderOrder = li + 1; // near levels first: cheap early-z for the far ones
        scene.add(m);
        l.meshes.push(m);
        this.meshes.push(m);
      };
      add(entry.body, nofog ? MATS.bodyNoFog : MATS.body, true, 'body');
      add(entry.flat, flatNoFog || MATS.flat, true, 'flat');
      add(entry.glow, nofog ? MATS.glowNoFog : MATS.glow, false);
      add(entry.flicker, MATS.flicker, false);
      for (const sg of signs) add(sg.geo, sg.mat, false);
      return l;
    });
    // full-detail props throw their shadow from the half-detail mesh (unless
    // both levels are the same geometry: then the mesh casts for itself)
    const near = this.lods[0];
    const mid = kitGeometry(type, null, LOD_DETAIL[1]);
    for (const m of near.meshes.slice()) {
      const geo = m.userData.cast && mid[m.userData.part];
      if (!geo || geo === m.geometry) continue;
      m.userData.cast = false;
      const px = shadowProxy(geo, m.material, near.matrix, this.cap);
      px.userData.cast = true;
      px.userData.proxy = true;
      scene.add(px);
      near.meshes.push(px);
      this.meshes.push(px);
    }
    this.setShadows(true);
  }

  setShadows(on) {
    const shadows = on && this.cast;
    for (const m of this.meshes) {
      m.castShadow = shadows && m.userData.cast;
      m.receiveShadow = shadows && !m.userData.proxy;
    }
  }

  add() {
    const h = this.free.pop();
    if (!h) return null;
    h.i = this.n++;
    h.lod = -1;
    this.items[h.i] = h;
    this.dirty = true;
    return h;
  }

  /** Stores the instance transform; it reaches the GPU on the next sync. */
  setMatrix(h, m) {
    m.toArray(this.mats, h.i * 16);
    this.dirty = true;
  }

  remove(h) {
    const last = --this.n;
    if (h.i !== last) {
      this.mats.copyWithin(h.i * 16, last * 16, last * 16 + 16);
      const moved = this.items[last];
      this.items[h.i] = moved;
      moved.i = h.i;
    }
    this.items[last] = null;
    h.i = -1;
    this.free.push(h);
    this.dirty = true;
  }

  /**
   * Picks every prop's detail level (−1 = behind the camera, not drawn) and
   * rewrites the level buffers when anything moved between levels.
   */
  sync(cam, fwd, force = false) {
    const n = this.n;
    const a = this.mats;
    let changed = this.dirty || force;
    if (cam) {
      const r = this.radius;
      for (let k = 0; k < n; k++) {
        const h = this.items[k];
        const o = k * 16;
        _c.set(a[o + 12] - cam.x, a[o + 13] - cam.y, a[o + 14] - cam.z);
        let lod;
        // props left behind can still throw a shadow forward, so keep a margin
        if (_c.dot(fwd) < -(r + 8)) lod = -1;
        else {
          const sc = Math.hypot(a[o], a[o + 1], a[o + 2]);
          const d = _c.length() - r * sc * 0.5;
          lod = d < this.lod1 ? 0 : d < this.lod2 ? 1 : d < this.cull ? 2 : -1;
        }
        if (lod !== h.lod) {
          h.lod = lod;
          changed = true;
        }
      }
    } else {
      for (let k = 0; k < n; k++) {
        if (this.items[k].lod < 0) this.items[k].lod = 0;
      }
    }
    if (!changed) return;
    this.dirty = false;
    const lods = this.lods;
    for (const l of lods) l.n = 0;
    for (let k = 0; k < n; k++) {
      const h = this.items[k];
      if (h.lod < 0) continue;
      const l = lods[h.lod];
      l.matrix.array.set(a.subarray(k * 16, k * 16 + 16), l.n++ * 16);
    }
    for (const l of lods) {
      const c = l.n;
      if (c > 0) {
        l.matrix.clearUpdateRanges();
        l.matrix.addUpdateRange(0, c * 16);
        l.matrix.needsUpdate = true;
      }
      for (const m of l.meshes) {
        m.count = c;
        m.visible = c > 0;
        if (c > 0) m.computeBoundingSphere();
      }
    }
  }
}

/**
 * Places biome props, crowd spots and particle emitters slot by slot (6 m).
 * Every slot is generated from hash(seed, slot) so the world is identical for a
 * given seed no matter when a slot is created.
 */
export class Scenery {
  constructor(scene, track, biomes, crowd) {
    this.scene = scene;
    this.track = track;
    this.biomes = biomes;
    this.crowd = crowd;
    this.seed = 1;
    this.batches = new Map(); // type → PropBatch (built once, up front)
    for (const type of PROP_TYPES) if (type !== 'castleBackdrop') this.batches.set(type, new PropBatch(scene, type));
    this.slots = new Map(); // global slot → { props, crowd, emitters }
    this._entryPool = [];
    this._emitPool = [];
    this._keys = [];
    this.shadows = true;
    this.emitters = []; // { pos: Vector3, type }
    this.ahead = 66;
    this.version = 0; // bumps whenever the slot window changes
    this.first = 0;
    this.last = -1;
    this.backdrop = makeProp('castleBackdrop');
    this.backdrop.matrixAutoUpdate = false;
    this.backdrop.visible = false;
    scene.add(this.backdrop);
    this.forceSync = false;
    this._cam = new THREE.Vector3();
    this._fwd = new THREE.Vector3(0, 0, -1);
  }

  setShadows(on) {
    this.shadows = on;
    for (const b of this.batches.values()) b.setShadows(on);
  }

  /** Number of live prop instances (debug overlay). */
  get propCount() {
    let n = 0;
    for (const b of this.batches.values()) n += b.n;
    return n;
  }

  reset(seed) {
    this.seed = seed;
    this._freeOutside(Infinity, -Infinity);
    for (const b of this.batches.values()) b.sync();
    this.emitters.length = 0;
    this.first = 0;
    this.last = -1;
    this.version++;
  }

  setAhead(m) {
    this.ahead = m;
  }

  /** Low quality: LOD distances × `scale`, nothing drawn past `cull` (fully fogged). */
  setLod(scale, cull) {
    for (const b of this.batches.values()) {
      b.lod1 = LOD1_DIST * scale;
      b.lod2 = LOD2_DIST * scale;
      b.cull = cull;
    }
    this.forceSync = true;
  }

  /** Corn alcove slots: corn gaps holding hay, pumpkins and cheering kids. */
  isAlcove(k) {
    const s = this.biomes.slotStart(k) + SLOT / 2;
    if (this.biomes.id(s) !== 'corn') return false;
    const ls = this.biomes.localSlot(s);
    if (ls < 5 || ls > 32) return false;
    return hashFloat(k, this.seed + 97) < 0.24;
  }

  /** Side (-1, 1) of a corn alcove, or 0 for both. */
  alcoveSide(k) {
    const h = hashFloat(k, this.seed + 98);
    return h < 0.4 ? -1 : h < 0.8 ? 1 : 0;
  }

  /** `camera` (optional) drives each prop's detail level. */
  update(camS, camera) {
    const bm = this.biomes;
    let cam = null;
    let fwd = null;
    if (camera) {
      fwd = camera.getWorldDirection(this._fwd); // also refreshes matrixWorld
      cam = this._cam.setFromMatrixPosition(camera.matrixWorld);
    }
    const first = bm.slotOf(camS - 14);
    const last = bm.slotOf(camS + this.ahead);
    if (first !== this.first || last !== this.last) {
      this._freeOutside(first, last);
      for (let k = first; k <= last; k++) if (!this.slots.has(k)) this._build(k);
      this.first = first;
      this.last = last;
      this.version++;
      this.emitters.length = 0;
      for (const e of this.slots.values()) for (let i = 0; i < e.emitters.length; i++) this.emitters.push(e.emitters[i]);
    }
    const force = this.forceSync;
    this.forceSync = false;
    for (const b of this.batches.values()) b.sync(cam, fwd, force);
    this._updateBackdrop(camS);
  }

  _freeOutside(first, last) {
    const keys = this._keys;
    keys.length = 0;
    for (const k of this.slots.keys()) if (k < first || k > last) keys.push(k);
    for (let i = 0; i < keys.length; i++) this._free(keys[i]);
  }

  _free(k) {
    const e = this.slots.get(k);
    if (!e) return;
    for (const h of e.props) h.batch.remove(h);
    for (const c of e.crowd) this.crowd.remove(c);
    for (const em of e.emitters) this._emitPool.push(em);
    e.props.length = 0;
    e.crowd.length = 0;
    e.emitters.length = 0;
    this._entryPool.push(e);
    this.slots.delete(k);
  }

  _place(entry, type, s, lat, yaw, scale = 1, up = 0) {
    const b = this.batches.get(type);
    const h = b.add();
    if (!h) return null;
    this.track.matrix(s, lat, up, yaw, scale, _m);
    b.setMatrix(h, _m);
    entry.props.push(h);
    return h;
  }

  _crowd(entry, rng, s, lat, side) {
    const kind = rng.pick(CROWD_KINDS);
    // face the road, turned slightly towards the oncoming camera
    const yaw = side > 0 ? -HALF + 0.55 : HALF - 0.55;
    const scale = kind === 'witch' || kind === 'vampire' || kind === 'werewolf' ? rng.range(0.95, 1.08) : rng.range(0.78, 0.92);
    this.track.matrix(s, lat, 0, yaw + rng.range(-0.2, 0.2), scale, _m);
    const h = this.crowd.add(kind, _m, rng.range(0, 10), rng.int(0, 3));
    if (h) entry.crowd.push(h);
  }

  _emit(entry, type, s, lat, up) {
    const em = this._emitPool.pop() || { pos: new THREE.Vector3(), type };
    this.track.point(s, lat, up, em.pos);
    em.type = type;
    entry.emitters.push(em);
  }

  _build(k) {
    const bm = this.biomes;
    const s0 = bm.slotStart(k);
    const mid = s0 + SLOT / 2;
    const id = bm.id(mid);
    const ls = bm.localSlot(mid);
    const rng = new RNG(hash2(this.seed, k));
    const entry = this._entryPool.pop() || { props: [], crowd: [], emitters: [] };
    this.slots.set(k, entry);
    const sides = SIDES;
    // the first and last slots of each biome sit inside the fog bridge: keep them sparse
    const edge = ls === 0 || ls >= 34;

    if (id === 'village') {
      if (ls === 17 || ls === 2) {
        this._place(entry, 'archVillage', s0 + 3, 0, 0);
        this._emit(entry, 'ember', s0 + 3, -3.9, 5.4);
        this._emit(entry, 'ember', s0 + 3, 3.9, 5.4);
      }
      for (const side of sides) {
        this._place(entry, 'picketFence', s0 + 3, side * 6.6, HALF);
        if (!edge) {
          const r = rng.next();
          const lat = side * rng.range(9.5, 11.5);
          const ds = s0 + rng.range(1.5, 4.5);
          if (r < 0.34) this._place(entry, rng.chance(0.5) ? 'witchCottage' : 'witchCottageB', ds, lat, facing(side) + rng.range(-0.25, 0.25), rng.range(0.95, 1.1));
          else if (r < 0.62) this._place(entry, rng.chance(0.5) ? 'mushroomRed' : 'mushroomPurple', ds, lat, facing(side) + rng.range(-0.4, 0.4), rng.range(0.9, 1.15));
          else this._place(entry, rng.chance(0.5) ? 'twistedTree' : 'twistedTreeB', ds, side * rng.range(8, 13), rng.range(0, 6.28), rng.range(0.9, 1.25));
          if (rng.chance(0.4)) this._place(entry, rng.chance(0.5) ? 'twistedTree' : 'twistedTreeB', s0 + rng.range(0, 6), side * rng.range(15, 22), rng.range(0, 6.28), rng.range(1.1, 1.5));
        }
        if ((k + (side > 0 ? 1 : 0)) % 2 === 0 && ls !== 17) {
          this._place(entry, 'lanternPost', s0 + 1, side * 4.3, facing(side));
        }
        if (!edge && ls !== 17 && ls !== 2) {
          const n = rng.int(1, 3);
          for (let i = 0; i < n; i++) this._crowd(entry, rng, s0 + 0.8 + i * (4.4 / n) + rng.range(0, 0.8), side * rng.range(4.7, 5.7), side);
        }
      }
    } else if (id === 'corn') {
      const alcove = this.isAlcove(k);
      const aSide = alcove ? this.alcoveSide(k) : 9;
      for (const side of sides) {
        if ((k + (side > 0 ? 0 : 1)) % 2 === 0) {
          this._place(entry, 'cornPost', s0 + 2, side * 4.25, facing(side));
          this._emit(entry, 'candle', s0 + 2, side * 4.25, 2.1);
        }
        if (alcove && (aSide === 0 || aSide === side)) {
          this._place(entry, 'hayPile', s0 + 3, side * 6.4, facing(side) + rng.range(-0.3, 0.3));
          const n = rng.int(2, 3);
          for (let i = 0; i < n; i++) this._crowd(entry, rng, s0 + 1 + i * 1.6 + rng.range(0, 0.5), side * rng.range(4.8, 5.4), side);
        }
      }
    } else if (id === 'cemetery') {
      if (ls === 2) this._place(entry, 'cemeteryGate', s0 + 3, 0, 0);
      for (const side of sides) {
        this._place(entry, 'ironFence', s0 + 3, side * 6.6, HALF);
        if (!edge) {
          const r = rng.next();
          if (r < 0.28) {
            this._place(entry, 'giantSkull', s0 + 3, side * rng.range(8.6, 9.6), facing(side) + rng.range(-0.3, 0.3), rng.range(1.0, 1.25));
            this._emit(entry, 'candle', s0 + 3, side * 9, 3.0);
          } else if (r < 0.75) {
            this._place(entry, rng.chance(0.5) ? 'tombstones' : 'tombstonesB', s0 + rng.range(2, 4), side * rng.range(8.2, 10.5), facing(side) + rng.range(-0.3, 0.3));
          }
          if (rng.chance(0.6)) this._place(entry, rng.chance(0.5) ? 'deadTree' : 'deadTreeB', s0 + rng.range(0, 6), side * rng.range(11, 16), rng.range(0, 6.28), rng.range(1.0, 1.4));
          if (rng.chance(0.55) && ls !== 2) {
            const n = rng.int(1, 2);
            for (let i = 0; i < n; i++) this._crowd(entry, rng, s0 + 1 + i * 2.5 + rng.range(0, 1), side * rng.range(4.7, 5.6), side);
          }
        }
      }
    } else {
      // castle courtyard, ending on the stone bridge
      const bridge = ls >= BRIDGE_SLOT;
      if (ls === 2) {
        this._place(entry, 'castleGate', s0 + 3, 0, 0);
        this._emit(entry, 'fire', s0 + 3.6, -3.45, 3.25);
        this._emit(entry, 'fire', s0 + 3.6, 3.45, 3.25);
      }
      for (const side of sides) {
        if (bridge) {
          this._place(entry, 'bridgeWall', s0 + 3, side * 3.35, HALF);
          if (ls % 2 === 0) {
            this._place(entry, 'torch', s0, side * 3.35, 0, 0.8, 0.6);
            this._emit(entry, 'fire', s0, side * 3.35, 2.4);
          }
          continue;
        }
        if (ls !== 2 && (k + (side > 0 ? 1 : 0)) % 2 === 0) {
          this._place(entry, 'torch', s0 + 1.5, side * 4.3, 0);
          this._emit(entry, 'fire', s0 + 1.5, side * 4.3, 2.25);
        }
        if (!edge && ls > 3) {
          const r = rng.next();
          if (r < 0.55) this._place(entry, rng.chance(0.5) ? 'pumpkinHut' : 'pumpkinHutB', s0 + rng.range(2, 4), side * rng.range(9, 11), facing(side) + rng.range(-0.35, 0.35), rng.range(0.95, 1.15));
          if (rng.chance(0.5)) this._place(entry, 'ironFence', s0 + 3, side * 6.8, HALF);
          if (rng.chance(0.6)) {
            const n = rng.int(1, 3);
            for (let i = 0; i < n; i++) this._crowd(entry, rng, s0 + 0.8 + i * (4.4 / n) + rng.range(0, 0.6), side * rng.range(4.7, 5.6), side);
          }
        }
      }
    }
  }

  /** The glowing castle on the horizon, visible on the approach to the courtyard. */
  _updateBackdrop(camS) {
    const bm = this.biomes;
    // global distance where the castle biome of the current/next lap starts
    const lapStart = camS - bm.lapPos(camS);
    let castleStart = lapStart + 3 * BIOME_LEN;
    if (camS > castleStart + BIOME_LEN) castleStart += LAP;
    const show = camS > castleStart - BIOME_LEN * 0.6 && camS < castleStart + BRIDGE_SLOT * SLOT;
    if (!show) {
      if (this.backdrop) this.backdrop.visible = false;
      return;
    }
    this.backdrop.visible = true;
    // keep it ~120 m ahead, off to the side, slowly growing as we approach
    const target = Math.max(camS + 110, castleStart + 120);
    const side = hashFloat(Math.floor(castleStart), this.seed) < 0.5 ? -1 : 1;
    this.track.matrix(target, side * 42, -6, 0, 2.2, this.backdrop.matrix);
    this.backdrop.matrixWorldNeedsUpdate = true;
  }
}
