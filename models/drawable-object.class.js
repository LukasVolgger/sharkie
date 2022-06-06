/**
 * All drawable objects
 */
class DrawableObject {
    x;
    y;
    width = 100;
    height = 100;
    img;
    imageCache = {};
    currentImage = 0;

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
     * Draw image on context
     * @param {*} ctx The context of the canvas
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    /**
     * Draws a frame around objects for collision detection
     * @param {object} object 
     */
    drawCollisionDetectionFrame(ctx) {
        if (this instanceof Character || this instanceof PufferFish || this instanceof Endboss) { // Only draw frames on Character and Enemies
            ctx.beginPath();
            ctx.lineWidth = "4";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}