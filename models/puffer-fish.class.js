/**
 * Puffer fish enemy object
 */
class PufferFish extends MovableObject {
    width = 100;
    height = 100;
    IMAGES_SWIM = [
        'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_1.png',
        'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_2.png',
        'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_3.png',
        'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_4.png',
        'img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_5.png'
    ];

    constructor() {
        // super() is needed to call the constructor of its parent class to access the parent's properties and methods
        super().loadImage('img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_1.png');

        this.x = 200 + Math.random() * 500;
        this.y = 20 + Math.random() * 200;
        this.speed = 0.15 + Math.random() * 0.25;

        this.loadImages(this.IMAGES_SWIM);
        this.animate();
    }

    /**
     * Animate puffer-fish 
     */
    animate() {
        this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.IMAGES_SWIM.length; // (0 % 3 = 0), (1 % 3 = 1), (2 % 3 = 2), (3 % 3 = 0), (4 % 3 = 1), (5 % 3 = 2), (6 % 3 = 0), (7 % 3 = 1), (8 % = 2)
            let path = this.IMAGES_SWIM[i]; // Temporary store the path of each img
            this.img = this.imageCache[path]; // Change img from class
            this.currentImage++;
        }, 250)
    }
}