import * as THREE from 'three';

// Shared uniforms for every toon material (rim light colour, global time for sway).
export const shared = {
  time: { value: 0 },
  rimColor: { value: new THREE.Color('#E2B8FF') },
  rimStrength: { value: 0.55 },
};

let gradient = null;
export function gradientMap() {
  if (gradient) return gradient;
  const data = new Uint8Array([84, 84, 84, 255, 168, 168, 168, 255, 255, 255, 255, 255]);
  gradient = new THREE.DataTexture(data, 3, 1, THREE.RGBAFormat);
  gradient.minFilter = THREE.NearestFilter;
  gradient.magFilter = THREE.NearestFilter;
  gradient.generateMipmaps = false;
  gradient.needsUpdate = true;
  return gradient;
}

function patchRim(shader) {
  shader.uniforms.uRimColor = shared.rimColor;
  shader.uniforms.uRimStrength = shared.rimStrength;
  shader.fragmentShader =
    'uniform vec3 uRimColor;\nuniform float uRimStrength;\n' +
    shader.fragmentShader.replace(
      '#include <opaque_fragment>',
      `{
        float rimF = 1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0);
        outgoingLight += uRimColor * smoothstep(0.62, 0.84, rimF) * uRimStrength * (0.35 + 0.65 * diffuseColor.rgb);
      }
      #include <opaque_fragment>`
    );
}

function patchSway(shader, amp) {
  shader.uniforms.uTime = shared.time;
  shader.vertexShader =
    'uniform float uTime;\n' +
    shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      {
        float ph = 0.0;
        #ifdef USE_INSTANCING
          ph = instanceMatrix[3].x * 0.35 + instanceMatrix[3].z * 0.27;
        #endif
        float hh = max(position.y, 0.0);
        float bend = hh * hh * ${amp.toFixed(4)};
        transformed.x += sin(uTime * 1.7 + ph) * bend;
        transformed.z += cos(uTime * 1.3 + ph * 1.3) * bend * 0.6;
      }`
    );
}

const cache = new Map();

/**
 * Cached MeshToonMaterial with a 3-step gradient + rim light.
 * opts: color, vc (vertex colours), flat, double, transparent, opacity,
 *       emissive, ei, map, alphaTest, sway (amplitude), nofog, key
 */
export function toon(opts = {}) {
  const cacheable = !opts.map;
  const key = cacheable ? 'toon' + JSON.stringify(opts) : null;
  if (key && cache.has(key)) return cache.get(key);
  const m = new THREE.MeshToonMaterial({
    color: opts.color ?? 0xffffff,
    vertexColors: !!opts.vc,
    gradientMap: gradientMap(),
    flatShading: !!opts.flat,
    side: opts.double ? THREE.DoubleSide : THREE.FrontSide,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    emissive: opts.emissive ?? 0x000000,
    emissiveIntensity: opts.ei ?? 1,
    map: opts.map ?? null,
    alphaTest: opts.alphaTest ?? 0,
  });
  if (opts.nofog) m.fog = false;
  const sway = opts.sway || 0;
  m.onBeforeCompile = (shader) => {
    patchRim(shader);
    if (sway) patchSway(shader, sway);
  };
  m.customProgramCacheKey = () => 'rim' + sway;
  if (key) cache.set(key, m);
  return m;
}

/**
 * Unlit glowing material (feeds the bloom pass). With vc=true the vertex colours
 * carry the brightness (values above 1 are allowed).
 */
export function glow(color = 0xffffff, intensity = 1, opts = {}) {
  const key = 'glow' + JSON.stringify([color, intensity, opts]);
  if (cache.has(key)) return cache.get(key);
  const m = new THREE.MeshBasicMaterial({
    color: new THREE.Color(color).multiplyScalar(intensity),
    vertexColors: !!opts.vc,
    transparent: !!opts.transparent || !!opts.additive,
    opacity: opts.opacity ?? 1,
    side: opts.double ? THREE.DoubleSide : THREE.FrontSide,
    blending: opts.additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    depthWrite: !opts.additive && !opts.transparent,
    toneMapped: false,
  });
  if (opts.nofog) m.fog = false;
  cache.set(key, m);
  return m;
}

/** Shared vertex-coloured glow materials. FLICKER is modulated every frame. */
export const MATS = {
  get body() {
    return toon({ vc: true });
  },
  get flat() {
    return toon({ vc: true, flat: true });
  },
  get glow() {
    return glow(0xffffff, 1, { vc: true });
  },
  get flicker() {
    return glow(0xffffff, 1, { vc: true, key: 'flicker' });
  },
  get bodyNoFog() {
    return toon({ vc: true, nofog: true });
  },
  get glowNoFog() {
    return glow(0xffffff, 1, { vc: true, nofog: true });
  },
};

export function updateMaterials(time) {
  shared.time.value = time;
  const f = 0.9 + 0.07 * Math.sin(time * 13.0) + 0.05 * Math.sin(time * 23.7 + 1.3) + 0.04 * Math.sin(time * 5.3);
  MATS.flicker.color.setScalar(f);
}
