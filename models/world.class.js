class World {
    character = new Character();

    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
    ];

    light = new Light();
    floor = new Floor();
    water = new Water();

    canvas;
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });
        this.ctx.drawImage(this.light.img, this.light.x, this.light.y, this.light.width, this.light.height);
        this.ctx.drawImage(this.floor.img, this.floor.x, this.floor.y, this.floor.width, this.floor.height);
        // this.ctx.drawImage(this.water.img, this.water.x, this.water.y, this.water.width, this.water.height);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }
}