'use strict';

// ################################################### Global scope ###################################################

// Declare global variables (For debugging/testing)
let canvas;
let world;
let keyboard = new Keyboard();
let debugMode = true;
let debugLevelDesignHelper = false;
let debugLogStatements = false;
let debugSkipStartScreen = true;
let endBossKilled = false;
let levelEnded = false;

// ################################################### Init game ###################################################

/**
 * Initializing function when loading the HTML page
 */
function init() {
	if (debugSkipStartScreen) {
		startGame();
	} else {
		renderStartScreen();
	}
	
	checkForLevelWin();
}

// ################################################### Keyboard ###################################################

/**
 * Detects when a key is pressed and updates the boolean in keyboard.class.js
 */
window.addEventListener('keydown', (e) => {
    if (debugMode && debugLogStatements) {
		console.log('Keydown: ', e);
	}

    switch (e.keyCode) {
        case 32:
            keyboard.SPACE = true;
            break;
        case 37:
            keyboard.LEFT = true;
            break;
        case 38:
            keyboard.UP = true;
            break;
        case 39:
            keyboard.RIGHT = true;
            break;
        case 40:
            keyboard.DOWN = true;
            break;
        case 68:
            keyboard.D = true;
            break;
        case 70:
            keyboard.F = true;
            break;
    }
});

/**
 * Detects when a key is released and updates the boolean in keyboard.class.js
 */
window.addEventListener('keyup', (e) => {
    if (debugMode && debugLogStatements) {
		console.log('Keyup: ', e);
	}

    switch (e.keyCode) {
        case 32:
            keyboard.SPACE = false;
            break;
        case 37:
            keyboard.LEFT = false;
            break;
        case 38:
            keyboard.UP = false;
            break;
        case 39:
            keyboard.RIGHT = false;
            break;
        case 40:
            keyboard.DOWN = false;
            break;
        case 68:
            keyboard.D = false;
            break;
        case 70:
            keyboard.F = false;
            break;
    }
});

// ################################################### Main Functions ###################################################

/**
 * Starts the game
 */
function startGame() {
	document.getElementById('content');
	content.innerHTML = generateGameHTML();
	
	// Get the canvas element from document
    canvas = document.getElementById('canvas');
	
	// Passing the canvas into the world object
    world = new World(canvas, keyboard);
}

/**
 * Display start screen
 */
function renderStartScreen() {
	document.getElementById('content');
	content.innerHTML = generateStartScreenHTML();
}

/**
 * Checks if the EndBoss has been killed and then shows the end screen
 */
function checkForLevelWin() {
	setInterval(() => {
		if (endBossKilled && !levelEnded) {
			setTimeout(() => {
				document.getElementById('content');
				content.innerHTML = generateEndScreenHTML();
				levelEnded = true;
			}, 1000);
		}
	}, 250)
}