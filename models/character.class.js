/**
 * Game character object
 */
 class Character extends MovableObject {
    world;
    width = 300;
    height = 300;
    x = 0;
    y = 100;
    offset = {
        x: 55,
        y: 140,
        width: 55,
        height: 65,
        bubbleX: 220,
        bubbleY: 165
    }
    speed = 4;
    imgMirrored = false;
    lastMove = new Date().getTime();
    secondsUntilLongIdle = 10;
    checkAlreadyRunning = false;
    isFinSlapping = false;
    isBubbleTrapping = false;
    coins = 0;
    poison = 0;
    IMAGES_IDLE = [
        'img/1._Sharkie/1._Idle/1.png',
        'img/1._Sharkie/1._Idle/2.png',
        'img/1._Sharkie/1._Idle/3.png',
        'img/1._Sharkie/1._Idle/4.png',
        'img/1._Sharkie/1._Idle/5.png',
        'img/1._Sharkie/1._Idle/6.png',
        'img/1._Sharkie/1._Idle/7.png',
        'img/1._Sharkie/1._Idle/8.png',
        'img/1._Sharkie/1._Idle/9.png',
        'img/1._Sharkie/1._Idle/10.png',
        'img/1._Sharkie/1._Idle/11.png',
        'img/1._Sharkie/1._Idle/12.png',
        'img/1._Sharkie/1._Idle/13.png',
        'img/1._Sharkie/1._Idle/14.png',
        'img/1._Sharkie/1._Idle/15.png',
        'img/1._Sharkie/1._Idle/16.png',
        'img/1._Sharkie/1._Idle/17.png',
        'img/1._Sharkie/1._Idle/18.png'
    ];
    IMAGES_LONG_IDLE = [
        'img/1._Sharkie/2._Long_Idle/1.png',
        'img/1._Sharkie/2._Long_Idle/2.png',
        'img/1._Sharkie/2._Long_Idle/3.png',
        'img/1._Sharkie/2._Long_Idle/4.png',
        'img/1._Sharkie/2._Long_Idle/5.png',
        'img/1._Sharkie/2._Long_Idle/6.png',
        'img/1._Sharkie/2._Long_Idle/7.png',
        'img/1._Sharkie/2._Long_Idle/8.png',
        'img/1._Sharkie/2._Long_Idle/9.png',
        'img/1._Sharkie/2._Long_Idle/10.png',
        'img/1._Sharkie/2._Long_Idle/11.png',
        'img/1._Sharkie/2._Long_Idle/12.png',
        'img/1._Sharkie/2._Long_Idle/13.png',
        'img/1._Sharkie/2._Long_Idle/14.png'
    ];
    IMAGES_SWIM = [
        'img/1._Sharkie/3._Swim/1.png',
        'img/1._Sharkie/3._Swim/2.png',
        'img/1._Sharkie/3._Swim/3.png',
        'img/1._Sharkie/3._Swim/4.png',
        'img/1._Sharkie/3._Swim/5.png',
        'img/1._Sharkie/3._Swim/6.png'
    ];
    IMAGES_HURT_POISONED = [
        'img/1._Sharkie/5._Hurt/1._Poisoned/1.png',
        'img/1._Sharkie/5._Hurt/1._Poisoned/2.png',
        'img/1._Sharkie/5._Hurt/1._Poisoned/3.png',
        'img/1._Sharkie/5._Hurt/1._Poisoned/4.png',
    ];
    IMAGES_DIE_POISONED = [
        'img/1._Sharkie/6._Dead/1._Poisoned/1.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/2.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/3.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/4.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/5.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/6.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/7.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/8.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/9.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/10.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/11.png',
        'img/1._Sharkie/6._Dead/1._Poisoned/12.png'
    ];
    IMAGES_FIN_SLAP = [
        'img/1._Sharkie/4._Attack/Fin_Slap/1.png',
        'img/1._Sharkie/4._Attack/Fin_Slap/2.png',
        'img/1._Sharkie/4._Attack/Fin_Slap/3.png',
        'img/1._Sharkie/4._Attack/Fin_Slap/4.png',
        'img/1._Sharkie/4._Attack/Fin_Slap/5.png',
        'img/1._Sharkie/4._Attack/Fin_Slap/6.png',
        'img/1._Sharkie/4._Attack/Fin_Slap/7.png',
        'img/1._Sharkie/4._Attack/Fin_Slap/8.png'
    ];
    IMAGES_BUBBLE_TRAP = [
        'img/1._Sharkie/4._Attack/Bubble_Trap/Op1_(With_Bubble_Formation)/1.png',
        'img/1._Sharkie/4._Attack/Bubble_Trap/Op1_(With_Bubble_Formation)/2.png',
        'img/1._Sharkie/4._Attack/Bubble_Trap/Op1_(With_Bubble_Formation)/3.png',
        'img/1._Sharkie/4._Attack/Bubble_Trap/Op1_(With_Bubble_Formation)/4.png',
        'img/1._Sharkie/4._Attack/Bubble_Trap/Op1_(With_Bubble_Formation)/5.png',
        'img/1._Sharkie/4._Attack/Bubble_Trap/Op1_(With_Bubble_Formation)/6.png',
        'img/1._Sharkie/4._Attack/Bubble_Trap/Op1_(With_Bubble_Formation)/7.png',
        'img/1._Sharkie/4._Attack/Bubble_Trap/Op1_(With_Bubble_Formation)/8.png'
    ];
    swim_sound = new Audio('audio/swim.mp3');

    constructor() {
        // super() is needed to call the constructor of its parent class to access the parent's properties and methods
        super().loadImage('img/1._Sharkie/1._Idle/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONG_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT_POISONED);
        this.loadImages(this.IMAGES_DIE_POISONED);
        this.loadImages(this.IMAGES_FIN_SLAP);
        this.loadImages(this.IMAGES_BUBBLE_TRAP);
        this.animate();
        this.characterEvents();
    }

    /**
     * Animate character 
     */
    animate() {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DIE_POISONED);
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT_POISONED);
            } else if (this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.RIGHT || this.world.keyboard.DOWN) {
                this.playAnimation(this.IMAGES_SWIM);
            } else if (this.isLongIdle()) {
                this.playAnimation(this.IMAGES_LONG_IDLE);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 200)

        setInterval(() => {
            if (this.world.keyboard.SPACE) {
                this.finSlapAttack();
                this.playAnimation(this.IMAGES_FIN_SLAP);
            } else if (this.world.keyboard.D) {
                this.bubbleTrapAttack();
                this.playAnimation(this.IMAGES_BUBBLE_TRAP);
            }
        }, 100)
    }

    /**
     * Help function to record all events of the character
     * Movement, endboss trigger, camera etc...
     */
    characterEvents() {
        setInterval(() => {
            // Swim sound	
            if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                // TODO Re-enable sound
                // this.swim_sound.play();
            }

            // Moving UP
            if (this.world.keyboard.UP && this.y > -135) {
                this.moveCharacter('up');
            }

            // Moving RIGHT
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveCharacter('right');
            }

            // Moving DOWN
            if (this.world.keyboard.DOWN && this.y < 240) {
                this.moveCharacter('down');
            }

            // Moving LEFT
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveCharacter('left');
            }

            this.world.camera_x = -this.x; // Sets the camera of the world object to the negative character's x coordinate
        }, 1000 / 60)
    }

    /**
     * Moves character
     * @param {string} direction 'up', 'right', 'down', 'left'
     */
    moveCharacter(direction) {
        // console.log('Character position: ', this.x, ', ', this.y);
        this.lastMove = new Date().getTime();

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

    /**
     * Checks how long ago the character last moved and returns true if it is longer than x seconds
     * @returns true / false
     */
    isLongIdle() {
        let timePassed = new Date().getTime() - this.lastMove; // Difference in ms
        timePassed = timePassed / 1000; // Difference in s
        return timePassed > this.secondsUntilLongIdle;
    }

    /**
     * Fin slap attack 
     */
    finSlapAttack() {
        this.activateSPACE();
        this.lastMove = new Date().getTime();
        this.isFinSlapping = true;
    }

    /**
     * Activates the SPACE-key event until the fin slap animation is finished
     */
    activateSPACE() {
        if (!this.checkAlreadyRunning) {

            this.currentImage = 0; // To start with the first img of the animation

            let spacePressed = setInterval(() => {
                this.world.keyboard.SPACE = true;
                this.checkAlreadyRunning = true;
            }, 100);

            setTimeout(() => {
                this.world.keyboard.SPACE = false;
                this.checkAlreadyRunning = false;
                clearInterval(spacePressed);
                this.isFinSlapping = false;
            }, 600);
        }
    }

    /**
     * Bubble trap attack
     */
    bubbleTrapAttack() {
        this.activateD();
        this.lastMove = new Date().getTime();
        this.isBubbleTrapping = true;

        if (!this.checkAlreadyRunning) { // To prevent the bubble from shaking because activateD() is active for 600ms
            setTimeout(() => { // Wait until animation is finished
				let otherDirection; 
				
				if (this.imgMirrored == true) {
					otherDirection = true;
				}
                this.world.bubble = new Bubble(this.x + this.offset.bubbleX, this.y + this.offset.bubbleY, otherDirection);
            }, 600)
        }
    }

    /**
     * Activates the D-key event until the fin slap animation is finished
     */
    activateD() {
        if (!this.checkAlreadyRunning) {

            this.currentImage = 0; // To start with the first img of the animation

            let dPressed = setInterval(() => {
                this.world.keyboard.D = true;
                this.checkAlreadyRunning = true;
            }, 100);

            setTimeout(() => {
                this.world.keyboard.D = false;
                this.checkAlreadyRunning = false;
                clearInterval(dPressed);
                this.isBubbleTrapping = false;
            }, 600);
        }
    }

}