import * as THREE from 'three';
import { Builder, G, lathe, pumpkinGeo, faceGeo } from '../core/geo.js';
import { toon, glow } from '../core/materials.js';
import { createCharacter } from '../entities/characters.js';
import { RNG } from '../core/rng.js';

// Swirling violet→magenta sky dome, moon, stars, and the flying things that live
// in it (ghosts, bats, pumpkins, a witch on a broom). Everything here follows the
// camera position so it always reads as "far away".

const DOME_VS = /* glsl */ `
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`;

const DOME_FS = /* glsl */ `
uniform float uTime;
uniform vec3 uFog;
uniform vec3 uC1; // #7C1FA6 low violet
uniform vec3 uC2; // #4B0E78
uniform vec3 uC3; // #1E0538 top
uniform vec3 uMagenta;
uniform vec3 uMoonDir;
uniform float uFogMix;
uniform sampler2D uNoise; // 5-octave fbm baked once, tiling every NOISE_PERIOD
varying vec3 vDir;

float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
// 0.125 = 1 / NOISE_PERIOD
float fbm(vec2 p) { return texture2D(uNoise, p * 0.125).r; }

void main() {
  vec3 d = normalize(vDir);
  float el = d.y;
  float h = clamp(el / 0.55, 0.0, 1.0);
  vec3 col = mix(uC1, uC2, smoothstep(0.08, 0.45, h));
  col = mix(col, uC3, smoothstep(0.45, 1.0, h));
  // swirl clouds (only inside the band they can show up in)
  float az = atan(d.z, d.x);
  float band = smoothstep(0.0, 0.18, el) * (1.0 - smoothstep(0.35, 0.8, el));
  if (band > 0.0) {
    vec2 uv = vec2(az * 2.2, el * 5.5);
    float t = uTime * 0.03;
    vec2 q = vec2(fbm(uv + vec2(t, 0.0)), fbm(uv + vec2(5.2, 1.3 - t)));
    float c = fbm(uv + 2.4 * q + vec2(t * 0.6, 0.0));
    col = mix(col, uMagenta, smoothstep(0.48, 0.85, c) * 0.62 * band);
    col += vec3(0.12, 0.03, 0.16) * smoothstep(0.55, 0.9, q.x) * band;
  }
  // stars
  vec2 sp = vec2(az * 60.0, el * 60.0);
  float st = hash(floor(sp));
  float tw = 0.6 + 0.4 * sin(uTime * 2.0 + st * 40.0);
  float star = step(0.985, st) * smoothstep(0.25, 0.6, el) * (1.0 - smoothstep(0.3, 0.5, length(fract(sp) - 0.5))) * tw;
  col += vec3(1.0, 0.95, 1.0) * star * 0.9;
  // moon + halo
  float md = dot(d, normalize(uMoonDir));
  col += vec3(0.55, 0.35, 0.6) * pow(max(md, 0.0), 40.0) * 0.6;
  if (md > 0.9988) {
    float disc = smoothstep(0.9988, 0.9992, md);
    float crater = fbm(d.xy * 90.0) * 0.18;
    col = mix(col, vec3(1.0, 0.96, 0.82) * (1.15 - crater), disc);
  }
  // fog at the horizon (and thicker inside fog bridges)
  float fogBand = 1.0 - smoothstep(-0.02, 0.12 + uFogMix * 0.35, el);
  col = mix(col, uFog, clamp(fogBand + uFogMix * 0.25, 0.0, 1.0));
  gl_FragColor = vec4(col, 1.0);
  #include <colorspace_fragment>
}`;

const NOISE_SIZE = 1024;
const NOISE_PERIOD = 8; // in shader uv units

/**
 * The sky's fbm (5 octaves of smooth value noise, each octave double the
 * frequency of the last) baked into a seamlessly tiling texture: the shader
 * then pays one texture read per fbm instead of 20 hashes.
 */
