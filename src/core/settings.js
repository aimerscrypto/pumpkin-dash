const KEY = 'pumpkin-dash-settings-v1';

export const RESOLUTIONS = {
  window: { label: 'Fit window', size: null },
  '1280x720': { label: '1280 × 720 (HD)', size: [1280, 720] },
  '1920x1080': { label: '1920 × 1080 (Full HD)', size: [1920, 1080] },
  '1080x1920': { label: '1080 × 1920 (Vertical)', size: [1080, 1920] },
};

export const QUALITY = {
  // shadows: map size · shadowBox: half-size (m) of the camera-following shadow box
  // msaa: samples on the scene target (Low drops it)
  low: { label: 'Low', pixelRatio: 1, bloom: false, bloomStrength: 0, shadows: 0, shadowBox: 16, msaa: 0, particles: 0.4, fogFar: 38, ahead: 52, lodScale: 0.55, cull: true },
  med: { label: 'Medium', pixelRatio: 1.25, bloom: true, bloomStrength: 0.5, bloomScale: 0.25, shadows: 1024, shadowBox: 18, msaa: 4, particles: 0.7, fogFar: 45, ahead: 60 },
  high: { label: 'High', pixelRatio: 1.5, bloom: true, bloomStrength: 0.6, shadows: 1024, shadowBox: 15, msaa: 4, particles: 1, fogFar: 45, ahead: 66 },
};

export const DEFAULTS = {
  quality: 'high',
  resolution: 'window',
  musicVolume: 0.7,
  sfxVolume: 0.9,
  roundLength: 60,
  seed: '1031',
  watermark: '',
  cleanRecording: true,
  autoRes: false,
  roundSelection: 'all',
  exportSize: '1920x1080',
};

export function loadSettings() {
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem(KEY) || '{}') || {};
  } catch (e) {
    saved = {};
  }
  const s = { ...DEFAULTS, ...saved };
  if (!QUALITY[s.quality]) s.quality = DEFAULTS.quality;
  if (!RESOLUTIONS[s.resolution]) s.resolution = DEFAULTS.resolution;
  if (!RESOLUTIONS[s.exportSize] || s.exportSize === 'window') s.exportSize = DEFAULTS.exportSize;
  s.roundLength = Math.min(180, Math.max(15, Number(s.roundLength) || DEFAULTS.roundLength));
  return s;
}

export function saveSettings(s) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch (e) {
    // storage unavailable (private mode); settings stay in memory
  }
}
