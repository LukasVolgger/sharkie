/**
 * Parent element for all moving objects in the world
 * The background elements are also moveable
 */
class MovableObject {
    x;
    y;
    img;
    width = 100;
    height = 100;

    /**
     * Function to load images
     * With this.img a new image is created in the object and assigned to the variable img
     * @param {string} path The path of an image to load
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    };

    /**
     * Function to move objects right
     */
    moveRight() {
        console.log('Moving right');
    };

    /**
     * Function to move objects left
     */
    moveLeft() {
        console.log('Moving left');
    };
}