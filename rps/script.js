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
function getComputerChoice() {
    const randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];    
};


function getHumanChoice(humanChoiceInput) {
    return humanChoiceInput.trim().toLowerCase();
};

//Running 
// console.log("Human Choice: ", humanChoiceInput);
// console.log("Computer Choice: ", getComputerChoice(options));

//Game rules to determine winner per round.
function gameRules(getHumanChoiceInput,getComputerChoiceInput) {
    if (getHumanChoiceInput === getComputerChoiceInput) {
        return "tablas! It's a tie!";
    } else if (
        (getHumanChoiceInput === "rock" && getComputerChoiceInput === "scissors") ||
        (getHumanChoiceInput === "paper" && getComputerChoiceInput === "rock") ||
        (getHumanChoiceInput === "scissors" && getComputerChoiceInput === "paper")
    ) {
        humanScore++;
        return "You win human!";
    } else {
        computerScore++;
        return "Computer wins! You lose human :(";
    }
};

// Setup single game round

function playRound() {
    // using prompt for human player to make a selection from const options.
let humanChoice = prompt("Choose wisely... Rock, paper or scissors?");
// Store input from prompt for function GetHumanChoice using  humanChoice variable as a parameter.
let humanChoiceInput = getHumanChoice(humanChoice)
    //Check if human input is not one of the options.
    if(!options.includes(humanChoiceInput)) {
        console.log("Invalid choice! Please, choose Rock, Paper, or Scissors!");
        return;
    }
    let computerChoice = getComputerChoice();
    let result = gameRules(humanChoiceInput, computerChoice);

    console.log("Human Choice:", humanChoiceInput);
    console.log("Computer Choice:", computerChoice);
    console.log(result);
    // updated single game round to track score. I will use for the function to run multiple game rounds.
    console.log("Current Score... Human: " + humanScore + " vs Computer: " + computerScore);
};

playRound();


//Setup game for 5 rounds.
//When running playGame and human makes a selection, it repeats the same selection 5 times. It doesn't allow to add different selections per round. 
function playGame() {
    
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}`);
        playRound();
    }

        // After all rounds are done, show final scores
        console.log("\nFinal Score:");
        console.log("Human:", humanScore);
        console.log("Computer:", computerScore);
    
        if (humanScore > computerScore) {
            console.log("Congratulations! You won the game!");
        } else if (humanScore < computerScore) {
            console.log("Sorry, you lost the game. Better luck next time!");
        } else {
            console.log("It's a tie!");
        }
    };



playGame();