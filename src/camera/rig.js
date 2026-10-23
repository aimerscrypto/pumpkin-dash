import * as THREE from 'three';

const DEG = Math.PI / 180;

// First-person camera feel. Every action is a pure function of (time - t0), so
// the same action start times always produce the same frames.
export const RIG = {
  eye: 1.3,
  hfov: 72,
  portraitVfov: 74,
  horizon: 0.38, // horizon height from the bottom of the frame
  bobAmp: 0.03,
  bobHz: 2.8,
  bobRoll: 0.4 * DEG,
  jumpDur: 0.7,
  jumpApex: 2.1, // eye rises to 1.3 + 2.1 = 3.4 m
  duckDepth: -0.9, // eye drops to 0.4 m
  duckIn: 0.15,
  duckHold: 0.4,
  duckOut: 0.2,
  duckRoll: -7 * DEG,
  dodgeDist: 2.0,
  dodgeIn: 0.22,
  dodgeHold: 0.45,
  dodgeOut: 0.35,
  dodgeBank: 7 * DEG,
  punchDur: 0.32,
  punchLunge: 0.25,
};

// PLAY mode: the player drives the camera directly, Subway-Surfers style.
// Lanes stick until the other direction is pressed, duck lasts while held,
// and every move starts on the very next frame with an ease-out curve.
export const PLAY = {
  dodgeIn: 0.16, // lane change, ease-out (half way after ~35 ms)
  duckIn: 0.09,
  duckMin: 0.35, // a tap still ducks this long
  duckOut: 0.14,
  fastFall: 0.12, // duck in the air: drop to the ground this fast
  buffer: 0.3, // a press that can't run yet waits this long
};

export const ACTION_DURATION = {
  jump: RIG.jumpDur,
  duck: RIG.duckIn + RIG.duckHold + RIG.duckOut,
  left: RIG.dodgeIn + RIG.dodgeHold + RIG.dodgeOut,
  right: RIG.dodgeIn + RIG.dodgeHold + RIG.dodgeOut,
  punch: RIG.punchDur,
};

const GROUP = { jump: 'v', duck: 'v', left: 'h', right: 'h', punch: 'p' };

const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);
const easeInOutCubic = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
const easeOutQuad = (x) => 1 - (1 - x) * (1 - x);
const easeInOutSine = (x) => -(Math.cos(Math.PI * x) - 1) / 2;

function jumpCurve(t) {
  const u = t / RIG.jumpDur;
  if (u <= 0 || u >= 1) return 0;
  return 4 * RIG.jumpApex * u * (1 - u);
}

function duckEnv(t) {
  if (t <= 0) return 0;
  if (t < RIG.duckIn) return easeOutQuad(t / RIG.duckIn);
  const t2 = t - RIG.duckIn;
  if (t2 < RIG.duckHold) return 1;
  const t3 = t2 - RIG.duckHold;
  if (t3 < RIG.duckOut) return 1 - easeInOutSine(t3 / RIG.duckOut);
  return 0;
}

function dodgeEnv(t) {
  if (t <= 0) return 0;
  if (t < RIG.dodgeIn) return easeOutCubic(t / RIG.dodgeIn);
  const t2 = t - RIG.dodgeIn;
  if (t2 < RIG.dodgeHold) return 1;
  const t3 = t2 - RIG.dodgeHold;
  if (t3 < RIG.dodgeOut) return 1 - easeInOutCubic(t3 / RIG.dodgeOut);
  return 0;
}

/** Bank follows the lateral velocity: strongest while moving, zero while holding. */
function dodgeBankEnv(t) {
  if (t <= 0) return 0;
  if (t < RIG.dodgeIn) return Math.sin((t / RIG.dodgeIn) * Math.PI);
  const t3 = t - RIG.dodgeIn - RIG.dodgeHold;
  if (t3 > 0 && t3 < RIG.dodgeOut) return -0.6 * Math.sin((t3 / RIG.dodgeOut) * Math.PI);
  return 0;
}

const easeInQuad = (x) => x * x;

export class CameraRig {
  constructor(camera, track) {
    this.camera = camera;
    this.track = track;
    this.mode = 'auto';
    this.onStart = null; // (type, t) when a PLAY action actually starts
    this.actions = [];
    this._out = { height: 0, duck: 0, lateral: 0, lunge: 0, roll: 0, pitch: 0 };
    this.height = 0;
    this.duck = 0;
    this.lateral = 0;
    this.lunge = 0;
    this.vfov = 45;
    this.pos = new THREE.Vector3();
  }

