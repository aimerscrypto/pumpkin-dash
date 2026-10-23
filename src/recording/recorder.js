// Records the game canvas (HUD included — it is drawn into the WebGL frame)
// plus the Web Audio mix into a .webm that downloads automatically on stop.

const TYPES = [
  'video/webm;codecs=vp9,opus',
  'video/webm;codecs=vp8,opus',
  'video/webm;codecs=vp9',
  'video/webm;codecs=vp8',
  'video/webm',
];

export class Recorder {
  constructor(canvas, audio) {
    this.canvas = canvas;
    this.audio = audio;
    this.rec = null;
    this.chunks = [];
    this.recording = false;
    this.filename = 'pumpkin-dash.webm';
    this.onState = null; // (recording:boolean) => void
  }

  static supported() {
    return typeof MediaRecorder !== 'undefined' && !!HTMLCanvasElement.prototype.captureStream;
  }

  start(filename = 'pumpkin-dash.webm') {
    if (this.recording || !Recorder.supported()) return false;
    this.filename = filename;
    const stream = this.canvas.captureStream(60);
    if (this.audio && this.audio.recDest) {
      for (const tr of this.audio.recDest.stream.getAudioTracks()) stream.addTrack(tr);
    }
    const mimeType = TYPES.find((t) => MediaRecorder.isTypeSupported(t)) || '';
    const big = this.canvas.width * this.canvas.height >= 1920 * 1080 * 0.9;
    const opts = { videoBitsPerSecond: big ? 16_000_000 : 9_000_000, audioBitsPerSecond: 192_000 };
    if (mimeType) opts.mimeType = mimeType;
    try {
      this.rec = new MediaRecorder(stream, opts);
    } catch (e) {
      console.warn('MediaRecorder failed', e);
      return false;
    }
    this.chunks = [];
    this.stream = stream;
    this.rec.ondataavailable = (e) => {
      if (e.data && e.data.size) this.chunks.push(e.data);
    };
    this.rec.onstop = () => this._save();
    this.rec.start(1000);
    this.recording = true;
    if (this.onState) this.onState(true);
    return true;
  }

  /** Pause/resume while the game is paused so the video has no frozen gap. */
  setPaused(p) {
    if (!this.recording || !this.rec) return;
    try {
      if (p && this.rec.state === 'recording') this.rec.pause();
      else if (!p && this.rec.state === 'paused') this.rec.resume();
    } catch {
      /* ignore */
    }
  }

  stop() {
    if (!this.recording || !this.rec) return;
    this.recording = false;
    try {
      this.rec.requestData();
    } catch {
      /* ignore */
    }
    this.rec.stop();
    if (this.onState) this.onState(false);
  }

  _save() {
    // only stop the video track; the audio track belongs to the live context
    if (this.stream) for (const tr of this.stream.getVideoTracks()) tr.stop();
    this.stream = null;
    if (!this.chunks.length) return;
    const blob = new Blob(this.chunks, { type: this.rec.mimeType || 'video/webm' });
    this.chunks = [];
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
  }
}
