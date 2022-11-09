function checkInput(number){
    let isSame = true;
    let sum = 0;
    number = String(number);
    for(let i = 0; i < number.length - 1; i++){
        if(number[i] !== number[i + 1]){
            isSame = false;
        }
        sum += Number(number[i]);
    }
    sum += Number(number[number.length - 1]);

    console.log(isSame);
    console.log(sum);
}

checkInput(2222222);
checkInput(1234);