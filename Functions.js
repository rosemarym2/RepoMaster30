/*Task 1 Cinema Ticket*/

// let age = 60;

// if (age < 18){
//     console.log("£8");
// } else if (age < 60){
//     console.log("£10.95");
// } else if (age > 59){
//     console.log("£7.50");
// } else {
//     console.log("£7.50");
// };


// let ticketPrices = [
//     "Child (Below 18) £8",
//     "Adult (18+ £10.95",
//     "Senior (60+) £7.50",
// ];
// console.log(ticketPrices)

/*Task 2 Favourite Color*/

// const favColor = (color, notfav) => {
//     console.log(`My favourite colour is ${color} not ${notfav}.`)
// }

// favColor("red", "blue");

/*Activity 1 Turn into arrow function*/
// function factorial (n) {
    // if ((n === 0) || (n ===1)) {
    // return 1;
    // } else {
    // return (n * factorial (n-1));
    // }
    // }
    // console.log(factorial(33));

/* Answer */
// const factorial = (n) => {
//         if ((n === 0) || (n ===1)) {
//         return 1;
//         } else {
//         return (n * factorial (n-1));
//         }
//         }
//         console.log(factorial(33));

/*Activity 2 Pizza*/
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
// console.log(`Pizza with ${topping1} and ${topping2}`);
// orderCount++;
// }

// takeOrder("pepporoni", "olives");
// takeOrder("mushrooms", "peppers");
// takeOrder("chicken", "extra cheese");

/*Activity 3 Cash Machine
Dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you're trying to withdraw!*/

let accNumber = 24601911;
let pinNum = 1234;
let balance = 300;
let currency = `£`;
let total = 300;

// const cashWithdrawal = (amount, accNum) => {
// console.log(`Your cash withdrawal of ${currency}${amount.toFixed(2)} for ${accNum} is being processed`);
// balance++;
// }

// cashWithdrawal (300, accNumber);
// cashWithdrawal (360, 50449921);
// cashWithdrawal (30, 50447921);

atmWithdraw = (atmAmount, accNum) => {
    if (1234 == pinNum && total <= balance) {
    return `Withdrawing ${currency}${total.toFixed(2)} from account ${accNumber}`;
}  else if (1234 === pinNum && balance < total) {
    return `${accNumber} has insufficient funds`; 
} else if (1234 !== pinNum) {
        return `Wrong PIN entered, please try again`;
}else {
    return `please try again`;
}
};

console.log(atmWithdraw());


// const person = {
//     name: `Rosie`,
//     age: 30,
//     songs:[
//         "Baba O'Riley",
//         "MMMBop",
//         "The Chain"
//     ]
// };
//  console.log(person.songs[0]);


// sayHi(){
//     if (name) {
//         return `Hello my name is ${this.name}`;
//     }
// },
//     console.log(person.this.name());

/*broken code below
let day = 'Saturday';
let alarm = '';


let alarmMessage = {
    weekendAlarm: 'no alarm needed',
    weekdayAlarm: 'get up at 7am',
};

if(day == 'Saturday'|| day == 'Sunday'){
    alarm 
}*/

/*Objects
Activity 1*/
// const person = {
//     name: `Rosie`,
//     age: 30,
//     songs:[
//         "Baba O'Riley",
//         "MMMBop",
//         "The Chain"
//     ]
// }, 
// sayHi = () => {
//     return `Hello my name is ${person.name}`;
// };

// console.log(sayHi(person.name));


/*Activity 2*/
// const pet = {
//     petName: `Jasper`,
//     typeOfPet: `Dog`,
//     age: 12,
//     colour: `brown`,
// }
// console.log(pet['petName']);

// eat = () => {
//    return`Your pet ${pet.petName} is eating`;
// },
// drink = () => {
//    return`Your pet ${pet.petName} is drinking`;
// };

// console.log(eat());
// console.log(drink());

/*Activity 3 cafe*/
const coffeeShop = {
    branch: `200 Degrees Nottingham`,
    currency: `£`,
    drinks:[
        [`Americano`, `Espresso`, `Latte`, `Flat White`, `Hot Chocolate`],
        [2.25, 2.40, 2.35, 3.00],
    ],
    food: [
        [`Chicken Salad`, `Cheese and Tomato Sandwich`, `Croissant`, `BLT sandwich`, `Cake Slice`] 
        [4.50, 4.55, 1.20, 4.95, 3.50],
    ],
},

// let order = '';
// let cost = 0;
// for (let i = 0; i < drinks.length; i++){
//     for(let j = 0; j < this.food.length; j++){
//         if(food[i] === this.food[j]){
//             cost += this.food[j + 1]
//             order = order + ` = ${food[i]} £${this.food[j + 1]} = `
//         }    
// };

// foodOrdered = () =>{
//         return console.log (`You ordered:${this.food[i][j]} and ${this.drinks[i][j]}. The cost for this order
//         will be ${this.food[i][j] + this.drinks[i][j]}`) 
//        }
    
// coffeeShop (foodOrdered());




// let order = '';
// let cost = 0;
// for (let i = 0; i < drinks.length; i++){
//     console.log(this.drinks[i])     
// };

// totalOrder = () => {
//     return `Your order is ${this.food[i].currency[].toFixed(2)}`
// }
// console.log.coffeeShop(totalOrder())

/*Price List
drinks:
    Americano - £2.30
    Espresso - £2.25
    Latte - £2.40
    Flat White - £2.35
    Hot Chocolate - £3.00
food: 
    Chicken Salad - £4.50
    Cheese and Tomato Sandwich - £4.55
    Croissant - £1.20
    BLT sandwich - £4.95
    Cake Slice - £3.50
],*/



// let orders() {
//     drinksOrders: 
//     foodOrders: 
// }

// function totalOrder(){
//     return console.log (`Your order is ${this.food[0].currency[0]}`);
// }
// coffeeShop.totalOrdered()
// coffeeShop(this.drinks),
// coffeeShop(this.food),
// console.log(coffeeShop.drinks[0][1]);
