let counter = (function(){
    let count = 0;

    function getCurrent(){
        return count;
    }
    function getNext(){
        return ++ count;
    }

    function reset(){
        count = 0;
    }

    return{
        current: getCurrent,
        next: getNext,
        reset: reset
    }
})();


let x = counter;
for(let i = 0; i < 10; i++){
    x.next()
}
console.log(x.next());
console.log(x.current());