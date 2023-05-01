const menuToggle = document.querySelector('#menuToggle input');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', () => {
  if (menuToggle.checked) {
    menu.classList.add('show');
  } else {
    menu.classList.remove('show');
  }
});