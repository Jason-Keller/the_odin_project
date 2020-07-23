// TOP-LEVEL VARIABLES ======================================================
// Score variables ======
playerScore = 0;
computerScore = 0;
winningScore = 5;
// Score variables ======

// DOM elements ======
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const selections = document.getElementById('menu');
const playerChoice = document.getElementById('playerchoice');
const computerChoice = document.getElementById('computerchoice');
// Dom elements ======
// TOP-LEVEL VARIABLES ======================================================

// Selectors ===============
// these will allow the player variable to be updated and for the player to make a selection that doesn't involve the use of a prompt
rock.addEventListener("click", function(){
    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    return "rock";
});

paper.addEventListener("click", function(){
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    return "paper";
});

scissors.addEventListener("click", function(){
    playerSelection = "scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    return "scissors";
});
// Selectors ===============

// Game function ======
function playRound(playerSelection, computerSelection) {
    playerSelection();
    computerSelection();
}
// Game function ======


// This is used to apply the correct CSS to the elements
function playerSelection() {
    if (playerSelection === "rock") {
        
    }
}









// Computer selections ======
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}
// Computer selection ======