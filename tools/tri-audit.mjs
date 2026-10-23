// Dev-only: prints triangle counts of every merged prop / crowd character at each LOD detail.
const ctx = new Proxy({}, { get: (t, k) => (k === 'measureText' ? () => ({ width: 10 }) : () => {}) });
globalThis.document = { createElement: () => ({ getContext: () => ctx, width: 0, height: 0, style: {} }) };
const tri = (g) => (g ? (g.index ? g.index.count : g.attributes.position.count) / 3 : 0);
const LODS = [1, 0.5, 0.25];
const props = await import('../src/world/props.js');
const out = [];
for (const t of props.PROP_TYPES) {
  out.push([t, LODS.map((d) => { const e = props.kitGeometry(t, null, d); return tri(e.body) + tri(e.flat) + tri(e.glow) + tri(e.flicker); })]);
}
const ch = await import('../src/entities/characters.js');
for (const k of ['pumpkinKid', 'ghostKid', 'witch', 'vampire', 'skeleton', 'werewolf']) {
  out.push(['crowd:' + k, LODS.map((d) => { const e = ch.geometryFor(k, d); return tri(e.body) + tri(e.glow) + tri(e.armL) + tri(e.armR); })]);
}
const fol = await import('../src/world/foliage.js').catch(() => null);
if (fol && fol.FOLIAGE_GEO) for (const [n, g] of Object.entries(fol.FOLIAGE_GEO)) out.push(["foliage:" + n, [tri(g())]]);
for (const [n, v] of out) console.log(n.padEnd(22), v.map((x) => String(x).padStart(6)).join(' '));
