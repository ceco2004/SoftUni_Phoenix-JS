
function order(arr){

    arr.sort(compare);
    console.log(arr.join(" "));
}

function compare(a, b){
    if(a.length !== b.length){
        return a.length - b.length;
    }
    else{
        return a.localeCompare(b);
    }
}

order(['alpha','beta','gamma']);
order(['Isacc','Theodor','Jack', 'Harrison', 'George']);
order(['test','Deny', 'omen', 'Default']);