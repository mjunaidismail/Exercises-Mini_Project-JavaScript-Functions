//price discount on 5000

const prompt = require('prompt-sync')();

let  price = Number(prompt("Enter price of product: "));

if(price <= 5000){
    console.log("Sorry! You can't get discount on this product!");

}

else{
    price -= (price/100)*10
    console.log("Congradulation your discounted price is " + price);
}

