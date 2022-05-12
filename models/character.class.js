class Character extends MovableObject {
    width = 100;
    height = 100;
    constructor() {
        super().loadImage('img/1._Sharkie/3._Swim/1.png');
        this.x = 250;
        this.y = 300;
    }
}