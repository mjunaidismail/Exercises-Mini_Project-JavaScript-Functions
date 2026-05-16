//reverse of a string

let str = "string";
let reversed = "";

//start from str.length - 1 until it's Zero and keep addig to reversed variable 
for(let i=str.length -1; i >= 0; i--){
    reversed += str[i];
}

console.log(reversed);