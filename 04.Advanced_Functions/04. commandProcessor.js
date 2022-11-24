function solution(){
    let str = "";

    function append(text){
       str = str.concat("", text);
    }

    function removeStart(n){
       str = str.slice(n);
    }

    function removeEnd(n){
       str =  str.slice(0, str.length - n);
    }

    function print(){
        console.log(str);
    }

    return{
        append,
        removeStart,
        removeEnd,
        print
    }
}
let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


console.log("----------------");

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
