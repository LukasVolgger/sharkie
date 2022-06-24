class BarrierTunnel extends MovableObject {
	width = 720;
	height = 480;
	y = 0;
	offset = {
        x: 0,
        y: 0,
        width: 0,
        height: 350
    }
	
	constructor(x) {
		super();
		this.loadImage('img/3._Background/Barrier/1.png');
		this.x = x;
	}
}