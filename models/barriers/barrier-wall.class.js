/**
 * Barrier object
 */
class BarrierWall extends Barrier {
    width = 200;
    height = 480;
    y = 0;
    offset = {
        x: 50,
        y: 0,
        width: 40,
        height: 0
    }

    constructor(x) {
        super();
        this.loadImage('img/3._Background/Barrier/3.png');
        this.x = x;
    }
}