class Person {
    constructor(fn, ln){
        this.firstName = fn;
        this.lastName = ln;
    }

    get fullName() { return `${this.firstName} ${this.lastName}`};
    set fullName(value){
        let tokens = value.split(" ").map(n => n.trim());
        if(tokens.length !== 2){
            return;
        }
        this.firstName = tokens[0];
        this.lastName = tokens[1];
    }
}

let person = new Person("Peter", "Ivanov");
console.log(person.fullName);//Peter Ivanov
person.firstName = "George";
console.log(person.fullName);//George Ivanov
person.lastName = "Peterson";
console.log(person.fullName);//George Peterson
person.fullName = "Nikola Tesla";
console.log(person.firstName)//Nikola
console.log(person.lastName)//Tesla
let person2 = new Person("Albert", "Simpson");
console.log(person2.fullName);//Albert Simpson
person2.firstName = "Simon";
console.log(person2.fullName);//Simon Simpson
person2.fullName = "Peter";
console.log(person2.firstName) // Simon
console.log(person2.lastName) // Simpson
