// function test() {
//   console.log(`Pozvana je funkcija test`);
// }
// // Ako ima parametre mora i pomocna
// function fjaSaParametrom(par1, par2) {
//   console.log(`Nesto radim sa parametrima`);
// }
// // Pomocna funkcija
// function pomocnaFja() {
//   fjaSaParametrom(par1, par2);
// }

// console.log(`Prva linija koda`);
// console.log(`Druga linija koda`);
// // moze i ovako window.setTimeout();
// setTimeout(test, 3000);
// // test je callback funkcija
// console.log(`Cetvrta linija koda`);
// console.log(`Peta linija koda`);

/*
let datum = {
    kisa: false,
    sunce: true,
    datum: '2021/05/31',
    neobicanDan: function() {
        this  // this je u anonimnoj f-ji objekat koji je pozvao tu metodu
    },
    neobicanDan: () => {
        this.sunce (window.sunce) // this je u arrow f-ji window objekat
    }
}
*/

////////////////////////////////
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

// anonimna callback fja
btn1.addEventListener('click', function () {
  console.log(this);
  // btn1
});

// arrow callback funcija
btn2.addEventListener('click', () => {
  console.log(this);
  // window
});

// imenovana callback fja - najslabije se koristi
btn3.addEventListener('click', klik);

function klik() {
  console.log(this);
}

klik();

////////////////////////////////
// Klikom na dugme ispisati tekst u divu
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let divIspis = document.getElementById('ispis');
let clock = null;

b1.addEventListener('click', () => {
  if (clock === null) {
    clock = setTimeout(function () {
      let datum = new Date();
      let sati = datum.getHours();
      let minuti = datum.getMinutes();
      let sekundi = datum.getSeconds();
      divIspis.innerHTML += `${sati} : ${minuti} : ${sekundi}  `;
      clock = null;
    }, 1000);
  }
});

b2.addEventListener('click', () => {
  clearTimeout(clock);
  clock = null;
});

//////////////////////////////////
// setInterval

// let clockInterval = null;

// console.log(`Prva linija koda`);
// console.log(`Druga linija koda`);
// clockInterval = setInterval(() => {
//   console.log(`Poziv callback fje`);
// }, 1000);
// // 1000 / 3 3x u sekundi
// console.log(`Cetvrta linija koda`);
// console.log(`Peta linija koda`);

// setTimeout(() => {
//   clearInterval(clockInterval);
// }, 5000);
// // 1000 * 5

// console.log(`Sedma linija koda`);
// console.log(`Osma linija koda`);

//////////////////////////

let b3 = document.getElementById('b3');
let b4 = document.getElementById('b4');
let divIspis2 = document.getElementById('ispis2');
let clock2 = null;

b3.addEventListener('click', () => {
  if (clock2 === null) {
    clock2 = setInterval(() => {
      let datum = new Date();
      let sati = datum.getHours();
      let minuti = datum.getMinutes();
      let sekundi = datum.getSeconds();
      divIspis2.innerHTML = `${sati} : ${minuti} : ${sekundi}`;
    }, 1000);
  }
});

b4.addEventListener('click', () => {
  clearInterval(clock2);
  clock2 = null;
});

////////////////////////////////////////
