import { FONT, roundRect } from '../core/geo.js';
import { POSE_NAMES } from '../entities/posewalls.js';

// Everything on-screen during a run is drawn here into the HUD canvas, which
// the renderer composites over the 3D frame — so it ends up in recordings.

const OUTLINE = '#1A0B2E';
const PROMPT_TEXT = { jump: 'JUMP!', duck: 'DUCK!', left: 'LEFT!', right: 'RIGHT!', punch: 'PUNCH!', pose: 'MIRROR ME!' };
const PROMPT_COLOR = { jump: '#FFFFFF', duck: '#FFFFFF', left: '#FFFFFF', right: '#FFFFFF', punch: '#FFFFFF', pose: '#FFFFFF' };
const ACCENT = { jump: '#FFB21E', duck: '#59FF6A', left: '#4FD8FF', right: '#4FD8FF', punch: '#FF5A3C', pose: '#E6FF00' };

const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const easeOutBack = (x) => {
  const c1 = 1.9;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
};
const elastic = (x) => {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  return Math.pow(2, -10 * x) * Math.sin(((x * 10 - 0.75) * (2 * Math.PI)) / 3) + 1;
};
// tiny deterministic hash for decoration placement
const hf = (i, k) => {
  const x = Math.sin(i * 127.1 + k * 311.7) * 43758.5453;
  return x - Math.floor(x);
};

export class Hud {
  constructor(renderer) {
    this.r = renderer;
    this.popups = [];
    this.flashAt = -10;
    // redraw bookkeeping: the canvas is only redrawn (and re-uploaded to the
    // GPU) when something on it actually changes
    this._sig = new Float64Array(11).fill(NaN);
    this._seg = null;
    this._mark = '';
    this._wasAnimated = true;
  }

  get ctx() {
    return this.r.hudCtx;
  }

  popup(text, color, time, big = false) {
    this.popups.push({ text, color, t0: time, big });
    if (this.popups.length > 6) this.popups.shift();
  }

  flash(time) {
    this.flashAt = time;
  }

  clearTransient() {
    this.popups.length = 0;
    this.flashAt = -10;
  }

  // ── drawing helpers ───────────────────────────────────────────────────────

