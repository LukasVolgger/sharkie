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
    energy = 100;
    attack = 10;
    coins = 0;
    poison = 0;
    imgMirrored = false;
    lastMove = new Date().getTime();
    secondsUntilLongIdle = 10;
    hitBy;
    isAlreadyDead;
    isFinSlapping = false;
    isBubbleTrapping = false;
    isCollidingWithBarrier = false;
    isCollidingWithBarrierUp = false;
    isCollidingWithBarrierRight = false;
    isCollidingWithBarrierDown = false;
    isCollidingWithBarrierLeft = false;
    SWIM_SOUND = new Audio('audio/swim.mp3');
    DYING_SOUND = new Audio('audio/hurt_dying.mp3');
    SLAP_SOUND = new Audio('audio/slap.mp3');
    BUBBLE_SOUND = new Audio('audio/bubble.mp3');
    HURT_SOUND = new Audio('audio/hurt.mp3');
    ELECTRIC_ZAP_SOUND = new Audio('audio/electric_zap.mp3');
    COIN_SOUND = new Audio('audio/coin.mp3');
    COLLECT_SOUND = new Audio('audio/collect.mp3');
    BUBBLING_SOUND = new Audio('audio/bubbling.mp3');
    LIFE_SOUND = new Audio('audio/health.mp3');

    constructor() {
        super();
        if (debugMode && !debugLevelDesignHelper || !debugMode && !debugLevelDesignHelper) { // Is required because in debugMode Character and DebugCharacter are created and otherwise collisions are triggered
            this.loadImage('img/1._Sharkie/1._Idle/1.png');
            this.loadImages(SHARKIE_IMAGES.IDLE);
            this.loadImages(SHARKIE_IMAGES.LONG_IDLE);
            this.loadImages(SHARKIE_IMAGES.SWIM);
            this.loadImages(SHARKIE_IMAGES.HURT_POISONED);
            this.loadImages(SHARKIE_IMAGES.HURT_ELECTRIC_SHOCK);
            this.loadImages(SHARKIE_IMAGES.DIE_POISONED);
            this.loadImages(SHARKIE_IMAGES.DIE_ELECTRIC_SHOCK);
            this.loadImages(SHARKIE_IMAGES.FIN_SLAP);
            this.loadImages(SHARKIE_IMAGES.BUBBLE_TRAP);
            this.animate();
            this.characterEvents();
            this.characterSounds();
            this.triggerEndboss();
        }
    }

    /**
     * Animate character 
     */
    animate() {
        setInterval(() => {
            if (this.isDead() && this.hitBy == 'PufferFish' || this.isDead() && this.hitBy == 'EndBoss') {
                this.playAnimation(SHARKIE_IMAGES.DIE_POISONED, 0);
                characterIsDead = true;
            } else if (this.isDead() && this.hitBy == 'JellyFish') {
                this.playAnimation(SHARKIE_IMAGES.DIE_ELECTRIC_SHOCK, 0);
                characterIsDead = true;
            } else if (this.isHurt() && this.hitBy == 'PufferFish' || this.isHurt() && this.hitBy == 'EndBoss') {
                this.playAnimation(SHARKIE_IMAGES.HURT_POISONED, 1);
            } else if (this.isHurt() && this.hitBy == 'JellyFish') {
                this.playAnimation(SHARKIE_IMAGES.HURT_ELECTRIC_SHOCK, 1);
            } else if (this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.RIGHT || this.world.keyboard.DOWN) {
                this.playAnimation(SHARKIE_IMAGES.SWIM, 1);
            } else if (this.isLongIdle()) {
                this.playAnimation(SHARKIE_IMAGES.LONG_IDLE, 1);
            } else {
                this.playAnimation(SHARKIE_IMAGES.IDLE, 1);
            }
        }, 200);

        setInterval(() => {
            if (this.world.keyboard.SPACE && !this.isDead()) {
                this.finSlapAttack();
                this.playAnimation(SHARKIE_IMAGES.FIN_SLAP, 0);
            } else if (this.world.keyboard.D && !this.isDead()) {
                this.bubbleTrapAttack();
                this.playAnimation(SHARKIE_IMAGES.BUBBLE_TRAP, 0);
            } else if (this.world.keyboard.F && this.poison > 0 && !this.isDead()) {
                this.bubbleTrapAttackPoison();
                this.playAnimation(SHARKIE_IMAGES.BUBBLE_TRAP, 0);
            }
        }, 100)
    }

    /**
     * Help function to record all events of the character
     * Movement, endboss trigger, camera etc...
     */
    characterEvents() {
        setInterval(() => {

            // Moving UP
            if (this.world.keyboard.UP && this.y > -135 && !this.isDead() && !this.world.level.getEndBoss().isDead()) {
                this.moveCharacter('up');
            }

            // Moving RIGHT
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x && !this.isDead() && !this.world.level.getEndBoss().isDead()) {
                this.moveCharacter('right');
            }

            // Moving DOWN
            if (this.world.keyboard.DOWN && this.y < 240 && !this.isDead() && !this.world.level.getEndBoss().isDead()) {
                this.moveCharacter('down');
            }

            // Moving LEFT
            if (this.world.keyboard.LEFT && this.x > 0 && !this.isDead() && !this.world.level.getEndBoss().isDead()) {
                this.moveCharacter('left');
            }

            this.world.camera_x = -this.x; // Sets the camera of the world object to the negative character's x coordinate
        }, 1000 / 60)
    }

    /**
     * Handle all character sounds
     */
    characterSounds() {
        setInterval(() => {
            if (soundOn) {

                // Swim sound	
                if (this.world.keyboard.LEFT || this.world.keyboard.RIGHT || this.world.keyboard.UP || this.world.keyboard.DOWN) {
                    this.SWIM_SOUND.pause();
                    this.SWIM_SOUND.play();
                }

                // Dying sound
                if (this.isDead() && !this.isAlreadyDead) {
                    this.DYING_SOUND.play();
                    this.isAlreadyDead = true;
                }

                // Slap sound
                if (this.isFinSlapping) {
                    this.SLAP_SOUND.play();
                }

                // Bubble sound
                if (this.isBubbleTrapping) {
                    this.BUBBLE_SOUND.play();
                }

                // Bubbling sound
                this.world.level.enemies.forEach(enemy => {
                    if (this.world.bubble) {
                        if (this.world.bubble.isColliding(enemy) && enemy instanceof JellyFishRegular || this.world.bubble.isColliding(enemy) && enemy instanceof JellyFishDangerous || this.world.bubble.isColliding(enemy) && enemy instanceof EndBoss) {
                            this.BUBBLING_SOUND.currentTime = 0;
                            this.BUBBLING_SOUND.play();
                        }
                    }
                });

                // Hurt sounds
                this.world.level.enemies.forEach(enemy => {
                    if (this.isColliding(enemy) && !this.isDead() && !enemy.isDead() && !this.isFinSlapping) {
                        if (enemy instanceof PufferFish || enemy instanceof EndBoss) {
                            this.HURT_SOUND.play();
                        } else if (enemy instanceof JellyFishRegular || enemy instanceof JellyFishDangerous) {
                            this.ELECTRIC_ZAP_SOUND.play();
                        }
                    }
                });

                // Coin sound
                this.world.level.coins.forEach(coin => {
                    if (this.isColliding(coin)) {
                        this.COIN_SOUND.play();
                    }
                });

                // Collect sound
                this.world.level.poison.forEach(poison => {
                    if (this.isColliding(poison)) {
                        this.COLLECT_SOUND.play();
                    }
                });

                // Life sound
                this.world.level.life.forEach(life => {
                    if (this.isColliding(life)) {
                        this.LIFE_SOUND.play();
                    }
                });
            }
        }, 1000 / 60)
    }

    /**
     * Moves character
     * @param {string} direction 'up', 'right', 'down', 'left'
     */
    moveCharacter(direction) {
        if (debugLogStatements) {
            console.log('Character position: ', this.x, ', ', this.y);
        }
        this.lastMove = new Date().getTime();

        this.checkBarrierCollisions(direction);

        // Character movement
        if (direction == 'up' && !this.isCollidingWithBarrierUp) {
            this.y -= this.speed;
        } else if (direction == 'right' && !this.isCollidingWithBarrierRight) {
            this.x += this.speed;
            this.imgMirrored = false;
        } else if (direction == 'down' && !this.isCollidingWithBarrierDown) {
            this.y += this.speed;
        } else if (direction == 'left' && !this.isCollidingWithBarrierLeft) {
            this.x -= this.speed;
            this.imgMirrored = true;
        }
    }

    /**
     * Detects collisions with barriers and saves from which direction the collision occurs
     * @param {string} direction 'up', 'right', 'down', 'left'
     */
    checkBarrierCollisions(direction) {
        let collidingWithBarrier = this.world.level.barriers.find(barrier => this.isColliding(barrier));
        let collidingWithBarrierX = this.world.level.barriers.find(barrier => this.isCollidingX(barrier));
        let collidingWithBarrierY = this.world.level.barriers.find(barrier => this.isCollidingY(barrier));

        // Detect if character collides with a barrier
        if (collidingWithBarrier) {
            this.isCollidingWithBarrier = true;
        } else {
            this.isCollidingWithBarrier = false;
            this.isCollidingWithBarrierUp = false;
            this.isCollidingWithBarrierRight = false;
            this.isCollidingWithBarrierDown = false;
            this.isCollidingWithBarrierLeft = false;
        }

        // Check collisions with barriers and save from which direction the collision occurs
        if (direction == 'right' && collidingWithBarrierX && !this.isCollidingWithBarrierLeft) {
            this.isCollidingWithBarrierRight = true;

            if (debugLogStatements) {
                console.log('Collision with Barrier from R - L');
            }
        } else if (direction == 'left' && collidingWithBarrierX && !this.isCollidingWithBarrierRight) {
            this.isCollidingWithBarrierLeft = true;

            if (debugLogStatements) {
                console.log('Collision with Barrier from L - R');
            }
        } else if (direction == 'up' && collidingWithBarrierY && !this.isCollidingWithBarrierDown) {
            this.isCollidingWithBarrierUp = true;

            if (debugLogStatements) {
                console.log('Collision with Barrier from D - U');
            }
        } else if (direction == 'down' && collidingWithBarrierY && !this.isCollidingWithBarrierUp) {
            this.isCollidingWithBarrierDown = true;

            if (debugLogStatements) {
                console.log('Collision with Barrier from U - D');
            }
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
            let otherDirection;

            if (this.imgMirrored == true) {
                otherDirection = true;
            }

            setTimeout(() => { // Wait until animation is finished
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

    /**
     * Poison bubble trap attack
     */
    bubbleTrapAttackPoison() {
        this.activateF();
        this.lastMove = new Date().getTime();
        this.isBubbleTrapping = true;

        if (!this.checkAlreadyRunning) { // To prevent the bubble from shaking because activateD() is active for 600ms
            let otherDirection;

            if (this.imgMirrored == true) {
                otherDirection = true;
            }

            setTimeout(() => { // Wait until animation is finished
                if (this.poison > 0) {
                    this.world.bubble = new PoisonBubble(this.x + this.offset.bubbleX, this.y + this.offset.bubbleY, otherDirection);
                    this.poison--;
                    this.world.statusBarPoison.setPercentage((this.poison / this.world.level.totalPoison) * 100, this.world.statusBarPoison.type, this.world.statusBarPoison.color);
                }
            }, 600)
        }
    }

    /**
     * Activates the F-key event until the fin slap animation is finished
     */
    activateF() {
        if (!this.checkAlreadyRunning) {

            this.currentImage = 0; // To start with the first img of the animation

            let fPressed = setInterval(() => {
                this.world.keyboard.F = true;
                this.checkAlreadyRunning = true;
            }, 100);

            setTimeout(() => {
                this.world.keyboard.F = false;
                this.checkAlreadyRunning = false;
                clearInterval(fPressed);
                this.isBubbleTrapping = false;
            }, 600);
        }
    }

    /**
     * Triggers the EndBoss when exceeding the x coordinate minus the triggerDistance
     */
    triggerEndboss() {
        setInterval(() => {
            if (this.x > (this.world.level.getEndBoss().x - this.world.level.getEndBoss().triggerDistance) && !this.world.level.getEndBoss().endBossAlreadyTriggered) {
                this.world.level.getEndBoss().endBossTriggered = true;
            }
        }, 100);
    }
}