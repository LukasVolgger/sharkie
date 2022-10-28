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

    // Enable scrolling on settings and help menu
    if (mobileAndTabletCheck()) {
        document.getElementById('settings-menu-container').classList.add('scroll-enabled');
        document.getElementById('help-container').classList.add('scroll-enabled');
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

// ################################################### Mobile Devices ###################################################

// Checks if user is on a mobile device
window.mobileAndTabletCheck = function() {
    let check = false;
    (function(a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

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

    // Show fullscreen button only when the game is started
    document.getElementById('toggle-fullscreen-btn').classList.remove('d-none');
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

    if (document.getElementById('fullscreen-container')) { // Required because the element does not exist before the game starts, but the user can switch on fullscreen
        if (fullscreen) {
            document.getElementById('fullscreen-container').requestFullscreen();
            document.getElementById('canvas').style.width = '100%';
            document.getElementById('canvas').style.height = '100%';

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