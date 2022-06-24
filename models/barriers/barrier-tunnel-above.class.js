/**
 * Barrier object
 */
 class BarrierTunnelAbove extends MovableObject {
	width = 720;
	height = 200;
	y = 0;
	offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 90
    }
	
	constructor(x) {
		super();
		this.loadImage('img/3._Background/Barrier/1.1.png');
		this.x = x;
	}
}