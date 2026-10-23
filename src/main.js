import './ui/menus.css';
import { Game } from './core/game.js';

// Canvas text (HUD, signs, title cards) needs the display fonts before anything is drawn.
async function loadFonts() {
  if (!document.fonts || !document.fonts.load) return;
  const timeout = new Promise((resolve) => setTimeout(resolve, 4000));
  try {
    await Promise.race([
      Promise.all([
        document.fonts.load('64px "Luckiest Guy"'),
        document.fonts.load('64px "Bungee"'),
      ]),
      timeout,
    ]);
  } catch (e) {
    // Offline or blocked: fall back to system fonts.
  }
}

(async () => {
  await loadFonts();
  const game = new Game(document.getElementById('game'), document.getElementById('ui'));
  game.start();
  const loading = document.getElementById('loading');
  if (loading) {
    loading.classList.add('fade');
    setTimeout(() => loading.remove(), 600);
  }
  window.__pumpkinDash = game;
})();
