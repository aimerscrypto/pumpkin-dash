import * as THREE from 'three';
import { Builder, G, lathe, pumpkinGeo, faceGeo, tube, sawGeo, starGeo } from '../core/geo.js';
import { MATS } from '../core/materials.js';
import { createCharacter } from './characters.js';

// Obstacles. Each builder fills a Kit (static merged geometry) and may declare
// animated parts: spinners (rotate around an axis), swingers (pendulums),
// flame / toxic emitter points. Models face +Z, centred on the road (x = 0).

const PI = Math.PI;
const W = 4.9; // road width
const C = {
  pumpkin: '#FF5E00',
  stem: '#3E7A1E',
  wood: '#6B4423',
  woodDark: '#4A2C1A',
  iron: '#222429',
  steel: '#9AA0AA',
  pipe: '#1CC427',
  pipeDark: '#128A1B',
  toxic: '#59FF00',
  glow: '#FFE600',
  bone: '#EDE6D2',
  crate: '#8A5A2E',
  vine: '#2E6B2A',
};

class Kit {
  constructor() {
    this.body = new Builder();
    this.glow = new Builder();
    this.flicker = new Builder();
    this.parts = []; // dynamic parts: { name, body: Builder, glow: Builder, pos, kind, ... }
    this.flames = [];
    this.toxic = [];
  }
  part(name, pos, info = {}) {
    const p = { name, body: new Builder(), glow: new Builder(), flicker: new Builder(), pos, ...info };
    this.parts.push(p);
    return p;
  }
}

function pumpkin(b, gb, pos, r, h, face = 'jack', k = 1.8, ry = 0) {
  b.add(pumpkinGeo(r, h, 8, 18), C.pumpkin, pos, [0, ry, 0]);
  b.add(G.cyl(r * 0.08, r * 0.12, r * 0.4, 6), C.stem, [pos[0], pos[1] + h * 0.95, pos[2]], [0.2, 0, 0.1]);
  if (face && gb) gb.add(faceGeo(face, r * 1.15, r * 1.04), '#FFD21A', [pos[0], pos[1] + h * 0.47, pos[2]], [0, ry, 0], [1, h / (2 * r) + 0.15, 1], k);
}

function post(b, x, h, color = C.woodDark) {
  b.add(G.rbox(0.28, h, 0.28, 0.05), color, [x, h / 2, 0]);
}

function spikes(b, len, y, z, n, r = 0.07, h = 0.22, color = C.steel) {
  for (let i = 0; i < n; i++) {
    const x = -len / 2 + (i + 0.5) * (len / n);
    b.add(G.cone(r, h, 6), color, [x, y, z]);
  }
}

// ── JUMP ────────────────────────────────────────────────────────────────────

