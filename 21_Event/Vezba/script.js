// 1. Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br.
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
let btnBrojac = document.querySelector('#brojac');
let br = 0;
btnBrojac.addEventListener('click', () => {
  br++;
  console.log(br);
});

//  2. Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.
let btnBrojac1 = document.querySelector('#brojac1');
let pIspisBrojaca1 = document.querySelector('#ispisBrojaca1');

let br1 = 0;
pIspisBrojaca1.innerHTML = br1;

btnBrojac1.addEventListener('click', () => {
  br1++;
  pIspisBrojaca1.innerHTML = br1;
});

// 3. Napraviti dugme + i dugme -.
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
// 4.  Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

let dugmePlus = document.querySelector('#btnDodaj');
let dugmeMinus = document.querySelector('#btnOduzmi');
let ispisSpan = document.querySelector('#upisiBroj');

let broj3 = 0;
ispisSpan.innerHTML = broj3;

dugmePlus.addEventListener('click', () => {
  ispisSpan.style.color = 'black';
  broj3++;
  ispisSpan.innerHTML = broj3;
});

dugmeMinus.addEventListener('click', () => {
  ispisSpan.style.color = 'black';
  broj3--;
  if (broj3 < 0) {
    broj3 = 0;
    ispisSpan.style.color = 'blue';
  }
  ispisSpan.innerHTML = broj3;
});

// 5. Napraviti input polje i dugme.
// U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
let inputPolje = document.querySelector('#polje');
let zdravobtn = document.querySelector('#zdravoDugme');
let zdravoP = document.querySelector('#zdravoParagraf');
zdravoP.textContent = 'Pozdravni paragraf';
zdravoP.style.color = 'black';

zdravobtn.addEventListener('click', () => {
  let upisanoIme = inputPolje.value;
  zdravoP.textContent = `Zdravo ${upisanoIme}!`;
  zdravoP.style.color = 'blue';
});

// 6. Dopuniti 5. zadatak dodavanjem eventa i proizvoljnog alert-a, kada se klikne dva puta na dugme.
zdravobtn.addEventListener('dblclick', () => {
  let upisanoIme = inputPolje.value;
  window.alert(`Zdravo ${upisanoIme}!`);
});

// 5. ZADATAK - drugi način
let inputPrezime = document.getElementById('prezime');
let btnPosaljiPrezime = document.getElementById('posaljiPrezime');
let pPrikaziPrezime = document.getElementById('prikaziPrezime');

btnPosaljiPrezime.addEventListener('click', e => {
  e.preventDefault();
  console.log(e);
  pPrikaziPrezime.innerHTML = `Uneli ste prezime ${inputPrezime.value}`;
  inputPrezime.value = '';
});

// PRIMER
let forma = document.getElementById('forma');
let inputJelo = document.getElementById('jelo');
let inputPice = document.getElementById('pice');
let pIspis = document.getElementById('ispis');

forma.addEventListener('submit', e => {
  e.preventDefault();
  pIspis.innerHTML = `<ul>
        <li>Omiljeno jelo: ${inputJelo.value}</li>
        <li>Omiljeno piće: ${inputPice.value} </li>
    </ul>`;
  forma.reset(); // resetuje sva polja u formi na koju se odnosi
});

// 7. Napraviti sledeću formu i rezultat računanja ispisati u paragrafu ispod nje.
let kvadrirajInput = document.querySelector('#inputKvadrat');
let Kvadrirajbtn = document.querySelector('#btnKvadrat');
let prviIspis = document.querySelector('#ispisRezultata1');

let prepoloviInput = document.querySelector('#inputPrepolovi');
let prepolovibtn = document.querySelector('#btnPrepolovi');
let drugiIspis = document.querySelector('#ispisRezultata2');

let krugInput = document.querySelector('#inputKrug');
let krugbtn = document.querySelector('#btnKrug');
let treciIspis = document.querySelector('#ispisRezultata3');

Kvadrirajbtn.addEventListener('click', e => {
  e.preventDefault();
  let prviBroj = kvadrirajInput.value;
  prviIspis.innerHTML = Number(prviBroj ** 2);
});

prepolovibtn.addEventListener('click', e => {
  e.preventDefault();
  let drugiBroj = prepoloviInput.value;
  drugiIspis.innerHTML = Number(drugiBroj / 2);
});

krugbtn.addEventListener('click', e => {
  e.preventDefault();
  let treciBroj = krugInput.value;
  treciIspis.innerHTML = Number(treciBroj ** 2 * Math.PI);
});
