const {Animal, Cat, Dog, KittyCat, Puppy} = require("./animals");

let dog = new Dog("Buk", 3, "Ivan");
let puppy = new Puppy("Pufi", 3, "Ceco");

//puppy.__proto__ = Object.getPrototypeOf(Animal); - // crash inherit chain

console.log(dog.speak());
console.log(puppy.speak());