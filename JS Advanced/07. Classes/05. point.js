class Point {
    #x;
    #y;
    constructor(x, y){
        this.#x = x;
        this.#y = y;
    }

    get x(){
        return this.#x;
    }

    get y(){
        return this.#y;
    }

    static  distance(p1, p2){
        let dx = p1.x - p2.x;
        let dy = p1.y - p2.y;

        return Math.sqrt(dx**2 + dy**2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));