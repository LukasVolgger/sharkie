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
        //new PufferFish('red', 100, 50, 'horizontal', 100, 600, 1, 1),
        //new PufferFish('green', 300, 300, 'vertical', 300, 400, .5, 0),
        // new PufferFish('orange', 100, 100, 'horizontal', 100, 600, .5, 1),
        new JellyFish('regular_damage', 'lila', 400, 100, 'vertical', 100, 300, .5, 0),
    ],

    // ############################################### coins ###############################################

    [
        new Coin(200, 400),
        new Coin(580, 400)
    ],

    // ############################################### life ###############################################

    [
        new Life(500, 100),
        new Life(560, 100),
        new Life(620, 100),
        new Life(680, 100)
    ],

    // ############################################### poison ###############################################

    [
        new Poison('animated', 300, 390),
        new Poison('light_right', 380, 390),
        new Poison('dark_left', 460, 390)
    ],

    // ############################################### trigger_endboss_x ###############################################

    1800,

    // ############################################### level_end_x ###############################################

    2000

);