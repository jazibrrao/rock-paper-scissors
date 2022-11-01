let playerScore = 0;
let computerScore = 0;
let playerSelection = 'scissors';

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
    // track computer/player wins in global variables
    
    //playerSelection = prompt("Type in your choice: (Rock, Paper or Scissors)").toLowerCase();
    
    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore += 1;
            return 'You Lose! Paper beats Rock.';
        }
        else {
            playerScore += 1;
            return 'You Win! Rock beats Scissors.';
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore += 1;
            return 'You Win! Paper beats Rock.';
        }
        else {
            computerScore += 1;
            return 'You Lose! Scissors beats Paper.';
        }
    }
    else {
        if (computerSelection == 'rock') {
            computerScore += 1;
            return 'You Lose! Rock beats Scissors.';
        }
        else {
            playerScore += 1;
            return 'You Win! Scissors beats Paper.';
        }
    }
}
    
function game() {
    // keep playing until either player or computer hit 5 wins
    while (playerScore < 5 && computerScore < 5) {
        console.log(playRound(playerSelection, getComputerChoice()));
    }
    if (playerScore > computerScore) {
        console.log(`You Won! Final Score: ${playerScore} - ${computerScore}`);
    }
    else {
        console.log(`You Lost! Final Score: ${playerScore} - ${computerScore}`);
    }
}

game();