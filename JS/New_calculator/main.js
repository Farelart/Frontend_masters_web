const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
let displayedValue = "";
let allNumbers = [];
let allOperators = [];
let currentNumber = "";

clear.addEventListener("click", () => {
    displayedValue = "";
    display.innerText = "0";
    allNumbers = [];
    allOperators = [];
    currentNumber = "";
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (operator.innerText != "=") {
            displayedValue += operator.innerText;
            display.innerText = displayedValue;
            allOperators.push(operator.innerText);
            console.log(allOperators);

            allNumbers.push(currentNumber);
            console.log(allNumbers);
            currentNumber="";
        } else {
            if (currentNumber != "") {
                allNumbers.push(currentNumber);
                console.log(allNumbers);
                currentNumber="";
                result = calculate(allNumbers, allOperators);
                displayedValue = result.toString();
                display.innerText = displayedValue;
            }
        }
    });
});

numbers.forEach(number => {
    number.addEventListener("click", () => {
        displayedValue += number.innerText;
        display.innerText = displayedValue;
        currentNumber += number.innerText;
    });
});

function calculate (numberArray, operatorArray) {
    result = parseFloat(numberArray[0]);

    for(let i= 0; i < operatorArray.length; i++) {
        nextNumber = parseFloat(numberArray[i+1]);

        switch(operatorArray[i]) {
            case "+":
                result += nextNumber;
                break;
            case "-":
                result -= nextNumber;
                break;
            case "x":
                result *= nextNumber;
                break;
            case "/":
                result /= nextNumber;
                break;
        }
    }

    return result;
}