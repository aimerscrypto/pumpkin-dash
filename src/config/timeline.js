// ─────────────────────────────────────────────────────────────────────────────
//  PUMPKIN DASH — RUN TIMELINE
//
//  Everything that happens in a run is driven by this file. Edit it to change
//  the order of rounds, their length, how often obstacles appear and which
//  obstacle variants are used. The run is generated from the seed (Settings),
//  so the same seed + same timeline always produces the identical run.
//
//  Event types:  jump | duck | left | right | punch | pose
//    left / right = the direction the runner dodges (the obstacle sits on the
//    opposite side of the road).
//
//  Per-round keys:
//    label     small caption above the title ("ROUND 1")
//    title     big round name shown on cards and the banner
//    music     'normal' | 'heavy'   (heavy = punchier drums + distorted bass)
//    length    optional seconds; otherwise Settings → Round length is used
//    every     [min, max] seconds between obstacles
//    mix       weights used to pick each obstacle type
//    backToBack { chance, gap }  extra punch right after a punch (seconds)
//    variants  optional per-type override of the variant lists below
//    script    optional hand-authored list replacing the random generator:
//              [{ at: 4.0, type: 'jump', variant: 'greenPipe' }, ...]
//              `at` = seconds from the start of the round.
// ─────────────────────────────────────────────────────────────────────────────

export const TIMELINE = {
  speed: 14, // metres / second — constant, never slows down
  roundLength: 60, // default seconds per round (overridable in Settings)
  roundLeadIn: 2.6, // quiet seconds at the start of each round (banner)
  roundTail: 1.6, // quiet seconds before the round ends

  // Seconds between an action starting and the camera reaching the obstacle.
  // The on-screen prompt appears `promptLead` seconds before the action starts.
  actionLead: { jump: 0.35, duck: 0.35, left: 0.42, right: 0.42, punch: 0.12, pose: 0.25 },
  promptLead: 1.0,
  posePromptLead: 1.5,

  intro: {
    title: 'PUMPKIN DASH',
    subtitle: 'HALLOWEEN RUN',
    titleDuration: 3.2,
    countdownDuration: 3.2, // 3 · 2 · 1 · GO!
  },

  between: {
    duration: 3.6,
    texts: ['EXCELLENT!', 'NEXT LEVEL'],
  },

  outro: [
    { text: 'GREAT JOB', sub: 'YOU WERE AMAZING!', duration: 2.8 },
    { text: 'MISSION COMPLETE', sub: 'HAPPY HALLOWEEN!', duration: 3.8 },
  ],

  // Variant pools (see src/entities/obstacles.js, enemies.js, posewalls.js).
  variants: {
    jump: ['pumpkinLog', 'greenPipe', 'pumpkinBeam', 'rootArch', 'glowCrates', 'broomstick', 'boneBar', 'spikedLog', 'sawblades'],
    duck: ['toxicCrates', 'flamePendulums', 'hangingVines', 'ghostBar'],
    dodge: ['cart', 'tricycle', 'cart', 'spikedBarrels', 'pipeLane'],
    punch: ['zombie', 'skeleton', 'ghost', 'vampire', 'scarecrow', 'mummy'],
    pose: ['heart', 'chairSquat', 'highKnee', 'horsePunch', 'toeTouch', 'sideBend', 'starJump'],
  },

  rounds: [
    {
      id: 'run-jump-duck',
      label: 'ROUND 1',
      title: 'RUN · JUMP · DUCK',
      music: 'normal',
      every: [3.6, 4.4],
      mix: { jump: 1, duck: 1 },
    },
    {
      id: 'punch-time',
      label: 'ROUND 2',
      title: 'PUNCH TIME',
      music: 'heavy',
      every: [2.5, 3.3],
      mix: { punch: 2.2, jump: 0.9, duck: 0.9 },
    },
    {
      id: 'left-right',
      label: 'ROUND 3',
      title: 'LEFT & RIGHT',
      music: 'normal',
      every: [2.7, 3.5],
      mix: { left: 1.3, right: 1.3, jump: 0.6, duck: 0.6 },
      variants: { dodge: ['cart', 'tricycle', 'cart', 'tricycle', 'spikedBarrels', 'pipeLane'] },
    },
    {
      id: 'mirror-me',
      label: 'ROUND 4',
      title: 'MIRROR ME',
      music: 'normal',
      every: [3.0, 3.8],
      mix: { pose: 2.4, jump: 0.7, duck: 0.7 },
    },
    {
      id: 'combo-rush',
      label: 'ROUND 5',
      title: 'COMBO RUSH',
      music: 'heavy',
      every: [2.8, 3.2],
      mix: { jump: 1, duck: 1, left: 1, right: 1, punch: 1, pose: 0.6 },
    },
    {
      id: 'mega-punch',
      label: 'ROUND 6',
      title: 'MEGA PUNCH',
      music: 'heavy',
      every: [1.2, 2.0],
      mix: { punch: 1 },
      backToBack: { chance: 0.3, gap: 0.6 },
    },
  ],
};
