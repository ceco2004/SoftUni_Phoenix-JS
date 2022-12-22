function Person(fn, ln, age){
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;

       this. personInfo = function() { 
        return `My name is ${this.firstName} ${this.lastName}, and I'm ${this.age} Years old.`
    }

}

function Teacher(fn, ln, age, special){
    Person.call(this, fn, ln, age);
    this.special = special;
}

Teacher.prototype = Object.create(Person.prototype);

let p = new Person("Ceco", "Ivanov", 23);
let t = new Teacher("Pesho", "Goshov", 43, "Phisics");

console.log(p.personInfo());
console.log(t.personInfo());