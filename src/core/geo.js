import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// ── Geometry helpers: shaped primitives + a vertex-colour merge builder ───────

const _e = new THREE.Euler();
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();

// ── Level of detail: while `withDetail(d, fn)` runs, every helper below builds
//    its round shapes with segment counts scaled by d (deliberately chunky
//    counts ≤ 6 are kept, so silhouettes like square posts never change).
let DETAIL = 1;

export function withDetail(d, fn) {
  const prev = DETAIL;
  DETAIL = d;
  try {
    return fn();
  } finally {
    DETAIL = prev;
  }
}

/** Segment count scaled by the current detail, never below `min`. */
function seg(n, min = 6) {
  // the lowest level only shows deep in the fog: allow chunkier round parts
  if (DETAIL < 0.4) min = Math.min(min, 4);
  if (DETAIL >= 1 || n <= min) return n;
  return Math.max(min, Math.round(n * DETAIL));
}

export function mat4(pos, rot, scale) {
  _p.set(pos ? pos[0] : 0, pos ? pos[1] : 0, pos ? pos[2] : 0);
  _e.set(rot ? rot[0] : 0, rot ? rot[1] : 0, rot ? rot[2] : 0);
  _q.setFromEuler(_e);
  if (scale === undefined || scale === null) _s.set(1, 1, 1);
  else if (typeof scale === 'number') _s.set(scale, scale, scale);
  else _s.set(scale[0], scale[1], scale[2]);
  return new THREE.Matrix4().compose(_p, _q, _s);
}

/**
 * Collects parts (geometry + colour + transform) and merges them into a single
 * vertex-coloured BufferGeometry → one draw call per prop.
 * `k` multiplies the colour (use > 1 for glow parts).
 */
export class Builder {
  constructor() {
    this.parts = [];
  }
  add(geo, color, pos, rot, scale, k = 1) {
    this.parts.push({ geo, color, m: mat4(pos, rot, scale), k });
    return this;
  }
  addMatrix(geo, color, m, k = 1) {
    this.parts.push({ geo, color, m: m.clone(), k });
    return this;
  }
  get size() {
    return this.parts.length;
  }
  build() {
    if (!this.parts.length) return null;
    const c = new THREE.Color();
    const list = [];
    for (const p of this.parts) {
      const g = p.geo.index ? p.geo.toNonIndexed() : p.geo.clone();
      for (const name of Object.keys(g.attributes)) {
        if (name !== 'position' && name !== 'normal') g.deleteAttribute(name);
      }
      g.morphAttributes = {};
      g.clearGroups();
      if (!g.attributes.normal) g.computeVertexNormals();
      g.applyMatrix4(p.m);
      c.set(p.color);
      const n = g.attributes.position.count;
      const arr = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        arr[i * 3] = c.r * p.k;
        arr[i * 3 + 1] = c.g * p.k;
        arr[i * 3 + 2] = c.b * p.k;
      }
      g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
      list.push(g);
    }
    const out = mergeGeometries(list, false);
    for (const g of list) g.dispose();
    out.computeBoundingSphere();
    out.computeBoundingBox();
    return out;
  }
}

export const G = {
  box: (w, h, d) => new THREE.BoxGeometry(w, h, d),
  // rounded edges are a few pixels wide: far LODs use a plain box
  rbox: (w, h, d, r = 0.06, s = 2) => (DETAIL < 0.75 ? new THREE.BoxGeometry(w, h, d) : new RoundedBoxGeometry(w, h, d, s, Math.min(r, w / 2, h / 2, d / 2) * 0.999)),
  cyl: (rt, rb, h, s = 12, open = false) => new THREE.CylinderGeometry(rt, rb, h, seg(s), 1, open),
  cone: (r, h, s = 10) => new THREE.ConeGeometry(r, h, seg(s)),
  sphere: (r, ws = 14, hs = 10) => new THREE.SphereGeometry(r, seg(ws), seg(hs, 4)),
  ico: (r, d = 0) => new THREE.IcosahedronGeometry(r, DETAIL < 0.75 ? Math.max(0, d - 1) : d),
  dodeca: (r) => new THREE.DodecahedronGeometry(r, 0),
  capsule: (r, len, cs = 4, rs = 10) => new THREE.CapsuleGeometry(r, Math.max(0.001, len), seg(cs, 1), seg(rs)),
  torus: (R, r, rs = 8, ts = 20, arc = Math.PI * 2) => new THREE.TorusGeometry(R, r, seg(rs, 3), seg(ts), arc),
  plane: (w, h) => new THREE.PlaneGeometry(w, h),
  circle: (r, s = 16) => new THREE.CircleGeometry(r, seg(s)),
};

/** Lathe from [[radius, y], ...] pairs. */
export function lathe(points, segs = 16, phiStart = 0, phiLength = Math.PI * 2) {
  return new THREE.LatheGeometry(
    points.map(([x, y]) => new THREE.Vector2(Math.max(0.0005, x), y)),
    seg(segs),
    phiStart,
    phiLength
  );
}

