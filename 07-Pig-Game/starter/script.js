'use strict';


const scoreElement0 = document.querySelector('#score--0');
const scoreElement1 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');


// initializes variables and reset game
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;
diceElement.classList.add('hidden');



const btnRole = document.querySelector('.btn--roll');
const diceImage = document.querySelector('.dice');

btnRole.addEventListener('click', function () {

    const MAXNUMBER = 6;
    const randomNumber = Math.floor((Math.random() * MAXNUMBER) + 1);
    console.log(diceImage.getElementsByClassName('dice'));
});
