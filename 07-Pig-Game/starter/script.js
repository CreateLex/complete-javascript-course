'use strict';

const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentElement0 = document.getElementById('current--0');
const currentElement1 = document.getElementById('current--1');

// initializes variables and reset game
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;
diceElement.classList.add('hidden');
let currentScore = 0;

const btnRole = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');

btnRoll.addEventListener('click', function () {
  const MAXNUMBER = 6;
  const dice = Math.floor(Math.random() * MAXNUMBER + 1);

  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  if (dice !== 1) {
    // add to current score
    currentScore += dice;
    currentElement0.textContent = currentScore;
  } else {
    // switch to next player..
  }
});
