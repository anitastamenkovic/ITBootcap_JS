'use strict';

// 1. Napisati funkciju pozdrav kojoj se prosleđuje ime i prezime, a funkcija ispisuje pozdrav. Na primer za uneto ime Jelena i prezime Matejić, funkcija ispisuje Zdravo Jelena Matejić.

let pozdrav = (ime, prezime) => {
  console.log(`Zdravo ${ime} ${prezime}.`);
};

pozdrav('Jelena', 'Matejic');

// 2. Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.

// zbir
let zbir = (a, b) => {
  return a + b;
};

// moze i ovako
// let zbir = (a, b) => a + b;

console.log(zbir(3, 5));

// razlika
let razlika = (a, b) => {
  let res = a - b;
  return res;
};

console.log(razlika(8, 2));

// proizvod
let proizvod = (a, b) => {
  let res = a * b;
  return res;
};

console.log(proizvod(2, 7));

// kolicnik
let kolicnik = (a, b) => {
  let res = a / b;
  return res;
};

console.log(kolicnik(9, 2));

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

let neparan = n => {
  if (n % 2 != 0) {
    return true;
  } else {
    return false;
  }
};
console.log(neparan(6));

// drugi nacin
let neparan2 = n => (n % 2 == 1 ? true : false);
console.log(neparan2(5));

// treci nacin
let neparan3 = n => n % 2 == 1;
console.log(neparan3(6));

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
// prvi nacin
let maks2 = (n, m) => {
  if (n >= m) {
    return n;
  } else {
    return m;
  }
};
console.log(maks2(6, 12));

// drugi nacin
let maks3 = (n, m) => (n >= m ? n : m);
console.log(maks3(6, 12));

// prvi nacin
let maks5 = (a, b, c, d) => {
  let m1 = maks2(a, b);
  let m2 = maks2(c, d);
  let m3 = maks2(m1, m2);
  return m3;
};
console.log(maks5(3, 6, 8, 9));

// drugi nacin kratko
let maks6 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));
console.log(maks6(6, 12, 18, 29));

// treci nacin kratko
let maks7 = (a, b, c, d) => maks2(maks2(maks2(a, b), c), d);
console.log(maks7(6, 2, 8, 4));

// 5. Napraviti funkciju koja prikazuje sliku za prosledjenu adresu slike.

// prvi nacin
let slika = adresa => {
  document.body.innerHTML += `<img src="${adresa}">`;
};
slika('slika.jpg');

// drugi nacin
let slika2 = adresa => (document.body.innerHTML += `<img src="${adresa}">`);
slika2('slika.jpg');

// treci nacin
let slika3 = adresa => `<img src="${adresa}">`;
// let slika3 = adresa => return `<img src="${adresa}">`; moze i ovako
document.body.innerHTML += slika3('slika.jpg');

// 6. Napraviti funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

let obojenParagraf = boja => {
  document.body.innerHTML += `<p style="color: ${boja};">Tekst</p>`;
};

obojenParagraf('red');

// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”).
// Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?

let sedmiDan = n => {
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
};

sedmiDan(7);

// switch

let sedmiDan2 = n => {
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
};
sedmiDan2(7);

// 8. Napraviti funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m.
// Prebrojati koliko ima ovakvih brojeva od n do m.

let deljivSaTri = (n, m) => {
  let brojDeljivihSaTri = 0;
  for (let i = n; i <= m; i++) {
    if (i % 3 == 0) {
      brojDeljivihSaTri++;
    }
  }
  return brojDeljivihSaTri;
};

console.log(deljivSaTri(5, 12));

// 9. Napraviti funkciju sumiraj koja određuje sumu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

let sumiraj = (n, m) => {
  let suma = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
  }
  return suma;
};

console.log(sumiraj(2, 4));

// 10. Napraviti funkciju množi koja određuje proizvod brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

let mnozi = (n, m) => {
  let pro = 1;
  for (let i = n; i <= m; i++) {
    pro *= i;
  }
  return pro;
};

console.log(mnozi(2, 4));