const PUMPKIN_PROFILE = [
  [0.0, 0.06],
  [0.32, 0.0],
  [0.68, 0.05],
  [0.92, 0.2],
  [1.0, 0.45],
  [0.95, 0.7],
  [0.76, 0.9],
  [0.42, 0.99],
  [0.14, 0.93],
  [0.0, 0.88],
];

/** Ribbed pumpkin, base at y=0, radius r, height h. */
export function pumpkinGeo(r = 0.5, h = 0.8, ribs = 8, segs = 28) {
  // the profile keeps every point near; far away the outline needs fewer
  const prof = DETAIL < 0.75 ? PUMPKIN_PROFILE.filter((_, i) => i % 2 === 0 || i === PUMPKIN_PROFILE.length - 1) : PUMPKIN_PROFILE;
  const g = new THREE.LatheGeometry(
    prof.map(([x, y]) => new THREE.Vector2(Math.max(0.0005, x * r), y * h)),
    seg(segs, ribs)
  );
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const a = Math.atan2(z, x);
    const f = 0.9 + 0.1 * Math.abs(Math.cos((a * ribs) / 2));
    pos.setX(i, x * f);
    pos.setZ(i, z * f);
  }
  g.computeVertexNormals();
  return g;
}

/** Carved jack-o'-lantern face (flat, ~1 unit wide), centred on origin in XY. */
export function faceShapes(style = 'jack') {
  const shapes = [];
  const poly = (pts) => {
    const s = new THREE.Shape();
    pts.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
    s.closePath();
    shapes.push(s);
  };
  if (style === 'jack') {
    poly([[-0.38, 0.12], [-0.1, 0.12], [-0.24, 0.4]]);
    poly([[0.1, 0.12], [0.38, 0.12], [0.24, 0.4]]);
    poly([[-0.07, -0.02], [0.07, -0.02], [0, 0.1]]);
    poly([[-0.44, -0.1], [-0.3, -0.2], [-0.18, -0.1], [-0.06, -0.2], [0.06, -0.1], [0.18, -0.2], [0.3, -0.1], [0.44, -0.1], [0.32, -0.3], [0.12, -0.39], [-0.12, -0.39], [-0.32, -0.3]]);
  } else if (style === 'angry') {
    poly([[-0.4, 0.3], [-0.08, 0.14], [-0.34, 0.08]]);
    poly([[0.4, 0.3], [0.08, 0.14], [0.34, 0.08]]);
    poly([[-0.42, -0.08], [-0.28, -0.16], [-0.2, -0.06], [-0.1, -0.18], [0, -0.06], [0.1, -0.18], [0.2, -0.06], [0.28, -0.16], [0.42, -0.08], [0.24, -0.34], [-0.24, -0.34]]);
  } else {
    // happy
    const eye = (cx) => {
      const s = new THREE.Shape();
      s.absellipse(cx, 0.2, 0.1, 0.13, 0, Math.PI * 2, false, 0);
      shapes.push(s);
    };
    eye(-0.22);
    eye(0.22);
    const m = new THREE.Shape();
    m.moveTo(-0.34, -0.08);
    m.quadraticCurveTo(0, -0.5, 0.34, -0.08);
    m.quadraticCurveTo(0, -0.24, -0.34, -0.08);
    shapes.push(m);
  }
  return shapes;
}

/**
 * Face geometry projected onto a sphere of radius R whose centre is `cy` below
 * the face origin, so it hugs round heads and pumpkins.
 */
export function faceGeo(style, width, R) {
  const g = new THREE.ShapeGeometry(faceShapes(style), seg(4, 2));
  g.scale(width, width, 1);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    pos.setZ(i, Math.sqrt(Math.max(0, R * R - x * x - y * y)) + 0.012);
  }
  g.computeVertexNormals();
  return g;
}

/** Tube along points with radius tapering from r0 to r1. */
export function tube(points, r0, r1 = r0, tubular = 16, radial = 6) {
  tubular = seg(tubular, 3);
  radial = seg(radial, 4);
  const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(p[0], p[1], p[2])));
  const g = new THREE.TubeGeometry(curve, tubular, 1, radial, false);
  const pos = g.attributes.position;
  const c = new THREE.Vector3();
  const v = new THREE.Vector3();
  for (let i = 0; i <= tubular; i++) {
    curve.getPointAt(i / tubular, c);
    const r = r0 + (r1 - r0) * (i / tubular);
    for (let j = 0; j <= radial; j++) {
      const idx = i * (radial + 1) + j;
      v.fromBufferAttribute(pos, idx).sub(c).multiplyScalar(r).add(c);
      pos.setXYZ(idx, v.x, v.y, v.z);
    }
  }
  g.computeVertexNormals();
  return g;
}

