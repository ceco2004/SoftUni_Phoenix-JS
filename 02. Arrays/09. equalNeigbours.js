function countEcualNeibours (matrix){
    let count = 0;

    let matrixRows = matrix.length;
    let matrixCols = matrix[0].length;

    for(let col = 0; col < matrixCols; col ++){
       for(let row = 0; row < matrixRows - 1; row ++){
            if(matrix[row][col] === matrix[row + 1][col]){
                count ++;
            }
       }
    }
    return count;
}

console.log(countEcualNeibours([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));


console.log(countEcualNeibours([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));


