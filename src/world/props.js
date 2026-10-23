import * as THREE from 'three';
import { Builder, G, lathe, pumpkinGeo, faceGeo, tube, signTexture, withDetail, shareIdentical } from '../core/geo.js';
import { MATS, toon } from '../core/materials.js';

// ── Biome props. Each prop = merged vertex-coloured meshes (body / flat /
//    glow / flicker) + optional sign boards. Models face +Z, origin on ground.

export const C = {
  pumpkin: '#FF5E00',
  pumpkinDark: '#D94A00',
  stem: '#3E7A1E',
  glow: '#FFE600',
  candle: '#FFB43A',
  stone: '#7A7D82',
  stoneDark: '#5E6166',
  iron: '#222429',
  bone: '#E8E2CF',
  wood: '#5A3620',
  woodDark: '#3E2414',
  purple: '#6A2C91',
  purpleDark: '#3A1650',
  roofPurple: '#2E1446',
  toxic: '#59FF00',
  pipe: '#1CC427',
  corn: '#C79C32',
  hay: '#D9B24A',
  black: '#141218',
};

const PI = Math.PI;

export class Kit {
  constructor() {
    this.body = new Builder();
    this.flat = new Builder();
    this.glow = new Builder();
    this.flicker = new Builder();
    this.signs = []; // { text, w, h, pos, rot, opts }
  }
}

/** Pumpkin with stem and carved glowing face. */
export function addPumpkin(kit, pos, r, h, opts = {}) {
  const ry = opts.ry || 0;
  const color = opts.color || C.pumpkin;
  kit.body.add(pumpkinGeo(r, h, 8, 20), color, pos, [0, ry, 0]);
  const sx = Math.sin(ry);
  const sz = Math.cos(ry);
  kit.body.add(G.cyl(r * 0.07, r * 0.11, r * 0.4, 6), C.stem, [pos[0] + sx * r * 0.04, pos[1] + h * 0.95, pos[2] + sz * r * 0.04], [0.25, ry, 0.1]);
  if (opts.face) {
    const target = opts.flicker ? kit.flicker : kit.glow;
    target.add(faceGeo(opts.face, r * 1.15, r * 1.04), opts.faceColor || '#FFD21A', [pos[0], pos[1] + h * 0.47, pos[2]], [0, ry, 0], [1, h / (2 * r) + 0.15, 1], opts.glowK ?? 1.7);
  }
}

function addLantern(kit, pos, size = 1, color = '#FFB040') {
  const s = size;
  kit.body.add(G.box(0.3 * s, 0.05 * s, 0.3 * s), C.iron, [pos[0], pos[1] + 0.22 * s, pos[2]]);
  kit.body.add(G.cone(0.2 * s, 0.16 * s, 4), C.iron, [pos[0], pos[1] + 0.32 * s, pos[2]], [0, PI / 4, 0]);
  kit.body.add(G.box(0.3 * s, 0.05 * s, 0.3 * s), C.iron, [pos[0], pos[1] - 0.2 * s, pos[2]]);
  for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    kit.body.add(G.box(0.035 * s, 0.42 * s, 0.035 * s), C.iron, [pos[0] + dx * 0.13 * s, pos[1], pos[2] + dz * 0.13 * s]);
  }
  kit.flicker.add(G.box(0.22 * s, 0.34 * s, 0.22 * s), color, pos, null, null, 2.2);
}

// ── Pumpkin Village ──────────────────────────────────────────────────────────

