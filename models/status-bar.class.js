/**
 * Status bars for the game
 */
class StatusBar extends DrawableObject {
    percentage;
    IMAGES = {
        'coins': {
            'green': [
                'img/4._Marks/Status_Bars/Coins/Green/0.png',
                'img/4._Marks/Status_Bars/Coins/Green/20.png',
                'img/4._Marks/Status_Bars/Coins/Green/40.png',
                'img/4._Marks/Status_Bars/Coins/Green/60.png',
                'img/4._Marks/Status_Bars/Coins/Green/80.png',
                'img/4._Marks/Status_Bars/Coins/Green/100.png'
            ],
            'orange': [
                'img/4._Marks/Status_Bars/Coins/Orange/0.png',
                'img/4._Marks/Status_Bars/Coins/Orange/20.png',
                'img/4._Marks/Status_Bars/Coins/Orange/40.png',
                'img/4._Marks/Status_Bars/Coins/Orange/60.png',
                'img/4._Marks/Status_Bars/Coins/Orange/80.png',
                'img/4._Marks/Status_Bars/Coins/Orange/100.png'
            ],
            'purple': [
                'img/4._Marks/Status_Bars/Coins/Purple/0.png',
                'img/4._Marks/Status_Bars/Coins/Purple/20.png',
                'img/4._Marks/Status_Bars/Coins/Purple/40.png',
                'img/4._Marks/Status_Bars/Coins/Purple/60.png',
                'img/4._Marks/Status_Bars/Coins/Purple/80.png',
                'img/4._Marks/Status_Bars/Coins/Purple/100.png'
            ]
        },
        'life': {
            'green': [
                'img/4._Marks/Status_Bars/Life/Green/0.png',
                'img/4._Marks/Status_Bars/Life/Green/20.png',
                'img/4._Marks/Status_Bars/Life/Green/40.png',
                'img/4._Marks/Status_Bars/Life/Green/60.png',
                'img/4._Marks/Status_Bars/Life/Green/80.png',
                'img/4._Marks/Status_Bars/Life/Green/100.png'
            ],
            'orange': [
                'img/4._Marks/Status_Bars/Life/Orange/0.png',
                'img/4._Marks/Status_Bars/Life/Orange/20.png',
                'img/4._Marks/Status_Bars/Life/Orange/40.png',
                'img/4._Marks/Status_Bars/Life/Orange/60.png',
                'img/4._Marks/Status_Bars/Life/Orange/80.png',
                'img/4._Marks/Status_Bars/Life/Orange/100.png'
            ],
            'purple': [
                'img/4._Marks/Status_Bars/Life/Purple/0.png',
                'img/4._Marks/Status_Bars/Life/Purple/20.png',
                'img/4._Marks/Status_Bars/Life/Purple/40.png',
                'img/4._Marks/Status_Bars/Life/Purple/60.png',
                'img/4._Marks/Status_Bars/Life/Purple/80.png',
                'img/4._Marks/Status_Bars/Life/Purple/100.png'
            ]
        },
        'poison': {
            'green': [
                'img/4._Marks/Status_Bars/Poison/Green/0.png',
                'img/4._Marks/Status_Bars/Poison/Green/20.png',
                'img/4._Marks/Status_Bars/Poison/Green/40.png',
                'img/4._Marks/Status_Bars/Poison/Green/60.png',
                'img/4._Marks/Status_Bars/Poison/Green/80.png',
                'img/4._Marks/Status_Bars/Poison/Green/100.png'
            ],
            'orange': [
                'img/4._Marks/Status_Bars/Poison/Orange/0.png',
                'img/4._Marks/Status_Bars/Poison/Orange/20.png',
                'img/4._Marks/Status_Bars/Poison/Orange/40.png',
                'img/4._Marks/Status_Bars/Poison/Orange/60.png',
                'img/4._Marks/Status_Bars/Poison/Orange/80.png',
                'img/4._Marks/Status_Bars/Poison/Orange/100.png'
            ],
            'purple': [
                'img/4._Marks/Status_Bars/Poison/Purple/0.png',
                'img/4._Marks/Status_Bars/Poison/Purple/20.png',
                'img/4._Marks/Status_Bars/Poison/Purple/40.png',
                'img/4._Marks/Status_Bars/Poison/Purple/60.png',
                'img/4._Marks/Status_Bars/Poison/Purple/80.png',
                'img/4._Marks/Status_Bars/Poison/Purple/100.png'
            ]
        }
    };

    constructor(type, color, percentage, x, y) {
        super();
        this.loadImages(this.IMAGES[type][color]);
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
        let path = this.IMAGES[type][color][this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    /**
     * Calculates the index based on the percent of the status bar for the given image 
     */
    resolveImageIndex() {
        if (this.percentage >= 100) {
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