  reset() {
    this.actions.length = 0;
    this.height = this.duck = this.lateral = this.lunge = 0;
    // PLAY state; every change is time-stamped so any instant can be sampled
    this.lane = 0;
    this.laneMove = { t0: -1e9, from: 0, to: 0 };
    this.jumpT = -1e9; // start of the current jump
    this.fall = null; // { t0, h0 } fast-fall out of a jump
    this.duckT = -1e9; // start of the current duck
    this.duckEnd = -1e9; // when it starts rising (Infinity while held)
    this.duckHeld = false;
    this.punchT = -1e9;
    this.queue = [];
  }

  setMode(mode) {
    this.mode = mode;
    this.reset();
  }

  // ── PLAY mode ─────────────────────────────────────────────────────────────

  /** Jump height at `t` (with fast-fall applied). */
  _jumpH(t) {
    const f = this.fall;
    if (f && t >= f.t0) {
      const u = (t - f.t0) / PLAY.fastFall;
      return u >= 1 ? 0 : f.h0 * (1 - easeInQuad(u));
    }
    return jumpCurve(t - this.jumpT);
  }

  _airborne(t) {
    return this._jumpH(t) > 0.05;
  }

  /** Duck envelope 0…1 at `t`. */
  _duckE(t) {
    const d = t - this.duckT;
    if (d < 0) return 0;
    const inE = d < PLAY.duckIn ? easeOutQuad(d / PLAY.duckIn) : 1;
    const r = t - this.duckEnd;
    if (r <= 0) return inE;
    return r >= PLAY.duckOut ? 0 : inE * (1 - easeOutQuad(r / PLAY.duckOut));
  }

  _lateral(t) {
    const m = this.laneMove;
    const u = Math.min(1, Math.max(0, (t - m.t0) / PLAY.dodgeIn));
    return m.from + (m.to - m.from) * easeOutCubic(u);
  }

  /** PLAY pose at `t`, no side effects (the judge samples exact instants). */
  sample(t) {
    const o = this._out;
    if (this.mode !== 'play') {
      o.height = this.height;
      o.duck = this.duck;
      o.lateral = this.lateral;
      return o;
    }
    o.height = this._jumpH(t);
    const de = this._duckE(t);
    o.duck = RIG.duckDepth * de;
    o.lateral = this._lateral(t);
    const pt = t - this.punchT;
    o.lunge = pt >= 0 && pt < RIG.punchDur ? RIG.punchLunge * Math.sin((pt / RIG.punchDur) * Math.PI) : 0;
    const m = this.laneMove;
    const mu = (t - m.t0) / PLAY.dodgeIn;
    const dir = Math.sign(m.to - m.from);
    o.roll = RIG.duckRoll * de + (mu >= 0 && mu < 1 ? -dir * RIG.dodgeBank * Math.sin(mu * Math.PI) : 0);
    const jt = t - this.jumpT;
    // the jump's nose-up eases out with the drop when fast-falling
    const f = this.fall;
    const fk = f && t >= f.t0 && f.h0 > 0 ? o.height / f.h0 : 1;
    o.pitch = o.height > 0 ? -7 * DEG * Math.sin(Math.min(1, jt / RIG.jumpDur) * Math.PI) * fk : 0;
    return o;
  }

  /** Tries to start a PLAY action now; false = can't yet (it gets buffered). */
  _try(type, t) {
    switch (type) {
      case 'left':
      case 'right': {
        // lane changes interrupt each other at any point (no waiting)
        const lane = Math.max(-1, Math.min(1, this.lane + (type === 'right' ? 1 : -1)));
        if (lane === this.lane) return true; // already at the edge: nothing to do
        this.laneMove = { t0: t, from: this._lateral(t), to: lane * RIG.dodgeDist };
        this.lane = lane;
        break;
      }
      case 'jump': {
        if (this._airborne(t)) return false; // queued: jumps again on landing
        // a jump cancels a duck
        if (this._duckE(t) > 0) this.duckEnd = Math.min(this.duckEnd, t);
        this.duckHeld = false;
        this.jumpT = t;
        this.fall = null;
        break;
      }
      case 'duck': {
        // in the air: fast-fall, ducking on the way down
        if (this._airborne(t) && !this.fall) this.fall = { t0: t, h0: this._jumpH(t) };
        const e = this._duckE(t);
        // keep a duck that is still going down / held; otherwise start a new one
        // from the current depth (no pop back up)
        this.duckT = e > 0 ? t - PLAY.duckIn * (1 - Math.sqrt(1 - Math.min(1, e))) : t;
        this.duckHeld = true;
        this.duckEnd = Infinity;
        break;
      }
      case 'punch': {
        if (t - this.punchT < RIG.punchDur * 0.85) return false;
        this.punchT = t;
        break;
      }
      default:
        return true;
    }
    if (this.onStart) this.onStart(type, t);
    return true;
  }

