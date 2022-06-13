// A new instance of a level
// Pass 3 parameters for object initialization: backgroundObjects, enemies, level_end_x
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
        //new PufferFish('red', 100, 50, 'horizontal', 100, 600, 1, 1),
        //new PufferFish('green', 300, 300, 'vertical', 300, 400, .5, 0),
        new PufferFish('orange', 100, 100, 'horizontal', 100, 600, .5, 1),
        new JellyFish('regular_damage', 'lila', 400, 100, 'vertical', 100, 300, .5, 0),
        //new Endboss()
    ],

    // ############################################### Coins ###############################################

    [
        new Coin(200, 400),
        new Coin(580, 400),
    ],

    // ############################################### Level_end_x ###############################################

    2150

);