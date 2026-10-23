import * as THREE from 'three';
import { Builder, G, lathe, pumpkinGeo, faceGeo, tube, withDetail, shareIdentical } from '../core/geo.js';
import { MATS } from '../core/materials.js';

// Original costumed characters built from shaped primitives. Each character:
//   root  (placement) → inner (bob/spin) → body meshes + two arm pivots.
// Arms hang down from the shoulder pivot (−Y); rotate .x to raise them forward,
// .z to raise them sideways. Models face +Z. Adult height ≈ 1.8 m.

const PI = Math.PI;
export const SH_Y = 1.24; // shoulder height
export const SH_X = 0.27;

function legs(b, pants, shoes, opts = {}) {
  const w = opts.wide ? 0.14 : 0.11;
  for (const x of [-0.11, 0.11]) {
    b.add(G.capsule(w, 0.55, 3, 8), pants, [x, 0.5, 0]);
    b.add(G.rbox(0.2, 0.12, 0.3, 0.05), shoes, [x, 0.06, 0.05]);
  }
}

function torso(b, shirt, opts = {}) {
  b.add(lathe([[0.0, 0.78], [0.25, 0.8], [0.27, 0.95], [0.29, 1.15], [0.24, 1.3], [0.0, 1.33]], 14), shirt, [0, 0, 0], null, [1, 1, 0.78]);
  if (opts.belt) b.add(G.cyl(0.27, 0.27, 0.07, 14), opts.belt, [0, 0.86, 0], null, [1, 1, 0.8]);
}

function head(b, skin, y = 1.55, r = 0.24) {
  b.add(G.sphere(r, 18, 14), skin, [0, y, 0], null, [1, 1.05, 1]);
  b.add(G.cyl(0.07, 0.08, 0.12, 8), skin, [0, y - r - 0.02, 0]);
}

function eyes(b, glowB, y, z, opts = {}) {
  const white = opts.white ?? '#FFFFFF';
  const pupil = opts.pupil ?? '#1A0B2E';
  for (const x of [-0.085, 0.085]) {
    if (opts.glow) {
      glowB.add(G.sphere(0.045, 8, 6), opts.glow, [x, y, z], null, [1, 1.2, 0.5], 2.2);
    } else {
      b.add(G.sphere(0.055, 10, 8), white, [x, y, z], null, [1, 1.2, 0.5]);
      b.add(G.sphere(0.03, 8, 6), pupil, [x, y - 0.005, z + 0.02], null, [1, 1.2, 0.5]);
    }
  }
}

function smile(b, y, z, color = '#3A1020') {
  b.add(G.torus(0.065, 0.016, 4, 10, PI), color, [0, y, z], [0, 0, PI]);
}

/** Arm hanging from the pivot (shoulder at origin). */
function arm(sleeve, hand, opts = {}) {
  const b = new Builder();
  const r = opts.r ?? 0.075;
  b.add(G.capsule(r, 0.42, 3, 8), sleeve, [0, -0.28, 0]);
  if (opts.cuff) b.add(G.cyl(r * 1.25, r * 1.25, 0.08, 8), opts.cuff, [0, -0.5, 0]);
  b.add(G.sphere(0.07, 10, 8), hand, [0, -0.6, 0]);
  if (opts.claws) for (const x of [-0.04, 0, 0.04]) b.add(G.cone(0.015, 0.07, 4), '#F2EAD8', [x, -0.68, 0.02], [PI, 0, 0]);
  if (opts.extra) opts.extra(b);
  return b;
}

