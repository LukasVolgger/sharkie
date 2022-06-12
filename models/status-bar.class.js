/**
 * Status bars for the game
 */
class StatusBar extends DrawableObject {
    percentage = 100;
    IMAGES = [
        'img/4._Marks/Status_Bars/Life/Green/0.png',
        'img/4._Marks/Status_Bars/Life/Green/20.png',
        'img/4._Marks/Status_Bars/Life/Green/40.png',
        'img/4._Marks/Status_Bars/Life/Green/60.png',
        'img/4._Marks/Status_Bars/Life/Green/80.png',
        'img/4._Marks/Status_Bars/Life/Green/100.png'
    ];

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 20;
        this.y = 0;
        this.width = 200;
        this.height = 60;
    }

    /**
     * Sets the percent of the object
     * @param {integer} percentage 
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Calculates the index based on the percent of the status bar for the given image 
     */
    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }

}