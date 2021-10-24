// let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// function findLastVowel(string) {
//     let pattern = /[aeiouAEIOU]/gim;
// }
//     const match = x.match(/[aeiou](?!.*[aeiou])/1);
//     return match ? [0] : 'No Match';
// console.log (endVowel(string));

/* test 1-needs altering
let num = 20202;
let stringNum = num.toString(); 
let reverseStringNum = stringNum.split('').reverse().join('');

if (num == reverseStringNum) {
    console.log("This number is a palindrome");
} else {
    console.log("This number is not a palindrome")
};*/

// let i = [];

// for(let i = 0; i < 6; i++) {
//     console.log(Math.floor(Math.random()*30))
// };

// if(i % 7 ==0) {
//     console.log("This number is divisible by 7.")
// } else {
//     console.log("This number is NOT divisible 7.")
// }

// const cafe = {
//     hasSpecialOffers: true,
//     openCafe: true,
// }
// openCafe(){
//     if(this.hasSpecialOffers){
//     return "Time for a special offer!";
//     }
//     closedCafe(){
//     return "We are closed, come back tomorrow!";
//     }
//     }
//     console.log(cafe.openCafe());

// let age = 15;

// if (age <18){
//     console.log("£8")
// } else if (age >18){
//     console.log("£10.95")
// } else if (age >=60){
//     console.log("£7.50")
// };



// drinksPrices = [
//     ["Latte", "Mocha", "Flat white"],
//     [3.10, 3.20, 3.65 ]
//    ],

//    foodPrices = [
//     ["Chips", "Salad", "Sandwich"],
//     [2.50, 4.80, 3.25 ]

//    ],

//    foodOrdered = () =>{
//     return console.log (`You ordered:${this.foodPrices[0][0]} and ${this.drinksPrices[0][0]}. The cost for this order
//     will be ${this.foodPrices[1][0] + this.drinksPrices[1][0]}`) 
//    }

// coffeeshop.foodOrdered()

let coffeeShop = {
    branch: 'Costa',
    drinks: ['Coffee', 2.50, 'Tea', 1.50, 'Hot Chocolate', 3],
    food: ['Croissant', 3.50, 'Sandwich', 2],
    drinksOrdered(drink){
        let order = ''
        let cost = 0
        for(let i = 0; i < drink.length; i++){
            for(let j = 0; j < this.drinks.length; j++){
                if(drink[i] === this.drinks[j]){
                    cost += this.drinks[j + 1]
                    order = order + ` = ${drink[i]} £${this.drinks[j + 1]} = `
                }
            }
        }
        return `Drink  ${order}\nCost  -  £${cost}\n`
    },
    foodOrdered(food){
        let order = ''
        let cost = 0
        for(let i = 0; i < food.length; i++){
            for(let j = 0; j < this.food.length; j++){
                if(food[i] === this.food[j]){
                    cost += this.food[j + 1]
                    order = order + ` = ${food[i]} £${this.food[j + 1]} = `
                }
            }
        }
        return `Food  ${order}\nCost  -  £${cost}\n`
    }
}

console.log(coffeeShop.foodOrdered(['Croissant', 'Sandwich']), coffeeShop.drinksOrdered(['Coffee', 'Tea']))