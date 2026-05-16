//Even or odd


//To get prompt from node.js without this line it will throw prompt error
const prompt = require('prompt-sync')();


let number = prompt("Enter number: ");
function check(){
    if(number / 2 == 0){
        console.log("Given number is even.");
    }
    else{
        console.log("Given number is odd");
    }
}

check();