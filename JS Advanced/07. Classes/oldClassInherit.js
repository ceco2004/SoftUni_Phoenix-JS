function Person(fn, ln, age){
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;

       this. personInfo = function() { 
        return `My name is ${this.firstName} ${this.lastName}, and I'm ${this.age} Years old.`;
    }
}

function Teacher(fn, ln, age, special){
    Person.call(this, fn, ln, age);
    this.special = special;
    this.constructor = Teacher;
    
    this. personInfo = function() { 
        return `My name is ${this.firstName} ${this.lastName}, and I'm ${this.age} Years old, and my speciality is ${this.special}.`
    }
}

Teacher.prototype = Object.create(Person.prototype);

let p = new Person("Ceco", "Ivanov", 23);
let t = new Teacher("Pesho", "Goshov", 43, "Phisics");

Person.prototype.obInfo = function(){
    return `${this.constructor.name}`
}
console.log("personInfo()");

console.log(p.personInfo());
console.log(t.personInfo());

console.log("==============================================");
console.log("log object");

console.log(p);
console.log(t);

console.log("==============================================");
console.log("log objInfo()");

console.log(p.obInfo());
console.log(t.obInfo());