const btn = document.querySelector("button");
const winningScore = 3;
let playerScore = 0;
let computerScore = 0;


// This is where the game is played
function playRound(playerSelection, computerSelection) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) { 
        return "Tie!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        computerScore++;
        return "You lose";
    }  else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        computerScore++;
        return "You lose";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        computerScore++;
        return "You lose";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        playerScore++;
        return "You win";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        playerScore++;
        return "You win";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        playerSelection ++;
        return "You win";
    } 
}


// Functions ===================================================
// This will return what the computer chooses at random
function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}

// This will prompt the user to make a selection.
function playerPlay() { 
    let choices = ["Rock", "Paper", "Scissors"];
    let playerSelection = prompt("Choose either \"Rock\", \"Paper\", or \"Scissors\"." + "Inputs are not case-sensitive");
    if (choices.includes(playerSelection.toLowerCase())) {
        console.log("You've selected ${playerSelection}.");
        return playerSelection;
    } else {
        console.log("This isn't a choice. Choose either \"Rock\", \"Paper\", or \"Scissors\".");
        return false;
    }
}

btn.addEventListener("click", function(){
    console.log("functionality is coming soon.");
});
// Functions ===================================================