const JUMP = {
  pumpkinLog(k) {
    k.body.add(G.cyl(0.38, 0.4, W, 14), C.wood, [0, 0.38, 0], [0, 0, PI / 2]);
    for (const x of [-W / 2, W / 2]) k.body.add(G.cyl(0.33, 0.33, 0.02, 14), '#C8955A', [x, 0.38, 0], [0, 0, PI / 2]);
    for (let i = 0; i < 6; i++) k.body.add(G.torus(0.39, 0.02, 4, 16), C.woodDark, [-2 + i * 0.8, 0.38, 0], [0, PI / 2, 0]);
    pumpkin(k.body, k.flicker, [-1.4, 0.7, 0.05], 0.36, 0.5, 'jack');
    pumpkin(k.body, k.flicker, [0.15, 0.7, 0.05], 0.42, 0.58, 'angry');
    pumpkin(k.body, k.flicker, [1.5, 0.7, 0.05], 0.34, 0.48, 'happy');
  },
  greenPipe(k) {
    k.body.add(G.cyl(0.45, 0.45, W - 0.6, 18), C.pipe, [0, 0.5, 0], [0, 0, PI / 2]);
    for (const x of [-W / 2 + 0.3, W / 2 - 0.3]) {
      k.body.add(G.cyl(0.56, 0.56, 0.3, 18), C.pipeDark, [x, 0.5, 0], [0, 0, PI / 2]);
      k.body.add(G.rbox(0.5, 0.5, 0.9, 0.06), C.pipeDark, [x, 0.25, 0]);
    }
    for (const x of [-1.2, 1.2]) k.body.add(G.torus(0.47, 0.04, 6, 18), C.pipeDark, [x, 0.5, 0], [0, PI / 2, 0]);
    k.body.add(G.box(W - 0.8, 0.06, 0.04), '#5BEA62', [0, 0.82, 0.25]);
    // pumpkin face sitting on top of the pipe
    pumpkin(k.body, k.flicker, [0, 0.88, 0.05], 0.5, 0.7, 'jack', 2.0);
  },
  pumpkinBeam(k) {
    post(k.body, -W / 2 - 0.1, 1.2);
    post(k.body, W / 2 + 0.1, 1.2);
    k.body.add(G.rbox(W + 0.6, 0.26, 0.3, 0.05), C.wood, [0, 1.0, 0]);
    for (let i = 0; i < 4; i++) {
      const x = -1.8 + i * 1.2;
      const p = k.part('swing' + i, [x, 0.87, 0], { kind: 'swing', axis: 'z', amp: 0.35, speed: 3.2, phase: i * 1.3 });
      p.body.add(G.cyl(0.015, 0.015, 0.25, 4), C.iron, [0, -0.12, 0]);
      pumpkin(p.body, p.flicker, [0, -0.6, 0], 0.26, 0.36, i % 2 ? 'happy' : 'jack');
    }
  },
  rootArch(k) {
    k.body.add(tube([[-W / 2 - 0.6, -0.2, 0.2], [-1.6, 0.9, 0], [-0.4, 1.0, 0.15], [0.8, 0.85, -0.1], [1.9, 0.95, 0.1], [W / 2 + 0.6, -0.2, 0]], 0.3, 0.22, 34, 9), '#5A3A26');
    k.body.add(tube([[-W / 2 - 0.2, -0.1, -0.2], [-1.0, 0.65, -0.25], [0.4, 0.7, -0.2], [W / 2 + 0.3, -0.1, -0.3]], 0.2, 0.15, 24, 7), '#4A2C1E');
    k.body.add(tube([[-0.6, 0.95, 0.15], [-0.2, 1.3, 0.3], [0.2, 1.4, 0.2]], 0.08, 0.02, 10, 5), '#5A3A26');
    k.body.add(tube([[1.2, 0.9, 0], [1.6, 1.25, 0.2], [1.5, 1.5, 0.1]], 0.07, 0.02, 10, 5), '#5A3A26');
    for (const [x, y] of [[-1.4, 0.95], [0.3, 1.0], [1.6, 0.98]]) k.body.add(G.ico(0.14, 0), '#3E7A1E', [x, y + 0.12, 0.1], [x, 0, y]);
    k.glow.add(G.sphere(0.06, 8, 6), C.toxic, [-0.9, 1.1, 0.3], null, null, 2);
    k.glow.add(G.sphere(0.05, 8, 6), C.glow, [1.0, 1.05, 0.3], null, null, 2);
  },
  glowCrates(k) {
    const xs = [-1.85, -0.62, 0.62, 1.85];
    xs.forEach((x, i) => {
      const s = 1.05 + (i % 2) * 0.08;
      k.body.add(G.rbox(s, s * 0.88, 1.0, 0.05), C.crate, [x, (s * 0.88) / 2, 0], [0, (i - 1.5) * 0.06, 0]);
      for (const y of [0.12, s * 0.88 - 0.12]) k.body.add(G.box(s + 0.02, 0.1, 1.02), '#5A3A1E', [x, y, 0], [0, (i - 1.5) * 0.06, 0]);
      k.body.add(G.box(0.1, s * 0.88, 1.02), '#5A3A1E', [x, (s * 0.88) / 2, 0], [0, (i - 1.5) * 0.06, PI / 4]);
      k.glow.add(starGeo(0.18, 0.08, 5, 0.02), i % 2 ? C.glow : C.toxic, [x, (s * 0.88) / 2, 0.52], null, null, 2.2);
    });
  },
  broomstick(k) {
    pumpkin(k.body, k.flicker, [-2.0, 0, 0], 0.5, 0.75, 'jack');
    pumpkin(k.body, k.flicker, [2.0, 0, 0], 0.5, 0.75, 'angry');
    k.body.add(G.cyl(0.07, 0.07, 4.6, 8), '#7A4E28', [0, 0.85, 0], [0, 0, PI / 2 + 0.03]);
    k.body.add(G.cone(0.42, 1.2, 12), '#D9B24A', [2.9, 0.88, 0], [0, 0, PI / 2]);
    k.body.add(G.cyl(0.12, 0.12, 0.14, 10), '#8E2CC2', [2.35, 0.88, 0], [0, 0, PI / 2]);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * PI * 2;
      k.body.add(G.cyl(0.012, 0.012, 1.1, 3), '#B8902E', [2.9, 0.88 + Math.cos(a) * 0.2, Math.sin(a) * 0.2], [0, 0, PI / 2 + Math.cos(a) * 0.1]);
    }
  },
  boneBar(k) {
    for (const x of [-W / 2 + 0.1, W / 2 - 0.1]) {
      k.body.add(G.rbox(0.6, 0.5, 0.6, 0.08), '#5E6166', [x, 0.25, 0]);
      k.body.add(G.sphere(0.42, 16, 12), C.bone, [x, 0.95, 0]);
      k.body.add(G.rbox(0.5, 0.25, 0.4, 0.08), C.bone, [x, 0.66, 0.08]);
      for (const ex of [-0.15, 0.15]) {
        k.body.add(G.sphere(0.12, 10, 8), '#1A0B1E', [x + ex, 0.98, 0.33], null, [1, 1.1, 0.6]);
        k.flicker.add(G.sphere(0.05, 6, 4), '#FF8A1A', [x + ex, 0.98, 0.42], null, null, 2.4);
      }
    }
    k.body.add(G.cyl(0.16, 0.16, W - 1.2, 12), C.bone, [0, 0.9, 0], [0, 0, PI / 2]);
    for (const x of [-(W - 1.2) / 2, (W - 1.2) / 2]) {
      k.body.add(G.sphere(0.24, 12, 10), C.bone, [x, 1.04, 0]);
      k.body.add(G.sphere(0.24, 12, 10), C.bone, [x, 0.76, 0]);
    }
  },
  spikedLog(k) {
    const p = k.part('log', [0, 0.55, 0], { kind: 'spin', axis: 'x', speed: -9 });
    p.body.add(G.cyl(0.42, 0.42, W - 0.4, 14), '#7A4E28', [0, 0, 0], [0, 0, PI / 2]);
    for (const x of [-(W - 0.4) / 2, (W - 0.4) / 2]) p.body.add(G.cyl(0.36, 0.36, 0.03, 14), '#C8955A', [x, 0, 0], [0, 0, PI / 2]);
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 6; j++) {
        const a = (j / 6) * PI * 2 + i * 0.5;
        const x = -1.95 + i * 0.49;
        p.body.add(G.cone(0.07, 0.26, 6), C.steel, [x, Math.cos(a) * 0.52, Math.sin(a) * 0.52], [a, 0, 0]);
      }
    }
    k.approach = 3;
  },
  sawblades(k) {
    for (const x of [-1.15, 1.15]) {
      k.body.add(G.rbox(0.22, 0.12, 2.2, 0.03), '#3A3D44', [x, 0.04, 0]);
      k.body.add(G.box(0.08, 0.02, 2.0), '#14161A', [x, 0.1, 0]);
      const p = k.part('saw' + x, [x, 0.25, 0], { kind: 'spin', axis: 'x', speed: x > 0 ? 14 : -14 });
      const saw = sawGeo(0.95, 22, 0.08);
      saw.rotateY(PI / 2);
      p.body.add(saw, '#C8CED8', [0, 0, 0]);
      p.body.add(G.cyl(0.18, 0.18, 0.14, 12), C.iron, [0, 0, 0], [0, 0, PI / 2]);
      p.glow.add(G.torus(0.6, 0.015, 4, 24), '#FF3A1A', [0, 0, 0], [0, PI / 2, 0], null, 1.6);
    }
    // warning stripes on the base
    for (let i = 0; i < 6; i++) k.body.add(G.box(0.4, 0.03, 0.22), i % 2 ? '#141218' : C.glow, [0, 0.02, -1.0 + i * 0.4]);
  },
};

