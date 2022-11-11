let collect = (arr)=>{
    let tempArr = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            tempArr.push(arr[i]);
        }
    }
    return tempArr;
}

console.log(collect(['20', '30', '40']).join(" "));
console.log(collect(['5', '10']).join(" "));