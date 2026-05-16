//connect two names

const prompt = require('prompt-sync')();

const name1 = prompt("Enter your first name: ");
const name2 = prompt("Enter your last name: ");

function userName(){
    console.log("Your username is " + name1 + "_" + name2);
}
userName();