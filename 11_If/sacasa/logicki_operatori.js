// konjunkcija
let a = 5;

if((a > 0) && (a < 10)){
 console.log(`Oba uslova su zadovoljena`);
} else {
 console.log(`Jedan uslov nije zadovoljen`);
}

// disjunkcija
let b = -5;
if((b < 0) || (b > 15)){
 console.log(`Barem jedan logicki uslov je zadovoljen.`);
} else {
 console.log(`Ni jedan usolov nije zadovoljen.`);
}

// negacija
let c = -3;
if(!(c < 0)) {
 console.log(`Broj ${c} je ne negativan`);
} else {
 console.log(`Broj ${c} je negativan`);
}

let pol = "m";
let godine = 34;

if((pol == "m") && (godine >= 18)) {
 console.log(`Osoba je muskog pola i punoletna.`);
} else if((pola == "m") && (godine < 18)){
 console.log(`Osoba je muskog pola i maloletna.`);
} else if((pola == "z") && (godine >= 18)){
 console.log(`Osoba je zenskog pola i punoletna.`);
} else {
 console.log(`Osoba je zenskog pola i maloletna.`);
} 

// 21 Naći koji je najveći od tri uneta broja 
// a, b i c, korišćenjem logičkih operatora. 
let t = 12;
let j = 6;
let k = 89;

// prvo resenje
if((t > j) && (t > k)){
 console.log(`Broj ${t} je najveci`);
} else if((j > t) && (j > k)){
 console.log(`Broj ${j} je najveci`);
} else {
 console.log(`Broj ${k} je najveci.`);
}

// drugo resenje
let max = t;
if((j > t) && (k > t)){
 max = j;
} else if((k > j)){
 max = k;
}
console.log(max);

// 22 Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let temp = -15;
if(temp < -15 || temp > 40){
 document.body.innerHTML += `<p>ekstremna temperatura</p>`
}

// 23 Ispitati da li je godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).
// Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

// prvo resenje
let d = new Date();
 console.log(d);
 let year = d.getFullYear();
// let year = 2019;
 if((year % 4 == 0) && (year % 100 != 0)){
    console.log(`Godina je prestupna`);
 } else if((year % 4 == 0) && (year % 400 == 0)){
  console.log(`Godina je prestupna`);
 }
 else {
  console.log(`Godina nije prestupna`);
 }

 // drugo resenje
 if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
    console.log(`Godina je prestupna`);
 } else {
  console.log(`Godina nije prestupna`);
 }

 // 24 Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.
 
 let day = d.getDay();
 console.log(day);
 let h = d.getHours();
 console.log(h);

 let pocetakRadni = 9;
 let krajRadni = 20;
 
 let pocetakVikend = 10;
 let krajVikend = 18;

 if((day > 0 && day < 6) && (h > pocetakRadni && h < krajRadni)){
   console.log(`Radnja radi`);
 } else if((day == 0 || day == 6) && (h > pocetakVikend && h < krajVikend)){
   console.log(`Radnja radi`);
 } else {
  console.log(`Radnja ne radi`);
 }


