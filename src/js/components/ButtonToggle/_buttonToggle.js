document.addEventListener('DOMContentLoaded',() => {

  const button  = document.querySelector('.button');

  button.addEventListener('click', event => {
    event.preventDefault();

    let text = document.querySelector('p');
    text.classList.remove('v-hidden');
  });
});