// ── DUCK ────────────────────────────────────────────────────────────────────

function gantry(k, h = 3.2, color = C.iron) {
  for (const x of [-W / 2 - 0.25, W / 2 + 0.25]) {
    k.body.add(G.rbox(0.24, h, 0.24, 0.04), color, [x, h / 2, 0]);
    k.body.add(G.rbox(0.6, 0.2, 0.6, 0.05), '#3A3D44', [x, 0.1, 0]);
  }
  k.body.add(G.rbox(W + 1.0, 0.24, 0.3, 0.05), color, [0, h, 0]);
}

const DUCK = {
  toxicCrates(k) {
    gantry(k, 1.15);
    k.body.add(G.rbox(W + 0.6, 0.12, 1.1, 0.03), '#3A3D44', [0, 1.1, 0]);
    const xs = [-1.9, -0.75, 0.4, 1.55];
    xs.forEach((x, i) => {
      k.body.add(G.rbox(1.0, 0.9, 1.0, 0.05), i % 2 ? '#2E3A28' : '#3A4430', [x, 1.65, 0], [0, (i - 1.5) * 0.08, 0]);
      k.glow.add(G.box(0.7, 0.12, 0.02), C.toxic, [x, 1.65, 0.51], null, null, 2.2);
      k.glow.add(G.circle(0.16, 12), C.toxic, [x, 1.85, 0.52], null, null, 2.2);
      k.toxic.push([x, 2.1, 0]);
    });
    k.body.add(G.rbox(1.0, 0.9, 1.0, 0.05), '#2E3A28', [-1.3, 2.55, 0], [0, 0.15, 0]);
    k.body.add(G.cyl(0.4, 0.4, 0.9, 14), '#3A4430', [1.0, 2.55, 0]);
    k.glow.add(G.torus(0.41, 0.04, 4, 18), C.toxic, [1.0, 2.55, 0], [PI / 2, 0, 0], null, 2);
    // drips
    for (const x of [-1.6, 0.1, 1.8]) k.glow.add(G.sphere(0.06, 8, 6), C.toxic, [x, 1.0, 0.3], null, [1, 1.6, 1], 2);
  },
  flamePendulums(k) {
    gantry(k, 4.6, '#3A2A1E');
    for (let i = 0; i < 2; i++) {
      const x = i ? 1.1 : -1.1;
      const p = k.part('pend' + i, [x, 4.5, 0], { kind: 'swing', axis: 'z', amp: 0.55, speed: 2.6, phase: i * PI });
      p.body.add(G.cyl(0.03, 0.03, 3.05, 5), C.iron, [0, -1.52, 0]);
      p.body.add(pumpkinGeo(0.45, 0.62, 8, 18), '#E04A00', [0, -3.4, 0]);
      p.flicker.add(faceGeo('angry', 0.52, 0.47), '#FFE600', [0, -3.09, 0], null, [1, 0.85, 1], 2.4);
      for (let j = 0; j < 8; j++) {
        const a = (j / 8) * PI * 2;
        p.body.add(G.cone(0.06, 0.24, 5), C.steel, [Math.cos(a) * 0.48, -3.09, Math.sin(a) * 0.48], [Math.sin(a) * PI / 2, 0, -Math.cos(a) * PI / 2]);
      }
      p.body.add(G.cone(0.08, 0.3, 6), C.steel, [0, -3.5, 0], [PI, 0, 0]);
      p.flames = [[0, -2.75, 0]];
    }
  },
  hangingVines(k) {
    k.body.add(tube([[-W / 2 - 0.9, 0, 0], [-W / 2 - 0.4, 2.0, 0.1], [-1.5, 2.9, 0], [0, 3.15, 0.1], [1.6, 2.9, -0.1], [W / 2 + 0.4, 2.0, 0], [W / 2 + 0.9, 0, 0]], 0.28, 0.28, 40, 8), '#4A2C1E');
    for (let i = 0; i < 13; i++) {
      const x = -2.3 + i * 0.38;
      const top = 3.0 - Math.abs(x) * 0.12;
      const p = k.part('vine' + i, [x, top, 0], { kind: 'swing', axis: 'x', amp: 0.12, speed: 2.2, phase: i * 0.7 });
      const len = top - 1.05 - (i % 3) * 0.08;
      p.body.add(tube([[0, 0, 0], [0.06, -len * 0.5, 0.05], [-0.04, -len, 0]], 0.05, 0.035, 8, 5), C.vine);
      for (let j = 0; j < 4; j++) p.body.add(G.ico(0.1, 0), j % 2 ? '#3E8A2A' : '#2E6B2A', [0.05, -len * (0.25 + j * 0.22), 0.05], [j, j, 0], [1.2, 0.5, 0.8]);
      if (i % 3 === 0) p.glow.add(G.sphere(0.07, 8, 6), '#FF5ED8', [0, -len, 0.02], null, null, 2);
    }
  },
  ghostBar(k) {
    gantry(k, 2.4, '#3A3048');
    for (let i = 0; i < 5; i++) {
      const x = -2.0 + i;
      const p = k.part('g' + i, [x, 1.6, 0], { kind: 'bob', amp: 0.08, speed: 3, phase: i * 1.1 });
      p.body.add(lathe([[0.0, -0.36], [0.44, -0.4], [0.38, 0.0], [0.34, 0.3], [0.22, 0.5], [0, 0.55]], 16), '#F4F0FF', [0, 0, 0]);
      for (let j = 0; j < 5; j++) {
        const a = (j / 5) * PI * 2;
        p.body.add(G.cone(0.1, 0.18, 5), '#F4F0FF', [Math.cos(a) * 0.36, -0.46, Math.sin(a) * 0.36], [PI, 0, 0]);
      }
      p.body.add(G.sphere(0.06, 8, 6), '#1A0B2E', [-0.1, 0.25, 0.3], null, [1, 1.4, 0.5]);
      p.body.add(G.sphere(0.06, 8, 6), '#1A0B2E', [0.1, 0.25, 0.3], null, [1, 1.4, 0.5]);
      p.body.add(G.sphere(0.07, 8, 6), '#1A0B2E', [0, 0.06, 0.34], null, [1, 1.3, 0.5]);
      p.body.add(G.capsule(0.06, 0.32, 3, 6), '#F4F0FF', [-0.4, 0.1, 0], [0, 0, 1.2]);
      p.body.add(G.capsule(0.06, 0.32, 3, 6), '#F4F0FF', [0.4, 0.1, 0], [0, 0, -1.2]);
    }
    k.body.add(G.cyl(0.03, 0.03, W, 6), '#8E2CC2', [0, 2.1, 0], [0, 0, PI / 2]);
  },
};

