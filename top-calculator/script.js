function add(num1, num2) {
    return +num1 + +num2; 
}

function substract(num1, num2) {
    return Math.floor((num1 - num2)*100000) / 100000;
}

function multiply(num1, num2) {
    return Math.floor((num1 * num2)*100000) / 100000;
}

function divide(num1, num2) {
    return Math.floor((num1 / num2)*100000) / 100000;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+': return add(num1, num2);
        case '-': return substract(num1, num2);
        case '*': return multiply(num1, num2);
        case '/': return divide(num1, num2);
    }
}

let value1 = null;
let value2 = null;
let operator = '';
let operatorPressed = false;
numberBtns = document.querySelectorAll(".num");
inputScreen = document.querySelector("input");
operatorBtns = document.querySelectorAll(".operator");
equalBtn = document.querySelector(".equal");
clearBtn = document.querySelector(".clear");
pointBtn = document.querySelector(".point");

numberBtns.forEach(btn => 
    btn.addEventListener('click', function(e){
        if(inputScreen.value == 0) inputScreen.value = '';  
        
        if(operatorPressed) {
            inputScreen.value = '';
            operatorPressed = false;
        }  

        inputScreen.value = inputScreen.value + e.target.innerHTML;
        
        if (operator == '') {
            value1 = inputScreen.value;
        } else {
            value2 = inputScreen.value;
        }
    })
);

operatorBtns.forEach(btn =>
    btn.addEventListener('click', function(e){
        operatorPressed = true;
        pointBtn.disabled = false;

        if (!value2) {
            operator = e.target.innerHTML;
        } else {
            inputScreen.value = operate(operator, value1, value2);
            value1 = inputScreen.value;
            operator = e.target.innerHTML;
            value2 = null;
        }

    })
);

equalBtn.addEventListener('click', function(e){
    if(!value1 || !value2 || operator == '') return;
    inputScreen.value = operate(operator, value1, value2);
    value1 = inputScreen.value;
    value2 = null;
    operator = '';
    pointBtn.disabled = false;
    operatorPressed = true;
})

clearBtn.addEventListener('click', function(e){
    value1 = null;
    value2 = null;
    operator = '';
    inputScreen.value = 0;
})

pointBtn.addEventListener('click', function(e){
    e.target.disabled = true;
})