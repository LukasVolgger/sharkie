'use strict';

// ################################################### Global scope ###################################################

// Declare global variables (For debugging/testing)
let canvas;
let world;
let keyboard = new Keyboard();
let soundOn = true;
let fullscreen = false;
let debugMode = true;
let debugLevelDesignHelper = false;
let debugLogStatements = false;
let debugLevelNr = 0;
let debugSkipStartScreen = false;
let endBossKilled = false;
let characterIsDead = false;
let levelEnded = false;
let levels = [
    level_1,
    level_2
];
let currentLevel;
let maxLevelReached = false;
let WIN_SOUND = new Audio('./assets/audio/congrats.mp3');
let GAME_OVER_SOUND = new Audio('./assets/audio/game_over.mp3');

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
    updateUI();

    // If no higher level is set in local storage, start from the first level
    if (currentLevel == null) {
        currentLevel = 0;
    } else if (currentLevel >= levels.length - 1) {
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
    document.getElementById('content');

    setInterval(() => {
        if (endBossKilled && !levelEnded && !maxLevelReached) {
            setTimeout(() => {
                content.innerHTML = generateEndScreenHTML();

                if (soundOn && !levelEnded) {
                    WIN_SOUND.play();
                }

                levelEnded = true;
            }, 3000);
        } else if (endBossKilled && !levelEnded && maxLevelReached) {
            setTimeout(() => {
                content.innerHTML = generateMaxEndScreenHTML();

                if (soundOn && !levelEnded) {
                    WIN_SOUND.play();
                }

                levelEnded = true;
            }, 3000);
        } else if (characterIsDead && !levelEnded) {
            setTimeout(() => {
                content.innerHTML = generateGameOverScreenHTML();

                if (soundOn && !levelEnded) {
                    GAME_OVER_SOUND.play();
                }

                levelEnded = true;
            }, 3000);
        }
    }, 250)
}

/**
 * Saves variables to local storage
 */
function saveToLocalStorage() {
    let currentLevelAsString = JSON.stringify(currentLevel);
    localStorage.setItem('currentLevel', currentLevelAsString);

    let soundOnAsString = JSON.stringify(soundOn);
    localStorage.setItem('soundOn', soundOnAsString);

    let debugModeAsString = JSON.stringify(debugMode);
    localStorage.setItem('debugMode', debugModeAsString);

    let debugLogStatementsAsString = JSON.stringify(debugLogStatements);
    localStorage.setItem('debugLogStatements', debugLogStatementsAsString);

    let debugSkipStartScreenAsString = JSON.stringify(debugSkipStartScreen);
    localStorage.setItem('debugSkipStartScreen', debugSkipStartScreenAsString);

    let debugLevelDesignHelperAsString = JSON.stringify(debugLevelDesignHelper);
    localStorage.setItem('debugLevelDesignHelper', debugLevelDesignHelperAsString);

    let debugLevelNrAsString = JSON.stringify(debugLevelNr);
    localStorage.setItem('debugLevelNr', debugLevelNrAsString);
}

/**
 * Loads variables from local storage
 */
