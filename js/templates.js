'use strict';

/**
 * HTML template
 * @returns HTML
 */
function generateStartScreenHTML() {
	return `
		<div class="start-screen-container">
			<div class="start-screen-header">
				<h1 class="game-title">Sharkie</h1>
			</div>
			<div class="start-screen-body">
				<button class="start-game-btn btn" onclick="startGame()">START GAME</button>
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

function generateEndScreenHTML() {
	return `
		<div class="end-screen-container">
			<div class="end-screen-header">
				<img src="img/6._Buttons/Titles/You_Win/Work_Table.png" class="end-screen-img" alt="End Screen Image">
			</div>
			<div class="end-screen-body">
				<button class="restart-lvl-btn btn">RESTART LEVEL</button>
				<button class="next-lvl-btn btn">NEXT LEVEL</button>
			</div>
		</div>
	`;
}