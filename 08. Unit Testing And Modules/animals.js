class Animal {
    constructor(name, age, owner){
        if(this.constructor.name === Animal){
            throw TypeError("Animal class cann't be instanced!");
        }
        this.name = name;
        this.age = age;
        this.owner = owner;
    }

    canEat(){
        return true;
    }
}

class Cat extends Animal {
    constructor(name, age, owner){
        super(name, age, owner);
    }
}

class KittyCat extends Cat {
    constructor(name, age, owner){
        super(name, age, owner);
    }
}

class Dog extends Animal {
    constructor(name, age, owner){
        super(name, age, owner);
    }

    speak(){
        return "Bark!";
    }
}

class Puppy extends Dog {
    constructor(name, age, owner){
        super(name, age, owner);
    }
}

module.exports = {
    Animal,
    Cat,
    KittyCat,
    Dog,
    Puppy
}