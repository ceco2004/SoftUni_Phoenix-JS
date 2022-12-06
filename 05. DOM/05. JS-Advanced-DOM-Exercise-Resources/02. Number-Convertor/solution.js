function solve() {
    let btn = document.getElementsByTagName("button")[0];
    btn.addEventListener("click", convert);
}

function convert(e){
    let inputEl = document.getElementById("input");
    let inputValue = +inputEl.value;
  

    let outputCurency = document.getElementById("selectMenuTo").value;
    let outputValue;

    switch(outputCurency){
        case "binary": outputValue = convertToBinary(inputValue);
           break;
        case "hexadeicmal": outputValue = convertToHexa(inputValue);
           break;
    }

    let resultArea = document.getElementById("result");
    resultArea.value = outputValue;

}

function convertToBinary(decimal){
    return decimal.toString(2);
}

function convertToHexa(decimal){
    return decimal.toString(16);
}