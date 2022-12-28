function solve(){
    printHello(1);
    setTimeout(printHello, 2000, 2);
    printHello(3);
    setTimeout(printHello, 1000, 4);
    setTimeout(printHello, 1000, 5);
    printTo10();
}

function printTo10(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
        sleep(1000);
    }
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function printHello(num){
    console.log("Hello " + num)
}

solve();