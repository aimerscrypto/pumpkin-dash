import * as THREE from 'three';

// Four biomes of ~15 s each (210 m at 14 m/s), looping. Each boundary is hidden
// by a fog bridge; the castle biome ends on a foggy stone bridge.
export const BIOMES = [
  { id: 'village', ground: '#4F6A2A', grass: '#7E8E2F' },
  { id: 'corn', ground: '#7A5A2C', grass: '#8E8A30' },
  { id: 'cemetery', ground: '#45503A', grass: '#66733A' },
  { id: 'castle', ground: '#5B5765', grass: '#6F7B3A' },
];

export const SLOT = 6; // scenery slot length (metres)
export const BIOME_LEN = 210;
export const LAP = BIOME_LEN * BIOMES.length;
const OFFSET = 30; // the run starts 30 m into the village
export const BRIDGE_SLOT = 28; // castle slots >= this are the stone bridge

const _ca = new THREE.Color();
const _cb = new THREE.Color();
const ground = BIOMES.map((b) => new THREE.Color(b.ground));
const grass = BIOMES.map((b) => new THREE.Color(b.grass));

const mod = (a, n) => ((a % n) + n) % n;
const smooth = (x) => x * x * (3 - 2 * x);

export class BiomeMap {
  lapPos(s) {
    return mod(s + OFFSET, LAP);
  }
  index(s) {
    return Math.floor(this.lapPos(s) / BIOME_LEN) % BIOMES.length;
  }
  id(s) {
    return BIOMES[this.index(s)].id;
  }
  local(s) {
    return mod(s + OFFSET, BIOME_LEN);
  }
  /** Slot number inside the current biome (0 … 34). */
  localSlot(s) {
    return Math.floor(this.local(s) / SLOT);
  }
  /** Global distance where slot k (global) starts. */
  slotStart(k) {
    return k * SLOT - (OFFSET % SLOT);
  }
  slotOf(s) {
    return Math.floor((s + (OFFSET % SLOT)) / SLOT);
  }
  isBridge(s) {
    return this.id(s) === 'castle' && this.localSlot(s) >= BRIDGE_SLOT;
  }
  /** 0..1 how deep into the stone-bridge chasm (for terrain drop). */
  bridgeDrop(s) {
    if (this.id(s) !== 'castle') return 0;
    const l = this.local(s);
    const a = BRIDGE_SLOT * SLOT;
    if (l < a - 6) return 0;
    if (l < a + 6) return smooth((l - (a - 6)) / 12);
    if (l > BIOME_LEN - 6) return smooth((BIOME_LEN - l) / 6);
    return 1;
  }
  /** Blend weight towards the next biome near a boundary (colour mixing). */
  _mix(s, arr, out) {
    const l = this.local(s);
    const i = this.index(s);
    const n = arr.length;
    if (l > BIOME_LEN - 15) {
      const f = smooth((l - (BIOME_LEN - 15)) / 30);
      return out.copy(arr[i]).lerp(arr[(i + 1) % n], f);
    }
    if (l < 15) {
      const f = smooth((15 - l) / 30);
      return out.copy(arr[i]).lerp(arr[(i + n - 1) % n], f);
    }
    return out.copy(arr[i]);
  }
  groundColor(s, out = _ca) {
    return this._mix(s, ground, out);
  }
  grassColor(s, out = _cb) {
    return this._mix(s, grass, out);
  }
  /** 0..1 fog thickness: peaks at every biome boundary (the fog bridge). */
  fog(s) {
    const l = this.local(s);
    const d = Math.min(l, BIOME_LEN - l);
    const base = d < 28 ? smooth(1 - d / 28) : 0;
    // the castle bridge stays misty all the way across
    const bridge = this.bridgeDrop(s) * 0.45;
    return Math.max(base, bridge);
  }
}
