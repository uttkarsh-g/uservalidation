const yes = document.querySelector('#yes');
const no = document.querySelector('#no');
const verifyPage = document.querySelector('.ageVerify');
let userInput = JSON.parse(localStorage.getItem('pass')) || false;

const sixHour = 1 * 60 * 60 * 1000;
const timeNew = localStorage.getItem('time');
if (Date.now() - parseInt(timeNew) > sixHour) {
  localStorage.removeItem('time');
  localStorage.removeItem('pass');
}

yes.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  verifyPage.classList.add('top');
  userInput = true;
  localStorage.setItem('pass', JSON.stringify(userInput));
  localStorage.setItem('time', Date.now().toString());
});
if (userInput) verifyPage.classList.add('invi');

no.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  verifyPage.innerText = 'You are not adult enough to visit this site 🤨';
});
