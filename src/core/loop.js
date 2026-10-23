// requestAnimationFrame loop. dt is clamped so a hitch never teleports the run.
export class Loop {
  constructor(fn) {
    this.fn = fn;
    this.running = false;
    this.last = 0;
    this._tick = this._tick.bind(this);
  }
  start() {
    if (this.running) return;
    this.running = true;
    this.last = performance.now();
    requestAnimationFrame(this._tick);
  }
  stop() {
    this.running = false;
  }
  _tick(now) {
    if (!this.running) return;
    const dt = Math.min(0.1, Math.max(0, (now - this.last) / 1000));
    this.last = now;
    try {
      this.fn(dt, now / 1000);
    } catch (e) {
      console.error(e);
    }
    requestAnimationFrame(this._tick);
  }
}
