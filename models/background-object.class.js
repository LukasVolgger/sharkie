/**
 * All background objects
 */
class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    IMAGES = {
        'light': {
            1: [
                'img/3._Background/Layers/5._Water/L1.png',
                'img/3._Background/Layers/4._Background_2/L1.png',
                'img/3._Background/Layers/3._Background_1/L1.png',
                'img/3._Background/Layers/2._Floor/L1.png',
                'img/3._Background/Layers/1._Light/1.png'
            ],
            2: [
                'img/3._Background/Layers/5._Water/L2.png',
                'img/3._Background/Layers/4._Background_2/L2.png',
                'img/3._Background/Layers/3._Background_1/L2.png',
                'img/3._Background/Layers/2._Floor/L2.png',
                'img/3._Background/Layers/1._Light/2.png'
            ]
        },

        'dark': {
            1: [
                'img/3._Background/Layers/5._Water/D1.png',
                'img/3._Background/Layers/4._Background_2/D1.png',
                'img/3._Background/Layers/3._Background_1/D1.png',
                'img/3._Background/Layers/2._Floor/D1.png',
                'img/3._Background/Layers/1._Light/1.png'
            ],
            2: [
                'img/3._Background/Layers/5._Water/D2.png',
                'img/3._Background/Layers/4._Background_2/D2.png',
                'img/3._Background/Layers/3._Background_1/D2.png',
                'img/3._Background/Layers/2._Floor/D2.png',
                'img/3._Background/Layers/1._Light/2.png'
            ]
        }
    };

    constructor(scene, section, index, levelSection) {
        super().loadImage(this.IMAGES[scene][section][index]);

        if (levelSection == 0) {
            this.x = 0;
        } else {
            this.x = 719 * levelSection;
        }

        this.y = 480 - this.height;
    }
}