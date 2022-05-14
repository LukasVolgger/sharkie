/**
 * Game world
 * Every object shown in the game is generated here (Backgrounds, character, enemies,... )
 * To access an object from world in the console: world.<object>.<properties>/<method>...
 */
class World {
    canvas;
    ctx;

    // The canvas was passed from init() in game.js
    constructor(canvas) {
        // Make the canvas reachable within the world class
        this.canvas = canvas;

        // The canvas element is the actual DOM node that's embedded in the HTML page  
        // The canvas context is an object with properties and methods that can be used to render graphics inside the canvas element 
        // The context can be 2d or webgl (3d)
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    // ################################################### Create Objects ###################################################

    character = new Character();

    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
    ];

    // The order in which the objects are rendered determines their position on the z-index
    backgroundObjects = [
        new BackgroundObject('img/3._Background/Layers/5._Water/L1.png', 0), // Shown first
        new BackgroundObject('img/3._Background/Layers/4._Fondo_2/L1.png', 0), // Appears as the second and above the first object
        new BackgroundObject('img/3._Background/Layers/3._Fondo_1/L1.png', 0),
        new BackgroundObject('img/3._Background/Layers/2._Floor/L1.png', 0),
        new BackgroundObject('img/3._Background/Layers/1._Light/1.png', 100)
    ]

    // ################################################### Main Functions ###################################################

    /**
     * Draw objects on the 
     */
    draw() {
        // Clear the canvas to prevent objects from being drawn over other objects
        this.clearCanvas();

        // Add background  objects
        this.addObjectsToWorld(this.backgroundObjects);

        // Add character & enemies
        this.addToWorld(this.character);
        this.addObjectsToWorld(this.enemies);

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
     * @param {*} movableObject Any object which is extends MovableObject
     */
    addToWorld(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }

    /**
     * Help function to add objects from arrays to the world
     * @param {*} objects Any objects from arrays which extends MovableObject
     */
    addObjectsToWorld(objects) {
        objects.forEach(object => {
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        });
    }

    /**
     * Clears the canvas
     * https://stackoverflow.com/questions/2142535/how-to-clear-the-canvas-for-redrawing
     */
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}