function witchCottage(kit, v = 0) {
  const W = 3.4;
  const D = 3.0;
  const H = 2.4;
  const wall = v ? '#7A35A3' : C.purple;
  kit.body.add(G.rbox(W, H, D, 0.1), wall, [0, H / 2 + 0.15, 0]);
  kit.body.add(G.rbox(W + 0.3, 0.3, D + 0.3, 0.06), C.stoneDark, [0, 0.15, 0]);
  for (const x of [-W / 2, W / 2]) for (const z of [-D / 2, D / 2]) kit.body.add(G.box(0.18, H, 0.18), C.purpleDark, [x, H / 2 + 0.15, z]);
  kit.body.add(G.box(W + 0.1, 0.16, D + 0.1), C.purpleDark, [0, H + 0.1, 0]);
  // crooked pointy roof
  kit.flat.add(G.cone(2.85, 3.6, 4), C.roofPurple, [0.12, H + 1.95, 0], [0.05, PI / 4, -0.08], [1, 1, 0.95]);
  kit.flat.add(G.cone(0.35, 1.0, 4), C.roofPurple, [0.42, H + 4.0, 0.05], [0.1, PI / 4, -0.55]);
  kit.body.add(G.box(0.5, 1.4, 0.5), '#4B3B4E', [-0.95, H + 1.6, -0.6], [0, 0, 0.06]);
  kit.body.add(G.box(0.62, 0.16, 0.62), '#2F2532', [-0.9, H + 2.32, -0.6], [0, 0, 0.06]);
  // door + step
  kit.body.add(G.rbox(0.9, 1.5, 0.12, 0.08), '#4A2410', [0.0, 0.95, D / 2 + 0.04]);
  kit.body.add(G.box(1.2, 0.12, 0.5), C.stoneDark, [0, 0.2, D / 2 + 0.3]);
  kit.glow.add(G.sphere(0.05, 6, 4), '#FFD060', [0.28, 0.95, D / 2 + 0.12], null, null, 2);
  // glowing windows with frames
  for (const x of [-1.05, 1.05]) {
    kit.glow.add(G.box(0.62, 0.62, 0.05), '#FFC23A', [x, 1.55, D / 2 + 0.06], null, null, 1.9);
    kit.body.add(G.box(0.74, 0.08, 0.08), C.purpleDark, [x, 1.55, D / 2 + 0.1]);
    kit.body.add(G.box(0.08, 0.74, 0.08), C.purpleDark, [x, 1.55, D / 2 + 0.1]);
    kit.body.add(G.box(0.82, 0.1, 0.14), C.purpleDark, [x, 1.2, D / 2 + 0.1]);
  }
  kit.glow.add(G.circle(0.3, 14), '#FFC23A', [0, H + 1.05, 1.13], [-0.66, 0, 0], null, 1.9);
  addLantern(kit, [0.75, 2.05, D / 2 + 0.28], 0.7);
  addPumpkin(kit, [-0.75, 0.3, D / 2 + 0.55], 0.32, 0.5, { face: 'jack', ry: 0.3 });
}

function mushroomHouse(kit, v = 0) {
  const cap = v ? '#8E2CC2' : '#D8322B';
  kit.body.add(lathe([[0.0, 0], [1.15, 0], [1.2, 0.5], [1.05, 1.4], [1.0, 2.0], [1.08, 2.4], [0.0, 2.4]], 20), '#F1E3C4', [0, 0, 0]);
  const capGeo = new THREE.SphereGeometry(2.3, 22, 10, 0, PI * 2, 0, PI / 2);
  kit.body.add(capGeo, cap, [0, 2.2, 0], null, [1, 0.78, 1]);
  kit.body.add(G.cyl(2.3, 1.2, 0.3, 22), '#E9D3B0', [0, 2.08, 0]);
  // polka dots
  const dots = [
    [0.2, 0.5], [1.2, 0.35], [2.4, 0.55], [3.5, 0.3], [4.6, 0.6], [5.6, 0.4],
    [0.8, 1.0], [2.0, 1.05], [3.0, 0.95], [4.2, 1.1], [5.2, 0.9], [0, 1.4],
  ];
  for (const [th, ph] of dots) {
    const x = 2.3 * Math.sin(ph) * Math.cos(th);
    const z = 2.3 * Math.sin(ph) * Math.sin(th);
    const y = 2.2 + 2.3 * 0.78 * Math.cos(ph);
    kit.body.add(G.sphere(0.3, 10, 6), '#FFF6E8', [x, y, z], null, [1, 0.6, 1]);
  }
  // door + round windows
  kit.body.add(G.rbox(0.75, 1.25, 0.14, 0.12), '#7A3E1C', [0, 0.63, 1.12]);
  kit.glow.add(G.circle(0.24, 14), '#FFC23A', [-0.55, 1.6, 1.07], [0, -0.45, 0], null, 1.9);
  kit.glow.add(G.circle(0.24, 14), '#FFC23A', [0.55, 1.6, 1.07], [0, 0.45, 0], null, 1.9);
  kit.body.add(G.torus(0.26, 0.05, 6, 16), '#7A3E1C', [-0.55, 1.6, 1.08], [0, -0.45, 0]);
  kit.body.add(G.torus(0.26, 0.05, 6, 16), '#7A3E1C', [0.55, 1.6, 1.08], [0, 0.45, 0]);
  addLantern(kit, [0.62, 1.05, 1.3], 0.55);
}