// ── LEFT / RIGHT ────────────────────────────────────────────────────────────
// Built for an obstacle that sits on the right half of the road (camera dodges
// left). The manager mirrors them for the other side.

const DRIVERS = ['skeleton', 'vampire', 'witch', 'zombie', 'ghost'];

const DODGE = {
  cart(k) {
    k.body.add(G.rbox(1.5, 0.75, 2.2, 0.1), '#8E2CC2', [0, 0.85, 0]);
    k.body.add(G.rbox(1.6, 0.12, 2.3, 0.05), '#5A1E80', [0, 1.25, 0]);
    k.body.add(G.rbox(1.5, 0.08, 0.06, 0.02), C.glow, [0, 0.8, 1.11]);
    k.body.add(pumpkinGeo(0.55, 0.6, 8, 18), C.pumpkin, [0, 0.7, 1.0], null, [1.05, 1, 0.6]);
    k.flicker.add(faceGeo('jack', 0.6, 0.55), '#FFE600', [0, 1.0, 1.0], null, [1, 1, 0.6], 2.2);
    for (const x of [-0.6, 0.6]) k.glow.add(G.sphere(0.12, 10, 8), '#FFF2A0', [x, 0.95, 1.12], null, null, 2.6);
    k.body.add(G.rbox(1.2, 0.5, 0.15, 0.05), '#5A1E80', [0, 1.45, -0.6]);
    for (const z of [-0.75, 0.75]) {
      const p = k.part('wheel' + z, [0, 0.36, z], { kind: 'spin', axis: 'x', speed: 30 });
      for (const x of [-0.8, 0.8]) {
        p.body.add(G.cyl(0.36, 0.36, 0.18, 14), '#1A1420', [x, 0, 0], [0, 0, PI / 2]);
        p.body.add(G.cyl(0.18, 0.18, 0.2, 10), C.glow, [x, 0, 0], [0, 0, PI / 2]);
        p.body.add(G.box(0.2, 0.6, 0.06), '#FF8A1A', [x, 0, 0]);
      }
    }
    k.driver = { pos: [0, 0.75, -0.35], scale: 0.85 };
    k.width = 1.6;
  },
  tricycle(k) {
    k.body.add(tube([[0, 0.45, 0.85], [0, 0.85, 0.4], [0, 0.75, -0.4]], 0.06, 0.06, 10, 6), '#FF5E00');
    k.body.add(G.cyl(0.05, 0.05, 1.1, 6), '#222429', [0, 0.4, -0.55], [0, 0, PI / 2]);
    k.body.add(G.rbox(0.45, 0.12, 0.4, 0.05), '#1A1420', [0, 0.82, -0.3]);
    k.body.add(G.cyl(0.03, 0.03, 0.7, 6), '#C8CED8', [0, 1.15, 0.72], [0, 0, PI / 2]);
    k.body.add(G.cyl(0.03, 0.03, 0.4, 6), '#C8CED8', [0, 0.95, 0.75], [0.25, 0, 0]);
    k.body.add(pumpkinGeo(0.2, 0.24, 8, 12), C.pumpkin, [0, 0.6, 1.1]);
    k.glow.add(G.sphere(0.1, 8, 6), '#FFF2A0', [0, 0.85, 0.95], null, null, 2.6);
    const front = k.part('front', [0, 0.48, 0.85], { kind: 'spin', axis: 'x', speed: 28 });
    front.body.add(G.cyl(0.48, 0.48, 0.12, 16), '#1A1420', [0, 0, 0], [0, 0, PI / 2]);
    front.body.add(G.cyl(0.3, 0.3, 0.14, 12), C.glow, [0, 0, 0], [0, 0, PI / 2]);
    front.body.add(G.box(0.15, 0.85, 0.06), '#8E2CC2', [0, 0, 0]);
    const back = k.part('back', [0, 0.3, -0.55], { kind: 'spin', axis: 'x', speed: 46 });
    for (const x of [-0.55, 0.55]) {
      back.body.add(G.cyl(0.3, 0.3, 0.1, 12), '#1A1420', [x, 0, 0], [0, 0, PI / 2]);
      back.body.add(G.box(0.12, 0.5, 0.05), '#8E2CC2', [x, 0, 0]);
    }
    k.driver = { pos: [0, 0.55, -0.3], scale: 0.8 };
    k.width = 1.2;
  },
  spikedBarrels(k) {
    const ps = [[-0.3, 0, 0.0], [0.45, 0, -0.5], [0.4, 0, 0.6]];
    for (const [x, , z] of ps) {
      k.body.add(lathe([[0, 0], [0.42, 0], [0.5, 0.35], [0.52, 0.55], [0.5, 0.75], [0.42, 1.1], [0, 1.1]], 16), '#7A4E28', [x, 0, z]);
      for (const y of [0.2, 0.9]) k.body.add(G.torus(0.47, 0.03, 4, 16), C.iron, [x, y, z], [PI / 2, 0, 0]);
      for (let j = 0; j < 8; j++) {
        const a = (j / 8) * PI * 2;
        k.body.add(G.cone(0.06, 0.26, 5), C.steel, [x + Math.cos(a) * 0.6, 0.55, z + Math.sin(a) * 0.6], [Math.sin(a) * PI / 2, 0, -Math.cos(a) * PI / 2]);
      }
      k.body.add(G.cyl(0.4, 0.4, 0.04, 16), '#5A3A1E', [x, 1.1, z]);
    }
    k.flicker.add(G.circle(0.25, 12), C.toxic, [-0.3, 1.13, 0], [-PI / 2, 0, 0], null, 1.6);
    k.width = 1.5;
  },
  pipeLane(k) {
    for (const [x, z, h] of [[-0.2, 0.3, 1.5], [0.55, -0.5, 1.1]]) {
      k.body.add(G.cyl(0.42, 0.42, h, 18), C.pipe, [x, h / 2, z]);
      k.body.add(G.cyl(0.52, 0.52, 0.3, 18), '#128A1B', [x, h - 0.05, z]);
      k.body.add(G.cyl(0.38, 0.38, 0.02, 16), '#0A3A0E', [x, h + 0.11, z]);
      k.toxic.push([x, h + 0.15, z]);
    }
    k.body.add(G.cyl(0.18, 0.18, 1.4, 10), C.pipe, [0.2, 0.3, -0.1], [PI / 2, 0, 0.6]);
    k.width = 1.5;
  },
};

