'use strict';
//global vars
let count = 19;
const randomNumber = Math.trunc(Math.random() * 20) + 1;
const guessedNumber = document.querySelector('.guess');
const messageToUser = document.querySelector('.message');
const displayScore = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const resetButton = document.querySelector('.again');

//functions
const tooLow = () => messageToUser.textContent = 'Number too low, Keep Trying';
const tooHigh = () => messageToUser.textContent = 'Number too high, Keep Trying';
const justRight = () => messageToUser.textContent = 'You guessed the number!!!';
const invalidInput = () => messageToUser.textContent = 'enter valid number';
const resetPage = () => console.log('page should reset');
const winner = () => {
  const displayWinningNumber = document.querySelector('.number');
  displayWinningNumber.textContent = randomNumber.toString();
};
const scoreKeeper = () => {
  let currentScore = displayScore.textContent = count.toString();
  count--;
  displayScore.textContent = currentScore;
};
console.log(randomNumber);
//game logic
let mess = () => {
  let guess = Number(guessedNumber.value);
  if (!guess || guess === 0) {
    invalidInput();
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
  }
};


//event listeners
checkButton.addEventListener('click', mess);
resetButton.addEventListener('click', resetPage);
