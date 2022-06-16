/**
 * Endboss enemy object
 */
class Endboss extends MovableObject {
    world;
    width = 300;
    height = 300;
    x; // Assigned here => calculateEndbossX()
    y = 50;
    endbossTriggered = false; // True if character crosses the trigger_endboss_x from level.class.js
    endbossIntroduced = false; // True if enboss animation is finished
    offset = {
        x: 15,
        y: 90,
        width: 20,
        height: 45
    }
    IMAGES_INTRODUCE = [
        'img/2._Enemy/3._Final_Enemy/1._Introduce/1.png',
        'img/2._Enemy/3._Final_Enemy/1._Introduce/2.png',
        'img/2._Enemy/3._Final_Enemy/1._Introduce/3.png',
        'img/2._Enemy/3._Final_Enemy/1._Introduce/4.png',
        'img/2._Enemy/3._Final_Enemy/1._Introduce/5.png',
        'img/2._Enemy/3._Final_Enemy/1._Introduce/6.png',
        'img/2._Enemy/3._Final_Enemy/1._Introduce/7.png',
        'img/2._Enemy/3._Final_Enemy/1._Introduce/8.png',
        'img/2._Enemy/3._Final_Enemy/1._Introduce/9.png',
        'img/2._Enemy/3._Final_Enemy/1._Introduce/10.png',
    ];

    IMAGES_FLOATING = [
        'img/2._Enemy/3._Final_Enemy/2._Floating/1.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/2.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/3.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/4.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/5.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/6.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/7.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/8.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/9.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/10.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/11.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/12.png',
        'img/2._Enemy/3._Final_Enemy/2._Floating/13.png',
    ];

    constructor() {
        super().loadImage(''); // Empty because Endboss has introduce animation. Otherwise an image would be displayed permanently
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.animate();
        this.calculateEndbossX();
    }

    /**
     * Animate endboss
     */
    animate() {
        setInterval(() => {
            if (this.endbossTriggered) {
                this.playAnimation(this.IMAGES_INTRODUCE);

                setTimeout(() => {
                    this.endbossTriggered = false;
                    this.endbossIntroduced = true;
                }, 2490); // Normally 2500ms => 10ms before the animation ends so that a smooth transition takes place

            } else if (this.endbossIntroduced) {
                this.playAnimation(this.IMAGES_FLOATING);
            }
        }, 250)
    }

    /**
     * Calculates the x-coordinate based on the trigger coordinate
     */
    calculateEndbossX() {
        setInterval(() => {
            this.x = this.world.level.trigger_endboss_x + 300;
        }, 100)

    }
}