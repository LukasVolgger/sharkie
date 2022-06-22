/**
 * Final enemy object
 */
 class EndBoss extends MovableObject {
    world;
    width = 300;
    height = 300;
	energy = 200;
	attack = 30;
	speed = 8;
    endBossTriggered = false;
    endBossIntroduced = false;
    endBossAlreadyTriggered = false;
	isCollidingWithCharacter;
    triggerDistance = 500;
	wanderDistance = 200;
	waypoint1 = false;
	waypoint2 = false;
	waypoint3 = false;
	waypoint4 = false;
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
        'img/2._Enemy/3._Final_Enemy/1._Introduce/10.png'
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
        'img/2._Enemy/3._Final_Enemy/2._Floating/13.png'
    ];
	
	IMAGES_HURT = [
		'img/2._Enemy/3._Final_Enemy/Hurt/1.png',
		'img/2._Enemy/3._Final_Enemy/Hurt/2.png',
		'img/2._Enemy/3._Final_Enemy/Hurt/3.png',
		'img/2._Enemy/3._Final_Enemy/Hurt/4.png'
	];
	
	IMAGES_DEAD = [
		'img/2._Enemy/3._Final_Enemy/Dead/1.png',
		'img/2._Enemy/3._Final_Enemy/Dead/2.png',
		'img/2._Enemy/3._Final_Enemy/Dead/3.png',
		'img/2._Enemy/3._Final_Enemy/Dead/4.png',
		'img/2._Enemy/3._Final_Enemy/Dead/5.png',
		'img/2._Enemy/3._Final_Enemy/Dead/6.png'
	];
	
	IMAGES_ATTACK = [
		'img/2._Enemy/3._Final_Enemy/Attack/1.png',
		'img/2._Enemy/3._Final_Enemy/Attack/2.png',
		'img/2._Enemy/3._Final_Enemy/Attack/3.png',
		'img/2._Enemy/3._Final_Enemy/Attack/4.png',
		'img/2._Enemy/3._Final_Enemy/Attack/5.png',
		'img/2._Enemy/3._Final_Enemy/Attack/6.png'
	];

    constructor(x, y, startX, startY) {
        super().loadImage(''); // Empty because EndBoss has introduce animation. Otherwise an image would be displayed permanently
        this.loadImages(this.IMAGES_FLOATING);
        this.loadImages(this.IMAGES_INTRODUCE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.animate();
        this.triggerEndBoss();
        this.x = x;
        this.y = y;
        this.startX = startX;
        this.startY = startY;
    }

    /**
     * Animate endboss
     */
    animate() {
        setInterval(() => {
            if (this.endBossIntroduced && !this.isHurt() && !this.isDead() && !this.isCollidingWithCharacter) {
                this.playAnimation(this.IMAGES_FLOATING, 1);
				
				if (!this.world.character.isDead()) {
					this.aiMovement();
				}
            } else if (this.isHurt() && !this.isDead()) {
				this.playAnimation(this.IMAGES_HURT, 1);
			} else if (this.isDead()) {
				this.playAnimation(this.IMAGES_DEAD, 0);
			} else if (this.endBossTriggered) {
                this.introduceEndBoss();
            } else if (this.isCollidingWithCharacter) {
				this.attackAnimation();
				this.playAnimation(this.IMAGES_ATTACK, 0);
			}
        }, 150)
    }
	
	/**
	 * Autonomous motion sequence for EndBoss
	 */
	aiMovement() {
			if (!this.waypoint1 && this.x > this.startX - this.wanderDistance) { // Move forward
				this.x -= this.speed;
				
				if (this.x <= this.startX - this.wanderDistance) {
					this.waypoint1 = true;
					this.waypoint4 = false;
				} 
			} else if (this.waypoint1 && !this.waypoint2) { // Move up
					this.y -= this.speed;
					
					if(this.y <= -50) {
						this.waypoint2 = true;
					}
			} else if (this.waypoint2 && !this.waypoint3) { // move back
				this.x += this.speed;
				
				if (this.x >= this.startX) {
					this.waypoint3 = true;
				}
			} else if (this.waypoint3 && !this.waypoint4) { // Move down
				this.y += this.speed;
				
				if (this.y >= 150) {
					this.waypoint4 = true;
					this.waypoint1 = false;
					this.waypoint2 = false;
					this.waypoint3 = false;
				}
			}
	}
	
	/**
     * Sets the boolean value isCollidingWithCharacter to true until the animation has finished playing once
     */
    attackAnimation() {
        if (!this.checkAlreadyRunning) {

            this.currentImage = 0; // To start with the first img of the animation

            let spacePressed = setInterval(() => {
                this.isCollidingWithCharacter= true;
                this.checkAlreadyRunning = true;
            }, 100);

            setTimeout(() => {
                this.isCollidingWithCharacter = false;
                this.checkAlreadyRunning = false;
                clearInterval(spacePressed);
            }, 600);
        }
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
        this.playAnimation(this.IMAGES_INTRODUCE, 0);
        this.endBossAlreadyTriggered = true;

        setTimeout(() => {
            this.endBossTriggered = false;
            this.endBossIntroduced = true;
        }, 1490); // Normally 1500ms => 10ms before the animation ends so that a smooth transition takes place

    }
}