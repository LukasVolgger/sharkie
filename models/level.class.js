/**
 * In this class, the objects that are different depending on the level are stored
 * Each level has different background objects and enemies
 */
class Level {
    backgroundObjects;
    enemies;
    coins;
    level_end_x; // x-coordinate where level ends

    // The paremeters are passed from the individual level_x.js
    // Then the values ​​are assigned to the variables of this class
    constructor(backgroundObjects, enemies, coins, level_end_x) {
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.coins = coins;
        this.level_end_x = level_end_x;
    }
}