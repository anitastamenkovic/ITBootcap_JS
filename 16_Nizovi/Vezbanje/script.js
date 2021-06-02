// 1. Ispisati sve elemente niza od 5 stringova.

let ime = ['Marija', 'Petar', 'Jelena', 'Stefan', 'Ana'];
for (let i = 0; i < ime.length; i++) {
  console.log(ime[i]);
}

// 2. Odrediti zbir elemenata celobrojnog niza.

let brojevi = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < brojevi.length; i++) {
  suma += brojevi[i];
}

console.log(suma);

// 3. Odrediti proizvod elemenata celobrojnog niza.

brojevi = [1, 2, 3, 4, 5];
let proizvod = 1;
for (let i = 0; i < brojevi.length; i++) {
  proizvod *= brojevi[i];
}

console.log(proizvod);

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.

brojevi = [1, 2, 3, 4, 5];
suma = 0;
let brojac = 0;
for (let i = 0; i < brojevi.length; i++) {
  suma += brojevi[i];
  brojac++;
}

console.log(suma / brojac);

// drugi nacin
let assr = suma / brojevi.length;

// treci nacin preko funkcije
let aritmeticka = niz => {
  suma = 0;
  let br = 0;
  for (let i = 0; i < niz.length; i++) {
    suma += niz[i];
    br++;
  }
  return suma / br;
};

console.log(aritmeticka([2, 3, 4, 5]));
console.log(aritmeticka(brojevi));

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.

brojevi = [12, 3, 5, 78, 34];

brojevi.sort(function (a, b) {
  return a - b;
});
console.log(brojevi);

console.log(brojevi[brojevi.length - 1]);

// drugi nacin
let max = brojevi[0];
for (let i = 0; i < brojevi.length; i++) {
  if (max < brojevi[i]) {
    max = brojevi[i];
  }
}
console.log(max);

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.

brojevi = [12, 3, 5, 78, 34];
brojevi.sort(function (a, b) {
  return a - b;
});
console.log(brojevi);
console.log(brojevi[0]);

// drugi nacin
let min = brojevi[0];
for (let i = 0; i < brojevi.length; i++) {
  if (min > brojevi[i]) {
    min = brojevi[i];
  }
}
console.log(min);

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.

brojevi = [12, 3, 5, 78, 34];

let poredjano = brojevi.sort(function (a, b) {
  return a - b;
});
console.log(poredjano);
let maks = poredjano[poredjano.length - 1];
console.log(maks);
console.log(brojevi.indexOf(maks));

// drugi nacin
let index = 0;
let max = brojevi[0];
for (let i = 0; i < brojevi.length; i++) {
  if (max == brojevi[i]) {
    index = i;
    // console.log(index); ovako bi ispisao sve indekse
    break;
    // ukoliko ima vise istih brojeva bez break ispisace poslednji, a ako ima break prvi na koji je naisao
  }
}

console.log(index);

// treci nacin
let max1 = brojevi[0];
// ako bismo napisali 0 onda ne bi valjalo
let maxIndex = 0;
for (let i = 0; i < brojevi.length; i++) {
  if (max1 <= brojevi[i]) {
    // <= daje poslednji index, dok < daje prvi index
    max1 = brojevi[i];
    maxIndex = i;
  }
}
console.log(max1, maxIndex);

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.

brojevi = [12, 3, 5, 78, 34];

let poredjano2 = brojevi.sort(function (a, b) {
  return a - b;
});
console.log(poredjano2);

console.log(poredjano2[0]);
console.log(brojevi.indexOf(3));

// drugi nacin
index = 0;
for (let i = 0; i < brojevi.length; i++) {
  if (min == brojevi[i]) {
    index = i;
    break;
  }
}

console.log(index);

// treci nacin
let min1 = brojevi[0];
// ako bismo napisali 0 onda ne bi valjalo
let minIndex = 0;
for (let i = 0; i < brojevi.length; i++) {
  if (min1 >= brojevi[i]) {
    // >= daje poslednji index, dok > daje prvi index
    min1 = brojevi[i];
    minIndex = i;
  }
}
console.log(min1, minIndex);

// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

brojevi = [1, 2, 3, 4, 5];
as = 0;
brojac = 0;
for (let i = 0; i < brojevi.length; i++) {
  as += brojevi[i];
  brojac++;
}
let srednjaVrednost = as / brojac;
console.log(srednjaVrednost);

brojac = 0;
for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] > srednjaVrednost) {
    brojac++;
  }
}

console.log(brojac);

// drugi nacin
assr = suma / brojevi.length;
brojac = 0;
for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] > assr) {
    brojac++;
  }
}
console.log(brojac);

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.

brojevi = [-2, -5, 3, 5, 9];
suma = 0;
for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] > 0) {
    suma += brojevi[i];
  }
}

console.log(suma);

//  11. Odrediti broj parnih elemenata u celobrojnom nizu.

brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
brojac = 0;
for (let i = 0; i < brojevi.length; i++) {
  if (brojevi[i] % 2 == 0) {
    brojac++;
  }
}

console.log(brojac);

// 12. Odrediti broj parnih elemenata sa neparnim indeksom.

let nizBrojeva = [10, 16, 15, 17, 12, -14];
let brojElem = 0;
for (let i = 0; i < nizBrojeva.length; i++) {
  // element nizBrojeva[i]
  // index i
  if (nizBrojeva[i] % 2 == 0 && i % 2 != 0) {
    brojElem++;
  }
}

