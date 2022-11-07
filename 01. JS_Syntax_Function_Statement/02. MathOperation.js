console.log(solve(1, 2, "+"));
console.log(solve(1, 2, "-"));
console.log(solve(1, 2, "*"));
console.log(solve(1, 2, "/"));
console.log(solve(1, 2, "%"));
console.log(solve(1, 2, "**"));



function solve(a, b, operator){
    let result = 0;

    switch(operator){
        case "+": result = add(a, b); break;
        case "-": result = substract(a, b); break;
        case "/": result = division(a, b); break;
        case "%": result = modulus(a, b); break;
        case "*": result = multyply(a, b); break;
        case "**": result = pow(a, b); break;
    }
    return result;
}

function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function division(a, b){
    return a /b;
}

function multyply(a, b){
    return a * b;
}

function pow(a, b){
    return a ** b;
}

function modulus(a, b){
    return a % b;
}