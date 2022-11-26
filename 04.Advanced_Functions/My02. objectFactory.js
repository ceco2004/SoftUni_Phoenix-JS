const persons = [];
for(let i = 0; i < 10; i++){
    persons.push(personFactory());
}

for(let i = 0; i < persons.length; i++){
    let person = persons[i];
    person.setName = `Gosho${i}`;
    person.setSex = i;
    person.birthDay;
}

console.log()

function personFactory(){
    let person = (function(){
        let pName;
        let pSex;
        let pAge;

        function setName(name){pName = name}

        function getName() {return pName}

        function setSex(sex){pSex = sex}

        function getSex(){return pSex}

        function getAge(){return pAge}

        function birthDay(){pAge++}

        return{
            setName,
            setName,
            setSex,
            getSex,
            getAge,
            birthDay
        }
    })();

    return person;
};