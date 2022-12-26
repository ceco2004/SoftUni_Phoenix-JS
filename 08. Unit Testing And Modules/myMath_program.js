const {sum, multyply} = require("./arr_Math_func");

let correctArrs = [[1, 2, 2, 3, 5, 7],
                    ["1", "2", "3"]];



let incorectArrs = [[true, 2],
                    [1, "2", {}],
                    ["2", 3, ""]];

    for(let arr of correctArrs){
        printResult(arr);
    }    

    for(let arr of incorectArrs){
       printResult(arr);
    }   
    
function printResult(arr){
    try{
        console.log(sum(arr));
        console.log(multyply(arr));
    } catch(err){
        console.log(err.message);
    }
}