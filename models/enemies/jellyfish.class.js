/**
 * Jellyfish enemy object
 */
class JellyFish extends MovableObject {
    width = 100;
    height = 100;
    offset = {
        x: 0,
        y: 5,
        width: 0,
        height: 8
    }
    IMAGES = {
        'regular_damage': {
            'lila': [
                'img/2._Enemy/2._Jellyfish/Regular_Damage/Lila_1.png',
                'img/2._Enemy/2._Jellyfish/Regular_Damage/Lila_2.png',
                'img/2._Enemy/2._Jellyfish/Regular_Damage/Lila_3.png',
                'img/2._Enemy/2._Jellyfish/Regular_Damage/Lila_4.png',
            ],
            'yellow': [
                'img/2._Enemy/2._Jellyfish/Regular_Damage/Yellow_1.png',
                'img/2._Enemy/2._Jellyfish/Regular_Damage/Yellow_2.png',
                'img/2._Enemy/2._Jellyfish/Regular_Damage/Yellow_3.png',
                'img/2._Enemy/2._Jellyfish/Regular_Damage/Yellow_4.png',
            ]
        },
        'super_dangerous': {
            'green': [
                'img/2._Enemy/2._Jellyfish/Super_Dangerous/Green_1.png',
                'img/2._Enemy/2._Jellyfish/Super_Dangerous/Green_2.png',
                'img/2._Enemy/2._Jellyfish/Super_Dangerous/Green_3.png',
                'img/2._Enemy/2._Jellyfish/Super_Dangerous/Green_4.png',
            ],
            'pink': [
                'img/2._Enemy/2._Jellyfish/Super_Dangerous/Pink_1.png',
                'img/2._Enemy/2._Jellyfish/Super_Dangerous/Pink_2.png',
                'img/2._Enemy/2._Jellyfish/Super_Dangerous/Pink_3.png',
                'img/2._Enemy/2._Jellyfish/Super_Dangerous/Pink_4.png',
            ]
        }
    }
    constructor(type, color, x, y, direction, startPoint, endPoint, speed, imgInitiallyMirrored) {
        super().loadImage('img/2._Enemy/2._Jellyfish/Regular_Damage/Lila_1.png');
        this.loadImages(this.IMAGES[type][color]);
        this.x = x;
        this.y = y;

        if (imgInitiallyMirrored == 1) {
            this.imgMirrored = true;
        } else {
            this.imgMirrored = false;
        }

        this.animate(type, color, direction, startPoint, endPoint, speed, imgInitiallyMirrored);
    }

    /**
     * Animate jellyfish
     * @param {string} type 'regular_damage' or 'super_dangerous'
     * @param {string} color 'regular_damage' = 'lila' or 'yellow', 'super_dangerous' = 'green' or 'pink'
     * @param {string} direction 'horizontal' or 'vertical'
     * @param {integer} startPoint The start point of the movement
     * @param {integer} endPoint The end point of the movement
     * @param {float} speed The speed of the enemy
     * @param {integer} imgInitiallyMirrored 1 = mirrored, 0 = not mirrored (Necessary for horizontal movement)
     */
    animate(type, color, direction, startPoint, endPoint, speed, imgInitiallyMirrored) {
        this.move(direction, startPoint, endPoint, speed, imgInitiallyMirrored);

        setInterval(() => {
            this.playAnimation(this.IMAGES[type][color]);
        }, 250)
    }
}