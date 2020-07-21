const choices = ["Rock", "Paper", "Scissors"];
const btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("functionality is coming soon.");
});






// This will return what the computer chooses at random
function computerPlay() {
    let computerChoice = choices[Math.floor(Math.random() * choices.length)]
    return computerChoice;
}

// This is where the game is played
function playRound(playerSelection, computerSelection) {
    // This first prompts the player to make a choice.
    playerSelection = prompt("Choose either \"Rock\", \"Paper\", or \"Scissors\"");
    return playerSelection;
    // If the player tries to choose anything other than the three options, it throws another prompt.
}