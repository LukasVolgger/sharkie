/**
 * Barrier object
 */
 class BarrierRock extends Barrier {
	width = 720;
	height = 200;
	y = 290;
	offset = {
        x: 0,
        y: 40,
        width: 8,
        height: 0
    }
	
	constructor(x) {
		super();
		this.loadImage('img/3._Background/Barrier/2.png');
		this.x = x;
	}
}