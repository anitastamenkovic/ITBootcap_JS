// 2. Odrediti zbir elemenata celobrojnog niza.
a = [1, 2, 3, 4, 5];
let zbirNiza = niz => {
  let suma = 0;
  niz.forEach(e => {
    suma += e;
  });
  return suma;
};

console.log(zbirNiza(a));

// 3. Odrediti proizvod elemenata celobrojnog niza.
a = [1, 2, 3, 4, 5];
let proNiza = niz => {
  let proizvod = 1;
  niz.forEach(e => {
    proizvod *= e;
  });
  return proizvod;
};

console.log(proNiza(a));

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
a = [1, 2, 3, 4, 5];
let srVrNiza = niz => {
  let suma = 0;
  niz.forEach(e => {
    suma += e;
  });
  return suma / niz.length;
};

console.log(srVrNiza(a));

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.
a = [1, 2, 3, 4, 5];
let maxNiz = niz => {
  let max = niz[0];
  niz.forEach(e => {
    if (e > max) {
      max = e;
    }
  });
  return max;
};

console.log(maxNiz(a));

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.
a = [1, 2, 3, 4, 5];
let minNiz = niz => {
  let min = niz[0];
  niz.forEach(e => {
    if (e < min) {
      min = e;
    }
  });
  return min;
};

console.log(minNiz(a));

// Napisati funkciju koja vraca broj elemenata sa max vrednoscu i min vrednoscu

let c = [1, 3, 1, 5, -15, 45, -15, 45];

// funkcija za broj max elemenata niza
let brojMax = niz => {
  let max = maxNiz(niz);
  let broj = 0;
  niz.forEach(elem => {
    if (elem == max) {
      broj++;
    }
  });
  return broj;
};

// funkcija za broj min elemenata niza
let brojMin = niz => {
  let min = minNiz(niz);
  let broj = 0;
  niz.forEach(elem => {
    if (elem == min) {
      broj++;
    }
  });
  return broj;
};

// callback funkcija za broj max i min elemenata niza
let brojSvojstvoNiz = (niz, callback) => {
  let s = callback(niz);
  let broj = 0;
  niz.forEach(elem => {
    if (elem == s) {
      broj++;
    }
  });
  return broj;
};
console.log(`Broj elemenata sa max vrednoscu ${brojSvojstvoNiz(c, maxNiz)}`);
console.log(`Broj elemenata sa min vrednoscu ${brojSvojstvoNiz(c, minNiz)}`);

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.
a = [1, 2, 3, 4, 5];
let inkeksMax = niz => {
  let max = niz[0];
  let index = 0;
  niz.forEach((e, i) => {
    if (e > max) {
      max = e;
      index++;
    }
  });
  return `Indeks maksimalnog elementa ${max} je ${index}.`;
};

console.log(inkeksMax(a));

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.

a = [1, 2, 3, 4, 5];
let inkeksMin = niz => {
  let min = niz[0];
  let index = 0;
  niz.forEach((e, i) => {
    if (e < min) {
      min = e;
      index++;
    }
  });
  return `Indeks mainimalnog elementa ${min} je ${index}.`;
};

console.log(inkeksMin(a));

// 16 Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let kupovina1 = ['voce', 'povrce', 'mleko', 'jaja'];

let kupovina = niz => {
  let lista = `<ul>`;
  niz.forEach(e => {
    lista += `<li>${e}</li>`;
  });
  lista += `</ul>`;
  return (document.body.innerHTML += lista);
};

kupovina(kupovina1);

// 17 Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.

let clanoviTima = ['Aca', 'Mika', 'Pera', 'Zika'];

let clanoviTima2 = niz => {
  let tabela = `<table>`;
  niz.forEach(e => {
    tabela += `<tr><td>${e}</td></tr>`;
  });
  tabela += `</table>`;
  return (document.body.innerHTML += tabela);
};

clanoviTima2(clanoviTima);

// 18 Dat je niz stringova čiji su članovi putanje do slika. Prikazati sve sliku u html dokumentu sa putanjama navedenim u nizu.
let slike = ['1.jpg', '2.jpg', '3.jpg'];

let slika = niz => {
  niz.forEach(e => {
    document.body.innerHTML += `<img src="${e}">`;
  });
};

slika(slike);

// 20 Odrediti element u nizu stringova sa najvećom dužinom.
let imena = ['Ana', 'Ema', 'Stefan', 'Jelena', 'Vladimir', 'Milijana'];

// max vrednost
let maxDuzinaNiza = niz => {
  let maxDuzina = niz[0].length;
  niz.forEach(e => {
    if (e.length > maxDuzina) {
      maxDuzina = e.length;
    }
  });
  return maxDuzina;
};

console.log(maxDuzinaNiza(imena));

// let ispisStringaMaxDuzina = niz => {
//  let md = maxDuzinaNiza(niz);
//  niz.forEach (e => {
//   if(e.length == md){
//    console.log(e);
//   };
//  })
// }

// ispisStringaMaxDuzina(imena);

// min vrednost
let minDuzinaNiza = niz => {
  let minDuzina = niz[0].length;
  niz.forEach(e => {
    if (e.length < minDuzina) {
      minDuzina = e.length;
    }
  });
  return minDuzina;
};

console.log(minDuzinaNiza(imena));

// let ispisStringaMinDuzina = niz => {
//  let md = minDuzinaNiza(niz);
//  niz.forEach (e => {
//   if(e.length == md){
//    console.log(e);
//   };
//  })
// }

// ispisStringaMinDuzina(imena);

// callback funcija umesto pojadinacnih funckija
let ispisStringSvojstvo = (niz, callback) => {
  let md = callback(niz);
  // prosledjuje se kao varijabla
  niz.forEach(e => {
    if (e.length == md) {
      console.log(e);
    }
  });
};

ispisStringSvojstvo(imena, maxDuzinaNiza);
// maxDuzinaNiza je callback funkcija
ispisStringSvojstvo(imena, minDuzinaNiza);
// minDuzinaNiza je callback funkcija

// 24
// prvi nacin
let zad24 = (a, b) => {
  let n = a.length;
  let c = [];
  // ili n = b.length jer su iste duzine
  for (let i = 0; i < n; i++) {
    c.push(a[i]);
    c.push(b[i]);
  }
  return c;
};

a = [3, -9, 3, 1];
let b = [2, 5, 7, -5];

c = zad24(a, b);
console.log(c);

// drugi nacin
let zad24b = (a, b) => {
  let n = a.length;
  let c = [];
  for (let i = 0; i < n; i++) {
    c[2 * i] = a[i];
    c[2 * i + 1] = b[i];
  }
};

c = zad24b(a, b);
console.log(c);

// treci nacin
let zad24c = (a, b) => {
  let n = a.length;
  let c = [];
  let j = 0;
  for (let i = 0; i < n; i++) {
    c[j++] = a[i];
    c[j++] = b[i];
  }
};

console.log(zad24c(a, b));

// 25
// prvi nacin
let zad25 = (a, b) => {
  let n = a.length;
  let c = [];
  for (let i = 0; i < n; i++) {
    c[i] = a[i] * b[i];
  }
  return c;
};

console.log(zad25(a, b));

// 26
a = [1, 2, 3, 4, 5, 6];
let zad26 = a => {
  let n = a.length;
  let b = [];
  for (let i = 0; i < n / 2; i++) {
    b[i] = (a[i] + a[n - 1 - i]) / 2;
  }
  return b;
};

console.log(zad26(a));
