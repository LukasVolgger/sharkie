class PufferFish extends MovableObject {
    width = 100;
    height = 100;
    constructor() {
        super().loadImage('img/2._Enemy/1._Puffer_Fish_(3_Color_Options)/1._Swim/1._Swim_1.png');
        this.x = 200 + Math.random() * 500;
        this.y = 20;
    }
}