function picketFence(kit) {
  const L = 6;
  kit.body.add(G.box(L, 0.08, 0.05), C.black, [0, 0.4, 0]);
  kit.body.add(G.box(L, 0.08, 0.05), C.black, [0, 0.85, 0]);
  for (let i = 0; i < 20; i++) {
    const x = -L / 2 + 0.15 + i * 0.3;
    const h = 1.05 + (i % 2) * 0.08;
    kit.body.add(G.box(0.13, h, 0.045), C.black, [x, h / 2, 0.04]);
    kit.body.add(G.cone(0.092, 0.16, 4), C.black, [x, h + 0.08, 0.04], [0, PI / 4, 0], [1, 1, 0.35]);
  }
}

function lanternPost(kit) {
  kit.body.add(G.cyl(0.07, 0.09, 2.5, 8), C.iron, [0, 1.25, 0]);
  kit.body.add(G.cyl(0.18, 0.22, 0.25, 8), C.iron, [0, 0.12, 0]);
  kit.body.add(tube([[0, 2.35, 0], [0.15, 2.6, 0.1], [0.45, 2.55, 0.35], [0.5, 2.35, 0.45]], 0.035, 0.03, 12, 5), C.iron);
  kit.body.add(G.torus(0.12, 0.025, 4, 12, PI * 1.4), C.iron, [0, 2.6, 0], [0, 0, 0.6]);
  addLantern(kit, [0.5, 2.05, 0.45], 0.9);
}

function twistedTree(kit, v = 0) {
  const lean = v ? -0.4 : 0.35;
  kit.body.add(tube([[0, -0.2, 0], [0.3, 1.0, 0.15], [-0.25, 2.1, 0.0], [lean, 3.0, -0.2], [lean * 0.4, 3.9, 0.1]], 0.42, 0.13, 20, 7), '#4A2C1E');
  kit.body.add(tube([[0.1, 2.3, 0], [0.9, 2.9, 0.2], [1.5, 3.1, 0.6]], 0.13, 0.04, 10, 5), '#4A2C1E');
  kit.body.add(tube([[-0.1, 2.6, 0], [-0.9, 3.2, -0.2], [-1.4, 3.8, -0.1]], 0.12, 0.04, 10, 5), '#4A2C1E');
  kit.body.add(tube([[0.0, 1.6, 0.1], [0.5, 1.8, 0.8], [0.6, 2.2, 1.2]], 0.1, 0.03, 8, 5), '#4A2C1E');
  const leaves = [
    [lean * 0.4, 4.4, 0.1, 1.25, '#F07A1A'],
    [1.4, 3.5, 0.5, 0.95, '#D85A10'],
    [-1.3, 4.1, -0.1, 1.0, '#FF9A2A'],
    [0.4, 3.6, -0.8, 0.9, '#E86A14'],
    [-0.5, 3.4, 0.8, 0.85, '#FF8A1E'],
    [0.6, 2.5, 1.3, 0.55, '#F07A1A'],
  ];
  for (const [x, y, z, r, c] of leaves) kit.flat.add(G.ico(r, 1), c, [x, y, z], [x, y, z], [1, 0.85, 1]);
}

function archVillage(kit) {
  for (const x of [-3.9, 3.9]) {
    kit.body.add(G.rbox(0.9, 0.5, 0.9, 0.08), C.stoneDark, [x, 0.25, 0]);
    kit.body.add(G.rbox(0.62, 4.2, 0.62, 0.1), '#5A2E7A', [x, 2.5, 0]);
    kit.body.add(G.rbox(0.9, 0.3, 0.9, 0.08), C.purpleDark, [x, 4.6, 0]);
    addPumpkin(kit, [x, 4.75, 0], 0.55, 0.85, { face: 'jack', flicker: true });
    addLantern(kit, [x * 0.82, 3.0, 0.4], 0.8);
  }
  kit.body.add(tube([[-3.9, 4.4, 0], [-2.4, 5.6, 0], [0, 6.0, 0], [2.4, 5.6, 0], [3.9, 4.4, 0]], 0.2, 0.2, 30, 8), '#4A2C1E');
  kit.body.add(G.rbox(7.0, 1.25, 0.22, 0.1), '#2B1240', [0, 4.75, 0]);
  kit.signs.push({ text: 'WELCOME TO PUMPKIN HOLLOW', w: 6.7, h: 1.05, pos: [0, 4.75, 0.125], opts: { bg: '#4B1E70', fg: '#FFB21E' } });
  // hanging mini-lanterns along the arch
  for (const x of [-2.2, 0, 2.2]) {
    const y = x === 0 ? 5.55 : 5.2;
    kit.body.add(G.cyl(0.012, 0.012, 0.4, 4), C.iron, [x, y + 0.18, 0.05]);
    kit.flicker.add(G.sphere(0.14, 8, 6), '#FFB040', [x, y - 0.1, 0.05], null, null, 2.2);
  }
}

