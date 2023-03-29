import { canvas } from "./main.js";

class Player {
    constructor(birdImage) {
        this.position = { x: 300 };
        this.width = 150;
        this.height = 100;
        this.birdImage = birdImage
    }

    draw(y) {
        canvas.getContext("2d").drawImage(this.birdImage, this.position.x, y, this.width, this.height)
    };
}

    
export{Player}