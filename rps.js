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
    // player vs computer
    // return string that declares winner
    //playerSelection = prompt("Type in your choice: (Rock, Paper or Scissors)").toLowerCase();
    
    if (playerSelection === computerSelection) {
        console.log(`It's a tie!`);
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('The computer chose paper. You lose this round!');
        }
        else {
            console.log('The computer chose scissors. You win this round!');
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            console.log('The computer chose rock. You win this round!');
        }
        else {
            console.log('The computer chose scissors. You lose this round!');
        }
    }
    else {
        if (computerSelection == 'rock') {
            console.log('The computer chose rock. You lose this round!');
        }
        else {
            console.log('The computer chose paper. You win this round!');
        }
    }
}
    

function game() {
    // play    
}

getComputerChoice();
playRound(playerSelection, getComputerChoice());