const prompt = require('prompt-sync')();

//In this exercise the catch is, we'll build logic on signs instead of numbers
const number = Number(prompt("Enter first number: "));
const sign = prompt("Enter operator: ");
const number2 = Number(prompt("Enter second number: "));

// addition
if (sign === '+') {
    function add() {
        console.log(number + number2);
    }

    add();
}

// division
else if (sign === '/') {
    function division() {
        console.log(number / number2);
    }

    division();
}

// multiplication
else if (sign === '*') {
    function multiply() {
        console.log(number * number2);
    }

    multiply();
}

// subtraction
else if (sign === '-') {
    function subtract() {
        console.log(number - number2);
    }

    subtract();
}

else {
    console.log("Invalid operator");
}