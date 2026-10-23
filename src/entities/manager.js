import * as THREE from 'three';
import { hash2, hashFloat } from '../core/rng.js';
import { createObstacle, DRIVERS } from './obstacles.js';
import { createEnemy } from './enemies.js';
import { createPoseWall, POSES } from './posewalls.js';

// Spawns, places and recycles everything the runner meets. An entity's road
// distance is a pure function of the run clock:
//   s(time) = speed·t + offset + approach·(t − time)
// so at time t (the scheduled event time) it sits exactly `offset` metres in
// front of the camera. Knock-back after a punch is also a function of time.

const ENEMY_OFFSET = 1.7;
const ENEMY_APPROACH = 1.2;
const CART_APPROACH = 10;
const MOVERS = new Set(['cart', 'tricycle']);
const OBSTACLE_APPROACH = { spikedLog: 3 };
const DODGE_LAT = 0.9;

// Knock-back: ~6 m up, ~20 m back, one bounce.
const LAUNCH_VY = 16.97;
const GRAV = 24;
const LAUNCH_EXTRA = 14; // m/s on top of the camera speed
const BOUNCE = 0.38;
const T1 = (2 * LAUNCH_VY) / GRAV;
const T2 = (2 * LAUNCH_VY * BOUNCE) / GRAV;
const LAUNCH_LIFE = T1 + T2 + 0.5;

const _v = new THREE.Vector3();
const _hp = new THREE.Vector3();
const _up = new THREE.Vector3();
// pre-warm sweep scratch
const _ends = new Map();

export class EntityManager {
  constructor(scene, track, effects) {
    this.scene = scene;
    this.track = track;
    this.effects = effects;
    this.events = [];
    this.speed = 14;
    this.ahead = 70;
    this.shadows = true;
    this.pool = new Map();
    this.active = new Map(); // event id → entity
    this.list = []; // the same entities, for allocation-free iteration
    this._entPool = [];
    this.order = []; // events sorted by spawn time
    this.cursor = 0;
    this.lastTime = -1e9;
    this.emitters = [];
    this._emitPool = [];
  }

  setSchedule(schedule) {
    this.events = schedule.events;
    this.speed = schedule.speed;
    this.reset();
    this.prewarm();
  }

  setAhead(m) {
    this.ahead = m;
    this._sortSpawns();
  }

  reset() {
    this._releaseAll();
    this._sortSpawns();
    this.cursor = 0;
    this.lastTime = -1e9;
  }

  _params(ev) {
    let off = 0;
    let approach = 0;
    let lat = 0;
    switch (ev.type) {
      case 'punch':
        off = ENEMY_OFFSET;
        approach = ENEMY_APPROACH;
        break;
      case 'left':
      case 'right':
        lat = (ev.type === 'left' ? 1 : -1) * DODGE_LAT;
        approach = MOVERS.has(ev.variant) ? CART_APPROACH : 0;
        break;
      case 'jump':
      case 'duck':
        approach = OBSTACLE_APPROACH[ev.variant] || 0;
        break;
    }
    return { off, approach, lat };
  }

  _sortSpawns() {
    this.order = this.events.map((ev) => {
      const p = this._params(ev);
      return { ev, ...p, spawn: ev.t - (this.ahead - p.off) / (this.speed + p.approach) };
    });
    this.order.sort((a, b) => a.spawn - b.spawn);
  }

  /**
   * Build every pooled object this schedule will need (the peak number of
   * entities alive at once, per pool key) so nothing is created mid-run.
   */
  prewarm() {
    _ends.clear();
    const need = new Map();
    for (const o of this.order) {
      const key = this._poolKey(o.ev);
      let ends = _ends.get(key);
      if (!ends) _ends.set(key, (ends = []));
      // drop entities released before this one spawns
      for (let i = ends.length - 1; i >= 0; i--) if (ends[i] < o.spawn) ends.splice(i, 1);
      ends.push(o.ev.t + (o.ev.type === 'punch' ? 0.15 + LAUNCH_LIFE : 1.2));
      need.set(key, Math.max(need.get(key) || 0, ends.length));
    }
    for (const [key, n] of need) {
      let list = this.pool.get(key);
      if (!list) this.pool.set(key, (list = []));
      let have = list.length;
      for (const e of this.list) if (e.key === key) have++;
      const ev = this.order.find((o) => this._poolKey(o.ev) === key).ev;
      for (; have < n; have++) list.push(this._build(ev, key));
    }
    while (this._entPool.length < 24) this._entPool.push(this._newEnt());
  }

