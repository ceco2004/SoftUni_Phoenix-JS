let rotate = (arr) => {
    let temp = arr.slice(0, arr.length - 1);
    let numberRotation = arr[arr.length - 1];
    for(let i = 0; i < numberRotation; i++){
        let lastElement = temp.pop();
        temp.unshift(lastElement);
    }
    return temp;
}

console.log(rotate(['1', '2', '3', '4', '2']).join(" "));
console.log(rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']).join(" "));