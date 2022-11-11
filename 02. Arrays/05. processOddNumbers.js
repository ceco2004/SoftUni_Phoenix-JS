function solve(arr){
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            tempArr.push(arr[i] * 2);
        }
    }

    tempArr.sort((a, b) => b - a);
    return tempArr;
}

console.log(solve([10, 15, 20, 25]).join(" "));
console.log(solve([3, 0, 10, 4, 7, 3]).join(" "));