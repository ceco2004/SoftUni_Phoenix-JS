let isMagicMatrix = (matrix) => {
    let sum = matrix[0].reduce((a, v) => a + v);

    let rowLength = matrix[0].length;
    for(let i = 1; i < matrix.length; i++){
        let sum2 = matrix[i].reduce((a, v) => a + v);
        if(sum !== sum2){
            return false;
        }
    }

    for(let i = 0; i < rowLength; i++){
        let sum2 = 0;
        for(let j = 0; j < matrix.length; j++){
            sum2 += matrix[i][j];
        }
        if(sum2 !== sum){
            return false;
        }
    }
    return true;
}


console.log(isMagicMatrix([[4, 5, 6],
                           [6, 5, 4],
                           [5, 5, 5]]));

console.log(isMagicMatrix([[11, 32, 45],
                           [21, 0, 1],
                           [21, 1, 1]]));

console.log(isMagicMatrix([[1, 0, 0],
                           [0, 0, 1],
                           [0, 1, 0]]));