const btn = document.querySelector("button");
const winningScore = 3;
let playerScore = 0;
let computerScore = 0;


// This is where the game is played
function playRound(playerSelection, computerSelection) {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) { 
        return "Tie!"
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computer === "Rock")) {
        playerScore++;
        return "Good job, ${playerSelection} beats ${computerSelection}";
    } else {
        computerScore++;
        return "${computerSelection} beats ${playerSelection}";
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
    const choices = ["Rock", "Paper", "Scissors"];
    let playerSelection = prompt("Choose either \"Rock\", \"Paper\", or \"Scissors\"." + "Inputs are not case-sensitive");
    if (choices.includes(playerSelection.toLowerCase())) {
        console.log("This is working corectly. You chose ${upperFirst(playerSelection)}");
        return playerSelection;
    } else {
        console.log("Please select a valid choice");
        return false;
    }
}






    // if (choices.includes(playerSelection.toLowerCase())) {
    //     console.log("You've selected ${playerSelection}.");
    //     return playerSelection;
    // } else {
    //     console.log("This isn't a choice. Choose either \"Rock\", \"Paper\", or \"Scissors\".");
    //     return false;
    // }

btn.addEventListener("click", function(){
    console.log("functionality is coming soon.");
});
// Functions ===================================================