// ── Corn Maze ────────────────────────────────────────────────────────────────

function cornPost(kit) {
  kit.body.add(G.box(0.18, 1.7, 0.18), C.wood, [0, 0.85, 0], [0, 0, 0.04]);
  kit.body.add(G.box(1.0, 0.12, 0.14), C.wood, [0, 1.35, 0], [0, 0, -0.1]);
  addPumpkin(kit, [0.05, 1.72, 0], 0.4, 0.62, { face: 'jack', flicker: true });
}

function hayPile(kit) {
  kit.body.add(G.rbox(1.5, 0.75, 0.9, 0.12), C.hay, [0, 0.38, 0]);
  kit.body.add(G.rbox(1.5, 0.75, 0.9, 0.12), '#C9A03C', [0.4, 0.38, -1.0], [0, 0.3, 0]);
  kit.body.add(G.rbox(1.4, 0.7, 0.85, 0.12), '#E2BC58', [0.1, 1.1, -0.45], [0, -0.15, 0]);
  for (let i = 0; i < 5; i++) kit.body.add(G.box(1.52, 0.03, 0.92), '#A8822C', [0, 0.18 + i * 0.13, 0]);
  addPumpkin(kit, [-0.9, 0, 0.6], 0.45, 0.68, { face: 'happy', ry: 0.4 });
  addPumpkin(kit, [0.7, 0, 0.75], 0.36, 0.52, { face: 'jack', ry: -0.3 });
  addPumpkin(kit, [0.2, 1.45, -0.4], 0.38, 0.58, { face: 'angry', flicker: true });
  addPumpkin(kit, [1.3, 0, 0.1], 0.26, 0.38, {});
}

// ── Spooky Cemetery ──────────────────────────────────────────────────────────

function cemeteryGate(kit) {
  for (const x of [-3.9, 3.9]) {
    kit.body.add(G.rbox(1.1, 0.5, 1.1, 0.06), C.stoneDark, [x, 0.25, 0]);
    kit.flat.add(G.box(0.9, 4.0, 0.9), C.stone, [x, 2.4, 0]);
    kit.body.add(G.rbox(1.15, 0.3, 1.15, 0.06), C.stoneDark, [x, 4.5, 0]);
    kit.body.add(G.sphere(0.4, 12, 8), C.stone, [x, 5.0, 0]);
    addLantern(kit, [x * 0.82, 3.3, 0.55], 0.85, '#9CFF5A');
  }
  kit.body.add(tube([[-3.6, 4.3, 0], [-2.0, 5.5, 0], [0, 5.9, 0], [2.0, 5.5, 0], [3.6, 4.3, 0]], 0.09, 0.09, 30, 6), C.iron);
  kit.body.add(tube([[-3.6, 3.95, 0], [-2.0, 5.05, 0], [0, 5.45, 0], [2.0, 5.05, 0], [3.6, 3.95, 0]], 0.06, 0.06, 30, 6), C.iron);
  for (let i = -6; i <= 6; i++) {
    const x = i * 0.55;
    const y = 5.9 - 0.11 * i * i * 0.55;
    kit.body.add(G.cone(0.07, 0.35, 4), C.iron, [x, y + 0.15, 0]);
  }
  kit.body.add(G.box(0.05, 0.6, 0.05), C.iron, [-1.8, 4.75, 0]);
  kit.body.add(G.box(0.05, 0.6, 0.05), C.iron, [1.8, 4.75, 0]);
  kit.body.add(G.rbox(4.6, 0.95, 0.16, 0.08), '#1E2A22', [0, 4.35, 0]);
  kit.signs.push({ text: 'SPOOKY CEMETERY', w: 4.4, h: 0.8, pos: [0, 4.35, 0.09], opts: { bg: '#2D3B30', fg: '#B8FF5A', border: '#0E1410' } });
}

function ironFence(kit) {
  const L = 6;
  kit.flat.add(G.box(L, 0.4, 0.4), C.stone, [0, 0.2, 0]);
  kit.body.add(G.box(L, 0.06, 0.06), C.iron, [0, 0.85, 0]);
  kit.body.add(G.box(L, 0.06, 0.06), C.iron, [0, 1.65, 0]);
  for (let i = 0; i < 24; i++) {
    const x = -L / 2 + 0.125 + i * 0.25;
    kit.body.add(G.cyl(0.025, 0.025, 1.6, 5), C.iron, [x, 1.2, 0]);
    kit.body.add(G.cone(0.06, 0.2, 4), C.iron, [x, 2.08, 0]);
  }
  kit.flat.add(G.box(0.4, 2.1, 0.4), C.stoneDark, [-L / 2, 1.05, 0]);
  kit.body.add(G.sphere(0.2, 10, 6), C.stone, [-L / 2, 2.25, 0]);
}

