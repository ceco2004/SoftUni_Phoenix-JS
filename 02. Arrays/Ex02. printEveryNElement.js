let printeEveryNElement = (arr) => {
    let step = Number(arr[arr.length - 1]);
    for(let i = 0; i < arr.length - 1; i += step){
        console.log(arr[i]);
    }
}

printeEveryNElement(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
);
printeEveryNElement(['dsa',
'asd', 
'test', 
'tset', 
'2']
);
printeEveryNElement(['1', 
'2',
'3', 
'4', 
'5', 
'6']
);