'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const closeModal = function () {
  modal.classList.add('hidden'); // add 'hidden ' property of the "<div class="modal hidden">"
  overlay.classList.add('hidden'); //add 'hidden' property of the overlay
};

const openModal = function () {
  modal.classList.remove('hidden'); // remove 'hidden ' property of the "<div class="modal hidden">"
  overlay.classList.remove('hidden'); //reove 'hidden' property of the overlay
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  // same functionality for all the 3 buttons
  btnsOpenModal[i].addEventListener('click', openModal);
  /*btnsOpenModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden'); // remove 'hidden ' property of the "<div class="modal hidden">"
    overlay.classList.remove('hidden'); //reove 'hidden' property of the overlay
  });
  */
}

//close window when use clicks on close button

//instead of below code, defined 'closeModal' function above and use foloiwng single line
/*btnCloseModel.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});*/
btnCloseModel.addEventListener('click', closeModal);

//Also close window when use clicks outside of the modal window (on the overlay)
overlay.addEventListener('click', closeModal); //'closeModal' is a function defined above

//responding to Key events
document.addEventListener('keydown', function (e) {
  console.log(e); // shows lots of information about the pressed key
  if (e.key === 'Escape' && !modal.classList.contains('hidden'))
    // close window if modal is not hidden
    closeModal();
});
