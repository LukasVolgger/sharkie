/**
 * Debug character object
 * Used to be able to position objects more precisely in the world for level design
 */
 class DebugCharacter extends MovableObject {
    world;
    width = 50;
    height = 50;
    x = 0;
    y = 0;
    offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        bubbleX: 50,
        bubbleY: 0
    }
	speed = 4;

    constructor() {
		super();
		if (debugMode) { // Is required because otherwise this.world.camera_x will be set incorrectly when debug mode not acitvated
			this.loadImage('img/1._Sharkie/1._Idle/1.png');
			this.characterEvents();
		}
    }

    /**
     * Help function to record all events of the character
     * Movement, endboss trigger, camera etc...
     */
    characterEvents() {
        setInterval(() => {

            // Moving UP
            if (this.world.keyboard.UP && this.y > 0) {
                this.moveCharacter('up');
            }

            // Moving RIGHT
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveCharacter('right');
            }

            // Moving DOWN
            if (this.world.keyboard.DOWN && this.y < 426) {
                this.moveCharacter('down');
            }

            // Moving LEFT
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveCharacter('left');
            }

            this.world.camera_x = -this.x + ((720 - this.width) / 2); // Places the box in the absolute center of the canvas
        }, 1000 / 60)
    }

    /**
     * Moves character
     * @param {string} direction 'up', 'right', 'down', 'left'
     */
    moveCharacter(direction) {
        console.log('Position: ', this.x, ', ', this.y);

        if (direction == 'up') {
            this.y -= this.speed;
        } else if (direction == 'right') {
            this.x += this.speed;
            this.imgMirrored = false;
        } else if (direction == 'down') {
            this.y += this.speed;
        } else if (direction == 'left') {
            this.x -= this.speed;
            this.imgMirrored = true;
        }
    }
}