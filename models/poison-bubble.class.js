class PoisonBubble extends MovableObject {
    width = 60;
    height = 60;
    speed = 1.02;

    constructor(startX, startY, otherDirection) {
        super().loadImage('img/1._Sharkie/4._Attack/Bubble_Trap/Poisoned_Bubble_(For_Whale).png');
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