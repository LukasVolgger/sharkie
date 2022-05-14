/**
 * All background objects
 */
class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    constructor(imgPath, x) {
        // super() is needed to call the constructor of its parent class to access the parent's properties and methods
        super().loadImage(imgPath);
        this.x = x;
        this.y = 480 - this.height;
    }
}