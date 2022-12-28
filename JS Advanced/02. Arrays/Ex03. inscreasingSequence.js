function findInscreasinSequence(arr){
    let temp = [arr[0]];
    arr.forEach(e => {
        if(e > temp[temp.length - 1]){
            temp.push(e)
        }
    })
    return temp;
}

console.log(findInscreasinSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]).join(" "));
console.log(findInscreasinSequence([1, 2, 3, 4]).join(" "));
console.log(findInscreasinSequence([20, 3, 2, 15, 6, 1]).join(' '));