function bakeNoise() {
  const N = NOISE_SIZE;
  const out = new Uint8Array(N * N);
  const acc = new Float32Array(N * N);
  const hash = (x, y, k) => {
    let h = Math.imul(x, 374761393) ^ Math.imul(y, 668265263) ^ Math.imul(k + 1, 1442695041);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
  };
  let a = 0.5;
  for (let k = 0; k < 5; k++) {
    const L = NOISE_PERIOD << k; // lattice cells across the tile at this octave
    const lat = new Float32Array(L * L);
    for (let y = 0; y < L; y++) for (let x = 0; x < L; x++) lat[y * L + x] = hash(x, y, k);
    const step = L / N;
    for (let py = 0; py < N; py++) {
      const fy = py * step;
      const iy = Math.floor(fy);
      let v = fy - iy;
      v = v * v * (3 - 2 * v);
      const r0 = iy * L;
      const r1 = ((iy + 1) % L) * L;
      for (let px = 0; px < N; px++) {
        const fx = px * step;
        const ix = Math.floor(fx);
        let u = fx - ix;
        u = u * u * (3 - 2 * u);
        const ix1 = (ix + 1) % L;
        const top = lat[r0 + ix] + (lat[r0 + ix1] - lat[r0 + ix]) * u;
        const bot = lat[r1 + ix] + (lat[r1 + ix1] - lat[r1 + ix]) * u;
        acc[py * N + px] += a * (top + (bot - top) * v);
      }
    }
    a *= 0.5;
  }
  for (let i = 0; i < N * N; i++) out[i] = Math.round(Math.min(1, acc[i]) * 255);
  const t = new THREE.DataTexture(out, N, N, THREE.RedFormat, THREE.UnsignedByteType);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearFilter;
  t.generateMipmaps = false;
  t.needsUpdate = true;
  return t;
}

function ghostGeo() {
  const b = new Builder();
  b.add(lathe([[0, 1.0], [0.28, 0.92], [0.42, 0.7], [0.48, 0.35], [0.55, 0.05], [0.62, -0.1], [0, -0.05]], 18), '#F4F0FF', [0, 0, 0]);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    b.add(G.cone(0.13, 0.28, 6), '#F4F0FF', [Math.cos(a) * 0.48, -0.2, Math.sin(a) * 0.48], [Math.PI, 0, 0]);
  }
  b.add(G.sphere(0.07, 8, 6), '#1A0B2E', [-0.14, 0.62, 0.38], null, [1, 1.4, 0.6]);
  b.add(G.sphere(0.07, 8, 6), '#1A0B2E', [0.14, 0.62, 0.38], null, [1, 1.4, 0.6]);
  b.add(G.sphere(0.08, 8, 6), '#1A0B2E', [0, 0.42, 0.42], null, [1, 1.3, 0.5]);
  b.add(G.capsule(0.07, 0.4, 3, 6), '#F4F0FF', [-0.45, 0.4, 0.15], [0, 0, 1.0]);
  b.add(G.capsule(0.07, 0.4, 3, 6), '#F4F0FF', [0.45, 0.4, 0.15], [0, 0, -1.0]);
  return b.build();
}

function batGeo() {
  const b = new Builder();
  b.add(G.sphere(0.16, 8, 6), '#140A1C', [0, 0, 0], null, [1, 0.9, 1.3]);
  b.add(G.sphere(0.11, 8, 6), '#140A1C', [0, 0.06, 0.18]);
  b.add(G.cone(0.04, 0.12, 4), '#140A1C', [-0.06, 0.18, 0.18]);
  b.add(G.cone(0.04, 0.12, 4), '#140A1C', [0.06, 0.18, 0.18]);
  return b.build();
}

function wingGeo(side) {
  const s = new THREE.Shape();
  s.moveTo(0, 0);
  s.lineTo(0.3, 0.12);
  s.lineTo(0.62, 0.05);
  s.lineTo(0.55, -0.1);
  s.lineTo(0.42, -0.04);
  s.lineTo(0.32, -0.14);
  s.lineTo(0.2, -0.06);
  s.lineTo(0.08, -0.14);
  s.closePath();
  const g = new THREE.ShapeGeometry(s);
  g.rotateX(-Math.PI / 2);
  if (side < 0) g.scale(-1, 1, 1);
  const b = new Builder();
  b.add(g, '#1E0E2A', [0, 0, 0]);
  return b.build();
}

function flyingPumpkinGeo() {
  const b = new Builder();
  b.add(pumpkinGeo(0.5, 0.72, 8, 18), '#FF5E00', [0, -0.36, 0]);
  b.add(G.cyl(0.05, 0.08, 0.22, 6), '#3E7A1E', [0, 0.42, 0]);
  return b.build();
}