  /** PLAY input: `down` false = key released (only duck cares). */
  press(type, t, down = true) {
    if (!down) {
      if (type === 'duck' && this.duckHeld) {
        this.duckHeld = false;
        this.duckEnd = Math.max(t, this.duckT + PLAY.duckMin);
      }
      return;
    }
    if (!this._try(type, t)) {
      // one pending press per action; the newest wins
      this.queue = this.queue.filter((q) => q.type !== type);
      this.queue.push({ type, t });
    }
  }

  _runQueue(time) {
    const q = this.queue;
    for (let i = 0; i < q.length; i++) {
      const p = q[i];
      if (time - p.t > PLAY.buffer) {
        q.splice(i--, 1);
        continue;
      }
      // start the buffered action the instant it became possible (landing),
      // not at the frame that noticed: keeps the motion on its true curve
      let t = time;
      if (p.type === 'jump') {
        const land = this.fall ? this.fall.t0 + PLAY.fastFall : this.jumpT + RIG.jumpDur;
        t = Math.max(p.t, Math.min(time, land));
      } else if (p.type === 'punch') t = Math.max(p.t, Math.min(time, this.punchT + RIG.punchDur * 0.85));
      if (this._try(p.type, t)) q.splice(i--, 1);
    }
  }

  setAspect(aspect) {
    let vfov;
    if (aspect >= 1) vfov = (2 * Math.atan(Math.tan((RIG.hfov / 2) * DEG) / aspect)) / DEG;
    else vfov = RIG.portraitVfov;
    this.vfov = vfov;
    this.camera.fov = vfov;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }

  /** Is an action of the same group still running at `time`? */
  busy(type, time) {
    const g = GROUP[type];
    for (const a of this.actions) {
      if (GROUP[a.type] === g && time - a.t0 < ACTION_DURATION[a.type] * 0.85) return true;
    }
    return false;
  }

  trigger(type, t0) {
    if (!GROUP[type] || this.mode === 'play') return false;
    if (this.busy(type, t0)) return false;
    this.actions.push({ type, t0 });
    return true;
  }

  update(time, s) {
    if (this.mode === 'play') {
      if (this.queue.length) this._runQueue(time);
      const o = this.sample(time);
      this.height = o.height;
      this.duck = o.duck;
      this.lateral = o.lateral;
      this.lunge = o.lunge;
      this._place(time, s, o.height, o.duck, o.lateral, o.lunge, o.roll, o.pitch);
      return;
    }
    let height = 0;
    let duck = 0;
    let lateral = 0;
    let lunge = 0;
    let roll = 0;
    let pitchExtra = 0;
    for (let i = this.actions.length - 1; i >= 0; i--) {
      const a = this.actions[i];
      const t = time - a.t0;
      if (t > ACTION_DURATION[a.type] + 0.05) {
        this.actions.splice(i, 1);
        continue;
      }
      if (t < 0) continue;
      switch (a.type) {
        case 'jump': {
          height += jumpCurve(t);
          pitchExtra -= 7 * DEG * Math.sin(Math.min(1, t / RIG.jumpDur) * Math.PI);
          break;
        }
        case 'duck': {
          const e = duckEnv(t);
          duck += RIG.duckDepth * e;
          roll += RIG.duckRoll * e;
          break;
        }
        case 'left':
        case 'right': {
          const dir = a.type === 'right' ? 1 : -1;
          lateral += dir * RIG.dodgeDist * dodgeEnv(t);
          roll += -dir * RIG.dodgeBank * dodgeBankEnv(t);
          break;
        }
        case 'punch': {
          lunge += RIG.punchLunge * Math.sin(Math.min(1, t / RIG.punchDur) * Math.PI);
          break;
        }
      }
    }
    this.height = height;
    this.duck = duck;
    this.lateral = lateral;
    this.lunge = lunge;
    this._place(time, s, height, duck, lateral, lunge, roll, pitchExtra);
  }

  _place(time, s, height, duck, lateral, lunge, roll, pitchExtra) {
    const grounded = height < 0.01;
    const bobPhase = time * RIG.bobHz * Math.PI * 2;
    const bob = grounded ? RIG.bobAmp * Math.sin(bobPhase) : 0;
    roll += grounded ? RIG.bobRoll * Math.sin(bobPhase * 0.5) : 0;

    const camS = s + lunge;
    const tr = this.track;
    tr.point(camS, lateral, RIG.eye + height + duck + bob, this.pos);
    this.camera.position.copy(this.pos);
    const yaw = -tr.heading(camS + 6);
    const horizonPitch = Math.atan((RIG.horizon - 0.5) * 2 * Math.tan((this.vfov / 2) * DEG));
    const pitch = tr.slope(camS + 5) * 0.7 + horizonPitch + pitchExtra;
    this.camera.rotation.set(pitch, yaw, roll, 'YXZ');
    this.camera.updateMatrixWorld();
  }
}
