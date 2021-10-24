/*Task 1 Cinema Ticket*/

let age = 60;

if (age < 18){
    console.log("£8");
} else if (age < 60){
    console.log("£10.95");
} else if (age > 59){
    console.log("£7.50");
} else {
    console.log("£7.50");
};


let ticketPrices = [
    "Child (Below 18) £8",
    "Adult (18+ £10.95",
    "Senior (60+) £7.50",
];
console.log(ticketPrices)

/*Task 2 Favourite Color*/

const favColor = (color, notfav) => {
    console.log(`My favourite colour is ${color} not ${notfav}.`)
}

favColor("red", "blue");

/*Activity 1 Turn into arrow function*/
function factorial (n) {
    if ((n === 0) || (n ===1)) {
    return 1;
    } else {
    return (n * factorial (n-1));
    }
    }
    console.log(factorial(33));

/* Answer */
const factorial = (n) => {
        if ((n === 0) || (n ===1)) {
        return 1;
        } else {
        return (n * factorial (n-1));
        }
        }
        console.log(factorial(33));

/*Activity 2 Pizza*/
let orderCount = 0;

const takeOrder = (topping1, topping2) => {
console.log(`Pizza with ${topping1} and ${topping2}`);
orderCount++;
}

takeOrder("pepporoni", "olives");
takeOrder("mushrooms", "peppers");
takeOrder("chicken", "extra cheese");

/*Activity 3 Cash Machine
Dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you're trying to withdraw!*/

let accNumber = 24601911;
let pinNum = 1234;
let balance = 300;
let currency = `£`;
let total = 300;

/*test code
const cashWithdrawal = (amount, accNum) => {
console.log(`Your cash withdrawal of ${currency}${amount.toFixed(2)} for ${accNum} is being processed`);
balance++;
}

cashWithdrawal (300, accNumber);
cashWithdrawal (360, 50449921);
cashWithdrawal (30, 50447921);*/

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


const person = {
    name: `Rosie`,
    age: 30,
    songs:[
        "Baba O'Riley",
        "MMMBop",
        "The Chain"
    ]
};
 console.log(person.songs[0]);



/*broken code alarm clock
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
const person = {
    name: `Rosie`,
    age: 30,
    songs:[
        "Baba O'Riley",
        "MMMBop",
        "The Chain"
    ]
}, 
sayHi = () => {
    return `Hello my name is ${person.name}`;
};

console.log(sayHi(person.name));


/*Activity 2*/
const pet = {
    petName: `Jasper`,
    typeOfPet: `Dog`,
    age: 12,
    colour: `brown`,
}
console.log(pet['petName']);

eat = () => {
   return`Your pet ${pet.petName} is eating`;
},
drink = () => {
   return`Your pet ${pet.petName} is drinking`;
};

console.log(eat());
console.log(drink());

/*Activity 3 cafe broken code
const coffeeShop = {
    branch: `200 Degrees Nottingham`,
    currency: `£`,
    drinks:[
        [`Americano`, 2.25],
        [`Espresso`, 2.25],
        [`Latte`, 2.40],
        [`Flat White`, 2.35],
        [`Hot Chocolate`, 3.00],
    ],
    food: [
        [`Chicken Salad`, 4.50], 
        [`Cheese and Tomato Sandwich`, 4.55],
        [`Croissant`, 1.20],
        [`BLT sandwich`, 4.95],
        [`Cake Slice`, 3.50], 
    ],
}

let order = '';
let cost = 0;
for (let i = 0; i < drinks.length; i++){
    for(let j = 0; j < this.food.length; j++){
        if(food[i] === this.food[j]){
            cost += this.food[j + 1]
            order = order + ` = ${food[i]} £${this.food[j + 1]} = `
        }    
};

foodOrdered = () =>{
        return `Your food order is:${this.food[i][j]} and ${this.drinks[i][j]}. The total cost for this order ${this.food[i][j] + this.drinks[0][1]}`
       }
drinksordered = () =>{
    return `Your drinks order is: ${this.drinks[i][j]} and ${this.drinks}`
}
    
console.log(foodOrdered())
console.log(drinksOrdered())




let order = '';
let cost = 0;
for (let i = 0; i < drinks.length; i++){
    console.log(this.drinks[i])     
};

totalOrder = () => {
    return `Your order is ${this.food[i].currency[].toFixed(2)}`
}
console.log.coffeeShop(totalOrder())*/

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

/*let orders() {
    drinksOrders: 
    foodOrders: 
}

function totalOrder(){
    return console.log (`Your order is ${this.food[0].currency[0]}`);
}
coffeeShop.totalOrdered()
coffeeShop(this.drinks),
coffeeShop(this.food),
console.log(coffeeShop.drinks[0][1]);*/

/*correct code with help*/
let coffeeShop = {
    branch: 'Costa',
    drinks: ['Coffee', 2.50, 'Tea', 1.50, 'Hot Chocolate', 3.00],
    food: ['Croissant', 1.50, 'Sandwich', 2.00],
    currency: `£`,
    drinksOrdered(drink){
        let order = ''
        let cost = 0
        for(let i = 0; i < drink.length; i++){
            for(let j = 0; j < this.drinks.length; j++){
                if(drink[i] === this.drinks[j]){
                    cost += this.drinks[j + 1]
                    order = order + `${drink[i]} ${currency}${this.drinks[j + 1].toFixed(2)} + `
                }
            }
        }
    return `Drink ${order}\nCost  =  ${currency}${cost.toFixed(2)}\n`
    },
    foodOrdered(food){
        let order = ''
        let cost = 0
        for(let i = 0; i < food.length; i++){
            for(let j = 0; j < this.food.length; j++){
                if(food[i] === this.food[j]){
                    cost += this.food[j + 1]
                    order = order + `${food[i]} ${currency}${this.food[j + 1].toFixed(2)} + `
                }
            }
        }
        return `Food  ${order}\nCost  =  ${currency}${cost.toFixed(2)}\n`
    }
}

console.log(coffeeShop.foodOrdered(['Croissant', 'Sandwich']), coffeeShop.drinksOrdered(['Coffee', 'Tea']))