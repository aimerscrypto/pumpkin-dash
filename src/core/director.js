import * as THREE from 'three';
import { hash2 } from './rng.js';
import { RIG } from '../camera/rig.js';

// Runs the schedule against the clock.
//   AUTO  : the camera performs every action itself (deterministic: actions
//           start at exactly t − actionLead, punches connect at exactly t).
//   PLAY  : the player performs the actions; each obstacle is judged at t.
// Both modes produce the on-screen prompts.

const PUNCH_EARLY = 0.3; // a punch may land this long before t …
const PUNCH_LATE = 0.12; // … or this long after
const PROMPT_TAIL = 0.15;
const POINTS = { jump: 100, duck: 100, left: 100, right: 100, punch: 150, pose: 50 };
const SFX = { jump: 'jump', duck: 'duck', left: 'dodge', right: 'dodge', punch: 'punch' };
const POW = ['POW!', 'BAM!', 'WHAM!', 'BOOM!', 'KAPOW!'];
const NICE = ['NICE!', 'GREAT!', 'SUPER!', 'AWESOME!'];

const _v = new THREE.Vector3();

export class Director {
  constructor(game) {
    this.g = game;
    this.events = [];
    this.mode = 'auto';
    this.prompts = [];
    this.acted = new Set();
    this.judged = new Set();
    this._prompt = { type: '', variant: '', start: 0, end: 0 }; // reused every frame
    this.reset();
  }

  setSchedule(schedule, mode) {
    this.events = schedule.events;
    this.mode = mode;
    this.T = this.g.timeline;
    this.reset();
  }

  reset() {
    this.lo = 0;
    this.acted.clear();
    this.judged.clear();
    this.score = 0;
    this.lives = 3;
    this.maxLives = 3;
    this.streak = 0;
    this.prompts.length = 0;
  }

  lead(type) {
    return (this.T && this.T.actionLead[type]) || 0.3;
  }

  promptStart(ev) {
    const pl = ev.type === 'pose' ? this.T.posePromptLead : this.T.promptLead;
    return ev.t - this.lead(ev.type) - pl;
  }

  update(time) {
    const ev = this.events;
    while (this.lo < ev.length && ev[this.lo].t + 1.0 < time) this.lo++;

    let latest = null; // newest overlapping event whose prompt is showing
    let latestStart = 0;
    for (let i = this.lo; i < ev.length; i++) {
      const e = ev[i];
      const ps = this.promptStart(e);
      if (ps > time) {
        if (e.t - 4 > time) break;
        continue;
      }
      // the newest prompt wins when two overlap (back-to-back punches)
      if (time <= e.t + PROMPT_TAIL && (!latest || ps >= latestStart)) {
        latest = e;
        latestStart = ps;
      }

      if (this.mode === 'auto') this._auto(e, time);
      else this._play(e, time);
    }
    this.prompts.length = 0;
    if (latest) {
      const p = this._prompt;
      p.type = latest.type;
      p.variant = latest.variant;
      p.start = latestStart;
      p.end = latest.t + PROMPT_TAIL;
      this.prompts.push(p);
    }
  }

  _auto(e, time) {
    const g = this.g;
    const id = e.id;
    const t0 = e.t - this.lead(e.type);
    if (!this.acted.has(id) && time >= t0) {
      this.acted.add(id);
      if (e.type !== 'pose') {
        g.rig.trigger(e.type, t0);
        if (e.type !== 'punch') g.audio.play(SFX[e.type]);
      }
    }
    if (!this.judged.has(id) && time >= e.t) {
      this.judged.add(id);
      if (e.type === 'punch') {
        g.manager.hit(id, e.t);
        g.audio.play('punch');
        g.hud.popup(POW[hash2(id, 3) % POW.length], '#FFE600', time);
      } else if (e.type === 'pose') {
        g.audio.play('chime');
      }
    }
  }

  _play(e, time) {
    const g = this.g;
    const id = e.id;
    if (this.judged.has(id)) return;
    if (e.type === 'punch') {
      if (time > e.t + PUNCH_LATE) this._fail(e, time);
      return;
    }
    if (time < e.t) return;
    // the pose at the judged instant itself, not at the last rendered frame
    const rig = g.rig.sample(e.t);
    let ok = true;
    if (e.type === 'jump') ok = rig.height > 0.6;
    else if (e.type === 'duck') ok = rig.duck < RIG.duckDepth * 0.5;
    else if (e.type === 'left') ok = rig.lateral < -1.0;
    else if (e.type === 'right') ok = rig.lateral > 1.0;
    if (ok) this._success(e, time);
    else this._fail(e, time);
  }

  _success(e, time) {
    const g = this.g;
    this.judged.add(e.id);
    this.streak++;
    const bonus = this.streak >= 5 ? 2 : 1;
    this.score += POINTS[e.type] * bonus;
    if (e.type === 'pose') {
      g.audio.play('chime');
      g.hud.popup('POSE!', '#E6FF00', time);
    } else if (e.type === 'punch') {
      g.hud.popup(POW[hash2(e.id, 3) % POW.length], '#FFE600', time);
    } else {
      g.hud.popup(NICE[hash2(e.id, 4) % NICE.length] + (bonus > 1 ? ' x2' : ''), '#7CFF5A', time);
    }
  }

  _fail(e, time) {
    const g = this.g;
    this.judged.add(e.id);
    this.streak = 0;
    this.lives = Math.max(0, this.lives - 1);
    g.hud.flash(time);
    g.hud.popup('OUCH!', '#FF3A3A', time, true);
    g.audio.play('hit');
    g.effects.burst('hit', g.track.point(g.speed * time + 1.2, g.rig.lateral, 1.1, _v), 12);
    if (this.lives <= 0) g.onGameOver();
  }

  /** PLAY mode input: handed straight to the rig (which buffers what can't start yet). */
  input(action, time, down = true) {
    if (this.mode !== 'play') return;
    this.g.rig.press(action, time, down);
  }

  /** A PLAY action actually started at `time` (immediately or from the buffer). */
  started(action, time) {
    if (this.mode !== 'play') return;
    const g = this.g;
    if (action !== 'punch') {
      g.audio.play(SFX[action]);
      return;
    }
    // find the closest unresolved enemy inside the punch window
    let best = null;
    for (let i = this.lo; i < this.events.length; i++) {
      const e = this.events[i];
      if (e.t - PUNCH_EARLY > time) break;
      if (e.type !== 'punch' || this.judged.has(e.id)) continue;
      if (time >= e.t - PUNCH_EARLY && time <= e.t + PUNCH_LATE) {
        best = e;
        break;
      }
    }
    if (best && g.manager.hit(best.id, time)) {
      g.audio.play('punch');
      this._success(best, time);
    } else {
      g.audio.play('dodge');
    }
  }
}
