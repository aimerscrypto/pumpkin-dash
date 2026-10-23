import * as THREE from 'three';
import { Builder, G, pumpkinGeo, faceGeo } from '../core/geo.js';
import { toon, MATS } from '../core/materials.js';
import { hashFloat } from '../core/rng.js';
import { SLOT } from './biomes.js';

// Instanced corn walls, grass tufts and small pumpkins. Placement is computed
// once per scenery slot-window change into CPU arrays (slot by slot); every time
// the camera crosses a slot the GPU buffers are re-assembled from those arrays:
//   · slots behind the camera are dropped,
//   · the two inner corn rows of the next few slots are real 3D stalks,
//   · every other stalk (outer rows, everything further out) is a crossed card
//     with an alpha-tested corn texture — same colours, same sway.

const CORN_MAX = 1800;
const TUFT_MAX = 700;
const PUMP_MAX = 120;
const WALL_MAX = 60;
const CORN_ROWS = [4.95, 5.5, 6.05, 6.6];
const NEAR_CORN = 18; // metres ahead that still get 3D stalks
// past this, the two outer corn rows are drawn over completely: at that grazing
// angle every ray crosses ~5 m of the dense inner rows first (pure overdraw)
const OUTER_CULL = 36;
const BEHIND = 6; // metres behind the camera that are still kept (shadows)
const CARD_W = 1.7;
const CARD_H = 4.0;
const _m = new THREE.Matrix4();
const _c = new THREE.Color();
const _wallScale = [0.5, 3.4, SLOT + 0.2];
const _cornScale = [1, 1, 1];
const SIDES = [-1, 1];
// sway shaders bend tops a little outside the static bounds
const SWAY_PAD = 0.6;

/** Open cone without the degenerate apex triangles: `s` triangles. */
function blade(r, h, s) {
  const g = new THREE.ConeGeometry(r, h, s, 1, true).toNonIndexed();
  const p = g.attributes.position;
  const n = g.attributes.normal;
  const keepP = [];
  const keepN = [];
  const a = new THREE.Vector3();
  const b = new THREE.Vector3();
  const c = new THREE.Vector3();
  for (let i = 0; i < p.count; i += 3) {
    a.fromBufferAttribute(p, i);
    b.fromBufferAttribute(p, i + 1);
    c.fromBufferAttribute(p, i + 2);
    if (b.sub(a).cross(c.sub(a)).lengthSq() < 1e-12) continue;
    for (let j = 0; j < 3; j++) {
      keepP.push(p.getX(i + j), p.getY(i + j), p.getZ(i + j));
      keepN.push(n.getX(i + j), n.getY(i + j), n.getZ(i + j));
    }
  }
  g.dispose();
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(keepP, 3));
  out.setAttribute('normal', new THREE.Float32BufferAttribute(keepN, 3));
  return out;
}

const LEAVES = [
  [0.8, 0.3, 0.95, '#B8962E'],
  [1.4, 2.4, 1.0, '#C79C32'],
  [2.0, 4.4, 0.9, '#D2A93A'],
  [2.6, 1.3, 0.85, '#C79C32'],
  [3.1, 3.5, 0.7, '#B8962E'],
];

/** Close-up stalk: same silhouette as before, without hidden caps and slivers. */
function cornGeo() {
  const b = new Builder();
  b.add(G.cyl(0.035, 0.05, 3.6, 5, true), '#9C8A2A', [0, 1.8, 0]);
  for (const [y, a, len, col] of LEAVES) {
    b.add(blade(0.08, len, 3), col, [Math.sin(a) * len * 0.38, y + len * 0.22, Math.cos(a) * len * 0.38], [Math.cos(a) * 1.05, 0, -Math.sin(a) * 1.05], [1, 1, 0.3]);
  }
  // the cob: a stretched low-poly ellipsoid reads the same as the old capsule
  b.add(G.sphere(0.075, 6, 4), '#E8C24A', [0.09, 2.1, 0.03], [0, 0, -0.35], [1, 2.9, 1]);
  b.add(blade(0.1, 0.45, 4), '#D8B04A', [0, 3.75, 0]);
  return b.build();
}

