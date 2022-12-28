function solve(arr1, arr2, arr3){
    let sum = arr1.length + arr2.length + arr3.length;
    let avgDown = Math.floor(sum /3);

    console.log(sum);
    console.log(avgDown);
}

solve('chocolate', 'ice cream', 'cake');
solve('pasta', '5', '22.3');