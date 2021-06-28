'use strict';

let secreteNumber;
let score;
let guess;
let highscore = 0;
function initGame() {
  score = 20;
  secreteNumber = Number(Math.floor(Math.random() * 20) + 1);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start Guessing..';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';

  console.log(secreteNumber);
}

initGame();

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered';
  } else if (guess === secreteNumber) {
    // Turn Background  Color Green
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#008000';
    document.querySelector('.number').textContent = secreteNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      const bMessage = guess > secreteNumber ? 'Too High' : 'Too Low ';
      document.querySelector('.message').textContent = bMessage;
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lose';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  initGame();
});
