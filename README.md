# 🎃 PUMPKIN DASH

A stylized first-person Halloween **fitness runner** for kids' brain-break videos.
Built with Three.js + Vite. All art is procedural, all sound is synthesised with
the Web Audio API — no external assets, no copyrighted characters.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build (goes to `/docs`, ready for GitHub Pages):

```bash
npm run build
npm run preview    # serve the built /docs folder locally
```

**GitHub Pages:** push the repo, then *Settings → Pages → Deploy from branch →
`main` / `/docs`*. `vite.config.js` uses `base: './'`, so it works from any sub-path.

## Modes

| Mode | What it does |
|------|--------------|
| **AUTO RUN** | Hands-free "director" mode for videos. The camera performs every jump, duck, dodge and punch itself; each prompt appears ~1 s before the action. Same seed → identical run. |
| **PLAY** | You play. 3 lives, red flash on a hit, score + distance, game-over screen. |
| **RECORD** | AUTO RUN + recording. A `.webm` downloads automatically at the end (or when you press **STOP** / pause → *Stop & save*). |

**Controls (PLAY):** `← →` / `A D` dodge · `↑` / `W` jump · `↓` / `S` duck ·
`Space` / `F` punch · `Esc` / `P` pause. On phones/tablets, on-screen buttons appear.

## Recording videos

1. **Settings → Resolution**: `1280×720`, `1920×1080` or `1080×1920` (vertical / Shorts).
   *Fit window* records at 1920×1080 automatically.
2. Leave **Clean recording** on to hide the cursor and buttons (the HUD, prompts and
   progress bar are drawn into the canvas, so they are always in the video; menus never are).
3. Pick *All rounds* or a single round on the title screen and press **RECORD**.
4. Keep the tab visible while recording (browsers throttle hidden tabs).

Video = `canvas.captureStream(60)` + the game's Web Audio mix
(`MediaStreamAudioDestinationNode`) through `MediaRecorder` (VP9 → VP8 fallback).
Chrome / Edge give the best results. Convert to MP4 if your editor needs it, e.g.
`ffmpeg -i pumpkin-dash.webm -c:v libx264 -crf 18 -c:a aac out.mp4`.

## Export Video (offline, recommended)

**EXPORT VIDEO** on the title screen (next to RECORD) renders the AUTO RUN frame by
frame at exactly 1/60 s per frame, so the file is a perfectly smooth 60 fps video
even on a slow laptop. Rendering may take longer than the run itself.

1. Pick a size: `1280×720`, `1920×1080` or `1080×1920` (vertical).
2. Press **START EXPORT**. A progress bar shows %, ETA and a **Cancel** button.
3. The file downloads when done: `.mp4` (H.264 + AAC). Browsers without an AAC/H.264
   encoder get `.webm` (VP9/VP8 + Opus) instead.

The soundtrack is rendered sample-exact with an `OfflineAudioContext`, the video is
encoded with WebCodecs (`VideoEncoder` / `AudioEncoder`) and muxed with
[`mp4-muxer`](https://github.com/Vanilagy/mp4-muxer) / `webm-muxer`. It uses the
rounds, seed, round length, watermark, volumes and quality from Settings.
Needs Chrome or Edge 94+. RECORD (real-time capture) still works as before.

## Performance

Press **F3** for a debug overlay (FPS, frame / CPU ms, draw calls, triangles,
geometries, textures, shader programs, active props / crowd / entities / foliage /
particles). On slow machines choose **Settings → Quality → Low** (no shadows, bloom
or MSAA, shorter view distance); Medium and High look the same as before.

## Settings

Quality (Low / Medium / High), resolution, music & SFX volume, round length
(15–180 s, default 60), seed, an optional watermark (e.g. your channel name) and
clean recording. Settings are saved in `localStorage`.

## Editing the run — `src/config/timeline.js`

Everything in a run comes from this file:

- `speed`, `roundLength`, `roundLeadIn`, `roundTail`
- `actionLead` – how early each camera action starts before the obstacle;
  `promptLead` / `posePromptLead` – how early the prompt appears before the action
- `intro`, `between` (the *EXCELLENT! / NEXT LEVEL* cards) and `outro` texts & durations
- `variants` – pools of obstacle / enemy / pose variants
- `rounds` – the six rounds, in order. Per round:
  - `label`, `title`, `music: 'normal' | 'heavy'`, optional `length`
  - `every: [min, max]` seconds between obstacles
  - `mix` – weights for `jump | duck | left | right | punch | pose`
  - `backToBack` – extra punch right after a punch
  - `variants` – override the pools for this round
  - `script` – hand-authored events that replace the generator:

```js
script: [
  { at: 3.0, type: 'jump', variant: 'greenPipe' },
  { at: 6.5, type: 'punch', variant: 'zombie' },
  { at: 9.0, type: 'pose', variant: 'starJump' },
],
```

`left` / `right` is the direction the runner dodges (the obstacle sits on the other side).

Available variants:

- **jump:** pumpkinLog, greenPipe, pumpkinBeam, rootArch, glowCrates, broomstick, boneBar, spikedLog, sawblades
- **duck:** toxicCrates, flamePendulums, hangingVines, ghostBar
- **dodge:** cart, tricycle, spikedBarrels, pipeLane
- **punch:** zombie, skeleton, ghost, vampire, scarecrow, mummy
- **pose:** heart, chairSquat, highKnee, horsePunch, toeTouch, sideBend, starJump

## Project layout

```
src/
  config/timeline.js     the run, data-driven
  core/                  game loop, schedule, director, renderer + post FX, input, settings
  camera/rig.js          first-person camera (bob, jump, duck, dodge, punch)
  world/                 track, biomes, road, scenery, foliage, sky, particles
  entities/              obstacles, enemies, pose walls, crowd, spawn manager
  ui/                    canvas HUD + HTML menus
  audio/audio.js         synthesised music + SFX
  recording/recorder.js  MediaRecorder capture (RECORD)
  recording/exporter.js  offline frame-by-frame MP4 export (EXPORT VIDEO)
```