/** The same stalk painted once onto a texture for the crossed cards. */
function cornTexture() {
  const W = 128;
  const H = 512;
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = H;
  const x = cv.getContext('2d');
  const px = (m) => W / 2 + (m / CARD_W) * W; // metres → canvas
  const py = (m) => H - (m / CARD_H) * H;
  const sx = W / CARD_W;
  // stalk
  x.fillStyle = '#9C8A2A';
  x.beginPath();
  x.moveTo(px(-0.05), py(0));
  x.lineTo(px(0.05), py(0));
  x.lineTo(px(0.035), py(3.6));
  x.lineTo(px(-0.035), py(3.6));
  x.fill();
  // leaves: tapered, drooping blades alternating sides
  for (const [y, a, len, col] of LEAVES) {
    const dir = Math.sin(a) >= 0 ? 1 : -1;
    const reach = len * 0.82;
    const bx = px(0);
    const by = py(y + len * 0.05);
    const tx = px(dir * reach);
    const ty = py(y + len * 0.42);
    const w = 0.11 * sx;
    x.fillStyle = col;
    x.beginPath();
    x.moveTo(bx, by - w);
    x.quadraticCurveTo(px(dir * reach * 0.55), py(y + len * 0.72), tx, ty);
    x.quadraticCurveTo(px(dir * reach * 0.5), py(y + len * 0.42), bx, by + w);
    x.closePath();
    x.fill();
  }
  // cob
  x.fillStyle = '#E8C24A';
  x.beginPath();
  x.ellipse(px(0.09), py(2.1), 0.075 * sx, (0.22 / CARD_H) * H, 0.35, 0, Math.PI * 2);
  x.fill();
  // tassel
  x.fillStyle = '#D8B04A';
  x.beginPath();
  x.moveTo(px(-0.1), py(3.52));
  x.lineTo(px(0.1), py(3.52));
  x.lineTo(px(0), py(3.98));
  x.fill();
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

/** Two crossed quads, each with a front and a back face (8 triangles). */
function cardGeo() {
  const pos = [];
  const nrm = [];
  const uv = [];
  const hw = CARD_W / 2;
  for (const yaw of [0, Math.PI / 2]) {
    const cx = Math.cos(yaw);
    const cz = -Math.sin(yaw);
    for (const face of [1, -1]) {
      // soft normals: half facing out, half up, like the round stalks
      const n = new THREE.Vector3(-cz * face * 0.85, 0.5, cx * face * 0.85).normalize();
      const quad = [
        [-hw, 0, 0, 0],
        [hw, 0, 1, 0],
        [hw, CARD_H, 1, 1],
        [-hw, CARD_H, 0, 1],
      ];
      const order = face > 0 ? [0, 1, 2, 0, 2, 3] : [0, 2, 1, 0, 3, 2];
      for (const i of order) {
        const [u, y, tu, tv] = quad[i];
        pos.push(u * cx, y, u * cz);
        nrm.push(n.x, n.y, n.z);
        uv.push(tu, tv);
      }
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  return g;
}

function tuftGeo() {
  const b = new Builder();
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    b.add(blade(0.05, 0.42, 3), i % 2 ? '#7E8E2F' : '#93A23A', [Math.cos(a) * 0.06, 0.18, Math.sin(a) * 0.06], [Math.sin(a) * 0.35, 0, -Math.cos(a) * 0.35]);
  }
  return b.build();
}

function smallPumpkinGeo() {
  const b = new Builder();
  b.add(pumpkinGeo(0.26, 0.36, 8, 16), '#FF5E00', [0, 0, 0]);
  b.add(G.cyl(0.025, 0.04, 0.12, 5), '#3E7A1E', [0, 0.38, 0], [0.3, 0, 0]);
  return b.build();
}

function smallFaceGeo() {
  const b = new Builder();
  b.add(faceGeo('jack', 0.3, 0.27), '#FFD21A', [0, 0.17, 0], null, [1, 0.85, 1], 1.7);
  return b.build();
}

/** Copies `count` instances (matrix + optional colour) from CPU arrays into a mesh. */
function copyInto(mesh, n, mats, cols, from, count) {
  if (count <= 0) return n;
  mesh.instanceMatrix.array.set(mats.subarray(from * 16, (from + count) * 16), n * 16);
  if (cols) mesh.instanceColor.array.set(cols.subarray(from * 3, (from + count) * 3), n * 3);
  return n + count;
}

export class Foliage {
  constructor(scene, track, biomes, scenery) {
    this.track = track;
    this.biomes = biomes;
    this.scenery = scenery;
    this.version = -1;
    this.seed = 1;
    this.density = 1;
    this.nearCorn = NEAR_CORN;
    this.cull = Infinity;
    this.far = Infinity;

    this.corn = new THREE.InstancedMesh(cornGeo(), toon({ vc: true, sway: 0.012 }), CORN_MAX);
    this.cards = new THREE.InstancedMesh(cardGeo(), toon({ map: cornTexture(), alphaTest: 0.5, sway: 0.012 }), CORN_MAX);
    this.tufts = new THREE.InstancedMesh(tuftGeo(), toon({ vc: true, sway: 0.25 }), TUFT_MAX);
    this.pumps = new THREE.InstancedMesh(smallPumpkinGeo(), MATS.body, PUMP_MAX);
    this.faces = new THREE.InstancedMesh(smallFaceGeo(), MATS.flicker, PUMP_MAX);
    this.walls = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), toon({ color: '#3B2E14' }), WALL_MAX);
    this.meshes = [this.corn, this.cards, this.tufts, this.pumps, this.faces, this.walls];
    for (const m of this.meshes) {
      m.count = 0;
      m.visible = false;
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      scene.add(m);
    }
    // close stalks first, cards behind them, the dark backing wall last (early-z)
    this.corn.renderOrder = 1;
    this.cards.renderOrder = 2;
    this.walls.renderOrder = 3;
    for (const m of [this.corn, this.cards]) {
      m.castShadow = true;
      m.receiveShadow = true;
      // seed instance colours so instanceColor exists
      m.setColorAt(0, _c.set('#ffffff'));
    }
    this.pumps.castShadow = true;

    // CPU side, filled per slot window: [inner stalks…, outer stalks…] per slot
    this.cornM = new Float32Array(CORN_MAX * 16);
    this.cornC = new Float32Array(CORN_MAX * 3);
    this.tuftM = new Float32Array(TUFT_MAX * 16);
    this.pumpM = new Float32Array(PUMP_MAX * 16);
    this.slotList = [];
    this._slotPool = [];
    this.back = NaN;
    this.near = NaN;
    this.outer = NaN;
  }

  reset(seed) {
    this.seed = seed;
    this.version = -1;
  }

  /** Low quality: 3D stalks only within NEAR_CORN × `scale`, no slots past `cull`. */
  setLod(scale, cull) {
    this.nearCorn = NEAR_CORN * scale;
    this.cull = cull;
    this.near = NaN; // reassemble
  }

  setDensity(d) {
    this.density = d;
    this.version = -1;
  }

  update(camS) {
    const sc = this.scenery;
    const bm = this.biomes;
    let rebuilt = false;
    if (sc.version !== this.version) {
      this.version = sc.version;
      this._place();
      rebuilt = true;
    }
    const back = bm.slotOf(camS - BEHIND);
    const near = bm.slotOf(camS + this.nearCorn);
    const far = Number.isFinite(this.cull) ? bm.slotOf(camS + this.cull) : Infinity;
    const outer = bm.slotOf(camS + OUTER_CULL);
    if (rebuilt || back !== this.back || near !== this.near || far !== this.far || outer !== this.outer) {
      this.back = back;
      this.near = near;
      this.far = far;
      this.outer = outer;
      this._assemble();
    }
  }

  /** Placement of every instance in the slot window → CPU arrays. */
  _place() {
    const sc = this.scenery;
    const bm = this.biomes;
    const tr = this.track;
    const list = this.slotList;
    for (const e of list) this._slotPool.push(e);
    list.length = 0;
    let nc = 0;
    let nt = 0;
    let np = 0;
    let nw = 0;
    const seed = this.seed;
    const cornM = this.cornM;
    const cornC = this.cornC;
    const stalk = (s, r, side) => {
      const h = hashFloat(Math.floor(s * 10) * 7 + r * 3 + (side > 0 ? 1 : 0), seed);
      const lat = side * (CORN_ROWS[r] + (h - 0.5) * 0.25);
      _cornScale[1] = 0.95 + h * 0.2;
      tr.matrix(s, lat, 0, h * 6.28, _cornScale, _m).toArray(cornM, nc * 16);
      _c.set('#ffffff').multiplyScalar(0.85 + h * 0.25);
      _c.toArray(cornC, nc * 3);
      nc++;
    };
    for (let k = sc.first; k <= sc.last; k++) {
      const s0 = bm.slotStart(k);
      const mid = s0 + SLOT / 2;
      const id = bm.id(mid);
      if (bm.isBridge(mid)) continue;
      const e = this._slotPool.pop() || {};
      e.k = k;
      e.c0 = nc;
      e.cIn = 0;
      e.cOut = 0;
      e.open = false;
      e.t0 = nt;
      e.tn = 0;
      e.p0 = np;
      e.pn = 0;
      list.push(e);

      if (id === 'corn') {
        const alcove = sc.isAlcove(k);
        const aSide = alcove ? sc.alcoveSide(k) : 9;
        // pass 0: rows the camera actually sees past (inner two, or the back row
        // of an alcove); pass 1: rows hidden behind them
        for (let pass = 0; pass < 2; pass++) {
          for (const side of SIDES) {
            const gap = alcove && (aSide === 0 || aSide === side);
            if (pass === 0 && nw < WALL_MAX) {
              tr.matrix(mid, side * 7.3, 1.7, 0, _wallScale, _m);
              this.walls.setMatrixAt(nw++, _m);
            }
            for (let r = 0; r < CORN_ROWS.length; r++) {
              if (gap && r < 3) continue;
              const inner = gap || r < 2;
              if (inner !== (pass === 0)) continue;
              for (let j = 0; j < 11 && nc < CORN_MAX; j++) stalk(s0 + j * 0.55 + (r % 2) * 0.27, r, side);
            }
          }
          if (pass === 0) e.cIn = nc - e.c0;
        }
        e.cOut = nc - e.c0 - e.cIn;
        // an alcove next door opens a side view onto this slot's outer rows
        e.open = alcove || sc.isAlcove(k - 1) || sc.isAlcove(k + 1);
      }

      // grass tufts and pumpkins on the verge
      const tuftN = Math.round((id === 'corn' ? 4 : 7) * this.density);
      for (const side of SIDES) {
        for (let j = 0; j < tuftN && nt < TUFT_MAX; j++) {
          const h1 = hashFloat(k * 31 + j * 2 + (side > 0 ? 1 : 0), seed + 5);
          const h2 = hashFloat(k * 37 + j * 3 + (side > 0 ? 1 : 0), seed + 6);
          const s = s0 + h1 * SLOT;
          const lat = side * (3.0 + h2 * (id === 'corn' ? 1.2 : 3.4));
          tr.matrix(s, lat, 0, h1 * 6.28, 0.8 + h2 * 0.7, _m).toArray(this.tuftM, nt++ * 16);
        }
        const hp = hashFloat(k * 41 + (side > 0 ? 1 : 0), seed + 7);
        if (hp < 0.38 && np < PUMP_MAX) {
          const s = s0 + hp * 14;
          const lat = side * (3.2 + hp * 2.4);
          const yaw = side > 0 ? -Math.PI / 2 + 0.6 : Math.PI / 2 - 0.6;
          tr.matrix(s, lat, 0, yaw, 0.85 + hp, _m).toArray(this.pumpM, np++ * 16);
        }
      }
      e.tn = nt - e.t0;
      e.pn = np - e.p0;
    }
    this.walls.count = nw;
  }

  /** CPU arrays → GPU buffers for the current camera slot. */
  _assemble() {
    let nc = 0;
    let nk = 0;
    let nt = 0;
    let np = 0;
    const { corn, cards, cornM, cornC } = this;
    for (const e of this.slotList) {
      if (e.k < this.back || e.k > this.far) continue;
      if (e.k <= this.near) {
        nc = copyInto(corn, nc, cornM, cornC, e.c0, e.cIn);
        nk = copyInto(cards, nk, cornM, cornC, e.c0 + e.cIn, e.cOut);
      } else {
        const out = e.k <= this.outer || e.open ? e.cOut : 0;
        nk = copyInto(cards, nk, cornM, cornC, e.c0, e.cIn + out);
      }
      nt = copyInto(this.tufts, nt, this.tuftM, null, e.t0, e.tn);
      copyInto(this.faces, np, this.pumpM, null, e.p0, e.pn);
      np = copyInto(this.pumps, np, this.pumpM, null, e.p0, e.pn);
    }
    corn.count = nc;
    cards.count = nk;
    this.tufts.count = nt;
    this.pumps.count = np;
    this.faces.count = np;
    for (const m of this.meshes) {
      m.visible = m.count > 0;
      if (!m.visible) continue;
      m.instanceMatrix.clearUpdateRanges();
      m.instanceMatrix.addUpdateRange(0, m.count * 16);
      m.instanceMatrix.needsUpdate = true;
      // exact bounds of the live instances → real frustum culling
      m.computeBoundingSphere();
      m.boundingSphere.radius += SWAY_PAD;
    }
    for (const m of [corn, cards]) {
      if (m.count > 0) {
        m.instanceColor.clearUpdateRanges();
        m.instanceColor.addUpdateRange(0, m.count * 3);
        m.instanceColor.needsUpdate = true;
      }
    }
  }
}

/** Geometry handles for tools/tri-audit.mjs. */
export const FOLIAGE_GEO = { cornGeo, cardGeo, tuftGeo, smallPumpkinGeo };
