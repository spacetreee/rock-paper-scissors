//computer to return random rock paper scissor choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

const div = document.querySelector('div');
const computerSelection2 = document.createElement('div');
div.appendChild(computerSelection2);

//take user input and compare user input vs computer input and declare result
function playRound(playerSelection, computerSelection) {
    //make player's entry case insensitive
    computerSelection2.textContent = computerSelection;
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    let winner;
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        winner = 'computer';
        return winner;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        winner = 'player';
        return winner;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        winner = 'computer';
        return winner;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        winner = 'player';
        return winner;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        winner = 'computer';
        return winner;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        winner = 'player';
        return winner;
    } else {
        winner = 'No one';
        return winner;
    }
}

let playerWinTally = 0;
let computerWinTally = 0;
let gameWinner;
let roundResult;

const buttons = document.querySelectorAll('button');
buttons.forEach( button => {
    button.addEventListener('click', () => listenerAction(button, getComputerChoice()));
})

function listenerAction(button, computerSelection) {
    div.textContent = playRound(button.id, computerSelection);
    roundResult = div.textContent;
    tally(roundResult);
    gameWinner = declareWinner(playerWinTally, computerWinTally);
    console.log('Player selection: ' + button.id + ' Computer selection: ' + computerSelection);
    console.log('play1er tally is ' + playerWinTally + ' and computer tally ' + computerWinTally);
}

//count the number of wins each player has in 5 rounds
function tally(roundWinner) {
    if (roundWinner == 'player') {
        playerWinTally += 1;
    } else if (roundWinner == 'computer') {
        computerWinTally += 1;
    }
}

//check which of the two has more wins
function declareWinner(playerScore, computerScore) {
    if (playerScore == 5 && computerScore < 5) {
        const container = document.querySelector('#results');
        const divMessage = document.createElement('div');
        divMessage.textContent = 'The winner is the player!';
        container.append(divMessage);
        playerWinTally = 0;
        computerWinTally = 0;
        gameWinner = 'player';
        console.log(playerScore + ' ' + computerScore);
        return gameWinner;
    } else if (playerScore < 5 && computerScore == 5) {
        const container = document.querySelector('#results');
        const divMessage = document.createElement('div');
        divMessage.textContent = 'The winner is the computer!';
        container.append(divMessage);
        playerWinTally = 0;
        computerWinTally = 0;
        gameWinner = 'computer';
        console.log(playerScore + ' ' + computerScore);
        return gameWinner;
    } else if (playerScore == 5 && computerScore == 5){
        const container = document.querySelector('#results');
        const divMessage = document.createElement('div');
        divMessage.textContent = 'No one is the winner!';
        container.append(divMessage);
        playerWinTally = 0;
        computerWinTally = 0;
        gameWinner = 'No one';
        console.log(playerScore + ' ' + computerScore);
        return gameWinner;
    }
}