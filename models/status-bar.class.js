/**
 * Status bars for the game
 */
 class StatusBar extends DrawableObject {
    percentage;
    
    constructor(type, color, percentage, x, y) {
        super();
        this.loadImages(STATUS_BAR_IMAGES.IMAGES[type][color]);
        this.setPercentage(percentage, type, color);
        this.x = x;
        this.y = y;
        this.width = 200;
        this.height = 60;
        this.type = type;
        this.color = color;
    }

    /**
     * Sets the percent of the object
     * @param {integer} percentage 0-100
     * @param {string} type 'life', 'coins', 'poison'
     * @param {string} color 'green', 'orange', 'purple'
     */
    setPercentage(percentage, type, color) {
        this.percentage = percentage;
        let path = STATUS_BAR_IMAGES.IMAGES[type][color][this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Calculates the index based on the percent of the status bar for the given image 
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 5;
        } else if (this.percentage > 60) {
            return 4;
        } else if (this.percentage > 40) {
            return 3;
        } else if (this.percentage > 20) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}