console.log(brojElem);

// 13. Izračunati sumu elemenata niza sa parnim indeksom.
nizBrojeva = [10, 16, 15, 17, 12, -14];
suma = 0;
for (let i = 0; i < nizBrojeva.length; i++) {
  if (i % 2 == 0) {
    suma += nizBrojeva[i];
  }
}

console.log(suma);

// 14. Promeniti znak svakom elementu celobrojnog niza.
// promena znaka
let a = 5;
a *= -1;
console.log(a);

nizBrojeva = [10, 16, 15, 17, 12, -14];
for (let i = 0; i < nizBrojeva.length; i++) {
  console.log((nizBrojeva[i] *= -1));
}

// 15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
nizBrojeva = [10, 16, 15, 17, 12, -14];
for (let i = 0; i < nizBrojeva.length; i++) {
  if (nizBrojeva[i] % 2 == 0 && i % 2 != 0) {
    console.log((nizBrojeva[i] *= -1));
  }
}

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let kupovina = ['secer', 'kafa', 'so', 'povrce', 'voce'];

kupovina[0] = 'sok';
// ovde ce zameniti i ispisati

let lista = `<ul>`;
for (let i = 0; i < kupovina.length; i++) {
  lista += `<li>${kupovina[i]}</li>`;
}
lista += `</ul>`;

kupovina[0] = 'hleba';
// ovde ce promeniti, ali nece ispisati

document.body.innerHTML += lista;

// 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.
let imenaTima = ['Aca', 'Pera', 'Mika', 'Jovan', 'Milan'];
let tabela = '<table>';
for (let i = 0; i < imenaTima.length; i++) {
  tabela += `<tr><td>${imenaTima[i]}</td></tr>`;
}
tabela += '</table>';
document.body.innerHTML += tabela;

// 18. Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.

slike = ['1.jpg', '2.jpg', '3.jpg'];
let slika = ' ';
for (let i = 0; i < slike.length; i++) {
  slika += `<img src="${slike[i]}">`;
}

document.body.innerHTML += slika;

// 19. Ispisati dužinu svakog elementa u nizu stringova.

let imena = ['Aca', 'Pera', 'Milan', 'Jugoslav', 'Teodosije'];
for (let i = 0; i < imena.length; i++) {
  console.log(imena[i].length);
}

// 20. Odrediti element u nizu stringova sa najvećom dužinom.
imena = ['Aca', 'Pera', 'Milan', 'Jugoslav', 'Teodosije'];
let najvecaDuzina = imena[0].length;
ime = imena[0];
for (let i = 0; i < imena.length; i++) {
  if (imena[i].length > najvecaDuzina) {
    najvecaDuzina = imena[i].length;
    ime = imena[i];
  }
}

console.log(ime);

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
// primer za jednu rec
let rec = 'abcdefg';
console.log(rec.length);
console.log(rec[0]);
console.log(rec[5]);
for (let i = 0; i < rec.length; i++) {
  console.log(rec[i]);
}

imena = ['Aca', 'Pera', 'Milan', 'Jugoslav', 'Teodosije'];
suma = 0;
broj = 0;
for (let i = 0; i < imena.length; i++) {
  suma += imena[i].length;
  broj++;
}

as = suma / broj;
//  ili as = suma / imena.length onda nema brojaca

broj = 0;
for (let i = 0; i < imena.length; i++) {
  if (imena[i].length > as) {
    broj++;
  }
}

console.log(broj);

// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’.
// prvi nacin
imena = ['Aca', 'Pera', 'Milan', 'Jugoslav', 'Teodosije'];

broj = 0;
for (let i = 0; i < imena.length; i++) {
  let ime = imena[i];
  for (let j = 0; j < ime.length; j++) {
    if (ime[j] == 'a' || ime[j] == 'A') {
      broj++;
      break;
      // obavezno koristiti break jer ce brojati sva slova a    ili    j = ime.lenght
    }
  }
}
console.log(broj);

// drugi nacin
// rec.includes("a") vraca true ako sadrzi slovo a u suprotnom false
let brsaA = 0;
for (let i = 0; i < imena.length; i++) {
  let rec = imena[i];
  if (rec.includes('a') || rec.includes('A')) {
    brsaA++;
  }
}

console.log(brsaA);

// 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’.
imena = ['Aca', 'Pera', 'Milan', 'Jugoslav', 'Teodosije', 'Ana'];

broj = 0;
for (let i = 0; i < imena.length; i++) {
  let ime6 = imena[i];
  if (ime6[0] == 'a' || ime6[0] == 'A') {
    broj++;
    break;
  }
}

console.log(broj);

// 24

a = [0, 2, 4, 6];
let b = [1, 3, 5, 7];
let c = [];

for (let i = 0; i < a.length; i++) {
  let x = a[i];
  let y = b[i];
  c.push(x);
  c.push(y);
}

console.log(c);

// 25
let d = [];
for (let i = 0; i < a.length; i++) {
  let x = a[i];
  let y = b[i];
  let z = x * y;
  d.push(z);
}

console.log(d);

// 26
a = [1, 2, 3, 4, 5];
b = [];
let j = a.length;
for (let i = 0; i < j / 2; i++) {
  b[i] = (a[i] + a[j - i - 1]) / 2;
}

console.log(b);
