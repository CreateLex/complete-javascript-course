'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosedModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  //openModel.classList.remove('hidden');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (let x = 0; x < btnOpenModal.length; x++) {
  btnOpenModal[x].addEventListener('click', openModal);
}

btnClosedModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

const btnClose = function (e) {
  closeModal();
};

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape') closeModal();
});
