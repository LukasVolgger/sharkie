'use strict';

/**
 * HTML template
 * @returns HTML
 */
function generateStartScreenHTML() {
	return `
		<div class="start-screen-container">
			<div class="start-screen-header">
				<h1 class="start-screen-title">Sharkie</h1>
				<h1 class="start-screen-title">Level ${currentLevel += 1}</h1>
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

/**
 * HTML template
 * @returns HTML
 */
function generateEndScreenHTML() {
	return `
		<div class="end-screen-container">
			<div class="end-screen-header">
				<img src="img/6._Buttons/Titles/You_Win/Work_Table.png" class="end-screen-img" alt="End Screen Image">
			</div>
			<div class="end-screen-body">
				<button class="restart-lvl-btn btn" onclick="restartLevel()">RESTART LEVEL</button>
				<button class="next-lvl-btn btn" onclick="nextLevel()">NEXT LEVEL</button>
			</div>
		</div>
	`;
}

/**
 * HTML template
 * @returns HTML
 */
function generateMaxEndScreenHTML() {
	return `
		<div class="end-screen-container">
			<div class="end-screen-header">
				<img src="img/6._Buttons/Titles/You_Win/Work_Table.png" class="end-screen-img" alt="End Screen Image">
			</div>
			<h2 class="max-level-heading">Congratulations!</h2>
			<h2 class="max-level-heading">You finished the last level!</h2>
			<div class="end-screen-body">
				<button class="restart-lvl-btn btn" onclick="restartLevel()">RESTART LEVEL</button>
				<button class="restart-lvl-btn btn" onclick="restartGame()">RESTART GAME</button>
			</div>
		</div>
	`;
}

/**
 * HTML template
 * @returns HTML
 */
function generateGameOverScreenHTML() {
	return `
		<div class="end-screen-container">
			<div>
				<h2 class="game-over-screen-title">GAME OVER</h2>
			</div>
			<div class="end-screen-body">
				<button class="restart-lvl-btn btn" onclick="restartLevel()">TRY AGAIN</button>
			</div>
		</div>
	`;
}