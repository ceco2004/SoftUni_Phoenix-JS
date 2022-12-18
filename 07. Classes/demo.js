class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
}

class Quadrat extends Rectangle {
    constructor(side){
        super(side, side)
    }
}

Rectangle.prototype.area = function () { return this.width * this.height };
Rectangle.prototype.toString = function () {
    return `${this.constructor.name} - side A = ${this.width}, side B = ${this.height}`
}
Quadrat.prototype.toString = function () {
    return `${this.constructor.name} - side A = side B = ${this.width}`
}
let r = new Rectangle(4, 10);
let q = new Quadrat(10);

console.log(r.toString(), q.toString());