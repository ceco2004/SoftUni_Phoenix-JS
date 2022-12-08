function solve() {
    let keysDiv = document.getElementsByClassName("keys")[0];
    keysDiv.addEventListener("click", ckickedBtn);   
    
    let clearBtn = document.getElementsByClassName("clear")[0];
    clearBtn.addEventListener("click", clearCalculator);

    let calcDisplay = document.getElementById("expressionOutput");
    let resultDisplay = document.getElementById("resultOutput");

    let displayContent = "";

    let leftOperand = "";
    let sign = "";
    let rightOperand = "";
    let result;

    function ckickedBtn(e){
        let btnValue = e.target.textContent;
        let num = Number(btnValue);
        if(num || btnValue === "."){

            if(sign){
                rightOperand += btnValue;
            }
            else{
                leftOperand += btnValue;
            }
        }
        else if(!sign && !num){
            sign = btnValue;
        }
        
        if(btnValue === "="){
            if(!leftOperand || !rightOperand){
                result = "NaN";
            }
            else{
                result = calculate(+leftOperand, +rightOperand, sign);
            }

            resultDisplay.textContent = result;

        }
        else{
            if(num || btnValue === "."){
                displayContent += btnValue;
            }
            else{
                displayContent += ` ${btnValue} `
            }
            calcDisplay.textContent = displayContent;
        }

    }

    function clearCalculator(e){
        calcDisplay.textContent = "";
        resultDisplay.textContent = "";
        displayContent = "";
        result = "";
        leftOperand = "";
        rightOperand= "";
        sign = "";
    }

    function calculate(left, right, operation){
        switch(operation){
            case "+": return left + right;
                break;
            case "-": return left - right;
                break;
            case "*": return left * right;
                break;
            case "/": return left / right;
                break;
        }
    }
}