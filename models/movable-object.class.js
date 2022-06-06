/**
 * Parent element for all moving objects in the world
 * The background elements are also moveable
 */
class MovableObject {
    x;
    y;
    speed = 0.15;
    energy = 100;
    img;
    width = 100;
    height = 100;
    currentImage = 0;
    imageCache = {};

    /**
     * Function to load images
     * With this.img a new image is created in the object and assigned to the variable img
     * @param {string} path The path of an image to load
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    /**
     * Load all images in Json imageCache for animation 
     * The array looks like this: ['img/1._Sharkie/1._IDLE/1.png','img/1._Sharkie/1._IDLE/2.png', ...]
     * @param {array} array Image paths from an array 
     */
    loadImages(array) {
        array.forEach(path => { // Iterate through array
            let img = new Image(); // Create a new img object and store it in a variable (Needed for animation)
            img.src = path; // Set the src attribute to the path of the image from the array
            this.imageCache[path] = img; // Store each image in the imageCache Json 
        });

    }

    /**
     * Function to move objects right
     */
    moveRight() {
        console.log('Moving right');
    };

    /**
     * Function to move objects left
     */
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    };

    /**
     * Animates the images within an interval
     * @param {array} images 
     */
    playAnimation(images) {
        let i = this.currentImage % images.length; // (0 % 3 = 0), (1 % 3 = 1), (2 % 3 = 2), (3 % 3 = 0), (4 % 3 = 1), (5 % 3 = 2), (6 % 3 = 0), (7 % 3 = 1), (8 % = 2)
        let path = images[i]; // Temporary store the path of each img
        this.img = this.imageCache[path]; // Change img from class
        this.currentImage++;
    }

    /**
     * Draw image on context
     * @param {*} ctx The context of the canvas
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws a frame around objects for collision detection
     * @param {object} object 
     */
    drawCollisionDetectionFrame(ctx) {
        if (this instanceof Character || this instanceof PufferFish || this instanceof Endboss) { // Only draw frames on Character and Enemies
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    // if (character.x + character.width > chicken.x &&
    //     character.y + character.height > chicken.y &&
    //     character.x < chicken.x &&
    //     character.y < chicken.y + chicken.height) 

    /**
     * Checks if 2 objects collide and returns a boolean
     * @param {*} movableObject 
     * @returns True / False
     */
    isColliding(movableObject) {
        return this.x + this.width > movableObject.x &&
            this.y + this.height > movableObject.y &&
            this.x < movableObject.x &&
            this.y < movableObject.y + movableObject.height;
    }

    /**
     * Reduces the character's energy after colliding with an enemy
     */
    hit() {
        this.energy -= 5;

        // Prevent the energy from going negative
        if (this.energy < 0) {
            this.energy = 0;
        }
    }

    /**
     * Returns true if the energy drops to 0
     * @returns true/false
     */
    isDead() {
        return this.energy == 0;
    }


}