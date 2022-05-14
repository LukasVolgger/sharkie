class Character extends MovableObject {
    width = 300;
    height = 300;
    constructor() {
        super().loadImage('img/1._Sharkie/3._Swim/1.png');
        this.x = 50;
        this.y = 100;
    }
}