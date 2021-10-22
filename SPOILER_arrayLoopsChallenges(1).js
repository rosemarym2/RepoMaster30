// --- Arrays ---
// --- Activity 1 ---

let favSongs = ['Africa', 'Take on Me', 'Never Gonna Give You Up']

console.log(favSongs)

// Stretch

favSongs.push('September', 'Livin La Vida Loca')

console.log(favSongs)

// --- Activity 2 ---

let numbers = [4, 9, 16, 25];
let map = numbers.map(Math.sqrt)
let shift = numbers.shift()
let unshift = numbers.unshift(36)
let splice = numbers.splice(2, 0, "Lemon", "Kiwi")

console.log(map, shift, unshift)

// --- Loops ---
// --- Activity 1 ---

let favFilms = ["Avatar", "1917", "Get Out", "Toy Story", "Star Wars"]

favFilms.push("WALL-E", "Cars")

for(let i = 0 ; i < favFilms.length; i++){
  console.log(favFilms[i]);
}

// --- Activity 2 ---

for(let i = 0 ; i < 6; i++){
    console.log(Math.ceil(Math.random() * 50));
}

// --- Activity 3 ---

for(let i = 9 ; i >= 0; i--){
    console.log(i);
}

// --- Activity 4 ---

let films = ["Soul", "Toy Story", "Ratatouille", "Up"]

for(let i = 0 ; i < films.length; i++){
    console.log(films[i]);
}
if(films[2] == "Ghostbusters"){
    console.log("Yay its Ghostbusters")
} else {
    console.log("Boo! we want Ghostbusters")
}

// --- Activity 5 ---

for(let i = 0 ; i < 6; i++){
    let num = Math.ceil(Math.random() * 30);

    if(num%7 == 0){
        console.log(`${num} is divisible by 7`)
    } else {
        console.log(`${num} is not divisible by 7`)
    }
}

// --- Activity 6 ---

let bobsFollowers = ["Jean", "John", "Jack", "Jill"];
let hannahsFollowers = ["Borris", "Bill", "Jack", "Jill"];

for(let i = 0; i < bobsFollowers.length; i++){
    for(let j = 0; j < hannahsFollowers.length; j++){
        if(bobsFollowers[i] === hannahsFollowers[j]){
            console.log(hannahsFollowers[j])
        }
    }
}


// --- Activity 7 ---

// do while loop - does first then checks
let text = "";
let i = 0;
do {
    text = "The number is " + i;
    console.log(text)
    i++;
}
while (i < 5);

i = 0;
// for loop
for (i = 0; i < 5; i++) {
    text = "The number is " + i ;
    console.log(text)
}

i = 0;
// while - checks first then runs
while (i < 5) {
    text = "The number is " + i;
    console.log(text)
    i++;
}