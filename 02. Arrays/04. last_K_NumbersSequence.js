function solve(count, sequence){
    let tempArr = [1];
    
    for(let i = 1; i < count; i++){

        let subArr = tempArr.slice((i - sequence) > 0 ? (i - sequence) : 0, i);
        let sum = subArr.reduce((a, e) => a + e);
        tempArr[i] = sum;
        
    }
    
    return tempArr;
}

console.log(solve(6, 3).join(" "));
console.log(solve(8, 2).join(" "));