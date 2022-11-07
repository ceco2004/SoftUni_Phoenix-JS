function solve(a){
    let result;
    if(typeof(a) === typeof(1)){
        result = Math.PI*a*a;
    }
    else{
        result = `We can not calculate the circle area, because we receive a ${typeof(a)}.`;
    }
    return result;
}

console.log(solve(5));
console.log(solve("test"));