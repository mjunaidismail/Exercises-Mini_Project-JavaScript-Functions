//count vowels in  strings

let str = "arbysigninge";
let vowel= 0;
for(let i=0; i < str.length; i++){
    if(
        str[i] == "a" ||
        str[i] == "e" ||
        str[i] == "i" || 
        str[i] == "o" ||
        str[i] == "u"){
        vowel += 1;
    }
    

}

console.log("There are "+ vowel + " vowels in this string.");