const KINDS = {
  pumpkinKid() {
    const b = new Builder();
    const gl = new Builder();
    legs(b, '#2E2A4A', '#1A1420');
    torso(b, '#6A2C91', { belt: '#1A1420' });
    b.add(G.cyl(0.08, 0.09, 0.12, 8), '#F1C9A5', [0, 1.36, 0]);
    b.add(pumpkinGeo(0.34, 0.5, 8, 20), '#FF5E00', [0, 1.38, 0]);
    b.add(G.cyl(0.035, 0.05, 0.14, 6), '#3E7A1E', [0, 1.92, 0], [0.2, 0, 0.15]);
    gl.add(faceGeo('happy', 0.42, 0.36), '#FFD21A', [0, 1.62, 0], null, [1, 1, 1], 1.8);
    return { b, gl, armL: arm('#6A2C91', '#F1C9A5'), armR: arm('#6A2C91', '#F1C9A5') };
  },
  ghostKid() {
    const b = new Builder();
    const gl = new Builder();
    b.add(G.rbox(0.18, 0.12, 0.28, 0.05), '#1A1420', [-0.1, 0.06, 0.05]);
    b.add(G.rbox(0.18, 0.12, 0.28, 0.05), '#1A1420', [0.1, 0.06, 0.05]);
    b.add(lathe([[0, 1.82], [0.2, 1.78], [0.28, 1.62], [0.3, 1.4], [0.34, 1.0], [0.4, 0.5], [0.46, 0.15], [0.43, 0.12], [0.0, 0.14]], 20), '#F4F0FF', [0, 0, 0]);
    b.add(G.sphere(0.07, 10, 8), '#1A0B2E', [-0.1, 1.62, 0.25], null, [1, 1.5, 0.5]);
    b.add(G.sphere(0.07, 10, 8), '#1A0B2E', [0.1, 1.62, 0.25], null, [1, 1.5, 0.5]);
    b.add(G.sphere(0.05, 8, 6), '#1A0B2E', [0, 1.46, 0.27], null, [1.2, 0.8, 0.5]);
    const bucket = (ab) => {
      ab.add(pumpkinGeo(0.17, 0.22, 8, 14), '#FF5E00', [0, -0.88, 0.05]);
      ab.add(G.torus(0.13, 0.012, 4, 12, PI), '#1A1420', [0, -0.68, 0.05]);
      ab.add(faceGeo('jack', 0.2, 0.17), '#3A1020', [0, -0.77, 0.05]);
      for (let i = 0; i < 4; i++) ab.add(G.sphere(0.04, 6, 4), ['#FF3A7A', '#59FF00', '#FFE600', '#3AB8FF'][i], [(i - 1.5) * 0.06, -0.66, 0.05 + (i % 2) * 0.04]);
    };
    return {
      b,
      gl,
      armL: arm('#F4F0FF', '#F4F0FF', { r: 0.09 }),
      armR: arm('#F4F0FF', '#F4F0FF', { r: 0.09, extra: bucket }),
    };
  },
  witch() {
    const b = new Builder();
    const gl = new Builder();
    b.add(G.rbox(0.18, 0.12, 0.3, 0.05), '#1A1420', [-0.1, 0.06, 0.06]);
    b.add(G.rbox(0.18, 0.12, 0.3, 0.05), '#1A1420', [0.1, 0.06, 0.06]);
    b.add(lathe([[0, 0.12], [0.45, 0.12], [0.4, 0.4], [0.3, 0.85], [0.27, 1.15], [0.22, 1.3], [0, 1.33]], 18), '#2A1638', [0, 0, 0]);
    b.add(G.cyl(0.29, 0.29, 0.06, 14), '#8E2CC2', [0, 0.9, 0]);
    b.add(G.rbox(0.1, 0.08, 0.04, 0.02), '#FFE600', [0, 0.9, 0.29]);
    head(b, '#7BC96A');
    b.add(G.cone(0.05, 0.16, 6), '#6AB85A', [0, 1.54, 0.26], [PI / 2 - 0.2, 0, 0]);
    eyes(b, gl, 1.6, 0.21);
    smile(b, 1.46, 0.225);
    // hair + hat
    for (let i = 0; i < 7; i++) {
      const a = PI * 0.25 + (i / 6) * PI * 1.5;
      b.add(G.capsule(0.05, 0.3, 3, 5), '#FF7A1A', [Math.cos(a + PI / 2) * 0.22, 1.42, -Math.sin(a + PI / 2) * 0.22 - 0.03], [0.1, 0, 0]);
    }
    b.add(G.cyl(0.5, 0.5, 0.04, 20), '#1E1028', [0, 1.74, 0]);
    b.add(lathe([[0.25, 0], [0.22, 0.25], [0.15, 0.5], [0.05, 0.72], [0.0, 0.78]], 14), '#1E1028', [0, 1.74, 0], [-0.18, 0, 0.12]);
    b.add(G.cyl(0.255, 0.255, 0.08, 14), '#8E2CC2', [0, 1.8, 0]);
    return { b, gl, armL: arm('#2A1638', '#7BC96A', { cuff: '#8E2CC2' }), armR: arm('#2A1638', '#7BC96A', { cuff: '#8E2CC2' }) };
  },
  vampire() {
    const b = new Builder();
    const gl = new Builder();
    legs(b, '#141218', '#0A0A0E');
    torso(b, '#F2F0F5');
    b.add(G.rbox(0.36, 0.38, 0.1, 0.04), '#9A1428', [0, 1.02, 0.17]);
    b.add(G.cone(0.08, 0.12, 3), '#141218', [0, 1.26, 0.2], [PI, 0, 0], [1.4, 1, 0.4]);
    // cape: open cone behind, with tall collar
    b.add(new THREE.CylinderGeometry(0.32, 0.62, 1.2, 16, 1, true, PI * 0.62, PI * 1.76), '#141218', [0, 0.72, -0.02]);
    b.add(new THREE.CylinderGeometry(0.31, 0.6, 1.18, 16, 1, true, PI * 0.62, PI * 1.76), '#B0102A', [0, 0.72, -0.02]);
    b.add(new THREE.CylinderGeometry(0.4, 0.26, 0.42, 14, 1, true, PI * 0.7, PI * 1.6), '#141218', [0, 1.48, -0.04]);
    head(b, '#E6E1F0');
    b.add(new THREE.SphereGeometry(0.25, 16, 10, 0, PI * 2, 0, PI / 2), '#141218', [0, 1.6, -0.02], null, [1.02, 0.7, 1.05]);
    b.add(G.cone(0.06, 0.14, 4), '#141218', [0, 1.74, 0.17], [PI, 0, 0], [1, 1, 0.5]);
    eyes(b, gl, 1.58, 0.21, { glow: '#FF2A3A' });
    b.add(G.cone(0.015, 0.05, 4), '#FFFFFF', [-0.03, 1.45, 0.225], [PI, 0, 0]);
    b.add(G.cone(0.015, 0.05, 4), '#FFFFFF', [0.03, 1.45, 0.225], [PI, 0, 0]);
    smile(b, 1.48, 0.225, '#5A0A18');
    return { b, gl, armL: arm('#141218', '#E6E1F0', { cuff: '#F2F0F5' }), armR: arm('#141218', '#E6E1F0', { cuff: '#F2F0F5' }) };
  },
  skeleton() {
    const b = new Builder();
    const gl = new Builder();
    const bone = '#EDE6D2';
    for (const x of [-0.11, 0.11]) {
      b.add(G.capsule(0.045, 0.32, 3, 6), bone, [x, 0.62, 0]);
      b.add(G.capsule(0.04, 0.32, 3, 6), bone, [x, 0.25, 0]);
      b.add(G.sphere(0.06, 8, 6), bone, [x, 0.44, 0]);
      b.add(G.rbox(0.14, 0.07, 0.24, 0.03), bone, [x, 0.04, 0.05]);
    }
    b.add(G.rbox(0.36, 0.14, 0.18, 0.06), bone, [0, 0.84, 0]);
    b.add(G.cyl(0.035, 0.035, 0.44, 6), bone, [0, 1.05, -0.06]);
    for (let i = 0; i < 4; i++) b.add(G.torus(0.2 - i * 0.015, 0.025, 4, 14), bone, [0, 1.0 + i * 0.075, 0], [PI / 2, 0, 0], [1, 0.8, 1]);
    b.add(G.cyl(0.3, 0.3, 0.05, 10), bone, [0, 1.27, -0.02], null, [1, 1, 0.5]);
    b.add(G.sphere(0.25, 18, 14), bone, [0, 1.58, 0], null, [1, 1.0, 1]);
    b.add(G.rbox(0.28, 0.14, 0.22, 0.06), bone, [0, 1.38, 0.05]);
    for (const x of [-0.09, 0.09]) {
      b.add(G.sphere(0.075, 10, 8), '#1A0B1E', [x, 1.58, 0.19], null, [1, 1.1, 0.6]);
      gl.add(G.sphere(0.025, 6, 4), '#9CFF5A', [x, 1.58, 0.24], null, null, 2.4);
    }
    b.add(G.cone(0.035, 0.07, 3), '#1A0B1E', [0, 1.48, 0.235], [PI, 0, 0]);
    for (let i = -2; i <= 2; i++) b.add(G.box(0.035, 0.05, 0.02), '#1A0B1E', [i * 0.045, 1.38, 0.165]);
    const bArm = () => {
      const a = new Builder();
      a.add(G.capsule(0.035, 0.24, 3, 6), bone, [0, -0.16, 0]);
      a.add(G.sphere(0.045, 6, 4), bone, [0, -0.32, 0]);
      a.add(G.capsule(0.03, 0.22, 3, 6), bone, [0, -0.46, 0]);
      a.add(G.sphere(0.06, 8, 6), bone, [0, -0.62, 0], null, [1, 1.2, 0.6]);
      return a;
    };
    return { b, gl, armL: bArm(), armR: bArm() };
  },
  werewolf() {
    const b = new Builder();
    const gl = new Builder();
    const fur = '#6B4A35';
    legs(b, '#3A3F6A', '#2A1A12');
    torso(b, '#C23A3A');
    for (let i = 0; i < 3; i++) b.add(G.cyl(0.285, 0.285, 0.05, 14), '#F2E6C8', [0, 0.95 + i * 0.12, 0], null, [1, 1, 0.8]);
    b.add(G.sphere(0.25, 16, 12), fur, [0, 1.56, 0]);
    b.add(G.rbox(0.2, 0.15, 0.24, 0.07), '#8A6A50', [0, 1.48, 0.2]);
    b.add(G.sphere(0.045, 8, 6), '#141218', [0, 1.53, 0.33]);
    b.add(G.cone(0.09, 0.2, 4), fur, [-0.15, 1.8, 0], [0, 0, 0.3]);
    b.add(G.cone(0.09, 0.2, 4), fur, [0.15, 1.8, 0], [0, 0, -0.3]);
    b.add(G.cone(0.05, 0.1, 4), '#E8A0A8', [-0.15, 1.79, 0.03], [0, 0, 0.3]);
    b.add(G.cone(0.05, 0.1, 4), '#E8A0A8', [0.15, 1.79, 0.03], [0, 0, -0.3]);
    for (const x of [-0.18, 0.18]) b.add(G.cone(0.07, 0.16, 4), fur, [x * 1.2, 1.48, 0.05], [0, 0, x > 0 ? -1.9 : 1.9]);
    eyes(b, gl, 1.63, 0.2, { glow: '#FFE600' });
    b.add(G.cone(0.02, 0.05, 4), '#FFFFFF', [-0.04, 1.4, 0.3], [PI, 0, 0]);
    b.add(G.cone(0.02, 0.05, 4), '#FFFFFF', [0.04, 1.4, 0.3], [PI, 0, 0]);
    b.add(tube([[0, 0.85, -0.18], [0, 0.7, -0.4], [0.1, 0.8, -0.6]], 0.08, 0.03, 8, 6), fur);
    return { b, gl, armL: arm(fur, fur, { claws: true }), armR: arm(fur, fur, { claws: true }) };
  },
  zombie() {
    const b = new Builder();
    const gl = new Builder();
    const skin = '#8DBA6A';
    legs(b, '#5A3E2A', '#2A1A12');
    b.add(G.capsule(0.11, 0.25, 3, 8), skin, [0.11, 0.28, 0]);
    torso(b, '#3A6AB0', { belt: '#2A1A12' });
    b.add(G.cone(0.12, 0.2, 3), '#3A6AB0', [-0.18, 0.75, 0.15], [PI, 0, 0]);
    b.add(G.cone(0.1, 0.18, 3), '#3A6AB0', [0.12, 0.74, 0.17], [PI, 0, 0]);
    head(b, skin);
    b.add(G.sphere(0.07, 8, 6), '#6E9A50', [0.15, 1.7, 0.12]);
    eyes(b, gl, 1.6, 0.21, { white: '#FFFDE0', pupil: '#C02020' });
    b.add(G.rbox(0.16, 0.05, 0.04, 0.02), '#3A1020', [0, 1.45, 0.215]);
    b.add(G.box(0.03, 0.05, 0.02), '#FFFFFF', [-0.04, 1.47, 0.235]);
    b.add(G.box(0.03, 0.05, 0.02), '#FFFFFF', [0.03, 1.47, 0.235]);
    for (let i = 0; i < 5; i++) b.add(G.cone(0.04, 0.12, 4), '#3E2A1A', [-0.16 + i * 0.08, 1.8, -0.02], [0.2 * (i - 2), 0, 0.3 * (i - 2)]);
    return { b, gl, armL: arm('#3A6AB0', skin, { cuff: skin }), armR: arm('#3A6AB0', skin, { cuff: skin }), armsForward: true };
  },
  ghost() {
    const b = new Builder();
    const gl = new Builder();
    b.add(lathe([[0, 1.95], [0.3, 1.88], [0.45, 1.65], [0.48, 1.3], [0.55, 0.9], [0.62, 0.6], [0.66, 0.45], [0.0, 0.5]], 22), '#F4F0FF', [0, 0, 0]);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * PI * 2;
      b.add(G.cone(0.14, 0.3, 6), '#F4F0FF', [Math.cos(a) * 0.55, 0.36, Math.sin(a) * 0.55], [PI, 0, 0]);
    }
    b.add(G.sphere(0.09, 10, 8), '#1A0B2E', [-0.15, 1.55, 0.42], null, [1, 1.5, 0.5]);
    b.add(G.sphere(0.09, 10, 8), '#1A0B2E', [0.15, 1.55, 0.42], null, [1, 1.5, 0.5]);
    b.add(G.sphere(0.11, 10, 8), '#1A0B2E', [0, 1.3, 0.46], null, [1.1, 1.3, 0.5]);
    gl.add(G.sphere(0.03, 6, 4), '#FFFFFF', [-0.13, 1.59, 0.47], null, null, 1.4);
    gl.add(G.sphere(0.03, 6, 4), '#FFFFFF', [0.17, 1.59, 0.47], null, null, 1.4);
    return { b, gl, armL: arm('#F4F0FF', '#F4F0FF', { r: 0.09 }), armR: arm('#F4F0FF', '#F4F0FF', { r: 0.09 }), armsForward: true, float: true };
  },
  scarecrow() {
    const b = new Builder();
    const gl = new Builder();
    legs(b, '#4A5A8A', '#3E2414', { wide: true });
    for (const x of [-0.11, 0.11]) for (let i = 0; i < 3; i++) b.add(G.cone(0.03, 0.14, 3), '#D9B24A', [x + (i - 1) * 0.04, 0.14, 0.05], [PI, 0, 0]);
    torso(b, '#B8322B', { belt: '#5A3620' });
    for (let i = 0; i < 3; i++) {
      b.add(G.cyl(0.29, 0.29, 0.025, 14), '#1A1420', [0, 0.95 + i * 0.12, 0], null, [1, 1, 0.8]);
    }
    for (const x of [-0.12, 0.12]) b.add(G.box(0.025, 0.5, 0.02), '#1A1420', [x, 1.05, 0.23]);
    // sack head with stitched smile
    b.add(G.sphere(0.26, 14, 12), '#C9A46A', [0, 1.57, 0], null, [1, 1.05, 0.95]);
    b.add(G.cyl(0.11, 0.14, 0.12, 8), '#A88450', [0, 1.33, 0]);
    b.add(G.cone(0.1, 0.18, 3), '#1A1420', [-0.09, 1.62, 0.22], [-PI / 2, 0, 0], [1, 1, 0.3]);
    b.add(G.cone(0.1, 0.18, 3), '#1A1420', [0.09, 1.62, 0.22], [-PI / 2, 0, 0], [1, 1, 0.3]);
    b.add(G.torus(0.11, 0.015, 4, 12, PI), '#1A1420', [0, 1.5, 0.22], [0, 0, PI]);
    for (let i = -2; i <= 2; i++) b.add(G.box(0.012, 0.06, 0.012), '#1A1420', [i * 0.045, 1.43 + Math.abs(i) * 0.012, 0.235]);
    b.add(G.cyl(0.5, 0.55, 0.04, 16), '#D9B24A', [0, 1.76, 0], [0.1, 0, 0]);
    b.add(G.cyl(0.2, 0.26, 0.26, 14), '#D9B24A', [0, 1.88, -0.02], [0.1, 0, 0]);
    b.add(G.cyl(0.265, 0.265, 0.06, 14), '#B8322B', [0, 1.8, -0.01], [0.1, 0, 0]);
    gl.add(G.sphere(0.03, 6, 4), '#FF8A1A', [-0.09, 1.62, 0.25], null, null, 2.2);
    gl.add(G.sphere(0.03, 6, 4), '#FF8A1A', [0.09, 1.62, 0.25], null, null, 2.2);
    const straw = (a) => {
      for (let i = 0; i < 4; i++) a.add(G.cone(0.025, 0.14, 3), '#D9B24A', [(i - 1.5) * 0.03, -0.6, 0], [PI, 0, (i - 1.5) * 0.3]);
    };
    return { b, gl, armL: arm('#B8322B', '#D9B24A', { extra: straw }), armR: arm('#B8322B', '#D9B24A', { extra: straw }), armsForward: false, tpose: true };
  },
  mummy() {
    const b = new Builder();
    const gl = new Builder();
    const w1 = '#E9DFC4';
    const w2 = '#D2C5A2';
    for (const x of [-0.11, 0.11]) {
      for (let i = 0; i < 6; i++) b.add(G.cyl(0.12 - i * 0.004, 0.125 - i * 0.004, 0.14, 10), i % 2 ? w1 : w2, [x, 0.08 + i * 0.13, 0], [0.1 * ((i % 3) - 1), 0, 0.08 * ((i % 2) * 2 - 1)]);
    }
    for (let i = 0; i < 5; i++) b.add(G.cyl(0.27 - (i === 4 ? 0.04 : 0), 0.28, 0.13, 14), i % 2 ? w1 : w2, [0, 0.86 + i * 0.1, 0], [0.06 * ((i % 3) - 1), 0, 0.05 * ((i % 2) * 2 - 1)], [1, 1, 0.8]);
    b.add(G.sphere(0.24, 16, 12), w1, [0, 1.56, 0]);
    for (let i = 0; i < 4; i++) b.add(G.torus(0.235, 0.03, 4, 18), i % 2 ? w2 : w1, [0, 1.42 + i * 0.1, 0], [PI / 2 + 0.15 * (i % 2 ? 1 : -1), 0, 0]);
    b.add(G.box(0.3, 0.07, 0.1), '#2A1A2A', [0.02, 1.6, 0.19]);
    gl.add(G.sphere(0.035, 6, 4), '#FFE600', [-0.07, 1.6, 0.23], null, null, 2.6);
    gl.add(G.sphere(0.035, 6, 4), '#FFE600', [0.09, 1.6, 0.23], null, null, 2.6);
    b.add(tube([[0.2, 1.0, 0.12], [0.35, 0.8, 0.2], [0.3, 0.55, 0.3]], 0.03, 0.02, 8, 4), w1);
    const mArm = () => {
      const a = new Builder();
      for (let i = 0; i < 4; i++) a.add(G.cyl(0.08, 0.085, 0.15, 8), i % 2 ? w1 : w2, [0, -0.08 - i * 0.14, 0], [0.12 * (i % 2 ? 1 : -1), 0, 0]);
      a.add(G.sphere(0.075, 8, 6), w1, [0, -0.62, 0]);
      return a;
    };
    return { b, gl, armL: mArm(), armR: mArm(), armsForward: true };
  },
};

