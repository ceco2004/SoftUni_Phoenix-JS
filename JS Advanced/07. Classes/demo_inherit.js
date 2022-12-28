let obj = {
    name: "Ivan",
    age: 22,
    mail: "vankata@abv.bg",
    toString: function() {
        return `${this.name} is an ${this.age}, and may contact with him/her on e-mail: ${this.mail}.`;
    }
}


let obj2 = Object.create(obj);
obj2.name = "Stoqn";
obj2.age = 41;
obj2.toString = function (){
    return `I'm ${this.name} and there isn't more information about me at this moment.`;
}
obj.name = "Gosho changed from Ivan";
Object.getPrototypeOf(obj).address = "Lulin 9";

console.log("=========================");

console.log(obj.toString());
console.log(obj2.toString());

console.log("=========================");

for(let p in obj){
    console.log(p + ` - ${obj[p]}`)
}

console.log("=========================");


for(let p in obj2){
    console.log(p + ` - ${obj2[p]}`)
}
console.log("=========================");

console.log(obj);
console.log(obj2);
console.log("=========================");


function counter(){
    let count = 0;
    function reset(){
        count = 0;
    }

    function next(){
        return ++count;
    }

    function getCurrent(){
        return count;
    }

    return {
        next,
        reset,
        getCurrent
    }
}

let c =  counter();
console.log("Create variable C1")
console.log("next c - " + c.next());
console.log("next c - " + c.next());
console.log("next c - " + c.next());
console.log("next c - " + c.next());
console.log("next c - " + c.next());
console.log("next c - " + c.next());
console.log("next c - " + c.next());
console.log("next c - " + c.next());
console.log("next c - " + c.next());
console.log("next c - " + c.next());
console.log("=========================");

let c2 = eval("counter()");
console.log("Create variable C2")
console.log("current c2 - " + c2.getCurrent());
console.log("next c2 - " + c2.next());
console.log("next c2 - " + c2.next());
console.log("next c2 - " + c2.next());
console.log("next c2 - " + c2.next());
console.log("next c2 - " + c2.next());

c.reset();
console.log("=========================");
console.log("c.reset()")
console.log("current c - " + c.getCurrent());
console.log("current c2 - " + c2.getCurrent());