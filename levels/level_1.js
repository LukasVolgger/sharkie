// A new instance of a level
// Here 2 parameters (arrays) are passed to the level.class.js
const level_1 = new Level(

    // ############################################### Background objects ###############################################

    [
        new BackgroundObject('img/3._Background/Layers/5._Water/L1.png', 0),
        new BackgroundObject('img/3._Background/Layers/4._Fondo_2/L1.png', 0),
        new BackgroundObject('img/3._Background/Layers/3._Fondo_1/L1.png', 0),
        new BackgroundObject('img/3._Background/Layers/2._Floor/L1.png', 0),
        new BackgroundObject('img/3._Background/Layers/1._Light/1.png', 0),

        new BackgroundObject('img/3._Background/Layers/5._Water/L2.png', 719),
        new BackgroundObject('img/3._Background/Layers/4._Fondo_2/L2.png', 719),
        new BackgroundObject('img/3._Background/Layers/3._Fondo_1/L2.png', 719),
        new BackgroundObject('img/3._Background/Layers/2._Floor/L2.png', 719),
        new BackgroundObject('img/3._Background/Layers/1._Light/2.png', 719),

        new BackgroundObject('img/3._Background/Layers/5._Water/L1.png', 719 * 2),
        new BackgroundObject('img/3._Background/Layers/4._Fondo_2/L1.png', 719 * 2),
        new BackgroundObject('img/3._Background/Layers/3._Fondo_1/L1.png', 719 * 2),
        new BackgroundObject('img/3._Background/Layers/2._Floor/L1.png', 719 * 2),
        new BackgroundObject('img/3._Background/Layers/1._Light/1.png', 719 * 2),

        new BackgroundObject('img/3._Background/Layers/5._Water/L2.png', 719 * 3),
        new BackgroundObject('img/3._Background/Layers/4._Fondo_2/L2.png', 719 * 3),
        new BackgroundObject('img/3._Background/Layers/3._Fondo_1/L2.png', 719 * 3),
        new BackgroundObject('img/3._Background/Layers/2._Floor/L2.png', 719 * 3),
        new BackgroundObject('img/3._Background/Layers/1._Light/2.png', 719 * 3)
    ],

    // ############################################### Enemies ###############################################

    [
        new PufferFish(400, 200, 2, 50, 200, .5, 1),
        new PufferFish(500, 300, 2, 100, 400, .5, 0),
        new PufferFish(100, 100, 1, 100, 600, .5, 1),
        new Endboss()
    ]
);