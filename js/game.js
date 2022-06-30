'use strict';

// ################################################### Global scope ###################################################

// Declare global variables (For debugging/testing)
let canvas;
let world;
let keyboard = new Keyboard();
let debugMode = true;
let debugLevelDesignHelper = false;
let debugLogStatements = true;

// ################################################### Init game ###################################################

/**
 * Initializing function when loading the HTML page
 */
function init() {
	renderStartScreen();
}

// ################################################### Keyboard ###################################################

/**
 * Detects when a key is pressed and updates the boolean in keyboard.class.js
 */
window.addEventListener('keydown', (e) => {
    // console.log(e);

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
    // console.log(e);

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

function startGame() {
	document.getElementById('content');
	content.innerHTML = generateGameHTML();
	
	// Get the canvas element from document
    canvas = document.getElementById('canvas');
	
	// Passing the canvas into the world object
    world = new World(canvas, keyboard);
}

function renderStartScreen() {
	document.getElementById('content');
	content.innerHTML = generateStaticStartScreenHTML();
}