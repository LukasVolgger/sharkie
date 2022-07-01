'use strict';

// ################################################### Global scope ###################################################

// Declare global variables (For debugging/testing)
let canvas;
let world;
let keyboard = new Keyboard();
let debugMode = true;
let debugLevelDesignHelper = false;
let debugLogStatements = false;
let debugLevelNr = 0;
let debugSkipStartScreen = false;
let endBossKilled = false;
let levelEnded = false;
let levels = [
	level_1,
	level_2
];
let currentLevel;
let maxLevelReached = false;

if (debugSkipStartScreen) {
	currentLevel = debugLevelNr;
}

loadFromLocalStorage();

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
	
	loadFromLocalStorage();
	
	// If no higher level is set in local storage, start from the first level
	if (currentLevel == null) {
		currentLevel = 0;
	} else if (currentLevel >= levels.length -1) {
		maxLevelReached = true;
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
		if (endBossKilled && !levelEnded && !maxLevelReached) {
			setTimeout(() => {
				document.getElementById('content');
				content.innerHTML = generateEndScreenHTML();
				levelEnded = true;
			}, 1000);
		} else if (endBossKilled && !levelEnded && maxLevelReached) {
			setTimeout(() => {
				document.getElementById('content');
				content.innerHTML = generateMaxEndScreenHTML();
				levelEnded = true;
			}, 1000);
		}
	}, 250)
}

/**
 * Saves variables to local storage
 */
function saveToLocalStorage() {
	let currentLevelAsString = JSON.stringify(currentLevel);
	localStorage.setItem('currentLevel', currentLevelAsString);
}

/**
 * Loads variables from local storage
 */
function loadFromLocalStorage() {
	let currentLevelAsString = localStorage.getItem('currentLevel');
	currentLevel = JSON.parse(currentLevelAsString);
}

/**
 * Restarts the current level
 */
function restartLevel() {
	window.location.reload();
}

/**
 * Goes to the next level
 */
function nextLevel() {
	
	if (currentLevel < levels.length && !maxLevelReached) {
		currentLevel++;
		saveToLocalStorage();
		window.location.reload();		
	} 
}

/**
 * Starts again at level 1
 */
function restartGame() {
	currentLevel = 0;
	saveToLocalStorage();
	window.location.reload();
}