const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    // randomly return 'Rock', 'Paper', 'Scissors'
    const randomChoice = Math.floor(Math.random() * choices.length);

    let computerSelection = choices[randomChoice];
    console.log(computerSelection);
    return computerSelection; //returns choice as string
}

function playRound(playerSelection, computerSelection) {
    // prompt user for their choice (case-insensitive)
    // player vs computer
    // return string that declares winner
    playerSelection = prompt("Please type in your choice (Rock, Paper or Scissors)").toLowerCase();
     
    switch(playerSelection) {
        case ('rock' && computerSelection == 'rock'):
            console.log(`It's a tie!`);
            break;
        
    }
}

function game() {
    // play    
}

getComputerChoice();