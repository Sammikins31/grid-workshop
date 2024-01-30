// list of textures that can fill the grid
const textures = [];

function preload() {

    // loop through the 4 textures that we have saved
    for(let textureNumber = 1; textureNumber <= 4; textureNumber++) {
        // get the path of the current texture
        const pathToTexture = 'Textures/texture-trans' + textureNumber + '.png';
        // load the image using the loadImage p5.js function and add it to the textures list
        textures.push(loadImage(pathToTexture));
    }
}

function setup() {

    // size of each square
    const squareSize = 50;
    // number of cells of the grid
    const cellNumber = 10;
    //  canvas size in pixels
    const canvasSize = squareSize * cellNumber;
    // maximum offset
    const maxOffsetPosition = 2;
    const maxOffsetSize = 5;

    createCanvas(canvasSize, canvasSize);
    background(220);

    for(let row = 0; row < cellNumber; row++) {
        for(let column = 0; column < cellNumber; column++) {
            const red = random(255);
            const green = random(255);
            const blue = random(255);

            const myColor = color(red, green, blue);
            // get a random texture 
            const texture = random (textures)

            // use fill to fill all the square with one colour
            // fill(myColor)

            // tint the square
            tint(myColor)

            // calculate random offset for position
            const randomOffsetHorizontal = random(-maxOffsetPosition, maxOffsetPosition);
            const randomOffsetVertical = random (-maxOffsetPosition, maxOffsetPosition);

            // calculat random offset for size
            const randomOffsetWidth = random(-maxOffsetSize, maxOffsetSize);
            const randomOffsetHeight = random (-maxOffsetSize, maxOffsetSize);

            // calculate horizontal position in pixels
            const x = row * squareSize + randomOffsetHorizontal;
            // calculate the vertical position in pixels
            const y = column * squareSize + randomOffsetVertical;


            // set width and height
            const width = squareSize + randomOffsetWidth;
            const height = squareSize + randomOffsetHeight;

            // Make it randomly spaced out
            // const width = random(squareSize);
            // const Height = random(squareSize);

            // image(backgound, x position, y position, width, height)
            // will draw an image the given background at the given position and width / height
            image(texture, x, y, width, height)

            // square(x, y, s)
            // x = position of the left of the square
            // y = position of the square
            // s = size of the side of the square
            // square(x, y, squareSize);
        }
    }
}


