function solve(arr){
    let tempArr = [];

    arr.forEach(e => {
        if(e < 0){
            tempArr.unshift(e);
        }
        else{
            tempArr.push(e);
        }
    });

    return tempArr;
}

console.log(solve([7, -2, 8, 9]).join(" "));
console.log(solve([3, -2, 0, -1]).join(" "));