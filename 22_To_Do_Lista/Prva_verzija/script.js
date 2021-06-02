let sviLi = document.querySelectorAll('#toDoLista li');
for (let i = 0; i < sviLi.length; i++) {
  sviLi[i].addEventListener('click', () => {
    if (sviLi[i].style.textDecoration == 'line-through') {
      sviLi[i].style.textDecoration = 'none';
    } else {
      sviLi[i].style.textDecoration = 'line-through';
    }
  });
}
