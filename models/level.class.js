/**
 * In this class, the objects that are different depending on the level are stored
 * Each level has different background objects and enemies
 */
class Level {
    backgroundObjects;
    enemies;
    level_end_x = 2150; // x-coordinate where level ends

    // The paremeters are passed from the individual level_x.js
    // Then the values ​​are assigned to the variables of this class
    constructor(backgroundObjects, enemies) {
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
    }
}