const BUILDERS = { ...JUMP, ...DUCK, ...DODGE };

const cache = new Map();

function compile(variant) {
  if (cache.has(variant)) return cache.get(variant);
  const k = new Kit();
  (BUILDERS[variant] || JUMP.pumpkinLog)(k);
  const entry = {
    body: k.body.build(),
    glow: k.glow.build(),
    flicker: k.flicker.build(),
    parts: k.parts.map((p) => ({ ...p, body: p.body.build(), glow: p.glow.build(), flicker: p.flicker.build() })),
    toxic: k.toxic,
    approach: k.approach || 0,
    driver: k.driver || null,
    width: k.width || W,
  };
  cache.set(variant, entry);
  return entry;
}

function meshes(group, e, shadows) {
  if (e.body) {
    const m = new THREE.Mesh(e.body, MATS.body);
    m.castShadow = shadows;
    group.add(m);
  }
  if (e.glow) group.add(new THREE.Mesh(e.glow, MATS.glow));
  if (e.flicker) group.add(new THREE.Mesh(e.flicker, MATS.flicker));
}

export function obstacleVariants() {
  return Object.keys(BUILDERS);
}

/**
 * Creates an obstacle instance. Returns { root, inner, parts, toxic, flames,
 * approach, width, driver, update(time) }.
 */