// 11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m.
// Brojeve n i m proslediti kao parametre funkciji.

let aritmetickaSredina1 = (n, m) => {
  let suma = 0;
  let broj = 0;
  for (let i = n; i <= m; i++) {
    suma += i;
    broj++;
  }
  let as = suma / broj;
  return as;
};

console.log(aritmetickaSredina1(2, 5));

// 12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

let aritmetickaSredina2 = (n, m) => {
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
};

console.log(aritmetickaSredina2(10, 24));

// 13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

let tekstFont1 = a => {
  document.body.innerHTML += `<p style="font-size: ${a}px;">Tekst</p>`;
};

tekstFont1(32);

// 14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.

let tekstFont2 = n => {
  let brojac = 0;
  for (let i = n; i <= 100; i++) {
    if (brojac < 5) {
      document.body.innerHTML += `<p style="font-size: ${i}rem; color: green;">Tekst</p>`;
    }
    brojac++;
  }
};

tekstFont2(1);

// 15. Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.
//  Napišite funkciju kojoj se prosleđuju brojevi n i a. Funkcija treba da vrati vrednosti koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.
//  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).

let praksa = (n, a) => {
  let d = 50;
  let ukupnaZarada = n * a;
  for (let i = 0; i <= n; i++) {
    ukupnaZarada += i * d;
  }
  console.log(ukupnaZarada);
};
praksa(5, 500);

// 16. Na igrama bez granica, ekipi je postavljen zadatak da za što kraće vreme pređe stazu na kojoj se nalazi pokretni most. Takmičaru ove ekipe od polazne tačke do mosta treba t sekundi. Tačno p sekundi od kada takmičar može da krene sa polazne tačke (tj. od početka merenja) most počinje da se podiže. Od trenutka podizanja pa do spuštanja mosta protiče n sekundi i prelaz preko mosta za to vreme nije moguć. Nakon toga most ostaje spušten. Takmičari za čekanje kod mosta dobijaju negativne poene, pa je tim rešio da napravi program koji će im tačno odrediti u kojoj sekundi treba da pođu sa startne pozicije kako ne bi dobijali negativne poene. Pomozite timu da napravi funkciju na osnovu prosleđenih vrednosti t, p i n. Funkcija vraća koliko sekundi nakon početka merenja vremena treba da pođe, kako bi prošli poligon bez zaustavljanja.
// npr: t=15, p=20, n=25, čekanje je 0s
// npr: t=15, p=10, n=12, čekanje je 7s

// prvi nacin
let cekanje = (t, p, n) => {
  if (p >= t || p + n <= t) {
    return 0;
  } else {
    return Math.abs(p + n - t);
  }
};
// drugi nacin
let cekanje2 = (t, p, n) => (p > t ? 0 : Math.abs(p + n - t));

console.log(cekanje(15, 25, 0));
console.log(cekanje2(15, 10, 12));

// 17. Pilot želi da napravi program gde unosi vreme polatanja (sat poletanja između 0 i 23 i minut poletanja aviona između 0 i 59) i vreme sletanja aviona (sat sletanja između 0 i 23 i minut sletanja aviona između 0 i 59). Napisati funkciju kojoj se prosleđuje vreme poletanja i vreme sletanja aviona, a ona pilotu u konzoli ispisuje koliko časova i minuta je trajao njegov let. Pretpostaviti da su poletanje i sletanje aviona u istom danu i da je ispravno uneo vrednosti poletanja i sletanja.

function trajaoLet(satPoletanja, minutPoletanja, satSletanja, minutSletanja) {
  let poletanjeMinuti = satPoletanja * 60 + minutPoletanja;
  let sletanjeMinuti = satSletanja * 60 + minutSletanja;
  let letUkupnoMinuti = sletanjeMinuti - poletanjeMinuti;
  let letSati = Math.floor(letUkupnoMinuti / 60);
  let letMinuti = letUkupnoMinuti % 60;

  console.log(`Let je trajao ${letSati} sata i ${letMinuti} minuta.`);
}

trajaoLet(8, 15, 14, 20);
