import { BombermanGame } from 'game/BombermanGame.js';

window.addEventListener('load', () => {
	window.addEventListener('click', function () {
		new BombermanGame().start();
	}, { once: true });
});
