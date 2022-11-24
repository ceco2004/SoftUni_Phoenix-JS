function personal_BMI(...data){

    let name = arguments[0];
    let age = Number(arguments[1]);
    let weight = Number(arguments[2]);
    let height = Number(arguments[3]);
    let BMI = weight / (height/100 * height/100);
    let status;
    if(BMI < 18.5){
        status = "underweight";
    }
    else if(BMI < 25){
        status = "normal"
    }
    else if(BMI < 30){
        status = "overweight";
    }
    else if(BMI >= 30){
        status = "obese";
    }

    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(BMI), 
        status: status
    }

    if(BMI >= 30){
        Object.defineProperty(person, "recommendation", {value: "admission required"});
    }

    return person;
}


let obj = personal_BMI("Peter", 29, 75, 182);
console.log(obj);
console.log("--------------");
obj = personal_BMI("Honey Boo Boo", 9, 57, 137);
console.log(obj);