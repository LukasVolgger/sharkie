/**
 * Game character object
 */
class Character extends MovableObject {
    width = 300;
    height = 300;
    constructor() {
        // super() is needed to call the constructor of its parent class to access the parent's properties and methods
        super().loadImage('img/1._Sharkie/3._Swim/1.png');
        this.x = 50;
        this.y = 100;
    }
}