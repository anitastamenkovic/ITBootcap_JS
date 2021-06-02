'use strict';
// 1. Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.

function pozdrav(ime, prezime) {
  console.log(`Zdravo ${ime} ${prezime}.`);
}

pozdrav('Jelena', 'Matejic');

// 2. Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

function zbir(a, b) {
  let res = a + b;
  return res;
}

let c = zbir(3, 5);
console.log(c);
// treba promeniti znak, umesto + staviti -, * ili /

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan(n) {
  if (n % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

let n = neparan(6);
console.log(n);

let m = 27;
if (neparan(m)) {
  console.log(`Broj ${m} je neparan.`);
} else {
  console.log(`Broj ${m} je paran.`);
}

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(n, m) {
  if (n >= m) {
    return n;
  } else {
    return m;
  }
}

console.log(maks2(6, 12));

function maks4(a, b, c, d) {
  let max = a;
  if (b > a && a > c && c > d) {
    max = b;
  } else if (c > a && a > b && b > d) {
    max = c;
  } else {
    max = d;
  }
  return max;
}

let veci2 = maks4(12, 23, 34, 45);
console.log(veci2);

// drugi nacin
function maks5(a, b, c, d) {
  let m1 = maks2(a, b);
  let m2 = maks2(c, d);
  let m3 = maks2(m1, m2);
  return m3;
}
console.log(maks5(3, 6, 8, 9));

// treci nacin
function maks6(a, b, c, d) {
  return maks2(maks2(a, b), maks2(c, d));
}
console.log(maks6(6, 12, 18, 29));

function maks7(a, b, c, d) {
  let m1 = maks2(a, b);
  let m2 = maks2(m1, c);
  let m3 = maks2(m2, d);
  return m3;
}
console.log(maks7(6, 2, 8, 4));

// 5. Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.

function slika(adresa) {
  document.body.innerHTML += `<img src="${adresa}">`;
}

slika('slika.jpg');

// 6. Napraviti funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function obojenParagraf(boja) {
  document.body.innerHTML += `<p style="color: ${boja};">Tekst</p>`;
}

obojenParagraf('red');

// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

function sedmiDan(n) {
  if (n % 7 == 0) {
    console.log(`Nedelja`);
  } else if (n % 7 == 1) {
    console.log(`Ponedeljak`);
  } else if (n % 7 == 2) {
    console.log(`Utorak`);
  } else if (n % 7 == 3) {
    console.log(`Sreda`);
  } else if (n % 7 == 4) {
    console.log(`Cetvrtak`);
  } else if (n % 7 == 5) {
    console.log(`Petak`);
  } else if (n % 7 == 6) {
    console.log(`Subota`);
  }
}

sedmiDan(7);

// switch
function sedmiDan2(n) {
  let ostatak = n % 7;
  switch (ostatak) {
    case 0:
      console.log(`Nedelja`);
      break;
    case 1:
      console.log(`Ponedeljak`);
      break;
    case 2:
      console.log(`Utorak`);
      break;
    case 3:
      console.log(`Sreda`);
      break;
    case 4:
      console.log(`Cetvrtak`);
      break;
    case 5:
      console.log(`Petak`);
      break;
    case 6:
      console.log(`Subota`);
      break;
    default:
      console.log(`Pogresan unos`);
      break;
  }
}
sedmiDan2(7);

// (function() {
//     var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

//     var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

//     Date.prototype.getMonthName = function() {
//         return months[ this.getMonth() ];
//     };
//     Date.prototype.getDayName = function() {
//         return days[ this.getDay() ];
//     };
// })();

// var now = new Date();

// var day = now.getDayName();
// var month = now.getMonthName();

// console.log(day, month);

// 8. Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

function deljivSaTri(n, m) {
  let brojDeljivihSaTri = 0;
  for (let i = n; i <= m; i++) {
    if (i % 3 == 0) {
      brojDeljivihSaTri++;
    }
  }
  return brojDeljivihSaTri;
}

console.log(deljivSaTri(5, 12));

// 9. Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function sumiraj(n, m) {
  let suma = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
  }
  return suma;
}

console.log(sumiraj(2, 4));

// 10. Napraviti funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
  let pro = 1;
  for (let i = n; i <= m; i++) {
    pro *= i;
  }
  return pro;
}

console.log(mnozi(2, 4));

// 11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

function aritmetickaSredina1(n, m) {
  let suma = 0;
  let broj = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
    broj++;
  }
  let as = suma / broj;
  return as;
}

console.log(aritmetickaSredina1(2, 5));

// 12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function aritmetickaSredina2(n, m) {
  let suma = 0;
  let broj = 0;
  for (let i = n; i <= m; i++) {
    if (i % 10 == 3) {
      suma += i;
      broj++;
    }
  }
  let as = suma / broj;
  return as;
}

console.log(aritmetickaSredina2(10, 24));

// 13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function tekstFont1(a) {
  document.body.innerHTML += `<p style="font-size: ${a}px;">Tekst</p>`;
}

tekstFont1(32);

// 14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.

function tekstFont2(n) {
  let brojac = 0;
  for (let i = n; i <= 100; i++) {
    if (brojac < 5) {
      document.body.innerHTML += `<p style="font-size: ${i}rem; color: green;">Tekst</p>`;
    }
    brojac++;
  }
}

tekstFont2(1);
