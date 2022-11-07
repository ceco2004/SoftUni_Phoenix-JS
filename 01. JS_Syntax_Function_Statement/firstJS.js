function sum(a, b){
    return a + b;
}

function inverse(a, b){
    return a + 1/b;
}

function concat(a, b){
    return "" + a + b;
}

function inner(arr, initialValue, func){
    let buffer = initialValue;
    arr.forEach(e => {
      buffer = func(buffer, e);
    });
    return buffer;
}


function agregate(arr){
    console.log(inner(arr, 0,  sum));
    console.log(inner(arr, 0, inverse));
    console.log(inner(arr, "", concat));
}

agregate([1, 2, 3]);