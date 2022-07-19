/**
 * All background objects
 */
class BackgroundObject extends MovableObject {
    width = 720;
    height = 480;

    constructor(scene, section, index, levelSection) {
        super().loadImage(BACKGROUND_IMAGES.IMAGES[scene][section][index]);

        if (levelSection == 0) {
            this.x = 0;
        } else {
            this.x = 719 * levelSection;
        }

        this.y = 480 - this.height;
    }
}