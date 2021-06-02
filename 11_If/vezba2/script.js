// 1 Za dva uneta broja ispisati koji je veći a koji je manji.
let x = 12;
let y = 45;

if(x > y){
 console.log(`Broj ${x} je veci, a broj ${y} je manji.`);
} else {
 console.log(`Broj ${y} je veci, a broj ${x} je manji.`);
}

// 2 Ispitati da li je uneta temperatura u plusu ili je u minusu. Ukoliko je temperatura nula, računati da je u plusu.
let t = -12;

if(t >= 0){
 console.log(`Temperatura ${t} je u plusu.`);
} else{
 console.log(`Temperatura ${t} je u minusu.`);
}

// 3 U odnosu na pol (muški/ženski) koji je korisnik uneo prikazati odgovarajući avatar.
let pol = "m";

if(pol == "m"){
 document.body.innerHTML += `<img style="width:200px;" src="male.png">`
} else {
 document.body.innerHTML += `<img style="width:200px;" src="female.png">`
}

// 4 U odnosu na preuzete vrednosti AM i PM sa svog računara, ispisati da li je trenutno jutro ili popodne.
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let s = d.getSeconds();
let time = h + ":" + m + ":" + s;
console.log(time);
let am = time <= "12:00:00";
let pm = time > "12:00:00";

if(time == am){
 console.log(`Jutro je.`);
} else {
 console.log(`Popodne je`);
}

// 5 Za preuzetu godinu sa računara i unetu godinu rođenja izračunati da li je osoba punoletna ili maloletna.

let year = d.getFullYear();
let birthYear = 1988;
let age = year - birthYear;

if(age >= 18){
 console.log(`Osoba je punoletna`);
} else {
 console.log(`Odoba je maloletna.`);
}

// 6. Odrediti najveći od tri uneta broja
let br1 = 12;
let br2 = 34;
let br3 = 45;

// prvi nacin
if(br1 > br2 && br1 > br3) {
 console.log(`Broj ${br1} je najveci.`);
} else if(br2 > br1 && br2 > br3){
 console.log(`Broj ${br2} je najveci.`);
} else {
 console.log(`Broj ${br3} je najveci.`);
}

// drugi nacin
let max = br1;
if(br2 > max){
 max = br2
} if(br3 > max){
 max = br3
} 
console.log(max);

// 7 Na osnovu unetog broja poena ispitati koju ocenu profesor treba da upiše učeniku. Učenik je položio ispit ukoliko ima više od 50 poena, u suprotnom je pao ispit.
// Za više od 50 poena učenik dobija ocenu 6,
// za više od 60 poena učenik dobija ocenu 7,
// za više od 70 poena učenik dobija ocenu 8,
// za više od 80 poena učenik dobija ocenu 9 i
// za više od 90 poena učenik dobija ocenu 10.
let poeni = 97;

// prvi nacin
if(poeni <= 50){
 console.log(`Pao ispit`);
} else if(poeni <= 60){
 console.log(`Ocena 6`);
} else if(poeni <= 70){
 console.log(`Ocena 7`);
} else if(poeni <= 80){
 console.log(`Ocena 8`);
} else if(poeni <= 90){
 console.log(`Ocena 9`);
} else if(poeni <= 100){
 console.log(`Ocena 10`);
}

// drugi nacin
if(poeni >= 91){
 console.log(`Ocena 10`);
} else if(poeni >= 81){
 console.log(`Ocena 9`);
} else if(poeni >= 71){
 console.log(`Ocena 8`);
} else if(poeni >= 61){
 console.log(`Ocena 7`);
} else if(poeni >= 51){
 console.log(`Ocena 6`);
} else if(poeni <= 50){
 console.log(`Pao ispit`);
}

// 8 Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend.
let day = d.getDay();

if(day == 0 || day == 6){
 console.log(`Vikend je`)
} else {
 console.log(`Radni dan je.`)
}

// 9 Za vreme preuzeto sa računara ispisati dobro jutro za vreme manje od 12 sati ujutru, dobar dan za vreme manje od 18 sati popodne i u ostalim  slučajevima ispisati dobro veče.
let jutro = "12:00:00";
let popodne = "18:00:00";
if(time <= jutro){
 console.log(`Dobro jutro`);
} else if(time <= popodne){
 console.log(`Dobar dan`);
} else {
 console.log(`Dobro vece`);
}

// 10 Uporediti dva uneta datuma i ispisati koji od njih je raniji.
let datum1 = "2021-04-15";
let datum2 = "2021-04-29";

if(datum1 < datum2){
 console.log(`Datum ${datum1} je pre datuma ${datum2}.`);
} else {
 console.log(`Datum ${datum2} je pre datuma ${datum1}.`);
}

