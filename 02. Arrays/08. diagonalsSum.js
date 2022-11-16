let calculateFirstDiagonal = (matrix) => {

    let sum = 0;
    for(let i = 0; i < matrix.length; i++){
        sum += matrix[i][i];
    }
    return sum;
};

let calculateSecondDiagonal = (matrix) => {

    let sum = 0;
    for(let i = matrix.length - 1; i >= 0; i--){
        sum += matrix[i][matrix.length - 1 - i];
    }
    return sum;
};

let calculateDiagonals = (matrix) => {
    let temp = [];
    temp.push(calculateFirstDiagonal(matrix));
    temp.push(calculateSecondDiagonal(matrix));
    return temp;
}

console.log(calculateDiagonals([[20, 40],
                                [10, 60]]).join(" "));

console.log(calculateDiagonals([[3, 5, 17],
                                [-1, 7, 14],
                                [1, -8, 89]]).join(" "));