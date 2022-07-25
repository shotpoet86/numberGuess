'use strict';
//global vars
let count = 19;
const randomNumber = Math.trunc(Math.random() * 20) + 1;
const guessedNumber = document.querySelector('.guess');
const messageToUser = document.querySelector('.message');
const displayScore = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const resetButton = document.querySelector('.again');
const displayWinningNumber = document.querySelector('.number');
const highScore = document.querySelector('.highscore');
//functions
const tooLow = () => messageToUser.textContent = 'Number too low, Keep Trying';
const tooHigh = () => messageToUser.textContent = 'Number too high, Keep Trying';
const justRight = () => messageToUser.textContent = 'You guessed the number!!!';
const invalidInput = () => messageToUser.textContent = 'enter valid number';

const resetPage = () => {
  count = 19;
  displayScore.textContent = 20;
  displayWinningNumber.textContent = '?';
  messageToUser.textContent = 'Start guessing...';
};

const winner = () => {
  displayWinningNumber.textContent = randomNumber.toString();
};
const loser = () => {
  displayWinningNumber.textContent = randomNumber.toString();
  displayScore.textContent = 0;
  messageToUser.textContent = 'Did not guess the number, you lost...';
};
const scoreKeeper = () => {
  let currentScore = displayScore.textContent = count.toString();
  count--;
  displayScore.textContent = currentScore;
};
//game logic
console.log(randomNumber);
let mess = () => {
  console.log(count);
  let guess = Number(guessedNumber.value);
  if (!guess || guess === 0) {
    invalidInput();
  } else if (count <= 0) {
    loser();
  } else if (Number(guessedNumber.value) < randomNumber) {
    scoreKeeper();
    tooLow();
  } else if ((guessedNumber.value) > randomNumber) {
    scoreKeeper();
    tooHigh();
  } else {
    justRight();
    winner();
    scoreKeeper();
    checkButton.disabled = true;

  }
};


//event listeners
checkButton.addEventListener('click', mess);
resetButton.addEventListener('click', resetPage);
