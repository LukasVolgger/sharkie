/**
 * Game world
 * Every object shown in the game is generated here (Backgrounds, character, enemies,... )
 * To access an object from world in the console: world.<object>.<properties>/<method>...
 */
class World {
    canvas;
    ctx;
    camera_x = 0;
    keyboard;
    bubble;

    // ################################################### Create objects ###################################################

    character = new Character();
    debugCharacter = new DebugCharacter();
    level = level_1; // level_x is an instance of the Level class. Here the variable level of the world class is assigned to this instance
    statusBarLife = new StatusBar('life', 'green', 100, 20, 0);
    statusBarCoins = new StatusBar('coins', 'green', 0, 240, 0);
    statusBarPoison = new StatusBar('poison', 'green', 0, 460, 0);
    statusBarEndBoss = new StatusBar('life', 'orange', 100, 460, 400);

    // The canvas was passed from init() in game.js
    constructor(canvas, keyboard) {
        this.canvas = canvas; // Make the canvas reachable within the world class
        this.keyboard = keyboard; // Make the keyboard reachable within the world class

        // The canvas element is the actual DOM node that's embedded in the HTML page  
        // The canvas context is an object with properties and methods that can be used to render graphics inside the canvas element 
        // The context can be 2d or webgl (3d)
        this.ctx = canvas.getContext('2d');
        this.draw();
        this.setWorld();
        this.checkCollisions();
    }

    /**
     * Passes a reference to the world.class.js to sub-objects
     * This means that all sub-objects can access the variables of the world class (important for keyboard)
     */
    setWorld() {
        this.character.world = this;
        this.debugCharacter.world = this;
        this.level.getEndBoss().world = this;
    }


    // ################################################### Main functions ###################################################