  text(str, x, y, size, fill, o = {}) {
    const ctx = this.ctx;
    let sz = size;
    ctx.font = `${sz}px ${o.font || FONT}`;
    if (o.maxW) {
      const w = ctx.measureText(str).width;
      if (w > o.maxW) {
        sz *= o.maxW / w;
        ctx.font = `${sz}px ${o.font || FONT}`;
      }
    }
    ctx.textAlign = o.align || 'center';
    ctx.textBaseline = 'middle';
    ctx.lineJoin = 'round';
    ctx.miterLimit = 2;
    const lw = (o.lw ?? 0.2) * sz;
    if (o.shadow !== false) {
      ctx.fillStyle = 'rgba(10,2,20,0.55)';
      ctx.strokeStyle = 'rgba(10,2,20,0.55)';
      ctx.lineWidth = lw;
      const d = (o.shadowD ?? 0.07) * sz;
      ctx.strokeText(str, x + d * 0.4, y + d);
      ctx.fillText(str, x + d * 0.4, y + d);
    }
    ctx.strokeStyle = o.stroke || OUTLINE;
    ctx.lineWidth = lw;
    ctx.strokeText(str, x, y);
    if (o.gradient) {
      const g = ctx.createLinearGradient(0, y - sz * 0.45, 0, y + sz * 0.45);
      g.addColorStop(0, o.gradient[0]);
      g.addColorStop(1, o.gradient[1]);
      ctx.fillStyle = g;
    } else ctx.fillStyle = fill;
    ctx.fillText(str, x, y);
    // glossy top highlight
    if (o.gloss) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(x - 4000, y - sz, 8000, sz * 0.62);
      ctx.clip();
      ctx.globalAlpha = 0.25;
      ctx.fillStyle = '#FFFFFF';
      ctx.fillText(str, x, y);
      ctx.restore();
    }
    return sz;
  }

  jack(x, y, r, glow = 1) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(x, y);
    ctx.fillStyle = '#2E5A18';
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = r * 0.16;
    roundRect(ctx, -r * 0.14, -r * 1.12, r * 0.28, r * 0.42, r * 0.08);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, 0, r * 1.12, r * 0.92, 0, 0, Math.PI * 2);
    ctx.stroke();
    const g = ctx.createRadialGradient(-r * 0.3, -r * 0.3, r * 0.1, 0, 0, r * 1.1);
    g.addColorStop(0, '#FF9A3A');
    g.addColorStop(1, '#E04A00');
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = 'rgba(120,30,0,0.45)';
    ctx.lineWidth = r * 0.07;
    for (const k of [-0.5, 0.5]) {
      ctx.beginPath();
      ctx.ellipse(k * r * 0.5, 0, r * 0.35, r * 0.88, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = glow > 0.5 ? '#FFE600' : '#3A1400';
    ctx.beginPath();
    ctx.moveTo(-r * 0.62, -r * 0.08);
    ctx.lineTo(-r * 0.2, -r * 0.08);
    ctx.lineTo(-r * 0.41, -r * 0.48);
    ctx.closePath();
    ctx.moveTo(r * 0.62, -r * 0.08);
    ctx.lineTo(r * 0.2, -r * 0.08);
    ctx.lineTo(r * 0.41, -r * 0.48);
    ctx.closePath();
    ctx.moveTo(-r * 0.66, r * 0.18);
    ctx.lineTo(-r * 0.4, r * 0.32);
    ctx.lineTo(-r * 0.2, r * 0.2);
    ctx.lineTo(0, r * 0.34);
    ctx.lineTo(r * 0.2, r * 0.2);
    ctx.lineTo(r * 0.4, r * 0.32);
    ctx.lineTo(r * 0.66, r * 0.18);
    ctx.quadraticCurveTo(r * 0.4, r * 0.7, 0, r * 0.68);
    ctx.quadraticCurveTo(-r * 0.4, r * 0.7, -r * 0.66, r * 0.18);
    ctx.fill();
    ctx.restore();
  }

  ghost(x, y, r, alpha = 1, t = 0) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(x, y);
    ctx.rotate(Math.sin(t * 2) * 0.12);
    ctx.fillStyle = '#F6F2FF';
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = r * 0.12;
    ctx.beginPath();
    ctx.arc(0, -r * 0.2, r, Math.PI, 0);
    ctx.lineTo(r, r * 0.9);
    for (let i = 0; i < 4; i++) {
      const x0 = r - (i + 0.5) * (r / 2);
      ctx.quadraticCurveTo(x0, r * (0.6 + 0.25 * Math.sin(t * 6 + i)), r - (i + 1) * (r / 2), r * 0.9);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = OUTLINE;
    ctx.beginPath();
    ctx.ellipse(-r * 0.35, -r * 0.25, r * 0.14, r * 0.2, 0, 0, Math.PI * 2);
    ctx.ellipse(r * 0.35, -r * 0.25, r * 0.14, r * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(0, r * 0.15, r * 0.16, r * 0.2, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  star(x, y, r, color, rot = 0, alpha = 1) {
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(x, y);
    ctx.rotate(rot);
    ctx.beginPath();
    for (let i = 0; i < 10; i++) {
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      const rr = i % 2 ? r * 0.45 : r;
      if (i) ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
      else ctx.moveTo(Math.cos(a) * rr, Math.sin(a) * rr);
    }
    ctx.closePath();
    ctx.lineJoin = 'round';
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = r * 0.18;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  arrow(x, y, size, dir, color, t) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(x, y);
    const rot = { up: -Math.PI / 2, down: Math.PI / 2, left: Math.PI, right: 0 }[dir] || 0;
    ctx.rotate(rot);
    const nudge = Math.sin(t * 12) * size * 0.08;
    ctx.translate(nudge, 0);
    const s = size;
    ctx.beginPath();
    ctx.moveTo(-s * 0.55, -s * 0.2);
    ctx.lineTo(0, -s * 0.2);
    ctx.lineTo(0, -s * 0.5);
    ctx.lineTo(s * 0.6, 0);
    ctx.lineTo(0, s * 0.5);
    ctx.lineTo(0, s * 0.2);
    ctx.lineTo(-s * 0.55, s * 0.2);
    ctx.closePath();
    ctx.lineJoin = 'round';
    ctx.fillStyle = 'rgba(10,2,20,0.5)';
    ctx.save();
    ctx.translate(0, s * 0.06);
    ctx.fill();
    ctx.restore();
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = s * 0.14;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  burstShape(x, y, r, color, t) {
    const ctx = this.ctx;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(t * 0.8);
    ctx.beginPath();
    const n = 14;
    for (let i = 0; i < n * 2; i++) {
      const a = (i / (n * 2)) * Math.PI * 2;
      const rr = i % 2 ? r * 0.72 : r;
      if (i) ctx.lineTo(Math.cos(a) * rr, Math.sin(a) * rr * 0.62);
      else ctx.moveTo(Math.cos(a) * rr, Math.sin(a) * rr * 0.62);
    }
    ctx.closePath();
    ctx.strokeStyle = OUTLINE;
    ctx.lineWidth = r * 0.06;
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.fill();
    ctx.restore();
  }

  // ── frame ─────────────────────────────────────────────────────────────────

  /**
   * st = { time, seg, segT, roundFrac, prompts[], mode, score, lives, maxLives,
   *        distance, watermark, showStats, hidden }
   */
  draw(st) {
    const cv = this.r.hudCanvas;
    const ctx = this.ctx;
    const W = cv.width;
    const H = cv.height;
    const seg = st.seg;
    const t = st.time;
    const flashing = t >= this.flashAt && t - this.flashAt <= 0.5;
    const animated =
      !st.hidden && (this.popups.length > 0 || flashing || st.prompts.length > 0 || (seg && (seg.kind !== 'round' || st.segT <= 2.65)));
    // progress bar snaps to whole canvas pixels so a static HUD stays static
    const barW = W * 0.88;
    const frac = Math.round(clamp(st.roundFrac) * barW) / barW;
    const sig = this._sig;
    const mark = st.watermark || '';
    const changed =
      animated ||
      this._wasAnimated ||
      seg !== this._seg ||
      mark !== this._mark ||
      sig[0] !== (st.hidden ? 1 : 0) ||
      sig[1] !== W ||
      sig[2] !== H ||
      sig[3] !== frac ||
      sig[4] !== (st.showStats ? 1 : 0) ||
      sig[5] !== st.score ||
      sig[6] !== st.lives ||
      sig[7] !== st.maxLives ||
      sig[8] !== (st.showStats ? Math.floor(st.distance) : -1);
    this._wasAnimated = animated;
    this.r.hudBlank = !!st.hidden;
    if (!changed) return;
    this.r.hudDirty = true;
    this._seg = seg;
    this._mark = mark;
    sig[0] = st.hidden ? 1 : 0;
    sig[1] = W;
    sig[2] = H;
    sig[3] = frac;
    sig[4] = st.showStats ? 1 : 0;
    sig[5] = st.score;
    sig[6] = st.lives;
    sig[7] = st.maxLives;
    sig[8] = st.showStats ? Math.floor(st.distance) : -1;

    this.W = W;
    this.H = H;
    this.S = Math.min(W, H) / 1080;
    ctx.clearRect(0, 0, W, H);
    if (st.hidden) return;

    if (st.flashOnly) {
      this._flash(t);
      return;
    }

    if (seg) {
      if (seg.kind === 'round') {
        this._progress(frac);
        this._banner(seg, st.segT);
        for (let i = 0; i < st.prompts.length; i++) this._prompt(st.prompts[i], t);
      } else if (seg.kind === 'title') this._title(seg, st.segT);
      else if (seg.kind === 'countdown') this._countdown(st.segT, seg.duration);
      else if (seg.kind === 'card') this._card(seg, st.segT);
      else if (seg.kind === 'outro') this._outro(seg, st.segT);
    }

    if (st.showStats) this._stats(st);
    this._popups(t);
    this._flash(t);
    if (st.watermark) this._watermark(st.watermark);
  }

  _progress(frac) {
    const { ctx, W, H, S } = this;
    const x0 = W * 0.06;
    const x1 = W * 0.94;
    const y = H * 0.05;
    const h = Math.max(10, 30 * S);
    const w = x1 - x0;
    ctx.save();
    ctx.fillStyle = OUTLINE;
    roundRect(ctx, x0 - h * 0.18, y - h / 2 - h * 0.18, w + h * 0.36, h * 1.36, h);
    ctx.fill();
    ctx.fillStyle = '#2B2B30';
    roundRect(ctx, x0, y - h / 2, w, h, h / 2);
    ctx.fill();
    const f = clamp(frac);
    if (f > 0.002) {
      const fw = Math.max(h, w * f);
      const g = ctx.createLinearGradient(x0, 0, x0 + fw, 0);
      g.addColorStop(0, '#FF5500');
      g.addColorStop(1, '#FF8800');
      ctx.fillStyle = g;
      roundRect(ctx, x0, y - h / 2, fw, h, h / 2);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.28)';
      roundRect(ctx, x0 + h * 0.3, y - h * 0.36, Math.max(0, fw - h * 0.6), h * 0.22, h * 0.11);
      ctx.fill();
    }
    ctx.restore();
    const r = h * 1.15;
    this.jack(x0 + w * f, y + r * 0.05, r, 1);
  }

  _banner(seg, segT) {
    // Round label + name at the start of each round.
    const dur = 2.6;
    if (segT > dur) return;
    const { W, H, S } = this;
    const a = clamp(segT / 0.35);
    const out = clamp((dur - segT) / 0.35);
    const sc = easeOutBack(a);
    const alpha = Math.min(1, out);
    const ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(W / 2, H * 0.14);
    ctx.scale(sc, sc);
    this.text(seg.round.label, 0, -60 * S, 54 * S, '#FFE600', { maxW: W * 0.8 });
    this.text(seg.round.title, 0, 22 * S, 104 * S, '#FFFFFF', { maxW: W * 0.88, gradient: ['#FFFFFF', '#FFD9A0'] });
    ctx.restore();
  }

  _prompt(p, t) {
    const { ctx, W, H, S } = this;
    const age = t - p.start;
    const left = p.end - t;
    if (age < 0 || left < 0) return;
    const pop = elastic(clamp(age / 0.45));
    const fade = clamp(left / 0.15);
    const y = H * 0.25;
    ctx.save();
    ctx.globalAlpha = fade;
    ctx.translate(W / 2, y);
    const sc = 0.2 + 0.8 * pop;
    ctx.scale(sc, sc);
    const accent = ACCENT[p.type] || '#FFB21E';
    const size = 170 * S;
    if (p.type === 'punch') this.burstShape(0, 0, 300 * S, '#FF3A1A', t);
    const label = PROMPT_TEXT[p.type] || p.type.toUpperCase();
    const tw = this.text(label, 0, 0, size, PROMPT_COLOR[p.type] || '#FFFFFF', { maxW: W * 0.78, gloss: true, lw: 0.22 });
    ctx.font = `${tw}px ${FONT}`;
    const half = ctx.measureText(label).width / 2;
    const as = 150 * S;
    if (p.type === 'jump') this.arrow(0, 165 * S, as, 'up', accent, t);
    else if (p.type === 'duck') this.arrow(0, 165 * S, as, 'down', accent, t);
    else if (p.type === 'left') this.arrow(-half - as * 0.8, 0, as, 'left', accent, t);
    else if (p.type === 'right') this.arrow(half + as * 0.8, 0, as, 'right', accent, t);
    else if (p.type === 'pose') {
      const name = POSE_NAMES[p.variant] || 'COPY THE POSE';
      this.text(name, 0, 140 * S, 78 * S, accent, { maxW: W * 0.8 });
    }
    ctx.restore();
  }

  _decor(t, n, alpha) {
    // floating ghosts, stars and pumpkins
    const { W, H, S } = this;
    for (let i = 0; i < n; i++) {
      const kind = i % 3;
      const sp = 0.05 + hf(i, 1) * 0.08;
      const x = (hf(i, 2) * 1.2 - 0.1 + Math.sin(t * 0.7 + i) * 0.03) * W;
      const y = ((1.1 - ((hf(i, 3) + t * sp) % 1.25)) * H) | 0;
      const r = (26 + hf(i, 4) * 40) * S;
      if (kind === 0) this.ghost(x, y, r, 0.9 * alpha, t + i);
      else if (kind === 1) this.star(x, y, r * 0.8, hf(i, 5) > 0.5 ? '#FFE600' : '#FFB21E', t * (hf(i, 6) - 0.5) * 3, alpha);
      else {
        this.ctx.save();
        this.ctx.globalAlpha = alpha;
        this.jack(x, y, r * 0.75, 1);
        this.ctx.restore();
      }
    }
  }

  _speedLines(t, alpha) {
    const { ctx, W, H } = this;
    ctx.save();
    ctx.globalAlpha = alpha * 0.35;
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineCap = 'round';
    const cx = W / 2;
    const cy = H * 0.45;
    const R = Math.hypot(W, H) * 0.6;
    for (let i = 0; i < 40; i++) {
      const a = hf(i, 8) * Math.PI * 2;
      const ph = (hf(i, 9) + t * (0.6 + hf(i, 10))) % 1;
      const r0 = R * (0.35 + ph * 0.7);
      const r1 = r0 + R * 0.12;
      ctx.lineWidth = 3 + hf(i, 11) * 5;
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
      ctx.lineTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
      ctx.stroke();
    }
    ctx.restore();
  }

  _bigWord(str, segT, t0, t1, y, size, gradient) {
    const { ctx, W } = this;
    const age = segT - t0;
    if (age < 0 || segT > t1) return;
    const inA = elastic(clamp(age / 0.6));
    const outA = clamp((t1 - segT) / 0.25);
    const wob = 1 + Math.sin(segT * 5) * 0.025;
    ctx.save();
    ctx.globalAlpha = outA;
    ctx.translate(W / 2, y);
    ctx.rotate(Math.sin(segT * 3) * 0.03);
    const sc = Math.max(0.01, inA * wob * (0.6 + 0.4 * outA));
    ctx.scale(sc, sc);
    this.text(str, 0, 0, size, '#FFFFFF', { maxW: W * 0.9, gradient, gloss: true, lw: 0.2 });
    ctx.restore();
  }

  _card(seg, segT) {
    const { H, S } = this;
    const d = seg.duration;
    const a = clamp(Math.min(segT / 0.3, (d - segT) / 0.3));
    this._dim(0.25 * a);
    this._speedLines(segT, a);
    this._decor(segT, 14, a);
    const half = d * 0.48;
    const texts = seg.texts || ['EXCELLENT!', 'NEXT LEVEL'];
    this._bigWord(texts[0], segT, 0, half, H * 0.42, 190 * S, ['#FFE94A', '#FF8A00']);
    this._bigWord(texts[1] || '', segT, half, d, H * 0.38, 170 * S, ['#FFFFFF', '#C9A0FF']);
    if (seg.next && segT > half + 0.2) {
      const age = segT - half - 0.2;
      const ctx = this.ctx;
      ctx.save();
      ctx.globalAlpha = clamp(age / 0.3) * clamp((d - segT) / 0.25);
      this.text(`${seg.next.label} · ${seg.next.title}`, this.W / 2, H * 0.55, 70 * S, '#FFE600', { maxW: this.W * 0.86 });
      ctx.restore();
    }
  }

  _dim(a) {
    if (a <= 0) return;
    const { ctx, W, H } = this;
    ctx.fillStyle = `rgba(20,4,40,${a})`;
    ctx.fillRect(0, 0, W, H);
  }

  _title(seg, segT) {
    const { W, H, S, ctx } = this;
    const d = seg.duration;
    const a = clamp(Math.min(segT / 0.3, (d - segT) / 0.3));
    this._dim(0.3 * a);
    this._decor(segT + 3, 10, a);
    const inA = elastic(clamp(segT / 0.8));
    ctx.save();
    ctx.globalAlpha = a;
    ctx.translate(W / 2, H * 0.38);
    ctx.rotate(Math.sin(segT * 2.2) * 0.025);
    ctx.scale(inA, inA);
    this.jack(0, -190 * S, 90 * S, 1);
    this.text(seg.text, 0, 0, 200 * S, '#FFFFFF', { maxW: W * 0.92, gradient: ['#FFB21E', '#FF5500'], gloss: true, lw: 0.2 });
    ctx.restore();
    if (seg.sub && segT > 0.6) {
      ctx.save();
      ctx.globalAlpha = a * clamp((segT - 0.6) / 0.3);
      this.text(seg.sub, W / 2, H * 0.52, 74 * S, '#E9D6FF', { maxW: W * 0.8 });
      ctx.restore();
    }
  }

  _countdown(segT, dur) {
    const { W, H, S, ctx } = this;
    const step = dur / 4;
    const i = Math.min(3, Math.floor(segT / step));
    const local = segT - i * step;
    const label = ['3', '2', '1', 'GO!'][i];
    const colors = [['#FFFFFF', '#FFB21E'], ['#FFFFFF', '#FF8A00'], ['#FFFFFF', '#FF5500'], ['#B6FF3A', '#2EC40A']];
    const p = elastic(clamp(local / 0.5));
    const out = i === 3 ? clamp((step - local) / 0.25) : 1;
    ctx.save();
    ctx.globalAlpha = out;
    ctx.translate(W / 2, H * 0.4);
    const sc = Math.max(0.01, p * (1 + local * 0.15));
    ctx.scale(sc, sc);
    // ring
    ctx.beginPath();
    ctx.arc(0, 0, 170 * S, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(26,11,46,0.55)';
    ctx.fill();
    ctx.lineWidth = 14 * S;
    ctx.strokeStyle = '#FF8A00';
    ctx.beginPath();
    ctx.arc(0, 0, 170 * S, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (1 - local / step));
    ctx.stroke();
    this.text(label, 0, 8 * S, (i === 3 ? 190 : 240) * S, '#FFFFFF', { gradient: colors[i], gloss: true, maxW: W * 0.8 });
    ctx.restore();
  }

  _outro(seg, segT) {
    const { W, H, S, ctx } = this;
    const d = seg.duration;
    const a = clamp(Math.min(segT / 0.3, (d - segT) / 0.3));
    this._dim(0.3 * a);
    this._speedLines(segT, a * 0.7);
    this._decor(segT + 7, 18, a);
    // confetti stars
    for (let i = 0; i < 30; i++) {
      const x = hf(i, 21) * W;
      const y = ((hf(i, 22) + segT * (0.15 + hf(i, 23) * 0.2)) % 1.1) * H - H * 0.05;
      this.star(x, y, (10 + hf(i, 24) * 14) * S, ['#FFE600', '#FF8A00', '#C9A0FF', '#59FF6A'][i % 4], segT * 3 + i, a);
    }
    this._bigWord(seg.text, segT, 0, d, H * 0.4, 180 * S, ['#FFE94A', '#FF7A00']);
    if (seg.sub && segT > 0.5) {
      ctx.save();
      ctx.globalAlpha = a * clamp((segT - 0.5) / 0.3);
      this.text(seg.sub, W / 2, H * 0.55, 72 * S, '#FFFFFF', { maxW: W * 0.86 });
      ctx.restore();
    }
  }

  _stats(st) {
    const { W, H, S, ctx } = this;
    const y = H * 0.05 + 70 * S;
    this.text(`SCORE ${st.score}`, W * 0.06, y, 52 * S, '#FFFFFF', { align: 'left', lw: 0.22 });
    this.text(`${Math.floor(st.distance)} m`, W * 0.06, y + 56 * S, 38 * S, '#FFE600', { align: 'left' });
    for (let i = 0; i < st.maxLives; i++) {
      const x = W * 0.94 - i * 70 * S - 26 * S;
      ctx.save();
      ctx.globalAlpha = i < st.lives ? 1 : 0.3;
      this.jack(x, y + 4 * S, 26 * S, i < st.lives ? 1 : 0);
      ctx.restore();
    }
  }

  _popups(t) {
    const { W, H, S, ctx } = this;
    for (let i = this.popups.length - 1; i >= 0; i--) {
      const p = this.popups[i];
      const age = t - p.t0;
      if (age > 1.0 || age < -0.01) {
        this.popups.splice(i, 1);
        continue;
      }
      const sc = easeOutBack(clamp(age / 0.25));
      ctx.save();
      ctx.globalAlpha = clamp((1.0 - age) / 0.3);
      ctx.translate(W / 2, H * (p.big ? 0.44 : 0.5) - age * 90 * S);
      ctx.scale(sc, sc);
      this.text(p.text, 0, 0, (p.big ? 110 : 70) * S, p.color, { maxW: W * 0.8 });
      ctx.restore();
    }
  }

  _flash(t) {
    const age = t - this.flashAt;
    if (age < 0 || age > 0.5) return;
    const { ctx, W, H } = this;
    const a = (1 - age / 0.5) * 0.55;
    const g = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.2, W / 2, H / 2, Math.hypot(W, H) * 0.6);
    g.addColorStop(0, `rgba(255,20,30,${a * 0.4})`);
    g.addColorStop(1, `rgba(255,0,20,${a})`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }

  _watermark(str) {
    const { W, H, S, ctx } = this;
    ctx.save();
    ctx.globalAlpha = 0.6;
    this.text(str, W - 28 * S, H - 30 * S, 34 * S, '#FFFFFF', { align: 'right', lw: 0.18, shadow: false });
    ctx.restore();
  }
}
