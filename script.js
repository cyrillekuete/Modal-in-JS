'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnCloseModal);

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });

  const closeModal =  function (){
    modal.classList.add('hidden');
overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.querySelector.addEventListener('keydown', function () {
    
})