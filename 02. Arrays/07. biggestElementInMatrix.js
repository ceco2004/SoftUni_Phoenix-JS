let biggestElement = (matrix) => {
    let biggest = Number.MIN_VALUE;
    matrix.forEach(row => {
        row.forEach(e => {
            if(e > biggest){
                biggest = e;
            }
        })
    });
    return biggest;
}


let biggestElement2 = (matrix) => {
    let temp = [];
  
    let biggest = (arr) => {
        return arr.reduce((a, e) => a > e ? a : e);
    }
    
    matrix.forEach(row => {
        temp.push(biggest(row));
        })

    return biggest(temp);
}

console.log(biggestElement([[20, 50, 10],
    [8, 33, 145]]
   ));

console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));

   console.log(biggestElement2([[20, 50, 10],
    [8, 33, 145]]
   ));

console.log(biggestElement2([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));