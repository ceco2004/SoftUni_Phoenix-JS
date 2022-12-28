class Extensible {
    static cId = 0;

    static getId() {
        return this.cId++;
    }

    constructor(){
        this.id = Extensible.getId();
        }

    
}


let obj1 = new Extensible();
let obj2 = new Extensible(); 
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