  /** Every pooled root (for shader warm-up). */
  *pooledRoots() {
    for (const list of this.pool.values()) for (const obj of list) yield (obj.enemy || obj.wall || obj.obstacle).root;
  }

  _newEnt() {
    return { ev: null, key: '', obj: null, root: null, off: 0, approach: 0, lat: 0, phase: 0, hitTime: -1, sHit: 0, latHit: 0, tumble: 0, roll: 0, drift: 0, bounced: false, passed: false, _i: -1 };
  }

  _build(ev, key) {
    const obj = this._create(ev, key);
    const root = (obj.enemy || obj.wall || obj.obstacle).root;
    root.matrixAutoUpdate = false;
    root.visible = false;
    this.scene.add(root);
    return obj;
  }

  _releaseAll() {
    for (let i = this.list.length - 1; i >= 0; i--) this._release(this.list[i]);
  }

  _poolKey(ev) {
    if (ev.type === 'punch') return 'enemy:' + ev.variant;
    if (ev.type === 'pose') return 'pose:' + ev.variant;
    if (MOVERS.has(ev.variant)) return 'obs:' + ev.variant + ':' + DRIVERS[hash2(ev.id, 77) % DRIVERS.length];
    return 'obs:' + ev.variant;
  }

  _create(ev, key) {
    if (ev.type === 'punch') return { enemy: createEnemy(ev.variant, { shadows: this.shadows }) };
    if (ev.type === 'pose') return { wall: createPoseWall(POSES.includes(ev.variant) ? ev.variant : 'starJump', { shadows: this.shadows }) };
    const driverKind = key.split(':')[2] || null;
    return { obstacle: createObstacle(ev.variant, { shadows: this.shadows, driverKind }) };
  }

  _spawn(o) {
    const { ev } = o;
    const key = this._poolKey(ev);
    let list = this.pool.get(key);
    if (!list) this.pool.set(key, (list = []));
    // pools are pre-warmed; building here is only a fallback
    const obj = list.pop() || this._build(ev, key);
    const root = (obj.enemy || obj.wall || obj.obstacle).root;
    root.visible = true;
    if (obj.enemy) obj.enemy.reset();
    if (obj.wall) obj.wall.setOpen(0);
    const ent = this._entPool.pop() || this._newEnt();
    ent.ev = ev;
    ent.key = key;
    ent.obj = obj;
    ent.root = root;
    ent.off = o.off;
    ent.approach = o.approach;
    ent.lat = o.lat;
    ent.phase = hashFloat(ev.id, 5) * 10;
    ent.hitTime = -1;
    ent.sHit = 0;
    ent.latHit = 0;
    ent.tumble = 0;
    ent.roll = 0;
    ent.drift = 0;
    ent.bounced = false;
    ent.passed = false;
    ent._i = this.list.length;
    this.list.push(ent);
    this.active.set(ev.id, ent);
    return ent;
  }

  _release(ent) {
    ent.root.visible = false;
    this.active.delete(ent.ev.id);
    // swap-remove from the iteration list
    const last = this.list.pop();
    if (last !== ent) {
      this.list[ent._i] = last;
      last._i = ent._i;
    }
    ent._i = -1;
    let list = this.pool.get(ent.key);
    if (!list) this.pool.set(ent.key, (list = []));
    list.push(ent.obj);
    ent.obj = null;
    ent.ev = null;
    this._entPool.push(ent);
  }

  /** Road distance of an entity at `time` (before any knock-back). */
  sOf(ent, time) {
    return this.speed * ent.ev.t + ent.off + ent.approach * (ent.ev.t - time);
  }

  get(id) {
    return this.active.get(id) || null;
  }

  /** World position of an entity's body centre (for particle bursts). */
  worldPos(id, out = new THREE.Vector3()) {
    const ent = this.active.get(id);
    if (!ent) return null;
    const up = ent.ev.type === 'punch' ? 1.4 : 1.0;
    return out.setFromMatrixPosition(ent.root.matrix).add(_up.set(0, up, 0));
  }

  /** Punch connects: launch the enemy. */
  hit(id, time) {
    const ent = this.active.get(id);
    if (!ent || ent.hitTime >= 0 || ent.ev.type !== 'punch') return false;
    ent.hitTime = time;
    ent.sHit = this.sOf(ent, time);
    ent.latHit = ent.lat;
    ent.tumble = (2 + hashFloat(ent.ev.id, 9) * 2) * Math.PI; // 360°–720°
    ent.roll = (hashFloat(ent.ev.id, 11) - 0.5) * 1.6;
    ent.drift = (hashFloat(ent.ev.id, 13) - 0.5) * 3;
    const p = this.worldPos(id, _hp);
    if (p && this.effects) this.effects.burst('punch', p, 26);
    return true;
  }

