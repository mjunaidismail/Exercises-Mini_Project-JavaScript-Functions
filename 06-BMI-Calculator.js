//BMI calculator

const prompt= require('prompt-sync')();

let weight = Number(prompt("Enter your weight: "));
let height= Number(prompt("Enter your height: "));

function bmi(){
    console.log("Your BMI is: " + (weight/(height*height)));
}
bmi();