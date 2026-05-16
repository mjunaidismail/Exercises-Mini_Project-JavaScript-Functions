//check password length and tell if password is weak strong or too strong

const prompt = require('prompt-sync')();

const password = prompt("Enter your password: ");

if(password.length < 6){
    console.log("Password is too weak.");
}

else if (password.length < 12 ){
    console.log("Password is strong");


}

else{
    console.log("Password is too strong.");
}