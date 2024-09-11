const inputValue = document.querySelector(".inputValue");
const operations = document.querySelectorAll(".operation");
const operators = document.querySelectorAll(".operator");
const numbers = document.querySelectorAll(".number");
const clear = document.querySelector(".clear");
const equal = document.querySelector(".equal");

let displayedValue = "";
let currentNumber = "";
let currentOperation = "";
let numbersArray = [];
let operationsArray = []


clear.addEventListener("click", () => {
    displayedValue = "";
    inputValue.innerText = "0";
    numbersArray = [];
    operationsArray = [];
    currentNumber = "";
    currentOperation = "";
    console.log(numbersArray, operationsArray);
});

numbers.forEach(number => {
    number.addEventListener("click", () => {
        displayedValue += number.innerText;
        currentNumber += number.innerText;
        inputValue.innerText = displayedValue;
    });
});

operations.forEach(operation => {
    operation.addEventListener("click", () => {
        if(currentNumber != "") {
            numbersArray.push(currentNumber);
            console.log(numbersArray);
            currentNumber = "";
        }

        displayedValue += operation.innerText;
        currentOperation += operation.innerText;
        inputValue.innerText = displayedValue;

        if (currentOperation != "") {
            operationsArray.push(currentOperation);
            console.log(operationsArray);
            currentOperation = "";
        }
    });
});

operators.forEach(operator => {
    if(operator.innerText === "=") {
        operator.addEventListener("click", () => {
            if (currentNumber != "") {
                numbersArray.push(currentNumber);
                console.log(numbersArray);
                currentNumber = "";
            }

            finalResult = calculateResult(numbersArray, operationsArray);
            inputValue.innerText = finalResult.toString();
            console.log(finalResult);
        });
    }
});


function calculateResult(numbersArray, operationsArray) {
    let result = parseFloat(numbersArray[0]);

    for(let i=0; i < operationsArray.length; i++){
        let nextNumber = parseFloat(numbersArray[i+1])

        switch (operationsArray[i]) {
            case '+':
                result +=nextNumber;
                break;
            case '-':
                result -=nextNumber;
                break;
            case 'x':
                result *=nextNumber;
                break;
            case '/':
                result /=nextNumber;
                break;
        }
    }

    return result;
}






