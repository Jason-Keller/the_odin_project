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
let scoreYou = document.getElementsByClassName("score-you");
let scoreThem = document.getElementsByClassName("score-them");

// Dom elements ======
// TOP-LEVEL VARIABLES ======================================================

// Selectors ===============
// these will allow the player variable to be updated and for the player to make a selection that doesn't involve the use of a prompt
rock.addEventListener("click", function(){
    playerSelection = "rock";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log("You played " + playerSelection + " computer played " + computerSelection);
    return "rock";
});

paper.addEventListener("click", function(){
    playerSelection = "paper";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log("You played " + playerSelection + " computer played " + computerSelection);
    return "paper";
});

scissors.addEventListener("click", function(){
    playerSelection = "scissors";
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log("You played " + playerSelection + " computer played " + computerSelection);
    return "scissors";
});
// Selectors ===============

// Game function ======
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++
        if (playerScore === 5) {
            alert("You win!");
        } else if ((playerSelection === "scissors" && computerSelection == "rock") || 
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "sciossrs")) {
            computerScore++;
            if (computerScore === 5) {
                alert("You lose!");
            }
    }
}
saveScore();
}
// Game function ======


// Update the scoreboards
function saveScore() {
    scoreYou.textContent = playerScore;
    scoreThem.textContent = computerScore;
}

// Computer selections ======
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}
// Computer selection ======