function deadTree(kit, v = 0) {
  const col = '#3B2F35';
  const s = v ? -1 : 1;
  kit.body.add(tube([[0, -0.2, 0], [0.2 * s, 1.2, 0], [-0.1 * s, 2.4, 0.2], [0.3 * s, 3.6, 0], [0.1 * s, 4.6, -0.1]], 0.38, 0.06, 22, 7), col);
  kit.body.add(tube([[0.05, 2.2, 0], [0.9 * s, 2.9, 0.3], [1.6 * s, 3.0, 0.5], [2.0 * s, 3.5, 0.4]], 0.12, 0.02, 12, 5), col);
  kit.body.add(tube([[0, 3.0, 0], [-0.8 * s, 3.6, -0.3], [-1.3 * s, 4.4, -0.2], [-1.2 * s, 4.9, 0]], 0.1, 0.02, 12, 5), col);
  kit.body.add(tube([[0.2, 3.7, 0], [0.9 * s, 4.3, -0.4], [1.2 * s, 4.9, -0.6]], 0.08, 0.02, 10, 5), col);
  kit.body.add(tube([[0, 1.4, 0], [-0.6 * s, 1.9, 0.6], [-1.1 * s, 1.9, 0.9]], 0.08, 0.02, 10, 5), col);
  kit.body.add(tube([[-0.3, 0, 0], [-0.8 * s, 0.1, 0.4], [-1.2 * s, 0, 0.5]], 0.12, 0.03, 8, 5), col);
  kit.body.add(tube([[0.3, 0, 0], [0.7 * s, 0.12, -0.5], [1.1 * s, 0, -0.6]], 0.12, 0.03, 8, 5), col);
}

function giantSkull(kit) {
  kit.body.add(G.sphere(1.1, 22, 16), C.bone, [0, 1.45, 0], null, [1, 0.92, 1.02]);
  kit.body.add(G.rbox(1.35, 0.55, 1.0, 0.18), C.bone, [0, 0.45, 0.22]);
  kit.body.add(G.rbox(1.6, 0.4, 0.9, 0.15), '#DCD4BC', [0, 0.85, 0.3]);
  for (const x of [-0.42, 0.42]) {
    kit.body.add(G.sphere(0.33, 14, 10), '#1A0B1E', [x, 1.32, 0.84]);
    kit.flicker.add(G.sphere(0.1, 8, 6), '#FF8A1A', [x, 1.3, 1.12], null, null, 2.4);
  }
  kit.body.add(G.cone(0.13, 0.28, 3), '#1A0B1E', [0, 0.98, 1.08], [PI, 0, 0]);
  for (let i = -3; i <= 3; i++) kit.body.add(G.rbox(0.16, 0.22, 0.1, 0.03), '#FFFDF4', [i * 0.18, 0.66, 0.72]);
  // candles with drips + flames
  const candles = [[-0.45, 0.1, 0.55], [0.1, -0.2, 0.75], [0.55, 0.25, 0.45], [-0.1, 0.45, 0.35]];
  for (const [x, z, h] of candles) {
    const y = 2.35 - Math.abs(x) * 0.2;
    kit.body.add(G.cyl(0.08, 0.09, h, 8), '#F4EAD0', [x, y + h / 2, z]);
    kit.body.add(G.sphere(0.07, 6, 4), '#F4EAD0', [x + 0.07, y + h * 0.6, z], null, [0.7, 1.6, 0.7]);
    kit.flicker.add(G.cone(0.05, 0.16, 6), '#FFC23A', [x, y + h + 0.1, z], null, null, 2.6);
  }
  kit.body.add(G.cyl(1.0, 1.25, 0.25, 14), '#3E3A30', [0, 0.05, 0.1]);
}

