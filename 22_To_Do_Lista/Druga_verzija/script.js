// DOM
let ulZadaci = document.querySelector('ul');
let liZadaci = document.querySelectorAll('li');
let inputNoviZadatak = document.querySelector('#unesi');
// let btnDodaj = document.querySelector('#dodaj');
let radioDodajNaPocetak = document.querySelector('#dodajNaPocetak');

// 1. NAČIN
// Kada dodamo novi LI neće raditi jer taj novi LI neće imati event listener koji je vezan na njega
// liZadaci.forEach(li => {
//     li.addEventListener('click', e => {
//         console.log(e);
//         console.log(e.target);
//         e.target.remove();
//     });
// });

// 2. NAČIN
ulZadaci.addEventListener('click', e => {
  console.log('Kliknuto na UL');
  if (e.target.tagName == 'LI') {
    console.log('Kliknuto na LI');
    e.target.remove();
  }
});

inputNoviZadatak.addEventListener('keyup', e => {
  if (e.keyCode == 13) {
    let noviZadatak = inputNoviZadatak.value;

    if (noviZadatak == '' || noviZadatak == null) {
      alert('Morate uneti novi zadatak');
    } else {
      let liNoviZadatak = document.createElement('li');
      liNoviZadatak.textContent = noviZadatak;
      if (radioDodajNaPocetak.checked) {
        ulZadaci.prepend(liNoviZadatak);
      } else {
        ulZadaci.appendChild(liNoviZadatak);
      }
    }

    inputNoviZadatak.value = '';
  }
});
