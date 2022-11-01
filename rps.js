let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;
let playerSelection = 'rock';

function getComputerChoice() {
    // randomly return 'Rock', 'Paper', 'Scissors'
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);

    let computerSelection = choices[randomChoice];
    console.log(computerSelection);
    return computerSelection; //returns choice as string
}

function playRound(playerSelection, computerSelection) {
    // prompt user for their choice (case-insensitive)
    // return string that declares winner
    //playerSelection = prompt("Type in your choice: (Rock, Paper or Scissors)").toLowerCase();
    
    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            return 'You Lose! Paper beats Rock.';
        }
        else {
            return 'You Win! Rock beats Scissors.';
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            return 'You Win! Paper beats Rock.';
        }
        else {
            return 'You Lose! Scissors beats Paper.';
        }
    }
    else {
        if (computerSelection == 'rock') {
            return 'You Lose! Rock beats Scissors.';
        }
        else {
            return 'You Win! Scissors beats Paper.';
        }
    }
}
    
function game() {
    // play    
}

console.log(playRound(playerSelection, getComputerChoice()));