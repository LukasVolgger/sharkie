/**
 * Final enemy object
 */
 class EndBoss extends MovableObject {
    world;
    width = 300;
    height = 300;
	energy = 200;
	attack = 30;
    endBossTriggered = false;
    endBossIntroduced = false;
    endBossAlreadyTriggered = false;
    triggerDistance = 500;
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

    constructor(x, y) {
        super().loadImage(''); // Empty because EndBoss has introduce animation. Otherwise an image would be displayed permanently
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.animate();
        this.triggerEndBoss();
        this.x = x;
        this.y = y;
    }

    /**
     * Animate endboss
     */
    animate() {
        setInterval(() => {
            if (this.endBossIntroduced) {
                this.playAnimation(this.IMAGES_FLOATING);
            }
        }, 250)

        // Faster animation
        setInterval(() => {
            if (this.endBossTriggered) {
                this.introduceEndBoss();
            }
        }, 150)
    }

    /**
     * Checks if EndBoss has been triggered
     */
    triggerEndBoss() {
        setInterval(() => {
            if (this.world.character.x > this.x - this.triggerDistance && !this.endBossAlreadyTriggered) {
                this.endBossTriggered = true;
            }
        }, 1000)
    }

    /**
     * EndBoss introduce animation
     */
    introduceEndBoss() {
        this.playAnimation(this.IMAGES_INTRODUCE);
        this.endBossAlreadyTriggered = true;

        setTimeout(() => {
            this.endBossTriggered = false;
            this.endBossIntroduced = true;
        }, 1490); // Normally 1500ms => 10ms before the animation ends so that a smooth transition takes place

    }
}