/** Saw blade disc in the XY plane. */
export function sawGeo(r = 0.75, teeth = 22, thick = 0.06) {
  const s = new THREE.Shape();
  for (let i = 0; i < teeth; i++) {
    const a0 = (i / teeth) * Math.PI * 2;
    const a1 = ((i + 0.6) / teeth) * Math.PI * 2;
    const p0 = [Math.cos(a0) * r * 0.82, Math.sin(a0) * r * 0.82];
    const p1 = [Math.cos(a1) * r, Math.sin(a1) * r];
    if (i === 0) s.moveTo(p0[0], p0[1]);
    else s.lineTo(p0[0], p0[1]);
    s.lineTo(p1[0], p1[1]);
  }
  s.closePath();
  const hole = new THREE.Path();
  hole.absarc(0, 0, r * 0.16, 0, Math.PI * 2, true);
  s.holes.push(hole);
  const g = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, -thick / 2);
  return g;
}

/** Star prism (for spikes, decorations). */
export function starGeo(r0, r1, points = 5, depth = 0.05) {
  const s = new THREE.Shape();
  for (let i = 0; i < points * 2; i++) {
    const a = (i / (points * 2)) * Math.PI * 2 + Math.PI / 2;
    const r = i % 2 ? r1 : r0;
    if (i === 0) s.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelSize: depth * 0.4, bevelThickness: depth * 0.4, bevelSegments: 1 });
  g.translate(0, 0, -depth / 2);
  return g;
}

export const FONT = '"Luckiest Guy", "Bungee", Impact, "Arial Black", sans-serif';

/** Signboard texture with chunky outlined text. */
export function signTexture(text, opts = {}) {
  const w = opts.w ?? 1024;
  const h = opts.h ?? 192;
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  const ctx = cv.getContext('2d');
  const bg = opts.bg ?? '#3B1260';
  ctx.fillStyle = opts.border ?? '#1A0B2E';
  roundRect(ctx, 0, 0, w, h, h * 0.22);
  ctx.fill();
  ctx.fillStyle = bg;
  roundRect(ctx, h * 0.07, h * 0.07, w - h * 0.14, h - h * 0.14, h * 0.17);
  ctx.fill();
  // wood/stone streaks
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = '#000';
  for (let i = 0; i < 9; i++) ctx.fillRect(h * 0.1, h * 0.15 + i * h * 0.08, w - h * 0.2, 2);
  ctx.globalAlpha = 1;
  let size = h * 0.56;
  ctx.font = `${size}px ${FONT}`;
  const maxW = w - h * 0.5;
  const tw = ctx.measureText(text).width;
  if (tw > maxW) {
    size *= maxW / tw;
    ctx.font = `${size}px ${FONT}`;
  }
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.lineWidth = size * 0.18;
  ctx.strokeStyle = '#1A0B2E';
  ctx.strokeText(text, w / 2, h * 0.54);
  ctx.fillStyle = opts.fg ?? '#FFB21E';
  ctx.fillText(text, w / 2, h * 0.54);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

export function roundRect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.lineTo(x + w - rr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr);
  ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr);
  ctx.quadraticCurveTo(x, y, x + rr, y);
  ctx.closePath();
}

/** Shadow flags for a whole hierarchy. */
export function setShadows(obj, cast = true, receive = false) {
  obj.traverse((o) => {
    if (o.isMesh) {
      o.castShadow = cast;
      o.receiveShadow = receive;
    }
  });
  return obj;
}

function sameArray(a, b) {
  if (a === b) return true;
  if (!a || !b || a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

/** True when two geometries hold exactly the same vertex data. */
export function sameGeometry(a, b) {
  const ka = Object.keys(a.attributes);
  if (ka.length !== Object.keys(b.attributes).length) return false;
  for (const k of ka) {
    const x = a.attributes[k];
    const y = b.attributes[k];
    if (!y || x.itemSize !== y.itemSize || !sameArray(x.array, y.array)) return false;
  }
  return sameArray(a.index && a.index.array, b.index && b.index.array);
}

/**
 * A reduced-detail part often comes out identical to a finer level (a fence
 * has no round parts to simplify). Returns the existing geometry in that case
 * and disposes the new one, so the GPU holds each mesh once.
 */
export function shareIdentical(geo, candidates) {
  if (!geo) return geo;
  for (const c of candidates) {
    if (c && c !== geo && sameGeometry(geo, c)) {
      geo.dispose();
      return c;
    }
  }
  return geo;
}

/**
 * Shadow-only InstancedMesh: draws `geo` into the shadow map with the instance
 * transforms of `matrix` (shared with a visible mesh), and nothing in the main
 * view. Lets full-detail instances throw their shadow from a cheaper level —
 * at shadow-map resolution the two silhouettes are identical. Keep its `count`
 * equal to the visible mesh's.
 */
export function shadowProxy(geo, mat, matrix, cap) {
  const m = new THREE.InstancedMesh(geo, mat, cap);
  m.instanceMatrix = matrix;
  m.count = 0;
  m.visible = false;
  m.matrixAutoUpdate = false;
  m.castShadow = true;
  m.receiveShadow = false;
  let n = 0;
  // the main pass draws zero instances; the shadow pass never calls these hooks
  m.onBeforeRender = () => {
    n = m.count;
    m.count = 0;
  };
  m.onAfterRender = () => {
    m.count = n;
  };
  return m;
}
