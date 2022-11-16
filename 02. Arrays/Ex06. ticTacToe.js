ticTac(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);

ticTac(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);


ticTac(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);


function ticTac(mooving){
    const matrix = [[false, false, false],
                  [false, false, false],
                  [false, false, false]];

    let isFinish = false;              
    let player = "X";

    for(let i = 0; i < mooving.length; i++){
        let element = mooving[i];
        let row = Number(element[0]);
        let col = Number(element[2]);
       
      
       isFinish_newMoove =  moove(row, col, player, matrix, isFinish);
       isFinish = isFinish_newMoove[0];
       let newMoov = isFinish_newMoove[1];

       if(newMoov === false){
        player = player === "O" ? "X" : "O";
       }

        if(isFinish){
            printMatrix(matrix);
            break;
        }
    }
   

    if(isFinish === false){
        console.log("The game ended! Nobody wins :(")
        printMatrix(matrix);
    }
    
}

function printMatrix(matrix){
    matrix.forEach(row => console.log(row.join(" ")));
}

function moove(row, col, player, matrix){

    if(!matrix[row][col]){
        matrix[row][col] = player;

        let isFinish = checkWorWin(player, matrix);
        return [isFinish, false];
    }
    else{
        console.log("This place is already taken. Please choose another!");
        return [false, true];
    }
}

function checkWorWin(player, matrix){

    let isFinish = false;

    if(checkHolizontals(matrix) || checkVerticals(matrix) || checkDiagonal1(matrix) || checkDiagonal2(matrix)){
        console.log(`Player ${player} wins`);
        isFinish = true;
    }
    return isFinish;
}

function checkDiagonal2(matrix){
    let firstElement = matrix[0][2];

    if(firstElement === false){
        return false;
    };

    for(let row = 1; row < 3; row ++){
        let col = 2 - row;
        if(firstElement !== matrix[row][col]){
            return false;
        }
    }
    return true;
}

function checkDiagonal1(matrix){
    let firstElement = matrix[0][0];

    if(firstElement === false){
        return false;
    };

    for(let i = 1; i < 3; i ++){
        if(firstElement !== matrix[i][i]){
            return false;
        }
    }
    return true;
}

function checkVerticals(matrix){
    let firstElement;

    let isFinish = true;

    for(let col = 0; col < 3; col++){
        firstElement = matrix[col][0];
     
        if(firstElement === false){
            isFinish = false;
            continue;
        }
       
        if(firstElement === matrix[1][col] && firstElement === matrix[2][col]){
            isFinish = true;
            break;
        }

        if(firstElement !== matrix[1][col] || firstElement !== matrix[2][col]){
            isFinish = false;
            break;
        }

    }
    return isFinish;
}

function checkHolizontals(matrix){
   
    let firstElement;

    let isFinish = false;

   for(let row = 0; row < 3; row++){
     firstElement = matrix[row][0];
     if(firstElement === false){
        continue;
     }
    
    if(firstElement === matrix[row][1] && firstElement === matrix[row][2]){
        isFinish = true;
    }

   }



    return isFinish;
}



