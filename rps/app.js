const choices = ["Rock", "Paper", "Scissors"];
const btn = document.querySelector("button");
const playerSelection = prompt("Choose either \"Rock\", \"Paper\", or \"Scissors\". Inputs are not case-sensitive");
const computerSelection = computerPlay();

btn.addEventListener("click", function(){
    console.log("functionality is coming soon.");
});

// This is where the game is played
function playRound(playerSelection, computerSelection) {
    
}

// This will return what the computer chooses at random
function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}