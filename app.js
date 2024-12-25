const yes = document.querySelector('#yes');
const verifyPage = document.querySelector('.ageVerify');
yes.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  verifyPage.classList.add('top');
});
