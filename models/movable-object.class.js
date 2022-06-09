/**
 * Parent element for all moving objects in the world
 * The background elements are also moveable
 */
class MovableObject extends DrawableObject {
    speed = 0.15;
    energy = 100;
    lastHit = 0;
    offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
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
     * Checks if 2 objects collide and returns a boolean
     * @param {*} movableObject 
     * @returns True / False
     */
    isColliding(movableObject) {
        return this.x + this.width - this.offset.right > movableObject.x + movableObject.offset.left &&
            this.y + this.height - this.offset.bottom > movableObject.y + movableObject.offset.top &&
            this.x + this.offset.left < movableObject.x - movableObject.offset.right &&
            this.y + this.offset.top < movableObject.y + movableObject.height - movableObject.offset.bottom;
    }

    /**
     * Reduces the character's energy after colliding with an enemy
     */
    hit() {
        this.energy -= 5;

        // Prevent the energy from going negative
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // Saves the time when the character was last hit by an enemy
        }
    }

    /**
     * If the difference in the last hit on the character is less than x s, true is returned
     * @returns true/false
     */
    isHurt() {
        let timePassed = new Date().getTime() - this.lastHit; // Difference in ms
        timePassed = timePassed / 1000; // Difference in s
        return timePassed < 1;
    }

    /**
     * Returns true if the energy drops to 0
     * @returns true/false
     */
    isDead() {
        return this.energy == 0;
    }


}