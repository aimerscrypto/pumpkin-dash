import * as THREE from 'three';
import { createCharacter, restPose } from './characters.js';

// Punchable enemies. A spin pivot sits at the character's middle (y = 1) so the
// knock-back tumble rotates around the body instead of the feet.

export const ENEMY_KINDS = ['zombie', 'skeleton', 'ghost', 'vampire', 'scarecrow', 'mummy'];
const SCALE = 1.3;

export function createEnemy(kind, { shadows = true } = {}) {
  const ch = createCharacter(ENEMY_KINDS.includes(kind) ? kind : 'zombie', { shadows });
  const root = new THREE.Group();
  const spin = new THREE.Group();
  spin.position.y = 1.0 * SCALE;
  root.add(spin);
  ch.root.position.y = -1.0 * SCALE;
  ch.root.scale.setScalar(SCALE);
  spin.add(ch.root);

  return {
    kind: ch.kind,
    root,
    spin,
    ch,
    reset() {
      spin.rotation.set(0, 0, 0);
      ch.inner.position.set(0, 0, 0);
      ch.inner.rotation.set(0, 0, 0);
      restPose(ch);
    },
    /** Menacing idle: shamble, sway, reach. `hit` freezes the pose into a flail. */
    update(time, phase, hit) {
      const t = time + phase;
      const { inner, armL, armR } = ch;
      if (hit) {
        armL.rotation.set(-0.4, 0, -2.4 + Math.sin(t * 20) * 0.3);
        armR.rotation.set(-0.4, 0, 2.4 + Math.cos(t * 20) * 0.3);
        return;
      }
      switch (ch.kind) {
        case 'ghost':
          inner.position.y = 0.3 + Math.sin(t * 2.4) * 0.12;
          inner.rotation.z = Math.sin(t * 1.7) * 0.08;
          armL.rotation.set(-1.4 + Math.sin(t * 3) * 0.15, 0, -0.1);
          armR.rotation.set(-1.4 + Math.cos(t * 3) * 0.15, 0, 0.1);
          break;
        case 'scarecrow':
          inner.position.y = Math.abs(Math.sin(t * 3.2)) * 0.12;
          inner.rotation.z = Math.sin(t * 3.2) * 0.1;
          armL.rotation.set(0, 0, -1.45 + Math.sin(t * 6) * 0.12);
          armR.rotation.set(0, 0, 1.45 - Math.sin(t * 6) * 0.12);
          break;
        case 'skeleton':
        case 'vampire': {
          // fists up, boxer bounce
          const b = Math.sin(t * 7);
          inner.position.y = Math.abs(b) * 0.05;
          inner.rotation.y = Math.sin(t * 2) * 0.12;
          armL.rotation.set(-1.9 + b * 0.15, 0, -0.5);
          armR.rotation.set(-1.9 - b * 0.15, 0, 0.5);
          break;
        }
        default: {
          // zombie / mummy shamble with outstretched arms
          inner.rotation.z = Math.sin(t * 2.6) * 0.09;
          inner.rotation.x = 0.08;
          inner.position.y = Math.abs(Math.sin(t * 2.6)) * 0.04;
          armL.rotation.set(-1.45 + Math.sin(t * 2.6) * 0.18, 0, -0.08);
          armR.rotation.set(-1.55 - Math.sin(t * 2.6) * 0.18, 0, 0.08);
        }
      }
    },
  };
}
