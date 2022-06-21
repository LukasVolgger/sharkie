/**
 * Puffer fish enemy object
 */
 class PufferFish extends MovableObject {
    width = 100;
    height = 100;
    energy = 5;
	attack = 10;
    speed = 2;
    offset = {
        x: 0,
        y: 3,
        width: 5,
        height: 24
    }
    IMAGES_SWIM = {
        'green': [
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_1.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_2.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_3.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_4.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_5.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/1._Transition_1.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/1._Transition_2.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/1._Transition_3.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/1._Transition_4.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/1._Transition_5.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/1._Transition_5.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/1._Transition_4.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/1._Transition_3.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/1._Transition_2.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/1._Transition_1.png',
        ],
        'orange': [
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/2._Swim_1.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/2._Swim_2.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/2._Swim_3.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/2._Swim_4.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/2._Swim_5.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/2._Transition_1.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/2._Transition_2.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/2._Transition_3.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/2._Transition_4.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/2._Transition_5.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/2._Transition_5.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/2._Transition_4.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/2._Transition_3.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/2._Transition_2.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/2._Transition_1.png',
        ],
        'red': [
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/3._Swim_1.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/3._Swim_2.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/3._Swim_3.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/3._Swim_4.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/3._Swim_5.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/3._Transition_1.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/3._Transition_2.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/3._Transition_3.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/3._Transition_4.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/3._Transition_5.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/3._Transition_5.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/3._Transition_4.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/3._Transition_3.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/3._Transition_2.png',
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/2._Transition/3._Transition_1.png',
        ]
    };
    IMAGES_DEAD = {
        'green': [
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/4._Dead/1._Dead_1.png'
        ],
        'orange': [
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/4._Dead/2._Dead_1.png'
        ],
        'red': [
            'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/4._Dead/3._Dead_1.png'
        ]
    };

    constructor(color, x, y, direction, startPoint, endPoint, speed, imgInitiallyMirrored) {
        super().loadImage('img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_1.png');
        this.loadImages(this.IMAGES_SWIM[color]);
        this.loadImages(this.IMAGES_DEAD[color]);
        this.x = x;
        this.y = y;

        if (imgInitiallyMirrored == 1) {
            this.imgMirrored = true;
        } else {
            this.imgMirrored = false;
        }
        this.animate(color, direction, startPoint, endPoint, speed);
    }

    /**
     * Animate puffer-fish
     * @param {string} color The color of the enemy
     * @param {string} direction 'horizontal' or 'vertical'
     * @param {integer} startPoint The start point of the movement
     * @param {integer} endPoint The end point of the movement
     * @param {float} speed The speed of the enemy
     * @param {integer} imgInitiallyMirrored 1 = mirrored, 0 = not mirrored (Necessary for horizontal movement)
     */
    animate(color, direction, startPoint, endPoint, speed, imgInitiallyMirrored) {
        this.move(direction, startPoint, endPoint, speed, imgInitiallyMirrored);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD[color], 0);
            } else {
                this.playAnimation(this.IMAGES_SWIM[color], 1);
            }
        }, 250)
    }
}