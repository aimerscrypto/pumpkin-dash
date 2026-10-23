import * as THREE from 'three';
import { Builder, G } from '../core/geo.js';
import { MATS } from '../core/materials.js';

// "Mirror me" pose walls: an unlit #E6FF00 board (3.5 × 2.5 m) with a #111111
// stick figure. The board is split into two doors that swing open just before
// the camera passes through the centre.

export const POSES = ['heart', 'chairSquat', 'highKnee', 'horsePunch', 'toeTouch', 'sideBend', 'starJump'];

export const POSE_NAMES = {
  heart: 'HEART HANDS',
  chairSquat: 'CHAIR SQUAT',
  highKnee: 'HIGH KNEES',
  horsePunch: 'HORSE PUNCH',
  toeTouch: 'TOUCH YOUR TOES',
  sideBend: 'SIDE BEND',
  starJump: 'STAR JUMP',
};

const BOARD_W = 3.5;
const BOARD_H = 2.5;
const BOTTOM = 0.25;

// Joint coordinates in "figure units" (≈10 units tall, origin at the feet,
// y up). Each limb is a polyline: [shoulder/hip, elbow/knee, hand/foot].
const N = [0, 8];
const H = [0, 4.5];
const FIG = {
  heart: { head: [0, 9], neck: N, hip: H, arms: [[N, [-1.8, 10.0], [-0.15, 11.0]], [N, [1.8, 10.0], [0.15, 11.0]]], legs: [[H, [-0.6, 2.2], [-0.9, 0]], [H, [0.6, 2.2], [0.9, 0]]] },
  chairSquat: {
    head: [0.8, 8.2], neck: [0.3, 7.3], hip: [-1.5, 3.6],
    arms: [[[0.3, 7.3], [2.0, 7.1], [3.7, 7.1]], [[0.3, 7.3], [2.1, 6.8], [3.8, 6.8]]],
    legs: [[[-1.5, 3.6], [1.0, 3.6], [1.0, 0]], [[-1.5, 3.6], [1.3, 3.4], [1.4, 0]]],
    chair: true,
  },
  highKnee: {
    head: [0, 9], neck: N, hip: H,
    arms: [[N, [-1.6, 6.6], [-1.3, 8.6]], [N, [1.4, 6.3], [1.9, 4.8]]],
    legs: [[H, [-0.3, 2.3], [-0.4, 0]], [H, [1.0, 5.4], [1.0, 3.0]]],
  },
  horsePunch: {
    head: [0, 8.4], neck: [0, 7.4], hip: [0, 4.0],
    arms: [[[0, 7.4], [2.2, 7.3], [4.5, 7.3]], [[0, 7.4], [-1.6, 6.0], [-0.8, 5.3]]],
    legs: [[[0, 4.0], [-2.2, 3.1], [-2.7, 0]], [[0, 4.0], [2.2, 3.1], [2.7, 0]]],
    fist: [4.6, 7.3],
  },
  toeTouch: {
    head: [3.3, 1.7], neck: [2.6, 2.3], hip: [0, 4.5],
    arms: [[[2.6, 2.3], [1.9, 1.1], [0.8, 0.25]], [[2.6, 2.3], [2.2, 1.0], [1.1, 0.2]]],
    legs: [[[0, 4.5], [0.1, 2.3], [0.2, 0]], [[0, 4.5], [0.4, 2.3], [0.6, 0]]],
  },
  sideBend: {
    head: [-2.3, 8.5], neck: [-1.5, 7.8], hip: H,
    arms: [[[-1.5, 7.8], [0.0, 9.7], [-2.4, 10.9]], [[-1.5, 7.8], [-2.5, 6.0], [-2.2, 4.2]]],
    legs: [[H, [-1.0, 2.2], [-1.5, 0]], [H, [1.0, 2.2], [1.5, 0]]],
  },
  starJump: {
    head: [0, 9], neck: N, hip: H,
    arms: [[N, [-2.0, 9.0], [-3.7, 10.3]], [N, [2.0, 9.0], [3.7, 10.3]]],
    legs: [[H, [-1.6, 2.3], [-3.0, 0]], [H, [1.6, 2.3], [3.0, 0]]],
    lines: true,
  },
};

const texCache = new Map();

