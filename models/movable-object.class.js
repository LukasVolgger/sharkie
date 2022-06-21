/**
 * Parent element for all moving objects in the world
 * The background elements are also moveable
 */
 class MovableObject extends DrawableObject {
    speed = 0.15;
    energy;
    lastHit = 0;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
	animationStarted = false;
	animationFinished = false;
    waypointReached = false;

    /**
     * Function to move objects right
     */
    moveRight() {
        console.log('Moving right');
    };

    /**
     * Function to move objects left
     */
    move(direction, startPoint, endPoint, speed) {
        setInterval(() => {
            if (direction == 'horizontal') {
                if (this.x > endPoint) {
                    this.waypointReached = true;
                    this.imgMirrored = false;
                } else if (this.x < startPoint) {
                    this.waypointReached = false;
                    this.imgMirrored = true;
                }

                if (this.waypointReached) {
                    this.x -= speed;
                } else if (!this.waypointReached) {
                    this.x += speed;
                }
            } else if (direction == 'vertical') {
                if (this.y > endPoint) {
                    this.waypointReached = true;
                } else if (this.y < startPoint) {
                    this.waypointReached = false;
                }

                if (this.waypointReached) {
                    this.y -= speed;
                } else if (!this.waypointReached) {
                    this.y += speed;
                }
            }
        }, 1000 / 60);
    };

    /**
     * Animates the images within an interval
     * @param {array} images 
	 * @param {integer} loop 0 = off, 1 = on 
     */
    playAnimation(images, loop) {
		if (loop == 0 && !this.animationFinished) {
			
			if (!this.animationStarted) { // Setting currentImage just once
				this.currentImage = 0; // If it's an one time animation, it should start with the  first img
			}
			
			this.animationStarted = true;
			let i = this.currentImage % images.length; // (0 % 3 = 0), (1 % 3 = 1), (2 % 3 = 2), (3 % 3 = 0), (4 % 3 = 1), (5 % 3 = 2), (6 % 3 = 0), (7 % 3 = 1), (8 % = 2)
			let path = images[i]; // Temporary store the path of each img
			this.img = this.imageCache[path]; // Change img from class
			this.currentImage++;
			
			if (this.currentImage == images.length) { // Stop animation if all images are animated once
				this.animationFinished = true;
				this.animationStarted = false;
			}
		} else if (loop == 1) {
			let i = this.currentImage % images.length; // (0 % 3 = 0), (1 % 3 = 1), (2 % 3 = 2), (3 % 3 = 0), (4 % 3 = 1), (5 % 3 = 2), (6 % 3 = 0), (7 % 3 = 1), (8 % = 2)
			let path = images[i]; // Temporary store the path of each img
			this.img = this.imageCache[path]; // Change img from class
			this.currentImage++;
			this.animationFinished = false;
		}
    }

    /**
     * Checks if 2 objects collide and returns a boolean
     * @param {*} movableObject 
     * @returns True / False
     */
    isColliding(movableObject) {
        return this.x + this.width - this.offset.width > movableObject.x + movableObject.offset.x &&
            this.y + this.height - this.offset.height > movableObject.y + movableObject.offset.y &&
            this.x + this.offset.x < movableObject.x + movableObject.width - movableObject.offset.width &&
            this.y + this.offset.y < movableObject.y + movableObject.height - movableObject.offset.height;
    }

    /**
     * Reduces the character's energy after colliding with an enemy
     */
    hit(attack) {
        this.energy -= attack;

        // Prevent the energy from going negative
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); // Saves the time when the character was last hit by an enemy
        }
    }

    /**
     * Move the dead enemy out of the world at the top left 
	 * For puffer fish
     */
    floatAway(otherDirection) {
        setInterval(() => {
			if (otherDirection) {
				this.x += this.speed;
				this.y -= this.speed;
			} else {
				this.x -= this.speed;
				this.y -= this.speed;
			}
        }, 1000 / 60)
    }
	
	/**
     * Move the dead enemy up out of the world 
	 * For jellyfish
     */
	floatAwayUp() {
		 setInterval(() => {
            this.y -= this.speed;
        }, 1000 / 60)
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