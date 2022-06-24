/**
 * Barrier object
 */
 class BarrierWall extends MovableObject {
	width = 200;
	height = 480;
	y = 0;
	offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
	
	constructor(x) {
		super();
		this.loadImage('img/3._Background/Barrier/3.png');
		this.x = x;
	}
}