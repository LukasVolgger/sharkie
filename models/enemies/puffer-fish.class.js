/**
 * Puffer fish enemy object
 */
class PufferFish extends MovableObject {
    width = 100;
    height = 100;
    offset = {
        x: 0,
        y: 3,
        width: 5,
        height: 24
    }
    IMAGES_SWIM = [
        'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_1.png',
        'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_2.png',
        'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_3.png',
        'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_4.png',
        'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_5.png'
    ];

    constructor(x, y, direction, startPoint, endPoint, speed, imgInitiallyMirrored) {
        super().loadImage('img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_1.png');
        this.loadImages(this.IMAGES_SWIM);
        this.x = x;
        this.y = y;

        if (imgInitiallyMirrored == 1) {
            this.imgMirrored = true;
        } else {
            this.imgMirrored = false;
        }

        this.animate(direction, startPoint, endPoint, speed, imgInitiallyMirrored);
    }

    /**
     * Animate puffer-fish 
     */
    animate(direction, startPoint, endPoint, speed, imgInitiallyMirrored) {
        this.move(direction, startPoint, endPoint, speed, imgInitiallyMirrored);

        setInterval(() => {
            this.playAnimation(this.IMAGES_SWIM);
        }, 250)
    }
}