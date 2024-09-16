let humanScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];

// Function to randomize computer choice
function getComputerChoice() {
    const randomOption = Math.floor(Math.random() * options.length);
    return options[randomOption];    
}

// Function to normalize human choice input
function getHumanChoice(humanChoiceInput) {
    return humanChoiceInput.trim().toLowerCase();
}

// Function to determine the winner of a round
function gameRules(humanChoiceInput, computerChoiceInput) {
    if (humanChoiceInput === computerChoiceInput) {
        return "It's a tie!";
    } else if (
        (humanChoiceInput === "rock" && computerChoiceInput === "scissors") ||
        (humanChoiceInput === "paper" && computerChoiceInput === "rock") ||
        (humanChoiceInput === "scissors" && computerChoiceInput === "paper")
    ) {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

// Function to play a single round
function playRound() {
    let humanChoice = prompt("Choose wisely... Rock, paper, or scissors?");
    let humanChoiceInput = getHumanChoice(humanChoice);

    if (!options.includes(humanChoiceInput)) {
        console.log("Invalid choice! Please choose Rock, Paper, or Scissors!");
        return;
    }

    let computerChoice = getComputerChoice();
    let result = gameRules(humanChoiceInput, computerChoice);

    console.log("Human Choice:", humanChoiceInput);
    console.log("Computer Choice:", computerChoice);
    console.log(result);
    console.log("Current Score - Human: " + humanScore + " | Computer: " + computerScore);
}

// Function to play the game for 5 rounds
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
}

// Start the game
playGame();
