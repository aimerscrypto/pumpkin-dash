import * as THREE from 'three';
import { toon } from '../core/materials.js';
import { hashFloat } from '../core/rng.js';

const CHUNK = 30; // metres per chunk
const COUNT = 6; // chunks alive (covers ~150 m)
const ROAD_HALF = 2.45;
const ROAD_COLS = [-2.45, -1.6, -0.9, -0.3, 0.3, 0.9, 1.6, 2.45];
// terrain columns (|lateral|) and heights; the far edge rises to close the view
const TERRAIN = [
  [2.4, 0.0],
  [3.0, 0.0],
  [4.6, 0.0],
  [6.0, 0.0],
  [9.0, 0.0],
  [14.0, 0.05],
  [21.0, 0.2],
  [29.0, 0.8],
  [36.0, 2.4],
  [44.0, 6.0],
];
const ROCKS_PER_SIDE = CHUNK * 2; // 0.5 m spacing

const _p = new THREE.Vector3();
const _o = new THREE.Vector3();
const _c = new THREE.Color();
const _m = new THREE.Matrix4();
const ROCK = new THREE.Color('#6E5A4F');
const BRIDGE_GROUND = new THREE.Color('#3A3448');
const _gc = new THREE.Color();
const _grc = new THREE.Color();
const _rockScale = [1, 1, 1];
const SIDES = [-1, 1];

function roadTexture() {
  const cv = document.createElement('canvas');
  cv.width = 256;
  cv.height = 512;
  const g = cv.getContext('2d');
  g.fillStyle = '#D47412';
  g.fillRect(0, 0, 256, 512);
  // soft mottling
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < 260; i++) {
    const x = rnd() * 256;
    const y = rnd() * 512;
    const r = 6 + rnd() * 22;
    g.fillStyle = rnd() < 0.5 ? 'rgba(232,141,42,0.35)' : 'rgba(168,82,5,0.22)';
    g.beginPath();
    g.ellipse(x, y, r, r * 0.6, 0, 0, Math.PI * 2);
    g.fill();
  }
  // wheel ruts at ±0.9 m (u = (lat + 2.45) / 4.9)
  for (const lat of [-0.9, 0.9]) {
    const u = ((lat + ROAD_HALF) / (ROAD_HALF * 2)) * 256;
    const grd = g.createLinearGradient(u - 22, 0, u + 22, 0);
    grd.addColorStop(0, 'rgba(168,82,5,0)');
    grd.addColorStop(0.3, 'rgba(168,82,5,0.85)');
    grd.addColorStop(0.7, 'rgba(168,82,5,0.85)');
    grd.addColorStop(1, 'rgba(168,82,5,0)');
    g.fillStyle = grd;
    g.fillRect(u - 22, 0, 44, 512);
    // rut ridge highlight
    g.fillStyle = 'rgba(240,160,70,0.5)';
    g.fillRect(u + 14, 0, 3, 512);
    g.fillRect(u - 17, 0, 3, 512);
  }
  // crowned centre highlight
  g.fillStyle = 'rgba(236,150,55,0.35)';
  g.fillRect(104, 0, 48, 512);
  // pebbles and cracks
  for (let i = 0; i < 420; i++) {
    const x = rnd() * 256;
    const y = rnd() * 512;
    const r = 1 + rnd() * 3;
    g.fillStyle = rnd() < 0.6 ? 'rgba(120,58,8,0.7)' : 'rgba(255,190,110,0.7)';
    g.beginPath();
    g.arc(x, y, r, 0, Math.PI * 2);
    g.fill();
  }
  g.strokeStyle = 'rgba(120,58,8,0.45)';
  g.lineWidth = 2;
  for (let i = 0; i < 14; i++) {
    let x = rnd() * 256;
    let y = rnd() * 512;
    g.beginPath();
    g.moveTo(x, y);
    for (let k = 0; k < 4; k++) {
      x += (rnd() - 0.5) * 30;
      y += 6 + rnd() * 16;
      g.lineTo(x, y);
    }
    g.stroke();
  }
  // darker edges near the curbs
  const edge = g.createLinearGradient(0, 0, 256, 0);
  edge.addColorStop(0, 'rgba(110,50,5,0.55)');
  edge.addColorStop(0.08, 'rgba(110,50,5,0)');
  edge.addColorStop(0.92, 'rgba(110,50,5,0)');
  edge.addColorStop(1, 'rgba(110,50,5,0.55)');
  g.fillStyle = edge;
  g.fillRect(0, 0, 256, 512);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.anisotropy = 8;
  return tex;
}

