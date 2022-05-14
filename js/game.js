'use strict';

// ################################################### Global Scope ###################################################

// Declare global variables (For debugging/testing)
let canvas;
let world;

// ################################################### Init Game ###################################################

/**
 * Initializing function when loading the HTML page
 */
function init() {
    // Get the canvas element from document
    canvas = document.getElementById('canvas');

    // Passing the canvas into the world object
    world = new World(canvas);
}