export class Sky {
  constructor(scene) {
    this.group = new THREE.Group();
    scene.add(this.group);
    this.uniforms = {
      uTime: { value: 0 },
      uFog: { value: new THREE.Color('#C8C6D4') },
      uC1: { value: new THREE.Color('#7C1FA6') },
      uC2: { value: new THREE.Color('#4B0E78') },
      uC3: { value: new THREE.Color('#1E0538') },
      uMagenta: { value: new THREE.Color('#C23AB8') },
      uMoonDir: { value: new THREE.Vector3(-0.45, 0.42, -1) },
      uFogMix: { value: 0 },
      uNoise: { value: bakeNoise() },
    };
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(320, 48, 24),
      new THREE.ShaderMaterial({ vertexShader: DOME_VS, fragmentShader: DOME_FS, uniforms: this.uniforms, side: THREE.BackSide, depthWrite: false, fog: false })
    );
    dome.frustumCulled = false;
    // drawn after every opaque object (it sits on the far plane and depth-tests),
    // so it only shades the pixels nothing else covered
    dome.renderOrder = 10;
    this.dome = dome;
    this.group.add(dome);

    const rng = new RNG(4242);
    const nofogBody = toon({ vc: true, nofog: true });

    // ghosts drifting in the sky
    const gg = ghostGeo();
    this.ghosts = [];
    const ghostMat = toon({ vc: true, nofog: true, transparent: true, opacity: 0.88, emissive: '#3A2A5A' });
    for (let i = 0; i < 5; i++) {
      const m = new THREE.Mesh(gg, ghostMat);
      m.userData = { a: rng.range(-0.9, 0.9), r: rng.range(55, 85), y: rng.range(14, 30), sp: rng.range(0.03, 0.07) * rng.sign(), ph: rng.range(0, 6.28), sc: rng.range(2.2, 3.4) };
      this.ghosts.push(m);
      this.group.add(m);
    }

    // bats (body + two flapping wings, instanced)
    const N = 22;
    this.batBody = new THREE.InstancedMesh(batGeo(), nofogBody, N);
    this.batWingL = new THREE.InstancedMesh(wingGeo(-1), toon({ vc: true, nofog: true, double: true }), N);
    this.batWingR = new THREE.InstancedMesh(wingGeo(1), toon({ vc: true, nofog: true, double: true }), N);
    this.bats = [];
    for (let i = 0; i < N; i++) {
      this.bats.push({ a: rng.range(-1.2, 1.2), r: rng.range(25, 70), y: rng.range(7, 22), sp: rng.range(0.08, 0.16) * rng.sign(), ph: rng.range(0, 6.28), sc: rng.range(1.2, 2.2), wob: rng.range(0.5, 1.5) });
    }
    for (const m of [this.batBody, this.batWingL, this.batWingR]) {
      m.frustumCulled = false;
      m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      this.group.add(m);
    }

    // flying jack-o'-lanterns
    const pg = flyingPumpkinGeo();
    const fg = new Builder().add(faceGeo('jack', 0.55, 0.5), '#FFD21A', [0, 0, 0], null, null, 1.8).build();
    this.pumpkins = [];
    for (let i = 0; i < 4; i++) {
      const g = new THREE.Group();
      g.add(new THREE.Mesh(pg, nofogBody));
      g.add(new THREE.Mesh(fg, glow(0xffffff, 1, { vc: true, nofog: true })));
      g.userData = { a: rng.range(-1, 1), r: rng.range(40, 70), y: rng.range(12, 24), sp: rng.range(0.04, 0.08) * rng.sign(), ph: rng.range(0, 6.28), sc: rng.range(1.6, 2.6) };
      this.pumpkins.push(g);
      this.group.add(g);
    }

    // witch on a broom crossing the sky every ~18 s
    this.witch = new THREE.Group();
    const w = createCharacter('witch', { nofog: true });
    w.root.rotation.x = -0.25;
    w.root.position.y = -0.3;
    if (w.armL) w.armL.rotation.x = -1.2;
    if (w.armR) w.armR.rotation.x = -1.2;
    this.witch.add(w.root);
    const broom = new Builder();
    broom.add(G.cyl(0.05, 0.05, 2.6, 6), '#6B4423', [0, 0, 0], [Math.PI / 2, 0, 0]);
    broom.add(G.cone(0.32, 0.9, 10), '#D9B24A', [0, 0, -1.6], [-Math.PI / 2, 0, 0]);
    broom.add(G.cyl(0.08, 0.08, 0.1, 8), '#8E2C2C', [0, 0, -1.15], [Math.PI / 2, 0, 0]);
    const bm = new THREE.Mesh(broom.build(), nofogBody);
    bm.position.y = 0.55;
    this.witch.add(bm);
    this.witch.scale.setScalar(2.4);
    this.witchTrail = [];
    this.group.add(this.witch);
    this.witchPeriod = 18;

