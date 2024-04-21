const navElement = document.querySelector('.modal-container');
const buttonElement = document.querySelector('.button-modal');

buttonElement.addEventListener('click', () => {
  navElement.classList.remove('modal-container-close');
});