function drawPose(name) {
  const W = 1024;
  const Hh = Math.round((W * BOARD_H) / BOARD_W);
  const cv = document.createElement('canvas');
  cv.width = W;
  cv.height = Hh;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#E6FF00';
  ctx.fillRect(0, 0, W, Hh);
  // inner border
  ctx.strokeStyle = '#111111';
  ctx.lineWidth = 14;
  ctx.strokeRect(22, 22, W - 44, Hh - 44);

  const f = FIG[name] || FIG.starJump;
  const u = 52;
  const ox = W / 2;
  const oy = Hh - 70;
  const P = (p) => [ox + p[0] * u, oy - p[1] * u];
  ctx.strokeStyle = '#111111';
  ctx.fillStyle = '#111111';
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.lineWidth = 46;
  // ground line
  ctx.beginPath();
  ctx.lineWidth = 12;
  ctx.moveTo(W * 0.18, oy + 26);
  ctx.lineTo(W * 0.82, oy + 26);
  ctx.stroke();
  if (f.chair) {
    ctx.lineWidth = 14;
    ctx.globalAlpha = 0.35;
    const a = P([-2.4, 3.3]);
    const b = P([-2.4, 0]);
    const c = P([-1.2, 3.3]);
    const d = P([-2.4, 7.0]);
    ctx.beginPath();
    ctx.moveTo(d[0], d[1]);
    ctx.lineTo(a[0], a[1]);
    ctx.lineTo(b[0], b[1]);
    ctx.moveTo(a[0], a[1]);
    ctx.lineTo(c[0], c[1]);
    ctx.lineTo(c[0], oy);
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
  ctx.lineWidth = 46;
  const line = (pts) => {
    ctx.beginPath();
    pts.forEach((p, i) => {
      const [x, y] = P(p);
      if (i) ctx.lineTo(x, y);
      else ctx.moveTo(x, y);
    });
    ctx.stroke();
  };
  line([f.neck, f.hip]);
  for (const l of f.legs) line(l);
  for (const a of f.arms) line(a);
  const [hx, hy] = P(f.head);
  ctx.beginPath();
  ctx.arc(hx, hy, 0.98 * u, 0, Math.PI * 2);
  ctx.fill();
  if (f.fist) {
    const [fx, fy] = P(f.fist);
    ctx.beginPath();
    ctx.arc(fx, fy, 0.5 * u, 0, Math.PI * 2);
    ctx.fill();
  }
  if (f.lines) {
    // motion lines around the star jump
    ctx.lineWidth = 12;
    for (const s of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const a = P([s * (4.4 + i * 0.1), 10.6 - i * 0.9]);
        const b = P([s * (5.2 + i * 0.1), 10.9 - i * 0.9]);
        ctx.beginPath();
        ctx.moveTo(a[0], a[1]);
        ctx.lineTo(b[0], b[1]);
        ctx.stroke();
      }
    }
  }
  return cv;
}

function halves(name) {
  if (texCache.has(name)) return texCache.get(name);
  const cv = drawPose(name);
  const mk = (off) => {
    const t = new THREE.CanvasTexture(cv);
    t.colorSpace = THREE.SRGBColorSpace;
    t.anisotropy = 4;
    t.repeat.set(0.5, 1);
    t.offset.set(off, 0);
    return new THREE.MeshBasicMaterial({ map: t, toneMapped: false, fog: true });
  };
  const pair = [mk(0), mk(0.5)];
  texCache.set(name, pair);
  return pair;
}

let frameGeo = null;
let frameGlow = null;
let backMat = null;
let halfGeo = null;

function frame() {
  if (frameGeo) return;
  const b = new Builder();
  const gl = new Builder();
  for (const x of [-BOARD_W / 2 - 0.2, BOARD_W / 2 + 0.2]) {
    b.add(G.rbox(0.3, 3.4, 0.36, 0.06), '#3A1A55', [x, 1.7, 0]);
    b.add(G.rbox(0.5, 0.24, 0.5, 0.06), '#22102F', [x, 0.12, 0]);
    b.add(G.cone(0.2, 0.36, 4), '#22102F', [x, 3.55, 0], [0, Math.PI / 4, 0]);
    gl.add(G.sphere(0.11, 10, 8), '#FFE600', [x, 3.0, 0.2], null, null, 2.4);
    gl.add(G.sphere(0.09, 10, 8), '#FF8A1A', [x, 1.9, 0.2], null, null, 2.2);
  }
  b.add(G.rbox(BOARD_W + 0.8, 0.26, 0.38, 0.06), '#3A1A55', [0, 3.1, 0]);
  for (let i = 0; i < 7; i++) gl.add(G.sphere(0.06, 8, 6), i % 2 ? '#FF5E00' : '#FFE600', [-1.5 + i * 0.5, 3.1, 0.2], null, null, 2.2);
  frameGeo = b.build();
  frameGlow = gl.build();
  halfGeo = new THREE.PlaneGeometry(BOARD_W / 2, BOARD_H);
  backMat = new THREE.MeshBasicMaterial({ color: '#B8CC00', toneMapped: false, side: THREE.BackSide });
}

export function createPoseWall(pose, { shadows = true } = {}) {
  frame();
  const root = new THREE.Group();
  const fm = new THREE.Mesh(frameGeo, MATS.body);
  fm.castShadow = shadows;
  root.add(fm);
  root.add(new THREE.Mesh(frameGlow, MATS.glow));

  const doors = [];
  const mats = halves(pose);
  for (const side of [-1, 1]) {
    const pivot = new THREE.Group();
    pivot.position.set(side * (BOARD_W / 2), BOTTOM + BOARD_H / 2, 0);
    const front = new THREE.Mesh(halfGeo, side < 0 ? mats[0] : mats[1]);
    front.position.x = -side * (BOARD_W / 4);
    const back = new THREE.Mesh(halfGeo, backMat);
    back.position.copy(front.position);
    pivot.add(front, back);
    root.add(pivot);
    doors.push({ pivot, side });
  }

  return {
    pose,
    root,
    setOpen(o) {
      const a = Math.min(1, Math.max(0, o));
      const e = 1 - Math.pow(1 - a, 3);
      for (const d of doors) d.pivot.rotation.y = -d.side * e * 1.75;
    },
  };
}
