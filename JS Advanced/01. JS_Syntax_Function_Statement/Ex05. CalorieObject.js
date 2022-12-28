function compositeObject(arr){
    let result = "{ ";
    for(let i = 0; i < arr.length - 1; i+=2){
        result += `${arr[i]}: ${arr[i + 1]}`;
        if(i < arr.length - 2){
            result += ", ";
        }
    }
    result += " }";

    return result;
}

console.log(compositeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(compositeObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));