const cache = new Map();
const levelsOf = new Map(); // kind → cached entries of every detail level

/** Merged character parts, cached per kind and detail level (see withDetail). */
export function geometryFor(kind, detail = 1) {
  const key = detail === 1 ? kind : kind + '@' + detail;
  if (cache.has(key)) return cache.get(key);
  const def = withDetail(detail, () => (KINDS[kind] || KINDS.pumpkinKid)());
  const entry = {
    body: def.b.build(),
    glow: def.gl.build(),
    armL: def.armL.build(),
    armR: def.armR.build(),
    armsForward: !!def.armsForward,
    float: !!def.float,
    tpose: !!def.tpose,
  };
  const levels = levelsOf.get(kind) || [];
  for (const part of ['body', 'glow', 'armL', 'armR']) entry[part] = shareIdentical(entry[part], levels.map((l) => l[part]));
  levels.push(entry);
  levelsOf.set(kind, levels);
  cache.set(key, entry);
  return entry;
}

export const CHARACTER_KINDS = Object.keys(KINDS);

export function createCharacter(kind, { nofog = false, shadows = true } = {}) {
  const e = geometryFor(kind);
  const bodyMat = nofog ? MATS.bodyNoFog : MATS.body;
  const root = new THREE.Group();
  const inner = new THREE.Group();
  root.add(inner);
  const body = new THREE.Mesh(e.body, bodyMat);
  body.castShadow = shadows;
  inner.add(body);
  if (e.glow) inner.add(new THREE.Mesh(e.glow, nofog ? MATS.glowNoFog : MATS.glow));
  const armL = new THREE.Group();
  const armR = new THREE.Group();
  armL.position.set(-SH_X, SH_Y, 0);
  armR.position.set(SH_X, SH_Y, 0);
  const mL = new THREE.Mesh(e.armL, bodyMat);
  const mR = new THREE.Mesh(e.armR, bodyMat);
  mL.castShadow = mR.castShadow = shadows;
  armL.add(mL);
  armR.add(mR);
  inner.add(armL, armR);
  const ch = { root, inner, armL, armR, kind, armsForward: e.armsForward, float: e.float, tpose: e.tpose };
  restPose(ch);
  return ch;
}

/** Default arm pose (zombies reach forward, scarecrows hold a T-pose). */
export function restPose(ch) {
  ch.armL.rotation.set(0, 0, -0.12);
  ch.armR.rotation.set(0, 0, 0.12);
  if (ch.armsForward) {
    ch.armL.rotation.set(-1.45, 0, -0.08);
    ch.armR.rotation.set(-1.55, 0, 0.08);
  }
  if (ch.tpose) {
    ch.armL.rotation.set(0, 0, -1.45);
    ch.armR.rotation.set(0, 0, 1.45);
  }
}
