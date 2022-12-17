class Person {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let p1 = new Person("Ivan", "Petrov", 23, "some@mail.bg");
let p2 = new Person("Monika", "Vasileva", 25, "monika@abv.bg");

console.log(p1.toString());
console.log(p2.toString());