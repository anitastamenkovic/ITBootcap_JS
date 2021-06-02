let blog = {
  title: 'Funkcije',
  likes: 21,
  dislikes: 1,
};

let blogs = [
  { title: 'Nizovi', likes: 16, dislikes: 5 },
  { title: 'Grananje', likes: 14, dislikes: 0 },
];

console.log(blogs);

//////////////////////////////////

let blog1 = {
  title: 'Musaka od tikvica',
  likes: 105,
  dislikes: 67,
};

let blog2 = {
  title: 'Lazanja!',
  likes: 236,
  dislikes: 13,
};

let blog3 = {
  title: 'Zapecena boranija!',
  likes: 60,
  dislikes: 78,
};

let blogsArr = [blog1, blog2, blog3];

// Ispis objekata iz niza objekata
blogsArr.forEach(e => {
  console.log(e);
});

// 1. Ispis naslova iz niza blogova
// forEach petljom
blogsArr.forEach(e => {
  console.log(e.title);
});

// for petljom
console.log(blogsArr[0]);
// vraca objekat na 0 poziciji u nizu
console.log(blogsArr[0].title);
// vraca naslov objekta na 0 poziciji u nizu
for (let i = 0; i < blogsArr.length; i++) {
  console.log(blogsArr[i].title);
}

// 2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let sumaLajkova = nizObjekata => {
  let ukupnoLajkova = 0;
  nizObjekata.forEach(e => {
    ukupnoLajkova += e.likes;
  });
  return ukupnoLajkova;
};

console.log(sumaLajkova(blogsArr));

// 3. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let prosekLajkova = nizObjekata => {
  let suma = sumaLajkova(nizObjekata);
  let broj = nizObjekata.length;
  return suma / broj;
};

console.log(prosekLajkova(blogsArr));

// 4. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let visePozitivnih = nizObjekata => {
  let lista = `<ul>`;
  nizObjekata.forEach(e => {
    if (e.likes > e.dislikes) {
      lista += `<li>${e.title}</li>`;
      console.log(e.title);
    }
  });
  lista += `</ul>`;
  document.body.innerHTML += lista;
};

visePozitivnih(blogsArr);

// 5. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let duploVisePozitivnih = nizObjekata => {
  nizObjekata.forEach(e => {
    if (e.dislikes * 2 <= e.likes) {
      console.log(e.title);
    }
  });
};

duploVisePozitivnih(blogsArr);

// 6. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let rec = 'Hello!';
let poslednjiKarakter = rec[rec.length - 1];
console.log(poslednjiKarakter);

// odeseca deo stringa
let poslednjiKarakter1 = rec.slice(-1);
console.log(poslednjiKarakter1);

// vraca karakter na odredjenom indeksu
let poslednjiKarakter2 = rec.charAt(rec.length - 1);
console.log(poslednjiKarakter2);

// ako vrati tacno ukoliko se zavrsava !, u suprotnom false
let poslednjiKarakter3 = rec.endsWith('!');
console.log(poslednjiKarakter3);

let uzvicnikNaslov = nizObjekata => {
  nizObjekata.forEach(e => {
    let naslov = e.title;
    // prvi nacin
    // if (naslov[naslov.length - 1] == '!') {
    //   console.log(naslov);
    // }

    // drugi nacin
    if (naslov.endsWith('!')) {
      console.log(naslov);
    }
  });
};
uzvicnikNaslov(blogsArr);
