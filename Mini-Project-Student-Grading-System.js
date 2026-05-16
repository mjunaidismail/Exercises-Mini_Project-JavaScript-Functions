//Student Grade System


const prompt = require('prompt-sync')();

let subject1 = Number(prompt("Enter marks in subject 1; "));
let subject2 = Number(prompt("Enter marks in subject 2: "));
let subject3 = Number(prompt("Enter marks in subject 3: "));

let total = 0;
let percentage = 0;
let grade = "";

//Function to calculate total marks
function caculateTotal(){
    return (subject1 + subject2 + subject3);

}
//because return will not output value itself so we stored it inside a variable 
total = caculateTotal();
console.log("Your total marks are: " + total);

//function to calculate percentage
function caculatePercentage(){
    return (total/300)*100;
}
percentage = caculatePercentage();
console.log("Your percentage is: " + percentage + "%");

//Conditional statements to get grades
if(percentage > 90){
    console.log("Your Grade is A");
}
else if(percentage > 80){
    console.log("Your grade is B");
}
else if(percentage > 70){
    console.log("Your grade is C");
}
else if(percentage > 80){
    console.log("Your grade is d");
}
else{
    console.log("Sorry! Try again next time...");
}