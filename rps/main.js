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
const selections = document.getElementById('selections');
const playerChoice = document.getElementById('playerchoice');
const computerChoice = document.getElementById('computerchoice');
// Dom elements ======
// TOP-LEVEL VARIABLES ======================================================

// Selectors ===============
// these will allow the player variable to be updated and for the player to make a selection that doesn't involve the use of a prompt
rock.addEventListener("click", function(){
    playerSelection = "rock";
    computerPlay();
    playRound(playerSelection, computerSelection);
    return "rock";
});

paper.addEventListener("click", function(){
    playerSelection = "paper";
    computerPlay();
    playRound(playerSelection, computerSelection);
    return "paper";
});

paper.addEventListener("click", function(){
    playerSelection = "scissors";
    computerPlay();
    playRound(playerSelection, computerSelection);
    return "scissors";
});
// Selectors ===============

// Game function ======
function playRound(playerSelection, computerSelection) {
    player = playerSelection();
    computer = computerPlay();
    if(player === computer) {
        return "Tie!"
    }
}
// Game function ======














// Computer selections ======
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}
// Computer selection ======