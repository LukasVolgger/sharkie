// A new instance of a level
const level_1 = new Level(

    // ############################################### Background objects ###############################################

    [
        new BackgroundObject('img/3._Background/Layers/5._Water/L1.png', 0),
        new BackgroundObject('img/3._Background/Layers/4._Background_2/L1.png', 0),
        new BackgroundObject('img/3._Background/Layers/3._Background_1/L1.png', 0),
        new BackgroundObject('img/3._Background/Layers/2._Floor/L1.png', 0),
        new BackgroundObject('img/3._Background/Layers/1._Light/1.png', 0),

        new BackgroundObject('img/3._Background/Layers/5._Water/L2.png', 719),
        new BackgroundObject('img/3._Background/Layers/4._Background_2/L2.png', 719),
        new BackgroundObject('img/3._Background/Layers/3._Background_1/L2.png', 719),
        new BackgroundObject('img/3._Background/Layers/2._Floor/L2.png', 719),
        new BackgroundObject('img/3._Background/Layers/1._Light/2.png', 719),

        new BackgroundObject('img/3._Background/Layers/5._Water/L1.png', 719 * 2),
        new BackgroundObject('img/3._Background/Layers/4._Background_2/L1.png', 719 * 2),
        new BackgroundObject('img/3._Background/Layers/3._Background_1/L1.png', 719 * 2),
        new BackgroundObject('img/3._Background/Layers/2._Floor/L1.png', 719 * 2),
        new BackgroundObject('img/3._Background/Layers/1._Light/1.png', 719 * 2),

        new BackgroundObject('img/3._Background/Layers/5._Water/L2.png', 719 * 3),
        new BackgroundObject('img/3._Background/Layers/4._Background_2/L2.png', 719 * 3),
        new BackgroundObject('img/3._Background/Layers/3._Background_1/L2.png', 719 * 3),
        new BackgroundObject('img/3._Background/Layers/2._Floor/L2.png', 719 * 3),
        new BackgroundObject('img/3._Background/Layers/1._Light/2.png', 719 * 3)
    ],

    // ############################################### enemies ###############################################

    [
		new PufferFish('green', 0, 380, 'horizontal', 0, 200, .5, 1),
        new JellyFish('regular_damage', 'lila', 400, 100, 'vertical', 100, 300, .5, 0),
		new PufferFish('red', 600, 100, 'horizontal', 600, 800, .5, 1),
		new PufferFish('orange', 1060, 350, 'horizontal', 1060, 1300, 1.5, 1),
		new JellyFish('regular_damage', 'yellow', 1250, 100, 'vertical', 100, 200, 1, 0),
    ],

    // ############################################### coins ###############################################

    [
        new Coin(300, 390),
        new Coin(580, 200),
        new Coin(850, 100),
        new Coin(1350, 200),
        new Coin(1900, 350)
    ],

    // ############################################### life ###############################################

    [
        new Life(850, 300),
        new Life(1450, 300),
        new Life(2100, 0)
    ],

    // ############################################### poison ###############################################

    [
		new Poison('animated', 640, 400),
		new Poison('animated', 1060, 400)
    ],

    // ############################################### trigger_endboss_x ###############################################

    1800,

    // ############################################### level_end_x ###############################################

    2000

);