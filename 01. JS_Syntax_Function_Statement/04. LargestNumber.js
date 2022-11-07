function solve(arr){
 for(let i = 0; i < arr.length; i++){
     if(i === 0){
         largest = arr[i];
         continue;
     }

     if(arr[i] > largest){
         largest = arr[i];
     }
 }

    var largest;
    return `The largest number is ${largest}`;
}

console.log(solve([-3, -5, -22.5]));