let name = "Rosie";

let age = 30;

let favouriteColour = "blue";

let favouriteDrink = "latte";

console.log(`My name is ${name}. I am ${age}, my favourite colour is ${favouriteColour} and my favourite drink is a ${favouriteDrink}.`);

let breakfast = "porridge";

let lunch = "sandwich";

let dinner = "nachos";

console.log(`Today I am going to have for breakfast ${breakfast}, then for lunch I will have a ${lunch} and then treat myself to ${dinner} for dinner.`);

breakfast = "cereal";

lunch = "soup";

dinner = "lasagna";

console.log(`Tomorrow I am going to have for breakfast ${breakfast}, then for lunch I will have a ${lunch} and then have ${dinner} for dinner.`);

const date1 = Date.now(); 
const date2 = new Date('02/02/2022'); 
const diffTime = Math.abs(date2 - date1); 
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
console.log(diffTime + " milliseconds"); 
console.log(diffDays + " days until next birthday");

let weather = "snowy";
if (weather == "sunny") {
    console.log("Better put on sunscreen.")
} else if (weather == "rainy"){
    console.log("Better bring an umbrella!")
} else if (weather == "windy"){
    console.log("Don't get blown away!")
} else {
    console.log("I'm sorry I don't understand")
}

let i =10;
let j = "10";

if (i == j){
    console.log("true")
}else {
    console.log ("False")
}