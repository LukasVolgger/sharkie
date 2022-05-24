/**
 * Game character object
 */
class Character extends MovableObject {
    world;
    width = 300;
    height = 300;
    x = 50;
    y = 100;
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

    constructor() {
        // super() is needed to call the constructor of its parent class to access the parent's properties and methods
        super().loadImage('img/1._Sharkie/1._IDLE/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SWIM);
        this.animate();
    }

    /**
     * Animate character 
     */
    animate() {
        // Move character
        setInterval(() => {
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.imgMirrored = true;
            }

            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.imgMirrored = false;
            }

            if (this.world.keyboard.UP) {
                this.y -= this.speed;
            }

            if (this.world.keyboard.DOWN) {
                this.y += this.speed;
            }
        }, 1000 / 60)

        // Animation
        setInterval(() => {
            if (this.world.keyboard.LEFT || this.world.keyboard.UP || this.world.keyboard.RIGHT || this.world.keyboard.DOWN) {
                this.swimAnimation();
            } else {
                this.idleAnimation();
            }
        }, 200)
    }

    idleAnimation() {
        let i = this.currentImage % this.IMAGES_IDLE.length; // (0 % 3 = 0), (1 % 3 = 1), (2 % 3 = 2), (3 % 3 = 0), (4 % 3 = 1), (5 % 3 = 2), (6 % 3 = 0), (7 % 3 = 1), (8 % = 2)
        let path = this.IMAGES_IDLE[i]; // Temporary store the path of each img
        this.img = this.imageCache[path]; // Change img from class
        this.currentImage++;
    }

    swimAnimation() {
        let i = this.currentImage % this.IMAGES_SWIM.length; // (0 % 3 = 0), (1 % 3 = 1), (2 % 3 = 2), (3 % 3 = 0), (4 % 3 = 1), (5 % 3 = 2), (6 % 3 = 0), (7 % 3 = 1), (8 % = 2)
        let path = this.IMAGES_SWIM[i]; // Temporary store the path of each img
        this.img = this.imageCache[path]; // Change img from class
        this.currentImage++;
    }
}