class Bubble extends MovableObject {
    width = 50;
    height = 50;
    speed = 1.02;

    constructor(startX, startY) {
        super().loadImage('img/1._Sharkie/4._Attack/Bubble_Trap/Bubble.png');
        this.x = startX;
        this.y = startY;
        this.float(startX, startY);
    }

    /**
     * Floating bubble
     */
    float() {
        setInterval(() => {
            this.x += this.speed;
            this.y -= this.speed;
        }, 1000 / 60)
    }
}