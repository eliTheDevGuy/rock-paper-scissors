let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let round = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScoreH3 = document.querySelector('.playerScore');
const computerScoreH3 = document.querySelector('.computerScore');
let displayDiv = document.querySelector('.displayDiv');
let roundDiv = document.querySelector('.roundDiv');

rock.addEventListener('click', selectRock);
paper.addEventListener('click', selectPaper);
scissors.addEventListener('click', selectScissors);

function gameOver() {
    rock.removeEventListener('click', selectRock);
    paper.removeEventListener('click', selectPaper);
    scissors.removeEventListener('click', selectScissors);
}

function selectRock() {
    playerSelection = 'rock';
    playRound(playerSelection);
}

function selectPaper() {
    playerSelection = 'paper';
    playRound(playerSelection);
}

function selectScissors() {
    playerSelection = 'scissors';
    playRound(playerSelection);
}

function getComputerChoice() {
    let computerChoice  = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
        return 'rock';
    } else if (computerChoice === 2) {
        return 'paper';
    } else if (computerChoice === 3) {
        return 'scissors';
    }
}

function playRound(playerSelection) {
    round += 1;
    roundDiv.innerHTML = round;
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        displayDiv.innerHTML = `${playerSelection[0].toUpperCase() + playerSelection.slice(1)} vs ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} is a draw!`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore += 1;
        displayDiv.innerHTML = `You Win! Paper beats Rock`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore += 1;
        displayDiv.innerHTML = `You Lose! Scissors beats Paper`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore += 1;
        displayDiv.innerHTML = 'You Win! Rock beats Scissors';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore += 1;
        displayDiv.innerHTML = 'You Lose! Paper beats Rock';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore += 1;
        displayDiv.innerHTML = 'You Win! Scissors beats Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore += 1;
        displayDiv.innerHTML = 'You Lose! Rock beats Scissors';
    }

    playerScoreH3.innerHTML = playerScore;
    computerScoreH3.innerHTML = computerScore;

    if (playerScore === 5) {
        displayDiv.innerHTML = `Congratulations! You win the game.`;
        gameOver();
    } else if (computerScore === 5) {
        displayDiv.innerHTML = `Sorry... The Computer wins the game.`;
        gameOver();
    }
}