    this._fwd = new THREE.Vector3();
    this._m = new THREE.Matrix4();
    this._q = new THREE.Quaternion();
    this._e = new THREE.Euler();
    this._p = new THREE.Vector3();
    this._s = new THREE.Vector3();
  }

  _place(obj, d, t) {
    const fx = this._fx;
    const fz = this._fz;
    const ang = d.a + Math.sin(t * d.sp * 2 + d.ph) * 0.35 + t * d.sp * 0.25;
    const ca = Math.cos(ang);
    const sa = Math.sin(ang);
    // rotate forward by ang around Y
    const dx = fx * ca - fz * sa;
    const dz = fx * sa + fz * ca;
    obj.x = dx * d.r;
    obj.z = dz * d.r;
    obj.y = d.y + Math.sin(t * 0.9 + d.ph) * 1.2;
    return Math.atan2(-dx, -dz);
  }

  /**
   * @param time  run clock (deterministic animation)
   * @param camera
   * @param heading  track heading at the camera (radians)
   * @param fogMix 0..1 fog-bridge thickness
   */
  update(time, camera, heading, fogMix, fogColor) {
    const u = this.uniforms;
    u.uTime.value = time;
    u.uFogMix.value = fogMix;
    if (fogColor) u.uFog.value.copy(fogColor);
    this.group.position.copy(camera.position);
    // the forward direction of the road: things are laid out around it
    const fx = Math.sin(heading);
    const fz = -Math.cos(heading);
    this._fx = fx;
    this._fz = fz;
    const tmp = this._p;

    for (const g of this.ghosts) {
      const d = g.userData;
      const yaw = this._place(tmp, d, time);
      g.position.copy(tmp);
      g.rotation.set(0, yaw + Math.sin(time + d.ph) * 0.3, Math.sin(time * 1.3 + d.ph) * 0.12);
      g.scale.setScalar(d.sc);
    }

    for (let i = 0; i < this.bats.length; i++) {
      const d = this.bats[i];
      const yaw = this._place(tmp, d, time * 1.6);
      tmp.y += Math.sin(time * 3 * d.wob + d.ph) * 0.8;
      this._e.set(0, yaw + Math.PI / 2 * Math.sign(d.sp), 0);
      this._q.setFromEuler(this._e);
      this._s.setScalar(d.sc);
      this._m.compose(tmp, this._q, this._s);
      this.batBody.setMatrixAt(i, this._m);
      const flap = Math.sin(time * 14 + d.ph) * 0.9;
      this._e.set(0, yaw + Math.PI / 2 * Math.sign(d.sp), flap);
      this._q.setFromEuler(this._e);
      this._m.compose(tmp, this._q, this._s);
      this.batWingR.setMatrixAt(i, this._m);
      this._e.set(0, yaw + Math.PI / 2 * Math.sign(d.sp), -flap);
      this._q.setFromEuler(this._e);
      this._m.compose(tmp, this._q, this._s);
      this.batWingL.setMatrixAt(i, this._m);
    }
    this.batBody.instanceMatrix.needsUpdate = true;
    this.batWingL.instanceMatrix.needsUpdate = true;
    this.batWingR.instanceMatrix.needsUpdate = true;

    for (const g of this.pumpkins) {
      const d = g.userData;
      const yaw = this._place(tmp, d, time);
      g.position.copy(tmp);
      g.rotation.set(Math.sin(time * 0.8 + d.ph) * 0.3, yaw + time * 0.4, Math.sin(time * 0.6 + d.ph) * 0.25);
      g.scale.setScalar(d.sc);
    }

    // witch: sweeps across the view from one side to the other
    const P = this.witchPeriod;
    const cyc = Math.floor((time + 6) / P);
    const ph = ((time + 6) % P) / 7; // crossing takes 7 s
    if (ph <= 1) {
      this.witch.visible = true;
      const dir = cyc % 2 === 0 ? 1 : -1;
      const rx = Math.cos(heading);
      const rz = Math.sin(heading);
      const lat = (ph * 2 - 1) * 70 * dir;
      const dist = 60 + Math.sin(ph * Math.PI) * 10;
      this.witch.position.set(fx * dist + rx * lat, 22 + Math.sin(ph * Math.PI) * 6 + Math.sin(time * 4) * 0.4, fz * dist + rz * lat);
      // fly sideways (broom points along travel)
      const yaw = -heading + (dir > 0 ? Math.PI / 2 : -Math.PI / 2);
      this.witch.rotation.set(0, yaw, Math.sin(time * 2) * 0.1);
    } else this.witch.visible = false;
  }
}