function tombstones(kit, v = 0) {
  const stones = v
    ? [[-0.9, 0, 0.1, 'round', 1.25], [0.6, 0.3, -0.2, 'cross', 1.4], [1.7, -0.4, 0.15, 'slab', 0.9]]
    : [[-1.0, 0.1, -0.15, 'slab', 1.0], [0.3, -0.2, 0.08, 'round', 1.15], [1.5, 0.4, -0.1, 'round', 0.95]];
  for (const [x, z, ry, type, h] of stones) {
    const col = type === 'cross' ? '#8E9399' : x > 0 ? '#9A9FA6' : '#868B92';
    const fz = 0.14;
    if (type === 'round') {
      kit.body.add(G.rbox(0.85, h - 0.42, 0.24, 0.06), col, [x, (h - 0.42) / 2, z], [0, ry, 0]);
      kit.body.add(new THREE.CylinderGeometry(0.425, 0.425, 0.24, 16, 1, false, 0, PI), col, [x, h - 0.42, z], [PI / 2, ry, PI / 2]);
    } else if (type === 'cross') {
      kit.body.add(G.rbox(0.28, h, 0.24, 0.05), col, [x, h / 2, z], [0, ry, 0]);
      kit.body.add(G.rbox(0.9, 0.26, 0.24, 0.05), col, [x, h * 0.68, z], [0, ry, 0]);
    } else {
      kit.body.add(G.rbox(1.0, h, 0.26, 0.08), col, [x, h / 2, z], [0, ry, -0.08]);
    }
    // cute face
    const fy = type === 'cross' ? h * 0.68 : h * 0.55;
    const cx = Math.cos(ry);
    const sx = -Math.sin(ry);
    const off = (d, yy) => [x + cx * d + Math.sin(ry) * fz, yy, z + sx * d + Math.cos(ry) * fz];
    kit.body.add(G.sphere(0.07, 8, 6), '#1A1420', off(-0.15, fy), null, [1, 1.25, 0.5]);
    kit.body.add(G.sphere(0.07, 8, 6), '#1A1420', off(0.15, fy), null, [1, 1.25, 0.5]);
    kit.glow.add(G.sphere(0.022, 6, 4), '#FFFFFF', off(-0.13, fy + 0.03), null, null, 1.0);
    kit.glow.add(G.sphere(0.022, 6, 4), '#FFFFFF', off(0.17, fy + 0.03), null, null, 1.0);
    kit.body.add(G.torus(0.08, 0.018, 4, 10, PI), '#1A1420', off(0, fy - 0.13), [0, ry, PI]);
    kit.body.add(G.sphere(0.055, 8, 6), '#E58AA0', off(-0.27, fy - 0.1), null, [1, 0.6, 0.4]);
    kit.body.add(G.sphere(0.055, 8, 6), '#E58AA0', off(0.27, fy - 0.1), null, [1, 0.6, 0.4]);
    kit.flat.add(G.sphere(0.6, 8, 4), '#3E4A2E', [x, -0.05, z + 0.1], null, [1, 0.25, 0.7]);
  }
}

// ── Castle Courtyard ────────────────────────────────────────────────────────

function castleGate(kit) {
  const tower = '#5B2A86';
  for (const x of [-4.3, 4.3]) {
    kit.body.add(G.cyl(1.5, 1.7, 6.5, 16), tower, [x, 3.25, 0]);
    kit.body.add(G.cyl(1.8, 1.8, 0.5, 16), C.purpleDark, [x, 6.6, 0]);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * PI * 2;
      kit.body.add(G.box(0.5, 0.5, 0.4), C.purpleDark, [x + Math.cos(a) * 1.6, 7.05, Math.sin(a) * 1.6], [0, -a, 0]);
    }
    kit.flat.add(G.cone(1.7, 3.2, 10), C.roofPurple, [x, 8.7, 0]);
    kit.glow.add(G.rbox(0.45, 0.8, 0.05, 0.12), '#FFC23A', [x, 4.2, 1.52], null, null, 2);
    kit.glow.add(G.rbox(0.45, 0.8, 0.05, 0.12), '#FFC23A', [x, 2.0, 1.66], null, null, 2);
    kit.flicker.add(G.cone(0.2, 0.5, 6), '#FF9A1A', [x * 0.8, 3.0, 1.75], null, null, 2.6);
  }
  kit.body.add(G.box(7.2, 2.0, 1.6), '#4E2474', [0, 6.0, 0]);
  for (let i = 0; i < 7; i++) kit.body.add(G.box(0.55, 0.55, 1.6), '#4E2474', [-3.0 + i * 1.0, 7.25, 0]);
  kit.body.add(G.torus(2.8, 0.25, 6, 20, PI), '#3A1650', [0, 5.0, 0.75], null, [1, 0.25, 1]);
  kit.body.add(G.rbox(4.4, 0.9, 0.16, 0.08), '#2B1240', [0, 6.0, 0.86]);
  kit.signs.push({ text: 'CASTLE COURTYARD', w: 4.2, h: 0.75, pos: [0, 6.0, 0.95], opts: { bg: '#4B1E70', fg: '#FFE600' } });
  for (const x of [-2.2, 2.2]) {
    kit.body.add(G.box(0.9, 1.6, 0.06), '#E8A21A', [x, 4.2, 0.83]);
    kit.body.add(G.cone(0.45, 0.4, 3), '#E8A21A', [x, 3.25, 0.83], [PI, 0, 0], [1, 1, 0.12]);
  }
}