export function createObstacle(variant, { shadows = true, driverKind = null } = {}) {
  const e = compile(variant);
  const root = new THREE.Group();
  const inner = new THREE.Group();
  root.add(inner);
  meshes(inner, e, shadows);
  const parts = [];
  const flames = [];
  for (const p of e.parts) {
    const g = new THREE.Group();
    g.position.set(p.pos[0], p.pos[1], p.pos[2]);
    meshes(g, p, shadows);
    inner.add(g);
    parts.push({ obj: g, kind: p.kind, axis: p.axis, speed: p.speed || 0, amp: p.amp || 0, phase: p.phase || 0, base: g.position.y });
    if (p.flames) for (const f of p.flames) flames.push({ obj: g, local: new THREE.Vector3(f[0], f[1], f[2]) });
  }
  let driver = null;
  if (e.driver) {
    driver = createCharacter(driverKind || DRIVERS[0], { shadows });
    driver.root.position.set(e.driver.pos[0], e.driver.pos[1], e.driver.pos[2]);
    driver.root.scale.setScalar(e.driver.scale);
    // hands on the handlebars / steering
    driver.armL.rotation.set(-1.2, 0, -0.15);
    driver.armR.rotation.set(-1.2, 0, 0.15);
    inner.add(driver.root);
  }
  return {
    variant,
    root,
    inner,
    parts,
    flames,
    toxic: e.toxic.map((t) => new THREE.Vector3(t[0], t[1], t[2])),
    approach: e.approach,
    width: e.width,
    driver,
    update(time) {
      for (const p of parts) {
        if (p.kind === 'spin') p.obj.rotation[p.axis] = time * p.speed;
        else if (p.kind === 'swing') p.obj.rotation[p.axis] = Math.sin(time * p.speed + p.phase) * p.amp;
        else if (p.kind === 'bob') p.obj.position.y = p.base + Math.sin(time * p.speed + p.phase) * p.amp;
      }
      if (driver) {
        driver.inner.position.y = Math.abs(Math.sin(time * 9)) * 0.04;
        driver.inner.rotation.z = Math.sin(time * 4) * 0.06;
      }
    },
  };
}

export { DRIVERS };
