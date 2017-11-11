document.addEventListener('DOMContentLoaded',() => {

  const button  = document.querySelector('.button');
  const input = document.querySelector('.input');
  const text = document.querySelector('p');
  let name = 'Некто';

  button.addEventListener('click', event => {
    event.preventDefault();

    text.classList.toggle('v-hidden');
    changeName();
  });

  input.addEventListener('input', event => {
      name = event.target.value;
      changeName();
  });

  function changeName() {
    text.innerText = 'Привет' + ' ' + name;
  }

});

