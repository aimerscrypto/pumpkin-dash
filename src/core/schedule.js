import { RNG, hash2 } from './rng.js';

/**
 * Turns the data-driven TIMELINE into an absolute schedule:
 *   segments: title → countdown → round → card → round … → outro cards
 *   events:   obstacles with the exact time `t` the camera reaches them
 * Each round uses its own RNG stream (seed + round index), so a single-round
 * run produces exactly the same obstacles as that round in a full run.
 */
export function buildSchedule(T, { seed = 1, roundLength = T.roundLength, roundIndex = -1 } = {}) {
  const segments = [];
  const events = [];
  let t = 0;
  const push = (kind, duration, data = {}) => {
    const seg = { kind, start: t, end: t + duration, duration, ...data };
    segments.push(seg);
    t += duration;
    return seg;
  };

  push('title', T.intro.titleDuration, { text: T.intro.title, sub: T.intro.subtitle });
  push('countdown', T.intro.countdownDuration);

  const order = roundIndex >= 0 && roundIndex < T.rounds.length ? [roundIndex] : T.rounds.map((_, i) => i);

  order.forEach((ri, k) => {
    const R = T.rounds[ri];
    const len = R.length ?? roundLength;
    const seg = push('round', len, { roundIndex: ri, round: R, order: k });
    generateRound(T, R, ri, seg, new RNG(hash2(seed, ri + 1)), events);
    if (k < order.length - 1) {
      const next = T.rounds[order[k + 1]];
      push('card', T.between.duration, { texts: T.between.texts, next });
    }
  });

  for (const c of T.outro) push('outro', c.duration, { text: c.text, sub: c.sub });

  events.sort((a, b) => a.t - b.t);
  events.forEach((e, i) => (e.id = i + 1));
  return { segments, events, duration: t, speed: T.speed, order };
}

function generateRound(T, R, ri, seg, rng, out) {
  const variants = { ...T.variants, ...(R.variants || {}) };
  const bags = {};
  const pickVariant = (type) => {
    const listKey = type === 'left' || type === 'right' ? 'dodge' : type;
    const list = variants[listKey] || [];
    if (!list.length) return null;
    // Bag-shuffle so every variant shows up before repeats.
    if (!bags[listKey] || !bags[listKey].length) bags[listKey] = rng.shuffle(list);
    return bags[listKey].pop();
  };
  const add = (time, type, variant) => {
    out.push({ t: time, type, variant: variant || pickVariant(type), round: ri });
  };

  if (Array.isArray(R.script) && R.script.length) {
    for (const e of R.script) {
      if (e.at >= 0 && e.at <= seg.duration) add(seg.start + e.at, e.type, e.variant);
    }
    return;
  }

  const start = seg.start + T.roundLeadIn;
  const end = seg.end - T.roundTail;
  const every = R.every || [3, 4];
  const recent = [];
  let tt = start;
  while (tt <= end) {
    let type = rng.weighted(R.mix);
    for (let tries = 0; tries < 4 && recent.length >= 2 && recent[0] === type && recent[1] === type; tries++) {
      type = rng.weighted(R.mix);
    }
    recent.unshift(type);
    if (recent.length > 2) recent.pop();
    add(tt, type);
    if (type === 'punch' && R.backToBack && rng.chance(R.backToBack.chance) && tt + R.backToBack.gap <= end) {
      tt += R.backToBack.gap;
      add(tt, 'punch');
    }
    tt += rng.range(every[0], every[1]);
  }
}

export function segmentIndexAt(schedule, time) {
  const s = schedule.segments;
  for (let i = s.length - 1; i >= 0; i--) if (time >= s[i].start) return i;
  return 0;
}
