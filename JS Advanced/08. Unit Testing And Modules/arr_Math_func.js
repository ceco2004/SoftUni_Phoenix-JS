function sum(arr){
    let result = 0;
    arr.forEach(e => {
        let num = Number(e);
        checkTheValue(e, num);
        result += num;
    });
    return result;
}

function multyply(arr){
    let result = 1;
    arr.forEach(e => {
        let num = Number(e);
        checkTheValue(e, num);
        result *= num;
    });
    return result;
}

function checkTheValue(e, num){
    if(!num || (typeof(e) !== typeof('String') && typeof(e) !== typeof(1))){
        let type = typeof(e);
        throw new Error(`Array must be from digits only! The wrong value is ${type}.`);
    }
}

module.exports = {
    sum,
    multyply
}