// Deterministic random numbers: the same seed always produces the same run.

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function hash2(a, b) {
  let h = (Math.imul(a | 0, 0x27d4eb2d) ^ Math.imul((b | 0) + 0x165667b1, 0x85ebca77)) | 0;
  h ^= h >>> 15;
  h = Math.imul(h, 0x2c1b3c6d);
  h ^= h >>> 12;
  h = Math.imul(h, 0x297a2d39);
  h ^= h >>> 15;
  return h >>> 0;
}

/** Stable float in [0,1) for an integer pair. */
export function hashFloat(a, b) {
  return hash2(a, b) / 4294967296;
}

export function seedFromValue(v) {
  if (typeof v === 'number' && Number.isFinite(v)) return Math.floor(Math.abs(v)) >>> 0;
  const str = String(v ?? '').trim();
  if (/^\d+$/.test(str)) return parseInt(str, 10) >>> 0;
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export class RNG {
  constructor(seed = 1) {
    this._next = mulberry32(seed >>> 0);
  }
  next() {
    return this._next();
  }
  range(a, b) {
    return a + (b - a) * this._next();
  }
  /** Integer in [a, b] inclusive. */
  int(a, b) {
    return a + Math.floor(this._next() * (b - a + 1));
  }
  pick(arr) {
    return arr[Math.floor(this._next() * arr.length) % arr.length];
  }
  chance(p) {
    return this._next() < p;
  }
  sign() {
    return this._next() < 0.5 ? -1 : 1;
  }
  weighted(map) {
    const keys = Object.keys(map);
    let total = 0;
    for (const k of keys) total += Math.max(0, map[k]);
    let r = this._next() * total;
    for (const k of keys) {
      r -= Math.max(0, map[k]);
      if (r <= 0) return k;
    }
    return keys[keys.length - 1];
  }
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(this._next() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
