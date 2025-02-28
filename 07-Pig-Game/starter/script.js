'use strict';

const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentElement0 = document.getElementById('current--0');
const currentElement1 = document.getElementById('current--1');

const playerOneElement = document.querySelector('.player--0');
const playerTwoElement = document.querySelector('.player--1');

const score = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let isPlaying = true;

const init = function () {
  //reset aind init method
  score[0] = 0;
  score[1] = 0;
  activePlayer = 0;
  currentScore = 0;
  isPlaying = true;

  isPlaying = true;

  // reset current scoe
  currentElement0.textContent = 0;
  currentElement1.textContent = 0;

  //Remove Winner Height
  document.querySelector(`.player--0`).classList.remove(`player--winner`);
  document.querySelector(`.player--1`).classList.remove(`player--winner`);
  //Fixed Bug for removing player wiinner after win by adding remove player--0 and player--1 winners

  // remove background tap
  playerOneElement.classList.remove(`player-active`);
  playerOneElement.classList.add(`player--active`);

  // Switch Active Player
  activePlayer = 0;

  // current score reset
  currentScore = 0;

  score[0] = 0;
  score[1] = 0;

  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;

  // Hide Dice
  diceElement.classList.add('Hidden');
};

init();
// initializes variables and reset game
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;
diceElement.classList.add('hidden');

const btnRole = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');

const switchPlayer = function () {
  // switch to next player..

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;

  // Toogle method for switching background collor
  playerOneElement.classList.toggle('player--active');
  playerTwoElement.classList.toggle('player--active');

  //toogle

  //reset both current scores to 0;
  currentElement0.textContent = 0;
  currentElement1.textContent = 0;
};

btnRoll.addEventListener('click', function () {
  if (isPlaying) {
    const MAXNUMBER = 6;
    const dice = Math.floor(Math.random() * MAXNUMBER + 1);

    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    //starts on player 1
    //

    if (dice !== 1) {
      // add to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (isPlaying) {
    console.log(`hold`);
    // Add player score
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 20) {
      isPlaying = false;
      diceElement.classList.add(`hidden`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
