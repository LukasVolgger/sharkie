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
    currentImage = 0;
    imageCache = {};

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
     * Load all images in Json imageCache for animation 
     * The array looks like this: ['img/1._Sharkie/1._IDLE/1.png','img/1._Sharkie/1._IDLE/2.png', ...]
     * @param {array} array Image paths from an array 
     */
    loadImages(array) {
        array.forEach(path => { // Iterate through array
            let img = new Image(); // Create a new img object and store it in a variable (Needed for animation)
            img.src = path; // Set the src attribute to the path of the image from the array
            this.imageCache[path] = img; // Store each image in the imageCache Json 
        });

    }

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