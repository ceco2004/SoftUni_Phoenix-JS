class Person {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        let fName = Boolean(this.firstName) ? this.firstName : "";
        let lName = Boolean(this.lastName) ? this.lastName : "";
        let age = Boolean(this.age) ? this.age : "-not present-";
        let email = Boolean(this.email) ? this.email :  "-not-present-";
        return `${fName} ${lName} (age: ${age}, email: ${email})`;
    }
}

function get4People(){
    return [
        new Person("Anna", "Simpson", 22, "anna@yahoo.com"),
        new Person("SoftUni"),
        new Person("Stephan", "Johnson", 25),
        new Person("Gabriel", "Peterson", 24, "g.p@gmail.com")
    ]
}

get4People().forEach(p => console.log(p.toString()));

let p1 = new Person("Ivan", "Petrov", 23, "some@mail.bg");
let p2 = new Person("Monika", "Vasileva", 25, "monika@abv.bg");

console.log(p1.toString());
console.log(p2.toString());