    /**
     * Draw objects on the 
     */
    draw() {
        // Clear the canvas to prevent objects from being drawn over other objects
        this.clearCanvas();

        // Every time the draw() method is called, the camera moves x pixels of the camera_x variable 
        // Bound on character
        this.ctx.translate(this.camera_x, 0);

        // Add objects to world
        this.addObjectsToWorld(this.level.backgroundObjects);
        this.addObjectsToWorld(this.level.coins);
        this.addObjectsToWorld(this.level.life);
        this.addObjectsToWorld(this.level.poison);
        this.addObjectsToWorld(this.level.enemies);
        this.addObjectsToWorld(this.level.barriers);

        // Decide whether to add the normal or debug character to the world
        if (!debugMode) {
            this.addToWorld(this.character);
        } else {
            this.addToWorld(this.debugCharacter);
        }

        // When a bubble is created by the character, it is saved here
        if (this.bubble) {
            this.addToWorld(this.bubble);
        }

        // ----------------- FIXED OBJECTS START -----------------
        this.ctx.translate(-this.camera_x, 0);

        this.addToWorld(this.statusBarLife);
        this.addToWorld(this.statusBarCoins);
        this.addToWorld(this.statusBarPoison);
        if (this.level.getEndBoss().endBossIntroduced == true) {
            this.addToWorld(this.statusBarEndBoss);
        }

        this.ctx.translate(this.camera_x, 0);
        // ----------------- FIXED OBJECTS END -----------------

        // Reset translate (camera_x)
        this.ctx.translate(-this.camera_x, 0);

        // Needed to call the draw() method on every request from requestAnimationFrame()
        // The keyword "this" is not working in the method. This assignment therefore references the draw() method within the class (i.e. this).
        let self = this;
        // By default, requestAnimationFrame() is called 60 times per second
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    /**
     * Help function to add objects to the world
     * @param {*} movableObject Any object which extends MovableObject
     */
    addToWorld(movableObject) {
        // Check if object is mirrored
        if (movableObject.imgMirrored) {
            this.flipImage(movableObject);
        }

        // Draw image on context
        movableObject.draw(this.ctx);

        // Draw the collision detection frames only when debug mode is enabled
        // if (debugMode) {
        movableObject.drawCollisionDetectionFrame(this.ctx);
        // }

        // Check if object is mirrored
        if (movableObject.imgMirrored) {
            this.undoFlipImage(movableObject);
        }
    }

    /**
     * Help function to add objects from arrays to the world
     * @param {*} objects Any objects from arrays which extends MovableObject
     */
    addObjectsToWorld(objects) {
        objects.forEach(object => {
            this.addToWorld(object);
        });
    }

    /**
     * Clears the canvas
     * https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Mirrors the image of an object
     */
    flipImage(movableObject) {
        this.ctx.save(); // Save current context
        this.ctx.translate(movableObject.width, 0);
        this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x * -1;
    }

    /**
     * Undoes the mirroring of the object
     */
    undoFlipImage(movableObject) {
        movableObject.x = movableObject.x * -1;
        this.ctx.restore(); // Restore context
    }

    /**
     * Check in an interval whether the character collides with an enemy
     */
    checkCollisions() {
        setInterval(() => {
            // Check collision with enemies
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isFinSlapping) {
                    this.character.hit(enemy.attack);
                    this.statusBarLife.setPercentage(this.character.energy, this.statusBarLife.type, this.statusBarLife.color);
                    console.log('Colliding with: ', enemy, 'Energy: ', this.character.energy);

                    if (enemy instanceof PufferFish) {
                        this.character.hitBy = 'PufferFish';
                    } else if (enemy instanceof JellyFishRegular || enemy instanceof JellyFishDangerous) {
                        this.character.hitBy = 'JellyFish';
                    } else if (enemy instanceof EndBoss) {
                        this.character.hitBy = 'EndBoss';
                        this.level.getEndBoss().isCollidingWithCharacter = true; // For attack animation of EndBoss
                    }
                }
            });

            // Check PufferFfish collision and fin slap attack
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy) && this.character.isFinSlapping && enemy instanceof PufferFish) {
                    enemy.hit(this.character.attack);
                    enemy.floatAway(this.character.imgMirrored);
                    console.log('Fin slap attack to: ', enemy, 'Energy: ', enemy.energy);
                }
            });

            // Check Bubble with JellyFish collision
            this.level.enemies.forEach(enemy => {
                if (this.bubble) {
                    if (this.bubble.isColliding(enemy) && enemy instanceof JellyFishRegular || this.bubble.isColliding(enemy) && enemy instanceof JellyFishDangerous) {
                        enemy.hit(this.bubble.attack);
                        enemy.speed = 2;
                        enemy.floatAwayUp();
                        this.bubble = undefined; // Reset the bubble to undefined to make the bubble disappear when colliding with an enemy
                        console.log('Bubble colliding with: ', enemy, 'Energy: ', enemy.energy);
                    }
                }
            });

            // Check EndBoss collision and fin slap attack
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy) && this.character.isFinSlapping && enemy instanceof EndBoss) {
                    enemy.hit(this.character.attack);
                    this.statusBarEndBoss.setPercentage((this.level.getEndBoss().energy / 200) * 100, this.statusBarEndBoss.type, this.statusBarEndBoss.color);
                    console.log('Fin slap attack to: ', enemy, 'Energy: ', enemy.energy);
                }
            });

            // Check Bubble with EndBoss collision
            this.level.enemies.forEach(enemy => {
                if (this.bubble instanceof Bubble) {
                    if (this.bubble.isColliding(enemy) && enemy instanceof EndBoss) {
                        enemy.hit(this.bubble.attack);
                        this.statusBarEndBoss.setPercentage((this.level.getEndBoss().energy / 200) * 100, this.statusBarEndBoss.type, this.statusBarEndBoss.color);
                        this.bubble = undefined; // Reset the bubble to undefined to make the bubble disappear when colliding with an enemy
                        console.log('Bubble colliding with: ', enemy, 'Energy: ', enemy.energy);
                    }
                } else if (this.bubble instanceof PoisonBubble) {
                    if (this.bubble.isColliding(enemy) && enemy instanceof EndBoss) {
                        enemy.hit(this.bubble.attack);
                        this.statusBarEndBoss.setPercentage((this.level.getEndBoss().energy / 200) * 100, this.statusBarEndBoss.type, this.statusBarEndBoss.color);
                        this.bubble = undefined; // Reset the bubble to undefined to make the bubble disappear when colliding with an enemy
                        console.log('Bubble colliding with: ', enemy, 'Energy: ', enemy.energy);
                    }
                }
            });

            // Check collisions with Coin
            this.level.coins.forEach(coin => {
                if (this.character.isColliding(coin)) {
                    let coinIndex = this.level.coins.indexOf(coin); // Index of the coins just collected (Necessary to delete exactly this after collecting)
                    let totalCoins = this.level.coins.length + this.character.coins; // Necessary because every time you collect a coin, the length of the array this.level.coins is reduced by one
                    this.character.coins++;
                    this.statusBarCoins.setPercentage((this.character.coins / totalCoins) * 100, this.statusBarCoins.type, this.statusBarCoins.color);
                    this.level.coins.splice(coinIndex, 1);
                    console.log('Colliding with: ', coin, 'Coins collected: ', this.character.coins);
                }
            });

            // Check collisions with Life
            this.level.life.forEach(life => {
                if (this.character.isColliding(life)) {
                    let lifeIndex = this.level.life.indexOf(life);

                    if (this.character.energy < 100 && this.character.energy < 90) {
                        this.character.energy += 10;
                    } else if (this.character.energy < 100 && this.character.energy > 90) {
                        this.character.energy += 5;
                    }

                    this.statusBarLife.setPercentage(this.character.energy, this.statusBarLife.type, this.statusBarLife.color);
                    this.level.life.splice(lifeIndex, 1);
                    console.log('Colliding with: ', life, 'Energy: ', this.character.energy);
                }
            });

            // Check collisions with Poison
            this.level.poison.forEach(poison => {
                if (this.character.isColliding(poison)) {
                    let poisonIndex = this.level.poison.indexOf(poison);
                    this.level.totalPoison = this.level.poison.length + this.level.collectedPoison;
                    this.character.poison++;
                    this.statusBarPoison.setPercentage((this.character.poison / this.level.totalPoison) * 100, this.statusBarPoison.type, this.statusBarPoison.color);
                    this.level.poison.splice(poisonIndex, 1);
                    this.level.collectedPoison += 1;
                    console.log('Colliding with: ', poison, 'Poison collected: ', this.character.poison);
                }
            });

            // Check collisions with Barrier
            let collidingWithBarrier = this.level.barriers.find(barrier => this.character.isColliding(barrier));

            if (collidingWithBarrier) {
                this.character.isCollidingWithBarrier = true;
                console.log('Colliding with Barrier');
            } else {
                this.character.isCollidingWithBarrier = false;
                console.log('Not colliding with Barrier');
            }

        }, 200);
    }
}