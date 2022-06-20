/**
 * In this class, the objects that are different depending on the level are stored
 * Each level has different background objects and enemies
 */
 class Level {
    backgroundObjects;
    enemies;
    coins = 0;
    life = 0;
    poison = 0;
	totalPoison = 0;
	collectedPoison = 0;
    level_end_x; // x-coordinate where level ends

    // The parameters are passed from the individual level_x.js
    // Then the values ​​are assigned to the variables of this class
    constructor(backgroundObjects, enemies, coins, life, poison, level_end_x) {
        this.backgroundObjects = backgroundObjects;
        this.enemies = enemies;
        this.coins = coins;
        this.life = life;
        this.poison = poison;
        this.level_end_x = level_end_x;
        this.getEndBoss();
    }

    /**
     * returns EndBoss object
     */
    getEndBoss() {
        return this.enemies.find(e => e instanceof EndBoss);
    }
}