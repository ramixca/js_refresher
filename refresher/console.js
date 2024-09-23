
function cutFruitPieces(fruit) {
    return fruit * 2;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces.`;
    return juice;
}

console.log(fruitProcessor(2,3));
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// const num = Number('2'); 
// console.log(num);

function calcAge(birthYear) {
    return 2024 - birthYear;
}

// const age1 = calcAge(1991);
// console.log(age1);

// const calcAge2 = function(birthYear) {
//     return 2024 - birthYear;
// }

// const age2 = calcAge2(1992);

// console.log(age1,age2) 

//arrow function

// const calcAge3 = birthYear => 2035 - birthYear;
// const age3 = calcAge3(2000);
// console.log(calcAge3(1995));
// console.log(age3);


// const retirement = (birthYear, firstName) => {
//     const age = 2035 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years.`;
// } 

// console.log(retirement(1991, 'rafael'));

// const calcAge = function(birthYear){
//     return 2024 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years.`);
//         return retirement;
//     } else {
//         console.log( `${firstName} already retired years ago.`);
//         return -1;
//     }
    
// }

// console.log(yearsUntilRetirement(1950, 'Rafael'));


// Challenge 5 
let calcAverage = (game1, game2, game3) => {
    return (game1 + game2 + game3) / 3;
};

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins);
console.log(scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
        if (avgDolphins > avgKoalas * 2) {
            console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`);
        } else if (avgKoalas > avgDolphins * 2) {
            console.log(`Koalas wins (${avgKoalas} vs ${avgDolphins})`);
        } else  {
            console.log(`No Team wins...`);
        }
}

checkWinner(scoreDolphins,scoreKoalas);

// const result = checkWinner(scoreDolphins,scoreKoalas);
// console.log(result);

const dolphinsScored = 44 + 23 + 71;
const koalasScored = 65 + 54 + 49;

checkWinner(dolphinsScored, koalasScored);

// arrays

const friends = ['carlos', 'marsexo', 'Palomo'];
const years = [1991, 1995, 2000, 2024];
// console.log(friends);   
console.log(years);
console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 2]);
friends[2] = 'Jey';
console.log(friends);

const rafael = [2024 - 1991, friends];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);

console.log(age1, age2, age3);
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])];

console.log(years.indexOf(2000));
console.log(years.includes(2000));

//tip calculator using arrays

function calcTip(bill) {
    if(bill >= 50 && bill <= 300) {
        return(bill * 0.15);
    } else {
        return(bill * 0.20)
    }
}


const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])];
console.log(tips);
console.log(totals);