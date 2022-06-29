'use strict';

/**
 * HTML template
 * @returns HTML
 */
function generateStaticStartScreenHTML() {
	return `
		<div class="start-screen-container">
			<div class="start-screen-header">
				<h1 class="game-title">Sharkie</h1>
			</div>
			<div class="start-screen-body">
				<button class="start-game-btn btn" onclick="startGame()"><img src="img/6._Buttons/Start/1.png" alt="Start Game"></button>
			</div>
		</div>
	`;
}

/**
 * HTML template
 * @returns HTML
 */
function generateGameHTML() {
	return `
		<h1 class="game-title">Sharkie</h1>
		<canvas id="canvas" width="720" height="480"></canvas>
	`;
}