const yes = document.querySelector('#yes');
const verifyPage = document.querySelector('.ageVerify');
let userInput = JSON.parse(localStorage.getItem('pass')) || false;

if (userInput) {
  verifyPage.classList.add('top');
}
yes.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  verifyPage.classList.add('top');
  userInput = true;
  localStorage.setItem('pass', userInput);
});
