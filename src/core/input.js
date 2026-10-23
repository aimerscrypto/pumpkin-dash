// Keyboard + touch input → abstract actions: left | right | jump | duck | punch | pause

const KEYMAP = {
  ArrowLeft: 'left',
  KeyA: 'left',
  ArrowRight: 'right',
  KeyD: 'right',
  ArrowUp: 'jump',
  KeyW: 'jump',
  ArrowDown: 'duck',
  KeyS: 'duck',
  Space: 'punch',
  KeyF: 'punch',
  Escape: 'pause',
  KeyP: 'pause',
};

const TOUCH_BUTTONS = [
  { action: 'left', label: '◀', cls: 'tc-left' },
  { action: 'right', label: '▶', cls: 'tc-right' },
  { action: 'jump', label: '▲', cls: 'tc-jump' },
  { action: 'duck', label: '▼', cls: 'tc-duck' },
  { action: 'punch', label: 'PUNCH', cls: 'tc-punch' },
];

export class Input {
  constructor() {
    this.listeners = [];
    this.touchEl = null;
    // true during a PLAY run: keys go to the game even if a HUD/menu element
    // kept focus, and nothing on the page gets to swallow them first
    this.active = false;
    this.held = new Set();
    // capture phase: read before any element handler, the instant the key goes down
    window.addEventListener('keydown', (e) => {
      const action = KEYMAP[e.code];
      if (!action) return;
      if (!this.active) {
        const tag = e.target && e.target.tagName;
        if (tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA') return;
      } else if (document.activeElement && document.activeElement !== document.body) {
        Input.blurActive();
      }
      e.preventDefault();
      if (e.repeat || this.held.has(e.code)) return;
      this.held.add(e.code);
      this.emit(action, true);
    }, true);
    window.addEventListener('keyup', (e) => {
      if (!this.held.delete(e.code)) return;
      const action = KEYMAP[e.code];
      // another key bound to the same action still down → stay held
      for (const c of this.held) if (KEYMAP[c] === action) return;
      this.emit(action, false);
    }, true);
    // alt-tab etc. never delivers keyup: release everything
    window.addEventListener('blur', () => this.releaseAll());
  }

  on(fn) {
    this.listeners.push(fn);
  }

  emit(action, down = true) {
    for (const fn of this.listeners) fn(action, down);
  }

  releaseAll() {
    const actions = new Set();
    for (const c of this.held) actions.add(KEYMAP[c]);
    this.held.clear();
    for (const a of actions) this.emit(a, false);
  }

  buildTouch(parent) {
    const wrap = document.createElement('div');
    wrap.className = 'touch-controls hidden';
    for (const b of TOUCH_BUTTONS) {
      const btn = document.createElement('button');
      btn.className = 'tc-btn ' + b.cls;
      btn.textContent = b.label;
      btn.setAttribute('aria-label', b.action);
      btn.tabIndex = -1;
      let down = false;
      const press = (e) => {
        e.preventDefault();
        if (down) return;
        down = true;
        btn.classList.add('down');
        this.emit(b.action, true);
      };
      const release = () => {
        if (!down) return;
        down = false;
        btn.classList.remove('down');
        this.emit(b.action, false);
      };
      // fingers fire on touchstart (no click / 300 ms delay); mice via pointer events
      btn.addEventListener('touchstart', press, { passive: false });
      btn.addEventListener('touchend', (e) => { e.preventDefault(); release(); }, { passive: false });
      btn.addEventListener('touchcancel', release);
      btn.addEventListener('pointerdown', (e) => { if (e.pointerType !== 'touch') press(e); });
      for (const ev of ['pointerup', 'pointerleave', 'pointercancel']) {
        btn.addEventListener(ev, (e) => { if (e.pointerType !== 'touch') release(); });
      }
      wrap.appendChild(btn);
    }
    parent.appendChild(wrap);
    this.touchEl = wrap;
  }

  showTouch(v) {
    if (this.touchEl) this.touchEl.classList.toggle('hidden', !v);
  }

  static isTouch() {
    return (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) || 'ontouchstart' in window;
  }

  /** Drop focus from menu buttons so Space doesn't re-click them mid-run. */
  static blurActive() {
    if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  }
}
