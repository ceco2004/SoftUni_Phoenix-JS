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

function extendPerson(){
    this.getInfo = function (){
        return `${this.name} is ${this.age} years old.`;
    }
    return this;
}

let p = new Person("Ivan", 23);

extendPerson.call(p);
console.log(p.getInfo());