function pumpkinHut(kit, v = 0) {
  const r = v ? 1.8 : 2.1;
  const h = v ? 2.6 : 3.0;
  kit.body.add(pumpkinGeo(r, h, 10, 28), v ? '#FF7A1A' : C.pumpkin, [0, 0, 0]);
  kit.body.add(tube([[0, h * 0.85, 0], [0.1, h + 0.5, 0], [0.5, h + 0.9, 0.1]], 0.32, 0.16, 10, 7), C.stem);
  kit.flat.add(G.ico(0.5, 0), '#4E9A2A', [0.6, h + 0.85, 0.3], [0.3, 0.6, 0.2], [1.3, 0.3, 0.8]);
  kit.body.add(G.rbox(0.85, 1.4, 0.3, 0.12), '#4A2410', [0, 0.7, r * 0.93]);
  kit.body.add(G.cone(0.43, 0.35, 12), '#4A2410', [0, 1.55, r * 0.93], null, [1, 1, 0.34]);
  kit.glow.add(G.circle(0.3, 14), '#FFC23A', [-0.95, 1.7, r * 0.82], [0, -0.48, 0], null, 2);
  kit.glow.add(G.circle(0.3, 14), '#FFC23A', [0.95, 1.7, r * 0.82], [0, 0.48, 0], null, 2);
  kit.body.add(G.torus(0.3, 0.06, 6, 16), '#3E7A1E', [-0.95, 1.7, r * 0.83], [0, -0.48, 0]);
  kit.body.add(G.torus(0.3, 0.06, 6, 16), '#3E7A1E', [0.95, 1.7, r * 0.83], [0, 0.48, 0]);
  addLantern(kit, [0.7, 1.5, r * 0.98 + 0.1], 0.55);
}

function torch(kit) {
  kit.flat.add(G.box(0.55, 1.5, 0.55), C.stone, [0, 0.75, 0]);
  kit.body.add(G.rbox(0.7, 0.18, 0.7, 0.04), C.stoneDark, [0, 1.55, 0]);
  kit.body.add(lathe([[0.05, 0], [0.32, 0.05], [0.42, 0.3], [0.38, 0.32], [0.05, 0.12]], 12), C.iron, [0, 1.62, 0]);
  kit.flicker.add(G.cone(0.28, 0.75, 8), '#FF8A1A', [0, 2.2, 0], null, null, 2.6);
  kit.flicker.add(G.cone(0.16, 0.45, 8), '#FFE600', [0, 2.1, 0], null, null, 2.8);
}

function bridgeWall(kit) {
  const L = 6;
  kit.flat.add(G.box(L, 0.95, 0.45), C.stone, [0, 0.48, 0]);
  kit.flat.add(G.box(L + 0.05, 0.14, 0.55), C.stoneDark, [0, 1.0, 0]);
  for (let i = 0; i < 6; i++) kit.flat.add(G.box(0.04, 0.9, 0.47), C.stoneDark, [-L / 2 + 0.5 + i, 0.48, 0]);
  kit.flat.add(G.box(L + 0.02, 0.04, 0.47), C.stoneDark, [0, 0.5, 0]);
  kit.flat.add(G.box(0.6, 1.4, 0.6), C.stoneDark, [-L / 2, 0.7, 0]);
  kit.body.add(G.sphere(0.24, 10, 6), C.stone, [-L / 2, 1.55, 0]);
  // stone arch below the deck
  kit.flat.add(G.box(L, 1.8, 0.4), '#5E6166', [0, -0.9, 0]);
}

function castleBackdrop(kit) {
  const wall = '#4B2A6E';
  const dark = '#2E1446';
  kit.body.add(G.box(26, 14, 8), wall, [0, 7, 0]);
  kit.body.add(G.box(12, 26, 10), '#55307C', [0, 13, -3]);
  for (let i = 0; i < 9; i++) kit.body.add(G.box(1.6, 1.6, 8), wall, [-12 + i * 3, 14.6, 0]);
  const towers = [[-14, 22, 3], [14, 22, 3], [-6, 32, 2.5], [6, 30, 2.5], [0, 40, 3.2]];
  for (const [x, h, r] of towers) {
    kit.body.add(G.cyl(r, r * 1.1, h, 14), wall, [x, h / 2, x === 0 ? -4 : 1]);
    kit.body.add(G.cone(r * 1.35, r * 2.6, 14), dark, [x, h + r * 1.3, x === 0 ? -4 : 1]);
    kit.glow.add(G.box(0.5, 0.5, 0.5), C.glow, [x, h + r * 2.7, x === 0 ? -4 : 1], null, null, 3);
  }
  // rows of glowing windows
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 7; x++) {
      if ((x * 7 + y * 3) % 5 === 0) continue;
      kit.glow.add(G.box(0.9, 1.5, 0.2), '#FFC23A', [-10.5 + x * 3.5, 3 + y * 3, 4.05], null, null, 2.4);
    }
  }
  for (let y = 0; y < 6; y++) {
    for (const x of [-3, 0, 3]) kit.glow.add(G.box(0.9, 1.6, 0.2), '#FFD050', [x, 16 + y * 3.2, 2.05], null, null, 2.6);
  }
  kit.glow.add(G.rbox(4, 6, 0.3, 1.5), '#FF9A1A', [0, 3, 4.05], null, null, 2);
}

