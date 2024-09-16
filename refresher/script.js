// use node script.js in console to run code OR dev tools in browser.

// let name = "Raf";
// let surname ="Curlos"

// console.log(name);
// console.log(surname);

// let age = 11;

// console.log(age);

// age = 55;

// console.log(age);

// console.log((3 + 2) - 76 * (1 + 1))

// // Test

// console.log(23 +97);
// console.log(1 + 2 + 3 + 4 + 5 + 6);
// console.log((4 + 6 +9) / 77);

// let a = 10;
// console.log(a)
// console.log(9 * a);

// let b = 7 * a;
// console.log(b)

// const max = 57;
// const actual = max - 13;
// const percentage = actual / max;
// console.log(percentage);


// let Greater = 4 > 10;
// console.log(Greater)

// let compare = ('b' == 'b');
// console.log(compare);

// let dataType = ('2' === 2);
// console.log(dataType);

if ("0") {
    console.log('hola');
}

// let x = 2;
// let y = 0;

// if (x > y) {
//     alert("holaaa");
// }

// const person = {
//     name: "John",
//     age : 50
// };

// alert(person.name + " is " + person.age);

// document.getElementById("button-event").addEventListener("click", function() {
//     alert("Button cliccccckeeeddd");
// });

// let text = "this is method test using uppercase"
// console.log(text.toUpperCase());

let number = 10

function numberChecker() {
    if(number >=10) {
        return true;
    } else {
        return false;
    }
}

let shoppingDone = false;
let childAllownace;

if (shoppingDone === true) {
    childAllownace = 10;
} else {
    childAllownace = 5;
}

function favoriteAnime(anime) {
    return anime + " is my favourite anime!"
};

console.log(favoriteAnime('Shakugan no Shana'));

function showFavoriteAnime() {
    let anime = prompt("What is your favorite anime?");
    if (anime) {
        alert(favoriteAnime(anime));
    } else {
        alert("You didn't enter anything!");
    }
}

function add7(number) {
    return number + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();  
}

function lastLetter(last) {
    return last.substr(-1);
}

let test = "this is my string";


const originals = [1, 2, 3];

const doubled = originals.map(item => item * 2);

console.log(doubled); // [2, 4, 6]


//concat

const message1 = "hello";
const message2 = "world";
const final = message1.concat(" ", message2);