  update(time, camS) {
    // Seeking backwards (or a big jump forwards) → rebuild the active set.
    if (time < this.lastTime - 0.001 || time - this.lastTime > 2) {
      this._releaseAll();
      this.cursor = 0;
      while (this.cursor < this.order.length && this.order[this.cursor].ev.t + 1.2 < time) this.cursor++;
    }
    this.lastTime = time;

    while (this.cursor < this.order.length && this.order[this.cursor].spawn <= time) {
      const o = this.order[this.cursor++];
      if (o.ev.t + 1.2 < time) continue;
      if (!this.active.has(o.ev.id)) this._spawn(o);
    }

    for (let i = 0; i < this.emitters.length; i++) this._emitPool.push(this.emitters[i]);
    this.emitters.length = 0;

    // backwards so a release (swap-remove) never skips an entity
    for (let i = this.list.length - 1; i >= 0; i--) {
      const ent = this.list[i];
      const ev = ent.ev;
      if (ent.hitTime >= 0) {
        if (time - ent.hitTime > LAUNCH_LIFE) {
          this._release(ent);
          continue;
        }
        this._placeLaunched(ent, time);
        ent.obj.enemy.update(time, ent.phase, true);
        continue;
      }
      if (time > ev.t + 1.2) {
        this._release(ent);
        continue;
      }
      const s = this.sOf(ent, time);
      this.track.matrix(s, ent.lat, 0, 0, 1, ent.root.matrix);
      ent.root.matrixWorldNeedsUpdate = true;

      if (ent.obj.enemy) ent.obj.enemy.update(time, ent.phase, false);
      else if (ent.obj.wall) {
        ent.obj.wall.setOpen((time - (ev.t - 0.32)) / 0.26);
        if (!ent.passed && time >= ev.t) {
          ent.passed = true;
          if (this.effects) this.effects.burst('pose', this.track.point(camS + 1.5, 0, 1.3, _v), 30);
        }
      } else if (ent.obj.obstacle) {
        const ob = ent.obj.obstacle;
        ob.update(time + ent.phase);
        if (ob.flames.length || ob.toxic.length) {
          ent.root.updateMatrixWorld(true);
          for (let k = 0; k < ob.flames.length; k++) {
            const f = ob.flames[k];
            this._emit(_v.copy(f.local).applyMatrix4(f.obj.matrixWorld), 'fire');
          }
          for (let k = 0; k < ob.toxic.length; k++) this._emit(_v.copy(ob.toxic[k]).applyMatrix4(ent.root.matrix), 'toxic');
        }
      }
    }
  }

  _emit(pos, type) {
    const e = this._emitPool.pop() || { pos: new THREE.Vector3(), type };
    e.pos.copy(pos);
    e.type = type;
    this.emitters.push(e);
  }

  _placeLaunched(ent, time) {
    const dt = time - ent.hitTime;
    const s = ent.sHit + (this.speed + LAUNCH_EXTRA) * dt;
    let y;
    if (dt < T1) y = LAUNCH_VY * dt - 0.5 * GRAV * dt * dt;
    else if (dt < T1 + T2) {
      const d2 = dt - T1;
      y = LAUNCH_VY * BOUNCE * d2 - 0.5 * GRAV * d2 * d2;
      if (!ent.bounced) {
        ent.bounced = true;
        if (this.effects) this.effects.burst('dust', this.track.point(s, ent.latHit, 0.2, _v), 14);
      }
    } else y = 0;
    const lat = ent.latHit + ent.drift * Math.min(dt, T1);
    const fade = Math.max(0, Math.min(1, (LAUNCH_LIFE - dt) / 0.35));
    this.track.matrix(s, lat, Math.max(0, y), 0, Math.max(0.001, fade), ent.root.matrix);
    ent.root.matrixWorldNeedsUpdate = true;
    const spin = ent.obj.enemy.spin;
    const u = Math.min(1, dt / (T1 + T2 * 0.8));
    const e = 1 - Math.pow(1 - u, 2);
    spin.rotation.set(-ent.tumble * e, ent.roll * e * 0.5, ent.roll * e);
  }
}
