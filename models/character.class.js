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
        height: 65
    }
    speed = 5;
    imgMirrored = false;
    IMAGES_IDLE = [
        'img/1._Sharkie/1._IDLE/1.png',
        'img/1._Sharkie/1._IDLE/2.png',
        'img/1._Sharkie/1._IDLE/3.png',
        'img/1._Sharkie/1._IDLE/4.png',
        'img/1._Sharkie/1._IDLE/5.png',
        'img/1._Sharkie/1._IDLE/6.png',
        'img/1._Sharkie/1._IDLE/7.png',
        'img/1._Sharkie/1._IDLE/8.png',
        'img/1._Sharkie/1._IDLE/9.png',
        'img/1._Sharkie/1._IDLE/10.png',
        'img/1._Sharkie/1._IDLE/11.png',
        'img/1._Sharkie/1._IDLE/12.png',
        'img/1._Sharkie/1._IDLE/13.png',
        'img/1._Sharkie/1._IDLE/14.png',
        'img/1._Sharkie/1._IDLE/15.png',
        'img/1._Sharkie/1._IDLE/16.png',
        'img/1._Sharkie/1._IDLE/17.png',
        'img/1._Sharkie/1._IDLE/18.png'
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
    swim_sound = new Audio('audio/swim.mp3');

    constructor() {
        // super() is needed to call the constructor of its parent class to access the parent's properties and methods
        super().loadImage('img/1._Sharkie/1._IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.loadImages(this.IMAGES_HURT_POISONED);
        this.loadImages(this.IMAGES_DIE_POISONED);
        this.animate();
    }

    /**
     * Animate character 
     */
    animate() {
        // Move character
        setInterval(() => {
            // TODO Re-enable sound
            // this.swim_sound.pause();

            // this.x > 0 = to avoid that the character moves out of map
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.imgMirrored = true;

                // TODO Re-enable sound
                // this.swim_sound.play();
            } else if (this.world.keyboard.LEFT) {
                // TODO Re-enable sound
                // this.swim_sound.play(); 
            }

            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.imgMirrored = false;
                console.log('Character position: ', this.x, ', ', this.y);

                // TODO Re-enable sound
                // this.swim_sound.play();
            } else if (this.world.keyboard.RIGHT) {
                // TODO Re-enable sound
                // this.swim_sound.play();
            }

            if (this.world.keyboard.UP) {
                this.y -= this.speed;

                // TODO Re-enable sound
                // this.swim_sound.play();
            }

            if (this.world.keyboard.DOWN) {
                this.y += this.speed;

                // TODO Re-enable sound
                // this.swim_sound.play();
            }

            this.world.camera_x = -this.x; // Sets the camera of the world object to the negative character's x coordinate
        }, 1000 / 60)

        // Animation
        setInterval(() => {
            if (this.isDead()) {
                this.dieAnimationPoisoned();
            } else if (this.isHurt()) {
                this.hurtAnimationPoisoned();
            } else if (this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.RIGHT || this.world.keyboard.DOWN) {
                this.swimAnimation();
            } else {
                this.idleAnimation();
            }
        }, 200)
    }

    /**
     * Animate idle images
     */
    idleAnimation() {
        this.playAnimation(this.IMAGES_IDLE);
    }

    /**
     * Animate swim images
     */
    swimAnimation() {
        this.playAnimation(this.IMAGES_SWIM);
    }

    /**
     * Animate hurt images
     */
    hurtAnimationPoisoned() {
        this.playAnimation(this.IMAGES_HURT_POISONED);
    }

    /**
     * Animate die images
     */
    dieAnimationPoisoned() {
        this.playAnimation(this.IMAGES_DIE_POISONED);
    }
}