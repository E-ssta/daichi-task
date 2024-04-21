const navElement = document.querySelector('.description-text');
const buttonElement = document.querySelector('.description__wrapper');
const svgElement = document.querySelector('.description-title__svg');

navElement.classList.add('description-text--closed');
svgElement.classList.add('description-title__svg--closed');

buttonElement.addEventListener('click', () => {
  if (navElement.classList.contains('description-text--closed')) {
    navElement.classList.add('description-text--opened');
    navElement.classList.remove('description-text--closed');
    svgElement.classList.add('description-title__svg--opened');
    svgElement.classList.remove('description-title__svg--closed');
  } else {
    navElement.classList.add('description-text--closed');
    navElement.classList.remove('description-text--opened');
    svgElement.classList.add('description-title__svgt--closed');
    svgElement.classList.remove('description-title__svg--opened');
  }
});