const BUILDERS = {
  witchCottage: (k) => witchCottage(k, 0),
  witchCottageB: (k) => witchCottage(k, 1),
  mushroomRed: (k) => mushroomHouse(k, 0),
  mushroomPurple: (k) => mushroomHouse(k, 1),
  picketFence,
  lanternPost,
  twistedTree: (k) => twistedTree(k, 0),
  twistedTreeB: (k) => twistedTree(k, 1),
  archVillage,
  cornPost,
  hayPile,
  cemeteryGate,
  ironFence,
  deadTree: (k) => deadTree(k, 0),
  deadTreeB: (k) => deadTree(k, 1),
  giantSkull,
  tombstones: (k) => tombstones(k, 0),
  tombstonesB: (k) => tombstones(k, 1),
  castleGate,
  pumpkinHut: (k) => pumpkinHut(k, 0),
  pumpkinHutB: (k) => pumpkinHut(k, 1),
  torch,
  bridgeWall,
  castleBackdrop,
};

// Props that should not be fogged (distant backdrop) or should not cast shadows.
export const NO_FOG = new Set(['castleBackdrop']);
export const NO_SHADOW = new Set(['castleBackdrop', 'picketFence', 'ironFence']);

const geoCache = new Map();
const levelsOf = new Map(); // type → cached entries of every detail level

/**
 * Merge a kit once per prop type and detail level (1 = full, lower = fewer
 * segments on round parts for distant copies; see withDetail).
 */
export function kitGeometry(type, buildFn, detail = 1) {
  const key = detail === 1 ? type : type + '@' + detail;
  if (geoCache.has(key)) return geoCache.get(key);
  const kit = new Kit();
  withDetail(detail, () => (buildFn || BUILDERS[type])(kit));
  // sign boards are flat quads: every level shares the full-detail textures
  const full = detail === 1 ? null : kitGeometry(type, buildFn, 1);
  const entry = {
    body: kit.body.build(),
    flat: kit.flat.build(),
    glow: kit.glow.build(),
    flicker: kit.flicker.build(),
    signs: full ? full.signs : kit.signs.map((s) => ({ ...s, tex: signTexture(s.text, s.opts) })),
  };
  const levels = levelsOf.get(type) || [];
  for (const part of ['body', 'flat', 'glow', 'flicker']) entry[part] = shareIdentical(entry[part], levels.map((l) => l[part]));
  levels.push(entry);
  levelsOf.set(type, levels);
  geoCache.set(key, entry);
  return entry;
}

/** Build a Group from a cached kit: one mesh per material bucket. */
export function meshFromKit(entry, { nofog = false, shadows = true } = {}) {
  const g = new THREE.Group();
  const add = (geo, mat, cast) => {
    if (!geo) return;
    const m = new THREE.Mesh(geo, mat);
    m.castShadow = cast && shadows;
    m.receiveShadow = shadows;
    g.add(m);
  };
  add(entry.body, nofog ? MATS.bodyNoFog : MATS.body, true);
  add(entry.flat, nofog ? toon({ vc: true, flat: true, nofog: true }) : MATS.flat, true);
  add(entry.glow, nofog ? MATS.glowNoFog : MATS.glow, false);
  add(entry.flicker, MATS.flicker, false);
  for (const s of entry.signs) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(s.w, s.h), toon({ map: s.tex }));
    m.position.set(s.pos[0], s.pos[1], s.pos[2]);
    g.add(m);
  }
  return g;
}

export function makeProp(type) {
  const entry = kitGeometry(type);
  const g = meshFromKit(entry, { nofog: NO_FOG.has(type), shadows: !NO_SHADOW.has(type) });
  g.userData.type = type;
  return g;
}

export const PROP_TYPES = Object.keys(BUILDERS);