function gridGeometry(cols, rows) {
  const g = new THREE.BufferGeometry();
  const n = cols * rows;
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(n * 3), 3));
  const idx = [];
  for (let r = 0; r < rows - 1; r++) {
    for (let c = 0; c < cols - 1; c++) {
      const a = r * cols + c;
      const b = a + 1;
      const d = a + cols;
      const e = d + 1;
      // winding so faces point up (+Y) with columns going +lateral and rows going +s
      idx.push(a, b, d, b, e, d);
    }
  }
  g.setIndex(idx);
  return g;
}

export class Road {
  constructor(scene, track, biomes) {
    this.track = track;
    this.biomes = biomes;
    this.seed = 1;
    this.roadMat = toon({ map: roadTexture() });
    this.terrainMat = toon({ vc: true, key: 'terrain' });
    const rows = CHUNK + 1;
    this.chunks = [];
    for (let i = 0; i < COUNT; i++) {
      const rg = gridGeometry(ROAD_COLS.length, rows);
      rg.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(ROAD_COLS.length * rows * 2), 2));
      const road = new THREE.Mesh(rg, this.roadMat);
      road.receiveShadow = true;
      const tcols = TERRAIN.length * 2;
      const tg = gridGeometry(tcols, rows);
      tg.setAttribute('color', new THREE.BufferAttribute(new Float32Array(tcols * rows * 3), 3));
      const terrain = new THREE.Mesh(tg, this.terrainMat);
      terrain.receiveShadow = true;
      // drawn after props and foliage, so whatever they cover is depth-rejected
      road.renderOrder = terrain.renderOrder = 4;
      scene.add(road, terrain);
      this.chunks.push({ idx: null, road, terrain });
    }

    const rockGeo = new THREE.DodecahedronGeometry(1, 0);
    this.rocks = new THREE.InstancedMesh(rockGeo, toon({ flat: true, key: 'rock' }), COUNT * ROCKS_PER_SIDE * 2);
    this.rocks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.rocks.castShadow = true;
    this.rocks.receiveShadow = true;
    for (let i = 0; i < this.rocks.count; i++) this.rocks.setColorAt(i, ROCK);
    scene.add(this.rocks);
  }

  reset(seed) {
    this.seed = seed;
    for (const c of this.chunks) c.idx = null;
  }

  update(camS) {
    const first = Math.floor((camS - 20) / CHUNK);
    for (let i = 0; i < COUNT; i++) {
      const idx = first + i;
      const slot = ((idx % COUNT) + COUNT) % COUNT;
      const ch = this.chunks[slot];
      if (ch.idx !== idx) this._build(ch, idx, slot);
    }
    this._syncRocks();
  }

  _build(ch, idx, slot) {
    ch.idx = idx;
    const tr = this.track;
    const bm = this.biomes;
    const s0 = idx * CHUNK;
    tr.pos(s0, _o);
    ch.road.position.copy(_o);
    ch.terrain.position.copy(_o);

    // road surface
    const rg = ch.road.geometry;
    const rp = rg.attributes.position.array;
    const ruv = rg.attributes.uv.array;
    let k = 0;
    let u = 0;
    for (let r = 0; r <= CHUNK; r++) {
      const s = s0 + r;
      for (let c = 0; c < ROAD_COLS.length; c++) {
        const lat = ROAD_COLS[c];
        const crown = 0.03 * (1 - Math.abs(lat) / ROAD_HALF);
        tr.point(s, lat, 0.02 + crown, _p).sub(_o);
        rp[k++] = _p.x;
        rp[k++] = _p.y;
        rp[k++] = _p.z;
        ruv[u++] = (lat + ROAD_HALF) / (ROAD_HALF * 2);
        ruv[u++] = s / 7;
      }
    }
    rg.attributes.position.needsUpdate = true;
    rg.attributes.uv.needsUpdate = true;
    rg.computeVertexNormals();
    rg.computeBoundingSphere(); // chunk-local bounds → frustum culling works per chunk

    // terrain both sides
    const tg = ch.terrain.geometry;
    const tp = tg.attributes.position.array;
    const tc = tg.attributes.color.array;
    const nT = TERRAIN.length;
    k = 0;
    let q = 0;
    const gc = _gc;
    const grc = _grc;
    for (let r = 0; r <= CHUNK; r++) {
      const s = s0 + r;
      bm.groundColor(s, gc);
      bm.grassColor(s, grc);
      const drop = bm.bridgeDrop(s);
      for (let c = 0; c < nT * 2; c++) {
        // columns ordered from far-left to far-right
        const side = c < nT ? -1 : 1;
        const ti = side < 0 ? nT - 1 - c : c - nT;
        const [dist, hgt] = TERRAIN[ti];
        let y = hgt;
        if (drop > 0 && dist > 3.4) y = hgt * (1 - drop) - 9 * drop;
        const n = hashFloat(Math.floor(s) * 31 + c, this.seed);
        if (ti >= 3) y += (n - 0.5) * 0.25;
        tr.point(s, side * dist, y, _p).sub(_o);
        tp[k++] = _p.x;
        tp[k++] = _p.y;
        tp[k++] = _p.z;
        if (ti <= 2) _c.copy(grc);
        else _c.copy(gc);
        if (drop > 0.5 && ti >= 3) _c.copy(BRIDGE_GROUND);
        const shade = 0.92 + n * 0.16;
        tc[q++] = _c.r * shade;
        tc[q++] = _c.g * shade;
        tc[q++] = _c.b * shade;
      }
    }
    tg.attributes.position.needsUpdate = true;
    tg.attributes.color.needsUpdate = true;
    tg.computeVertexNormals();
    tg.computeBoundingSphere();

    // rock curbs (0.3 m high, 0.6 m wide)
    const base = slot * ROCKS_PER_SIDE * 2;
    let i = 0;
    for (const side of SIDES) {
      for (let j = 0; j < ROCKS_PER_SIDE; j++) {
        const s = s0 + j * 0.5 + 0.25;
        const h1 = hashFloat(Math.floor(s * 2) * 7 + (side > 0 ? 1 : 0), this.seed + 11);
        const h2 = hashFloat(Math.floor(s * 2) * 13 + (side > 0 ? 3 : 2), this.seed + 17);
        const sx = 0.3 + h1 * 0.07;
        const sy = 0.17 + h2 * 0.06;
        const sz = 0.3 + h2 * 0.08;
        _rockScale[0] = sx;
        _rockScale[1] = sy;
        _rockScale[2] = sz;
        tr.matrix(s, side * (2.7 + (h1 - 0.5) * 0.08), sy * 0.55, h1 * 6.28, _rockScale, _m);
        this.rocks.setMatrixAt(base + i, _m);
        _c.copy(ROCK).multiplyScalar(0.82 + h2 * 0.36);
        this.rocks.setColorAt(base + i, _c);
        i++;
      }
    }
    this.rocks.instanceMatrix.needsUpdate = true;
    if (this.rocks.instanceColor) this.rocks.instanceColor.needsUpdate = true;
    this._rocksDirty = true;
  }

  /** Recompute the rock batch bounds once per frame after any chunk rebuild. */
  _syncRocks() {
    if (!this._rocksDirty) return;
    this._rocksDirty = false;
    this.rocks.computeBoundingSphere();
  }
}
