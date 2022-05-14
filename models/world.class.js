class World {
    canvas;
    ctx;

    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.draw();
    }

    character = new Character();

    enemies = [
        new PufferFish(),
        new PufferFish(),
        new PufferFish(),
    ];

    backgroundObjects = [
        new BackgroundObject('img/3._Background/Layers/3._Fondo_1/L1.png', 0)
    ]

    light = new Light();
    floor = new Floor();
    water = new Water();

    draw() {
        this.clearCanvas();

        // Background 
        this.addToWorld(this.water);
        this.addObjectsToWorld(this.backgroundObjects);
        this.addToWorld(this.light);
        this.addToWorld(this.floor);

        // Character & Enemies
        this.addToWorld(this.character);
        this.addObjectsToWorld(this.enemies);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        })
    }

    addToWorld(movableObject) {
        this.ctx.drawImage(movableObject.img, movableObject.x, movableObject.y, movableObject.width, movableObject.height);
    }

    addObjectsToWorld(objects) {
        objects.forEach(object => {
            this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height);
        });
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}