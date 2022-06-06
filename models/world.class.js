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
    }

    // ################################################### Create objects ###################################################

    level = level_1; // level_1 is an instance of the Level class. Here the variable level of the world class is assigned to this instance
    character = new Character();

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

        // Add background  objects
        this.addObjectsToWorld(this.level.backgroundObjects);

        // Add character & enemies
        this.addToWorld(this.character);
        this.addObjectsToWorld(this.level.enemies);

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
        movableObject.drawCollisionDetectionFrame(this.ctx);

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
            this.level.enemies.forEach(enemy => {
                if (this.character.isColliding(enemy)) {
                    this.character.hit();
                    console.log('Colliding with: ', enemy, 'Energy: ', this.character.energy);
                }
            });
        }, 200);
    }
}