function loadFromLocalStorage() {
    let currentLevelAsString = localStorage.getItem('currentLevel');
    currentLevel = JSON.parse(currentLevelAsString);

    let soundOnAsString = localStorage.getItem('soundOn');
    soundOn = JSON.parse(soundOnAsString);

    let debugModeAsString = localStorage.getItem('debugMode');
    debugMode = JSON.parse(debugModeAsString);

    let debugLogStatementsAsString = localStorage.getItem('debugLogStatements');
    debugLogStatements = JSON.parse(debugLogStatementsAsString);

    let debugSkipStartScreenAsString = localStorage.getItem('debugSkipStartScreen');
    debugSkipStartScreen = JSON.parse(debugSkipStartScreenAsString);

    let debugLevelDesignHelperAsString = localStorage.getItem('debugLevelDesignHelper');
    debugLevelDesignHelper = JSON.parse(debugLevelDesignHelperAsString);

    let debugLevelNrAsString = localStorage.getItem('debugLevelNr');
    debugLevelNr = JSON.parse(debugLevelNrAsString);
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

// ################################################### Nav-bar Functions ###################################################

/**
 * Toggles the settings menu
 */
function toggleSettingsMenu() {
    document.getElementById('settings-menu-container').classList.toggle('d-none');
    document.getElementById('img-attribution').classList.toggle('d-none');
}

/**
 * Toggles the help site
 */
function toggleHelpSite() {
    document.getElementById('help-container').classList.toggle('d-none');
    document.getElementById('img-attribution').classList.toggle('d-none');
}

/**
 * Toggles menu options
 * soundOn
 */
function toggleSound() {
    soundOn = !soundOn;

    if (soundOn) {
        document.getElementById('sound-img').src = './assets/img/icons/speaker.svg';
    } else {
        document.getElementById('sound-img').src = './assets/img/icons/mute.svg';
    }

    saveToLocalStorage();
    updateUI();
}

/**
 * Toggles menu options
 * fullscreen
 */
function toggleFullscreen() {
    fullscreen = !fullscreen;

    if (document.getElementById('canvas')) { // Required because the canvas does not exist before the game starts, but the user can switch on fullscreen
        if (fullscreen) {
            document.getElementById('canvas').requestFullscreen();
            fullscreen = true;
        } else {
            fullscreen = false;
        }
    }

    saveToLocalStorage();
    updateUI();
}

/**
 * Toggles menu options
 * debugMode
 */
function toggleDebugMode() {
    debugMode = !debugMode;

    if (debugMode) {
        document.getElementById('debugMode-checkbox').checked = true;
    } else {
        document.getElementById('debugMode-checkbox').checked = false;
    }

    saveToLocalStorage();
    updateUI();
    window.location.reload();
}

/**
 * Toggles menu options
 * debugLogStatements
 */
function toggleDebugLogStatements() {
    debugLogStatements = !debugLogStatements;

    if (debugLogStatements) {
        document.getElementById('debugLogStatements-checkbox').checked = true;
    } else {
        document.getElementById('debugLogStatements-checkbox').checked = false;
    }

    saveToLocalStorage();
    updateUI();
}

/**
 * Toggles menu options
 * debugSkipStartScreen
 */
function toggleDebugSkipStartScreen() {
    debugSkipStartScreen = !debugSkipStartScreen;

    if (debugSkipStartScreen) {
        document.getElementById('debugSkipStartScreen-checkbox').checked = true;
    } else {
        document.getElementById('debugSkipStartScreen-checkbox').checked = false;
    }

    saveToLocalStorage();
    updateUI();
}

/**
 * Toggles menu options
 * debugLevelDesignHelper
 */
function toggleDebugLevelDesignHelper() {
    debugLevelDesignHelper = !debugLevelDesignHelper;

    if (debugLevelDesignHelper) {
        document.getElementById('debugLevelDesignHelper-checkbox').checked = true;
    } else {
        document.getElementById('debugLevelDesignHelper-checkbox').checked = false;
    }

    saveToLocalStorage();
    updateUI();
    window.location.reload(); // Necessary, otherwise the game will crash
}

/**
 * Changes the level which should be debugged
 */
function selectDebugLevelNr() {
    let levelNr = parseInt(document.getElementById('debugLevelNr-select').value);
    debugLevelNr = levelNr;

    if (debugSkipStartScreen) {
        currentLevel = debugLevelNr;
    }

    saveToLocalStorage();
    updateUI();
    window.location.reload();
}

/**
 * Updated all UI icons depending on their status
 */
function updateUI() {

    // soundOn
    if (soundOn) {
        document.getElementById('sound-img').src = './assets/img/icons/speaker.svg';
        document.getElementById('sound-checkbox').checked = true;
    } else {
        document.getElementById('sound-img').src = './assets/img/icons/mute.svg';
        document.getElementById('sound-checkbox').checked = false;
    }

    // debugMode
    if (debugMode) {
        document.getElementById('debugMode-checkbox').checked = true;
    } else {
        document.getElementById('debugMode-checkbox').checked = false;
    }

    // debugLogStatements
    if (debugLogStatements) {
        document.getElementById('debugLogStatements-checkbox').checked = true;
    } else {
        document.getElementById('debugLogStatements-checkbox').checked = false;
    }

    // debugSkipStartScreen
    if (debugSkipStartScreen) {
        document.getElementById('debugSkipStartScreen-checkbox').checked = true;
    } else {
        document.getElementById('debugSkipStartScreen-checkbox').checked = false;
    }

    // debugLevelDesignHelper
    if (debugLevelDesignHelper) {
        document.getElementById('debugLevelDesignHelper-checkbox').checked = true;
    } else {
        document.getElementById('debugLevelDesignHelper-checkbox').checked = false;
    }

    // debugLevelNr
    document.getElementById('debugLevelNr-select').value = debugLevelNr;

    // fullscreen
    setInterval(() => {
        function fs_status() { // https://stackoverflow.com/questions/28595686/how-can-i-check-if-an-element-is-in-fullscreen-with-the-fullscreen-api-for-html5
            if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement)
                return true;
            else {
                return false;
            }
        }

        if (fs_status()) {
            document.getElementById('fullscreen-checkbox').checked = true;
        } else {
            document.getElementById('fullscreen-checkbox').checked = false;
            fullscreen = false;
        }
    }, 250)
}