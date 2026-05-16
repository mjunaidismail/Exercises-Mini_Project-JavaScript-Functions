//Age Calculator

const prompt = require('prompt-sync')();
const age = prompt("Enter your age: ");
function ageCalculator() {
    if (age >= 18)

        console.log("Adult");

           else {
    console.log("Minor");
}
}

ageCalculator();