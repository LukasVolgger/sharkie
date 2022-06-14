/**
 * Poison object
 */
class Poison extends MovableObject {
    IMAGES = {
        'animated': [
            'img/4._Marks/Poison/Animated/1.png',
            'img/4._Marks/Poison/Animated/2.png',
            'img/4._Marks/Poison/Animated/3.png',
            'img/4._Marks/Poison/Animated/4.png',
            'img/4._Marks/Poison/Animated/5.png',
            'img/4._Marks/Poison/Animated/6.png',
            'img/4._Marks/Poison/Animated/7.png',
            'img/4._Marks/Poison/Animated/8.png'
        ],

        'light_left': [
            'img/4._Marks/Poison/Light_Left.png'
        ],

        'light_right': [
            'img/4._Marks/Poison/Light_Right.png'
        ],

        'dark_left': [
            'img/4._Marks/Poison/Dark_Left.png'
        ],

        'dark_right': [
            'img/4._Marks/Poison/Dark_Right.png'
        ]
    }

    constructor(type, x, y) {
        super().loadImage('img/4._Marks/Poison/Light_Left.png');
        this.loadImages(this.IMAGES[type]);
        this.width = 50;
        this.height = 50;
        this.x = x;
        this.y = y;
        this.animate(type);
    }

    /**
     * Animate poison
     * Each level has different background objects and enemies
     * @param {string} type 'animated', 'light_left', 'light_right', 'dark_left', 'dark_right'
     */
    animate(type) {
        setInterval(() => {
            this.playAnimation(this.IMAGES[type]);
        }, 250)
    }
}