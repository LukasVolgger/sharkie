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
				<h1 class="start-screen-title">Level ${currentLevel + 1}</h1>
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
		<h1 id="game-title" class="game-title">Sharkie</h1>
		<div id="canvas-wrapper" class="canvas-wrapper">
			<img src="./assets/img/background/water_frame.png" id="canvas-frame-img" class="canvas-frame-img">
			<div id="fullscreen-message" class="screen-message d-none">
					Please switch to fullscreen mode
			</div>
			<div id="fullscreen-container" class="fullscreen-container">
				<div id="landscape-message" class="screen-message d-none">
						Please turn your device to landscape mode
				</div>
				<canvas id="canvas" width="720" height="480"></canvas>
				<div id="mobile-ctrl-left" class="mobile-controller-container-left d-none">
					<button id="ctrl-btn-up" class="mobile-ctrl-btn"><img src="./assets/img/icons/arrow_up.svg" class="ctrl-arrow-img" oncontextmenu="return false;";></button>
					<div class="mobile-controller-x-control">
						<button id="ctrl-btn-left" class="mobile-ctrl-btn"><img src="./assets/img/icons/arrow_left.svg" class="ctrl-arrow-img" oncontextmenu="return false;";></button>
						<button id="ctrl-btn-right" class="mobile-ctrl-btn"><img src="./assets/img/icons/arrow_right.svg" class="ctrl-arrow-img" oncontextmenu="return false;";></button>
					</div>
					<button id="ctrl-btn-down" class="mobile-ctrl-btn"><img src="./assets/img/icons/arrow_down.svg" class="ctrl-arrow-img" oncontextmenu="return false;";></button>
				</div>	
				<div id="mobile-ctrl-right" class="mobile-controller-container-right d-none">
					<button id="ctrl-btn-fin-slap" class="mobile-ctrl-btn">Fin Slap</button>
					<button id="ctrl-btn-bubble-trap" class="mobile-ctrl-btn">Bubble</button>
					<button id="ctrl-btn-poison-bubble-trap" class="mobile-ctrl-btn">Poison Bubble</button>
				</div>
				<button id="mobile-fullscreen-btn" class="nav-btn d-none" onclick="toggleFullscreen()" title="Fullscreen On/OFf"><img src="./assets/img/icons/fullscreen.svg" alt="Fullscreen On/Off" class="nav-icon"></button>
				<button id="mobile-mute-btn" class="nav-btn d-none" onclick="toggleSound()" title="Mute/Unmute"><img src="./assets/img/icons/speaker.svg" alt="Mute/Unmute" class="nav-icon" id="sound-img-mobile"></button>
				<button id="mobile-close-btn" class="nav-btn d-none" onclick="restartLevel()" title="Exit Game"><img src="./assets/img/icons/close.svg" alt="Close" class="nav-icon"></button>
			</div>
		</div>
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
				<img src="./assets/img/6._Buttons/Titles/You_Win/Work_Table.png" class="end-screen-img" alt="End Screen Image">
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
				<img src="./assets/img/6._Buttons/Titles/You_Win/Work_Table.png" class="end-screen-img" alt="End Screen Image">
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