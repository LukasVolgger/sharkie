class Bubble extends MovableObject {
    width = 50;
    height = 50;
    speed = 1.02;
    attack = 10;

    constructor(startX, startY, otherDirection) {
        super().loadImage('img/1._Sharkie/4._Attack/Bubble_Trap/Bubble.png');
        this.x = startX;
        this.y = startY;
        this.otherDirection = otherDirection;
        this.float();
    }

    /**
     * Floating bubble
     */
    float() {
        if (this.otherDirection) {
            this.x -= 200; // Makes the bubble come out at the right place on the character
        }
        setInterval(() => {
            if (this.otherDirection) { // Floats from right to top left
                this.x -= this.speed;
                this.y -= this.speed;
            } else { // Floats from left to top right
                this.x += this.speed;
                this.y -= this.speed;
            }
        }, 1000 / 60)
    }
}