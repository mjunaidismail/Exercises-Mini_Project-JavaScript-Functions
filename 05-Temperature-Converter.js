//Temperature Converter

const prompt = require('prompt-sync')();

const temeratur = prompt("Enter temperatur in Celcius: ");

function temChecker(){
    console.log("Temeprature is "+ 9*(temeratur/5)+32 + " Fahernheight.");
}

temChecker();
