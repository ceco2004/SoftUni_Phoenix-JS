class Rectangle {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    get calcArea() {
        return this.width * this.height;
    }
}

let r1 = new Rectangle(2, 2, "blue");
let r2 = new Rectangle(23, 17, "red");

console.log(r1.calcArea, r2.calcArea);