let startbtn = document.querySelector('#start');
let stopbtn = document.querySelector('#stop');
let resetbtn = document.querySelector('#reset');
let input = document.querySelector('#input');

let clock = null;
input.value = 1;

startbtn.addEventListener('click', () => {
  if (clock === null) {
    clock = setInterval(() => {
      input.value++;
    }, 1000);
  }
});

stopbtn.addEventListener('click', () => {
  clearInterval(clock);
  clock = null;
});

resetbtn.addEventListener('click', () => {
  input.value = '';
});