// 11 Radno vreme jedne programerske firme je od 9h do 17h. Preuzeti vreme sa računara i ispitati da li u to vreme firma radi ili ne radi.
console.log(time);
let pocetakSmene = "09:00:00";
let krajSmene = "17:00:00";
if((time >= pocetakSmene) && (time <= krajSmene)){
 console.log(`Firma radi`);
} else {
 console.log(`Firma ne radi`);
}

// 12 Za unet početak i kraj radnog vremena dva lekara ispisati DA ukoliko se njihove smene preklapaju, u suprotnom ispisati NE.
let pocetakPrvi = 14;
let krajPrvi = 19;
let pocetakDrugi = 11;
let krajDrugi = 18;

if(krajPrvi < pocetakDrugi){
 console.log(`NE`);
} else if(krajDrugi < pocetakPrvi) {
 console.log(`NE`);
} else {
 console.log(`DA`);
}

// 13 Za uneti broj ispitati da li je paran ili nije.
let num = 45;

if(num % 2 == 0){
 console.log(`Broj je paran`);
} else {
 console.log(`Broj je neparan`);
}

// 14 Za uneti broj ispisati da li je deljiv sa 3 ili ne.
if(num % 3 == 0){
 console.log(`Broj je deljiv brojem 3`);
} else {
 console.log(`Broj nije deljiv brojem 3`);
}

// 15 Za dva uneta broja, od većeg učitanog broja oduzeti manji i rezultat ispisati na ekranu.
let n1 = 56;
let n2 = 42;
if(n1 > n2){
 document.body.innerHTML += `<p>${n1 - n2}</p>`
} else {
 document.body.innerHTML += `<p>${n2 - n1}</p>`
}

// 16 Za uneti broj ispitati da li je on manji ili veći od nule. Ukoliko je manji ili jednak nuli ispisati njegov prethodnik, a ukoliko je veći od nule ispisati njegov sledbenik.
let n3 = -12;
if(n3 <= 0){
 console.log(`${--n3}`);
} else {
 console.log(`${++n3}`);
}

// 17 Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji. 
let m1 = 23;
let m2 = 12;
let m3 = 34;

let max1 = m1;
if(m2 > max1){
 max1 = m2
} if(m3 > max1){
 max1 = m3
}

let min = m1;
if(m2 < m1){
 min = m2
} if(m3 < m1){
 min = m3
}

let mid = (m1 + m2 + m3) - (max1 + min);

console.log(`Najveci broj je ${max1}, srednji broj je ${mid}, a najmanji broj je ${min}.`);

// 18 Za učitani broj ispitati da li je ceo.
let k1 = -23.9;
if(k1 % 1 == 0){
 console.log(`Broj je ceo.`);
} else {
 console.log(`Broj nije ceo`);
}

// 19 Učitati dva cela broja i ispitati da li je veći od njih paran. 

let f1 = 23;
let f2 = 46;

if(f1 > f2){
 console.log(`Broj ${f1} je veci od broja ${f2}`);
 if(f1 % 2 == 0){
  console.log(`i paran je.`);
 } else {
  console.log(`i neparan je.`)
 }
} else {
 console.log(`Broj ${f2} je veci od broja ${f1}`);
 if(f2 % 2 == 0){
  console.log(`i paran je`)
 } else {
  console.log(`i neparan je`)
 }
}

// 20 Naći koji je najveći od tri uneta broja $a, $b i $c.
let $a = 45;
let $b = 56;
let $c = 78;

let max2 = $a;
if($b > max2){
 max2 = $b
} if($c > max2){
 max2 = $c
}
console.log(max2);

// 21 Ispisati na ekranu „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih  i veća od 40 stepeni Celzijusovih.
let temp = -16;
if(temp < -15 || temp > 40){
 document.body.innerHTML += `<p>ekstremna temperatura</p>`
}

 // 22 Ispitati da li je godina prestupna. (Godinu preuzeti sa vremena na Vašem računaru). Prestupna je ona godina koja je deljiva sa 4, ako nije deljiva sa 100, mada ipak jeste deljiva sa 400.

 // let year2 = d.getFullYear();
let year2 = 2021;
 if((year2 % 4 == 0) && (year2 % 100 != 0)){
    console.log(`Godina je prestupna`);
 } else if((year2 % 4 == 0) && (year2 % 400 == 0)){
  console.log(`Godina je prestupna`);
 }
 else {
  console.log(`Godina nije prestupna`);
 }

 // 23 Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara i ispitati da li je butik trenutno otvoren.






