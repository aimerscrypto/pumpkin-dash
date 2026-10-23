import { QUALITY, RESOLUTIONS } from '../core/settings.js';
import { EXPORT_SIZES } from '../recording/exporter.js';

// HTML/CSS menus layered over the live 3D canvas. Menus never draw into the
// canvas, so they never appear in recordings.
//
// Actions sent to `onAction(name, data)`:
//   auto | play | record | export | exportStart(size) | exportBack | resume |
//   restart | quit | toggleRec | stopRec | click

const PUMPKIN_SVG = `<svg viewBox="0 0 64 64" aria-hidden="true"><ellipse cx="32" cy="38" rx="27" ry="21" fill="#FF5E00"/><ellipse cx="20" cy="38" rx="9" ry="19" fill="#FF7A14" opacity=".55"/><ellipse cx="44" cy="38" rx="9" ry="19" fill="#E04A00" opacity=".55"/><rect x="29" y="8" width="6" height="13" rx="2" fill="#3D6B22"/><path d="M17 33l7-8 7 8zM33 33l7-8 7 8z" fill="#FFE600"/><path d="M16 43h32l-5 9h-6l-2-4-3 4h-6l-3-4-2 4h-1z" fill="#FFE600"/></svg>`;

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export class Menus {
  /**
   * @param root      #ui element
   * @param settings  live settings object (mutated in place)
   * @param rounds    TIMELINE.rounds
   * @param onAction  (name, data) => void
   * @param onSettings (settings, changedKey) => void
   */
  constructor(root, { settings, rounds, onAction, onSettings }) {
    this.root = root;
    this.settings = settings;
    this.rounds = rounds;
    this.onAction = onAction;
    this.onSettings = onSettings;
    this.screens = {};
    this.current = null;
    this.back = 'title';

    this._buildTitle();
    this._buildSettings();
    this._buildExport();
    this._buildPause();
    this._buildEnd('gameover');
    this._buildEnd('victory');

    // in-run chrome: pause button + REC badge
    this.runBar = el('div', 'run-bar hidden');
    this.pauseBtn = el('button', 'icon-btn pause-btn', '❚❚');
    this.pauseBtn.setAttribute('aria-label', 'Pause');
    this.pauseBtn.addEventListener('click', () => this.onAction('pause'));
    this.recBadge = el('button', 'rec-badge hidden', '<span class="rec-dot"></span>REC <span class="rec-stop">■ STOP</span>');
    this.recBadge.addEventListener('click', () => this.onAction('stopRec'));
    this.runBar.append(this.recBadge, this.pauseBtn);
    root.appendChild(this.runBar);
  }

  _btn(label, cls, action, data) {
    const b = el('button', 'btn ' + (cls || ''), label);
    b.addEventListener('click', () => {
      this.onAction('click');
      this.onAction(action, typeof data === 'function' ? data() : data);
    });
    return b;
  }

  _screen(name, cls = '') {
    const s = el('div', 'screen hidden ' + cls);
    s.dataset.screen = name;
    this.root.appendChild(s);
    this.screens[name] = s;
    return s;
  }

  _buildTitle() {
    const s = this._screen('title', 'screen-title');
    const panel = el('div', 'title-panel');
    panel.innerHTML = `
      <div class="logo">
        <div class="logo-pumpkin">${PUMPKIN_SVG}</div>
        <h1 class="logo-text"><span>PUMPKIN</span><span>DASH</span></h1>
        <div class="logo-sub">HALLOWEEN FITNESS RUN</div>
      </div>`;
    const sel = el('div', 'round-select');
    const label = el('label', 'field-label', 'ROUNDS');
    const select = document.createElement('select');
    select.className = 'select';
    select.innerHTML = `<option value="all">ALL ROUNDS (${this.rounds.length})</option>` + this.rounds.map((r, i) => `<option value="${i}">${esc(r.label)} · ${esc(r.title)}</option>`).join('');
    select.value = String(this.settings.roundSelection);
    if (select.value !== String(this.settings.roundSelection)) select.value = 'all';
    select.addEventListener('change', () => {
      this.settings.roundSelection = select.value;
      this.onSettings(this.settings, 'roundSelection');
    });
    this.roundSelect = select;
    sel.append(label, select);

    const btns = el('div', 'title-buttons');
    btns.append(
      this._btn('▶ AUTO RUN', 'btn-primary', 'auto'),
      this._btn('🎮 PLAY', 'btn-green', 'play'),
      this._btn('⚙ SETTINGS', 'btn-ghost', 'settings'),
      this._btn('<span class="dot-red"></span> RECORD', 'btn-red', 'record'),
      this._btn('🎬 EXPORT VIDEO', 'btn-orange', 'export')
    );
    const hint = el('div', 'hint', 'AUTO RUN = hands-free video mode · PLAY: ←→ / A D dodge · ↑ / W jump · ↓ / S duck · SPACE / F punch · ESC pause');
    panel.append(sel, btns, hint);
    s.appendChild(panel);
  }

  _buildSettings() {
    const s = this._screen('settings');
    const panel = el('div', 'panel panel-wide');
    panel.appendChild(el('h2', 'panel-title', 'SETTINGS'));
    const form = el('div', 'form');
    const st = this.settings;
    const changed = (key) => this.onSettings(st, key);

    const row = (labelText, input, extra) => {
      const r = el('label', 'form-row');
      r.appendChild(el('span', 'form-label', labelText));
      r.appendChild(input);
      if (extra) r.appendChild(extra);
      form.appendChild(r);
    };
    const select = (key, options) => {
      const sel = document.createElement('select');
      sel.className = 'select';
      sel.innerHTML = Object.entries(options).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('');
      sel.value = st[key];
      sel.addEventListener('change', () => {
        st[key] = sel.value;
        changed(key);
      });
      this.inputs[key] = sel;
      return sel;
    };
    const range = (key, min, max, step, fmt) => {
      const inp = document.createElement('input');
      inp.type = 'range';
      inp.min = min;
      inp.max = max;
      inp.step = step;
      inp.value = st[key];
      const out = el('span', 'form-value', fmt(st[key]));
      inp.addEventListener('input', () => {
        st[key] = Number(inp.value);
        out.textContent = fmt(st[key]);
        changed(key);
      });
      // refreshes the label without reporting a change (used by show())
      inp._sync = () => (out.textContent = fmt(st[key]));
      this.inputs[key] = inp;
      return [inp, out];
    };
    const text = (key, placeholder, maxLength) => {
      const inp = document.createElement('input');
      inp.type = 'text';
      inp.className = 'text-input';
      inp.placeholder = placeholder;
      inp.maxLength = maxLength;
      inp.value = st[key];
      inp.addEventListener('change', () => {
        st[key] = inp.value.trim();
        changed(key);
      });
      this.inputs[key] = inp;
      return inp;
    };
    this.inputs = {};

    row('Quality', select('quality', Object.fromEntries(Object.entries(QUALITY).map(([k, v]) => [k, v.label]))));
    row('Resolution', select('resolution', Object.fromEntries(Object.entries(RESOLUTIONS).map(([k, v]) => [k, v.label]))));
    const pct = (v) => Math.round(v * 100) + '%';
    row('Music volume', ...range('musicVolume', 0, 1, 0.05, pct));
    row('SFX volume', ...range('sfxVolume', 0, 1, 0.05, pct));
    row('Round length', ...range('roundLength', 15, 180, 5, (v) => v + ' s'));
    row('Seed', text('seed', '1031', 24));
    row('Watermark', text('watermark', 'your channel name (optional)', 40));
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.className = 'checkbox';
    cb.checked = !!st.cleanRecording;
    cb.addEventListener('change', () => {
      st.cleanRecording = cb.checked;
      changed('cleanRecording');
    });
    this.inputs.cleanRecording = cb;
    row('Clean recording (hide cursor & buttons)', cb);
    const ar = document.createElement('input');
    ar.type = 'checkbox';
    ar.className = 'checkbox';
    ar.checked = !!st.autoRes;
    ar.addEventListener('change', () => {
      st.autoRes = ar.checked;
      changed('autoRes');
    });
    this.inputs.autoRes = ar;
    row('Auto resolution (lower res when FPS < 50)', ar);

    panel.appendChild(form);
    panel.appendChild(el('div', 'hint', 'Same seed = same run, frame for frame. Recording at "Fit window" records at 1920 × 1080.'));
    const btns = el('div', 'panel-buttons');
    btns.appendChild(this._btn('◀ BACK', 'btn-primary', 'settingsBack'));
    panel.appendChild(btns);
    s.appendChild(panel);
  }

  _buildExport() {
    const s = this._screen('export');
    const panel = el('div', 'panel');
    panel.appendChild(el('h2', 'panel-title', 'EXPORT VIDEO'));
    const form = el('div', 'form');
    const r = el('label', 'form-row');
    r.appendChild(el('span', 'form-label', 'Size'));
    const sel = document.createElement('select');
    sel.className = 'select';
    sel.innerHTML = Object.entries(EXPORT_SIZES).map(([k, v]) => `<option value="${k}">${esc(v.label)}</option>`).join('');
    sel.value = this.settings.exportSize;
    if (!sel.value) sel.value = '1920x1080';
    r.appendChild(sel);
    form.appendChild(r);
    this.exportSelect = sel;
    panel.appendChild(form);
    panel.appendChild(
      el('div', 'hint', 'Renders the AUTO RUN (rounds, seed and watermark from Settings) frame by frame into a smooth 60 fps MP4 with sound, even on a slow PC. Chrome / Edge.')
    );
    const btns = el('div', 'panel-buttons');
    btns.append(this._btn('🎬 START EXPORT', 'btn-primary', 'exportStart', () => sel.value), this._btn('◀ BACK', 'btn-ghost', 'exportBack'));
    panel.appendChild(btns);
    s.appendChild(panel);
  }

  _buildPause() {
    const s = this._screen('pause');
    const panel = el('div', 'panel');
    panel.appendChild(el('h2', 'panel-title', 'PAUSED'));
    const btns = el('div', 'panel-buttons col');
    this.recToggle = this._btn('● START RECORDING', 'btn-red', 'toggleRec');
    btns.append(
      this._btn('▶ RESUME', 'btn-primary', 'resume'),
      this.recToggle,
      this._btn('↻ RESTART', 'btn-green', 'restart'),
      this._btn('⚙ SETTINGS', 'btn-ghost', 'settings'),
      this._btn('✕ QUIT TO MENU', 'btn-ghost', 'quit')
    );
    panel.appendChild(btns);
    panel.appendChild(el('div', 'hint', 'ESC to resume'));
    s.appendChild(panel);
  }

  _buildEnd(name) {
    const s = this._screen(name);
    const panel = el('div', 'panel');
    const title = el('h2', 'panel-title big', name === 'gameover' ? 'GAME OVER' : 'MISSION COMPLETE!');
    const stats = el('div', 'stats');
    const note = el('div', 'hint note hidden');
    const btns = el('div', 'panel-buttons');
    btns.append(this._btn(name === 'gameover' ? '↻ TRY AGAIN' : '↻ PLAY AGAIN', 'btn-primary', 'restart'), this._btn('☰ MENU', 'btn-ghost', 'quit'));
    panel.append(title, stats, note, btns);
    s.appendChild(panel);
    s._stats = stats;
    s._note = note;
  }

  show(name, data = {}) {
    for (const [k, s] of Object.entries(this.screens)) s.classList.toggle('hidden', k !== name);
    this.current = name || null;
    if (name === 'settings') {
      this.back = data.back || 'title';
      for (const [k, inp] of Object.entries(this.inputs)) {
        if (inp.type === 'checkbox') inp.checked = !!this.settings[k];
        else inp.value = this.settings[k];
        if (inp._sync) inp._sync();
      }
    }
    if (name === 'title') this.roundSelect.value = String(this.settings.roundSelection);
    if (name === 'export') this.exportSelect.value = this.settings.exportSize;
    if (name === 'gameover' || name === 'victory') {
      const s = this.screens[name];
      const rows = [];
      if (data.play) {
        rows.push(['SCORE', data.score]);
        rows.push(['DISTANCE', Math.floor(data.distance) + ' m']);
        if (data.best != null) rows.push(['BEST', data.best]);
      } else {
        rows.push(['DISTANCE', Math.floor(data.distance) + ' m']);
        rows.push(['SEED', esc(data.seed)]);
      }
      s._stats.innerHTML = rows.map(([a, b]) => `<div class="stat"><span>${a}</span><b>${b}</b></div>`).join('');
      s._note.classList.toggle('hidden', !data.savedFile);
      if (data.savedFile) s._note.textContent = `🎬 Video saved: ${data.savedFile}`;
    }
    if (name) {
      const first = this.screens[name] && this.screens[name].querySelector('.btn-primary');
      if (first && !matchMedia('(pointer: coarse)').matches) first.focus({ preventScroll: true });
    }
  }

  hide() {
    this.show(null);
  }

  setRunBar(visible) {
    this.runBar.classList.toggle('hidden', !visible);
  }

  setRecording(on) {
    this.recBadge.classList.toggle('hidden', !on);
    this.recToggle.innerHTML = on ? '■ STOP & SAVE RECORDING' : '● START RECORDING';
  }
}

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}
