//Test Script is linked with index.html file
console.log("hello");

//Rock Paper Scissors - Run from console

// 1. set the initial score for each player to zero. This game will have 5 rounds.
// 2. Players can make one selection between "Rock, paper or scissors". 
// 3. Store the selection of each player
// 4. Rules: Rock beats scissors and loses to paper, paper beats rock, but loses to scissors, and scissors beat paper but loses to rock.
// 5. When a round is finished, increase score by +1. In order to win, a player must score 5 points.


// Initial Scores for human and computer players
let humanScore = 0;
let computerScore = 0;
const options =["rock", "paper", "scissors"];


// ComputerChoice randomize 
function getComputerChoice(options) {
    const randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];    
};


// using prompt for human player to make a selection from const options.
let humanChoice = prompt("Choose wisely... Rock, paper or scissors?");
// Store input from prompt for function GetHumanChoice using  humanChoice variable as a parameter.
let humanChoiceInput = getHumanChoice(humanChoice)


function getHumanChoice(humanChoiceInput) {
    return humanChoiceInput.trim().toLowerCase();
}

//Running 
console.log("Human Choice: ", humanChoiceInput);
console.log("Computer Choice: ", getComputerChoice(options));

