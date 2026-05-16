//simple authentication system

const prompt= require('prompt-sync')();
let username = prompt("Enter username: ");
let password = prompt("Enter password: ");

if (username == "user_246" && password == "14355546" ){
    console.log("Welcome!")
}

else{
    console.log("Email or password is not matched!");
}