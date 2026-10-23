import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { QUALITY, RESOLUTIONS } from './settings.js';

// Card-background blur (golden-angle disc) + vignette + output colour space in
// one pass (it replaces a separate OutputPass; tone mapping is off).
const FinishShader = {
  uniforms: {
    tDiffuse: { value: null },
    uBlur: { value: 0 },
    uRes: { value: new THREE.Vector2(1, 1) },
    uVignette: { value: 0.45 },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uBlur;
    uniform vec2 uRes;
    uniform float uVignette;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      if (uBlur > 0.01) {
        vec3 acc = c.rgb;
        float n = 1.0;
        for (int i = 0; i < 32; i++) {
          float fi = float(i);
          float r = sqrt((fi + 0.5) / 32.0) * uBlur;
          float a = fi * 2.39996;
          vec2 o = vec2(cos(a), sin(a)) * r / uRes.y;
          o.x *= uRes.y / uRes.x;
          acc += texture2D(tDiffuse, vUv + o).rgb;
          n += 1.0;
        }
        c.rgb = acc / n;
      }
      vec2 d = vUv - 0.5;
      d.x *= uRes.x / uRes.y;
      float v = smoothstep(0.35, 1.05, length(d) * 1.15);
      c.rgb *= 1.0 - v * uVignette;
      gl_FragColor = c;
      #include <colorspace_fragment>
    }`,
};

const MAX_WINDOW_PIXELS = 2560 * 1440;

// The bloom blur chain normally runs at half the canvas size; `bloomScale`
// (quality setting) can drop it further.
class ScaledBloomPass extends UnrealBloomPass {
  constructor(...args) {
    super(...args);
    this.scale = 0.5;
  }
  setSize(w, h) {
    // UnrealBloomPass halves what it is given
    super.setSize(Math.max(2, Math.round(w * this.scale * 2)), Math.max(2, Math.round(h * this.scale * 2)));
  }
}
const HUD_MAX_SIDE = 1920;

export class Renderer {
  constructor(canvas, stage) {
    this.canvas = canvas;
    this.stage = stage;
    const r = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', alpha: false, preserveDrawingBuffer: false });
    // composer + HUD are several render calls; the debug overlay wants the frame total
    r.info.autoReset = false;
    r.setPixelRatio(1);
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.toneMapping = THREE.NoToneMapping;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFShadowMap;
    this.renderer = r;

    this.width = 2;
    this.height = 2;
    this.quality = QUALITY.high;
    this.resolutionKey = 'window';
    this.dynScale = 1; // Auto resolution factor (window mode only)
    this.bypassPost = false; // debug: draw the scene straight to the canvas

    const rt = new THREE.WebGLRenderTarget(2, 2, { type: THREE.HalfFloatType, samples: 4 });
    this.composer = new EffectComposer(r, rt);
    this.composer.setPixelRatio(1);
    this.renderPass = new RenderPass(new THREE.Scene(), new THREE.PerspectiveCamera());
    // UnrealBloomPass runs its blur chain at half resolution (setSize halves it)
    this.bloom = new ScaledBloomPass(new THREE.Vector2(256, 256), 0.6, 0.42, 0.8);
    this.finish = new ShaderPass(FinishShader);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloom);
    this.composer.addPass(this.finish);

    // HUD: a 2D canvas. During normal play it sits over the game canvas as a
    // DOM layer (the browser composites it, no texture upload). While a video
    // is recorded or exported it is composited into the WebGL frame as a
    // fullscreen quad instead, so it is part of the captured pixels.
    this.hudCanvas = document.createElement('canvas');
    this.hudCanvas.width = 2;
    this.hudCanvas.height = 2;
    this.hudCanvas.id = 'hud';
    this.hudCanvas.style.cssText =
      'position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none;display:none;';
    canvas.after(this.hudCanvas);
    this.hudInScene = false;
    this.hudCtx = this.hudCanvas.getContext('2d');
    this.hudScene = new THREE.Scene();
    this.hudCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    this.hudMat = new THREE.MeshBasicMaterial({ transparent: true, depthTest: false, depthWrite: false, toneMapped: false });
    this.hudQuad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.hudMat);
    this.hudQuad.frustumCulled = false;
    this.hudScene.add(this.hudQuad);
    this._makeHudTexture();
    this.hudVisible = true;
    this.hudDirty = true; // set by the Hud when the canvas was redrawn
    this.hudBlank = false; // nothing on the HUD → skip its draw call entirely

    this.onResize = null;
    window.addEventListener('resize', () => this.resize());
  }

  _makeHudTexture() {
    if (this.hudTex) this.hudTex.dispose();
    this.hudTex = new THREE.CanvasTexture(this.hudCanvas);
    this.hudTex.colorSpace = THREE.SRGBColorSpace;
    this.hudTex.minFilter = THREE.LinearFilter;
    this.hudTex.magFilter = THREE.LinearFilter;
    this.hudTex.generateMipmaps = false;
    this.hudMat.map = this.hudTex;
    this.hudMat.needsUpdate = true;
  }

  get aspect() {
    return this.width / this.height;
  }

  setQuality(key) {
    this.quality = QUALITY[key] || QUALITY.high;
    this.bloom.enabled = !!this.quality.bloom;
    this.bloom.strength = this.quality.bloomStrength || 0.6;
    const bs = this.quality.bloomScale || 0.5;
    if (this.bloom.scale !== bs) {
      this.bloom.scale = bs;
      this.width = 0; // force the targets to be re-sized
    }
    const samples = this.quality.msaa ?? 4;
    for (const rt of [this.composer.renderTarget1, this.composer.renderTarget2]) {
      if (rt.samples !== samples) {
        rt.samples = samples;
        rt.dispose(); // re-created with the new sample count on next use
      }
    }
    this.resize();
  }

  setResolution(key) {
    this.resolutionKey = RESOLUTIONS[key] ? key : 'window';
    this.resize();
  }

  /** Auto resolution: scale of the window-mode canvas (1 = full). */
  setDynScale(k) {
    k = Math.min(1, Math.max(0.5, k));
    if (Math.abs(k - this.dynScale) < 0.001) return;
    this.dynScale = k;
    this.resize();
  }

  setBlur(px) {
    // px are measured at 1080p and scaled with the output height.
    this.finish.uniforms.uBlur.value = px * (this.height / 1080);
  }

  resize() {
    const sw = Math.max(2, this.stage.clientWidth || window.innerWidth);
    const sh = Math.max(2, this.stage.clientHeight || window.innerHeight);
    const fixed = RESOLUTIONS[this.resolutionKey] && RESOLUTIONS[this.resolutionKey].size;
    let w, h;
    if (fixed) {
      [w, h] = fixed;
      const s = Math.min(sw / w, sh / h);
      this.canvas.style.width = Math.floor(w * s) + 'px';
      this.canvas.style.height = Math.floor(h * s) + 'px';
      this.hudCanvas.style.width = this.canvas.style.width;
      this.hudCanvas.style.height = this.canvas.style.height;
    } else {
      const pr = Math.min(window.devicePixelRatio || 1, this.quality.pixelRatio) * this.dynScale;
      w = Math.round(sw * pr);
      h = Math.round(sh * pr);
      if (w * h > MAX_WINDOW_PIXELS) {
        const k = Math.sqrt(MAX_WINDOW_PIXELS / (w * h));
        w = Math.round(w * k);
        h = Math.round(h * k);
      }
      this.canvas.style.width = '100%';
      this.canvas.style.height = '100%';
      this.hudCanvas.style.width = '100%';
      this.hudCanvas.style.height = '100%';
    }
    if (w === this.width && h === this.height) return;
    this.width = w;
    this.height = h;
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);
    this.finish.uniforms.uRes.value.set(w, h);

    const hs = Math.min(1, HUD_MAX_SIDE / Math.max(w, h));
    this.hudCanvas.width = Math.max(2, Math.round(w * hs));
    this.hudCanvas.height = Math.max(2, Math.round(h * hs));
    this._makeHudTexture();
    this.hudDirty = true;
    if (this.onResize) this.onResize(w, h);
  }

  /** true while recording / exporting: the HUD must be inside the WebGL frame. */
  setHudInScene(on) {
    if (on === this.hudInScene) return;
    this.hudInScene = on;
    this.hudDirty = true; // the texture may be stale after DOM-only frames
  }

  render(scene, camera) {
    this.renderer.info.reset();
    this.renderPass.scene = scene;
    this.renderPass.camera = camera;
    if (this.bypassPost) {
      this.renderer.setRenderTarget(null);
      this.renderer.render(scene, camera);
    } else this.composer.render();
    const showHud = this.hudVisible && !this.hudBlank;
    const domHud = showHud && !this.hudInScene ? 'block' : 'none';
    if (this.hudCanvas.style.display !== domHud) this.hudCanvas.style.display = domHud;
    if (showHud && this.hudInScene) {
      // re-upload the HUD canvas only when it was redrawn this frame
      if (this.hudDirty) {
        this.hudTex.needsUpdate = true;
        this.hudDirty = false;
      }
      const r = this.renderer;
      r.autoClear = false;
      r.render(this.hudScene, this.hudCam);
      r.autoClear = true;
    }
  }
}
