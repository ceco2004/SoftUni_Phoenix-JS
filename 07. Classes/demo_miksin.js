class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {
    constructor(name, age, special){
        super(name, age);
        this.special = special;
    }
}

function extendPerson (){
   this.getInfo = function (){
    let info = "";
    for(let key in this){
        if(typeof(this[key]) === "function"){
            continue;
        }
        info += `${key} - ${this[key]}; `;
    }
        return info;
    }
    return this;
}

let p = new Person("Ivan", 23);
let p2 = new Person("Pesho", 22);
let t = new Teacher("Gosho", 41, "Math");

extendPerson.call(Person.prototype);

console.log(p.getInfo());
console.log(p2.getInfo());
console.log(t.getInfo());
