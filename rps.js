let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];
const images = document.querySelectorAll('img');

// iterate through each rps image and add event listeners to play game
images.forEach((image) => {
    image.addEventListener('click', () => {
        playRound(image.id, getComputerChoice());
    });
});

function getComputerChoice() {
    // randomly return 'Rock', 'Paper', 'Scissors'
    const randomChoice = Math.floor(Math.random() * choices.length);

    let computerSelection = choices[randomChoice];
    return computerSelection; //returns choice as string
}

function playRound(playerSelection, computerSelection) {
    // update DOM with string that declares winner
    // track computer/player wins in global variables & display results
    const results = document.querySelector('#results'); // select the div to display results in
    let scoreUpdate = document.createElement('div'); // initialize element to store result in
    const playerScoreDisplay = document.querySelector('#playerscore');
    const computerScoreDisplay = document.querySelector('#computerscore');

    if (playerSelection === computerSelection) {
        scoreUpdate.innerText = (`It's a tie!`);
        results.appendChild(scoreUpdate);
    }
    else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore += 1;
            scoreUpdate.innerText = ('You Lose! Paper beats Rock.');
            scoreUpdate.style.cssText = "color: red; font-weight: bold";
            results.appendChild(scoreUpdate);
        }
        else {
            playerScore += 1;
            scoreUpdate.innerText = ('You Win! Rock beats Scissors.');
            scoreUpdate.style.cssText = "color: green; font-weight: bold";
            results.appendChild(scoreUpdate);
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerScore += 1;
            scoreUpdate.innerText = ('You Win! Paper beats Rock.');
            scoreUpdate.style.cssText = "color: green; font-weight: bold";
            results.appendChild(scoreUpdate);
        }
        else {
            computerScore += 1;
            scoreUpdate.innerText = ('You Lose! Scissors beats Paper.');
            scoreUpdate.style.cssText = "color: red; font-weight: bold";
            results.appendChild(scoreUpdate);
        }
    }
    else {
        if (computerSelection == 'rock') {
            computerScore += 1;
            scoreUpdate.innerText = ('You Lose! Rock beats Scissors.');
            scoreUpdate.style.cssText = "color: red; font-weight: bold";
            results.appendChild(scoreUpdate);   
        }
        else {
            playerScore += 1;
            scoreUpdate.innerText = ('You Win! Scissors beats Paper.');
            scoreUpdate.style.cssText = "color: green; font-weight: bold";
            results.appendChild(scoreUpdate);
        }
    } 

    // first player to 5 announces winner and clears scoreboard
    if (playerScore == 5) {
        alert(`You reached 5 wins, you've won the game!`);
        results.innerHTML = "";
        playerScore = 0;
        computerScore = 0;
    }
    if (computerScore == 5) {
        alert(`You lost the game, the computer reached 5 points.`);
        results.innerHTML = "";
        playerScore = 0;
        computerScore = 0;
    }

    //update player & computer score
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
}