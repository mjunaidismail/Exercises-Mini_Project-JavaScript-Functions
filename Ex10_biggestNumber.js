//biggest number of 3

const prompt = require('prompt-sync')();

const number1 = Number(prompt('Enter number 1: '));
const number2 = Number(prompt("Enter number 2: "));
const number3 = Number(prompt("Enter number 3: "));

if(number1 > number2 && number1 >number3){
    console.log(number1 + " is greater number.");
}

else if(number2 > number1 && number2 > number3){
    console.log(number2 + " is greater number.");
}

else{
    console.log(number3 + " is greater number.");
}