// 1. Zadatak
let m = 20;
let g = 15;
if(m > g){
 console.log(`m je veci od g`);
} else {
 console.log(`g je veci od m`);
}

// 2. Zadatak
let t = 23;
if(t >= 0){
 console.log(`temperatura je veca od nule`);
} else {
 console.log(`temepratura je manja od nule`);
}

// 3. Zadatak
let pol = "muski";
if(pol = 'muski') {
 console.log(`👨`);
} else {
 console.log(`👩`);
}

// 4. Zadatak
var today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time);

if(time < "12:00:00") {
 console.log(`Jutro je`);
} else {
 console.log(`popodne je`);
}

// 5. Zadatak
let godina = today.getFullYear();
console.log(godina);
let godinaRodjenja = 1991;

if(godina - godinaRodjenja >= 18){
 console.log(`Osoba je punoletna`);
} else {
 console.log(`Osoba nije punoletna`);
}

// 6. Zadatak
let m1 = 34;
let p1 = 20;
let g1 = 45;

if((m1 > p1) && (m1 > g1)) {
 console.log(`m1 je najveci broj`);
} else if((p1 > m1) && (p1 > g1)) {
 console.log(`p1 je najveci broj`);
} else {
 console.log(`g1 je najveci broj`);
}

// drugi nacin
let ab1 = 5;
let ab2 = 7;
let ab3 = 3;

let maks = ab1;
// pretpostavka i ispitivanje pretpostavke
if(ab2 > maks) {
 maks = ab2;
}
if(ab3 > maks) {
 maks = ab3;
}
console.log(maks);

// 7. Zadatak
let p4 = 75;
if(p4 < 50) {
 console.log(`Pao si`);
} else if(p4 < 60) {
 console.log(`Ocena 6`);
} else if(p4 < 70) {
 console.log(`ocena 7`);
} else if(p4 < 80) {
 console.log(`ocena 8`);
} else if(p4 < 90) {
 console.log(`ocena 9`);
} else if(p4 < 100) {
 console.log(`ocena 10`);
}

// 8. Zadatak
let day = today.getDay();
console.log(day);
if(day == 0 || day == 6) {
 console.log(`Vikend je`);
} else if (day >= 1 & day <= 5) {
 console.log(`Radni dan je`);
}

// 9. Zadatak
if(time < "12:00:00") {
 console.log(`dobro jutro`);
} else if(time < "18:00:00") {
 console.log(`dobar dan`);
} else {
 console.log(`dobro vece`);
}

// 10. Zadatak
let datum1 = "2021/04/23";
let datum2 = "2021/04/24";
if(datum1 < datum2) {
 console.log(`${datum1} je bio pre ${datum2}.`);
} else if(datum2 < datum1) {
 console.log(`Datum ${datum2} je bio pre ${datum1}.`);
} else {
    console.log(`Datumi su isti.`)
}

// drugi nacin
let dan1 = 01;
let mes1 = 01;
let god1 = 2020;

let dan2 = 02;
let mes2 = 01;
let god2 = 2021;

if(god1 < god2){
    console.log(`Prvi datum je raniji`);
} else if(god2 < god1){
    console.log(`Drugi datum je raniji`);
} else if(mes1 < mes2) {
    console.log(`Prvi datum je raniji`);
} else if(mes2 < mes1) {
   console.log(`Drugi datum je raniji`);
} else if(da1 < dan2){
    console.log(`Prvi datum je raniji`);
} else if(dan2 < dan1){
    console.log(`Drugi datum je raniji`);
} else {
    console.log(`Datumi su isti`);
}

//  11. Zadatak
let radnoVreme = "od 9h do 17h";
if(time >= "09:00:00" && time <= "17:00:00") {
 console.log(`Firma radi`);
} else {
 console.log(`Firma ne radi`);
}

// 12. Zadatak
let pocetakM = 8;
let krajM = 14;

let pocetakT = 13;
let krajT = 19;

if(krajM < pocetakT) {
 console.log(`Smene se ne preklapaju`);
} else if(krajT < pocetakM){
 console.log(`Smene se ne preklapaju`);
} else {
    console.log(`Smene se preklapaju`);
}

// 13
let numberr = 12;
if(numberr % 2 == 0){
    console.log(`Broj je paran`);
} else {
    console.log(`Broj je neparan`);
}

// 14
let brojj = 45;
if(brojj % 3 == 0){
    console.log(`Broj je deljiv sa 3.`)
} else {
    console.log(`Broj nije deljiv sa 3.`)
}

// 15
let hz = 45;
let zh = 56;

if(hz > zh) {
    document.body.innerHTML += `${hz - zh}`;
} else {
    document.body.innerHTML += `${zh - hz}`;
}

// 16
let bn = 12;
if(bn <= 0){
    console.log(`${--bn}`);
} else {
    console.log(`${++bn}`);
}
// // moze ovako
// broj++;
// broj+1;
// broj = broj + 1;

// 17
// Prvo resenje
let c1 = 23;
let c2 = 31;
let c3 = 13;
if ( c1 > c2 && c1 > c3){
    console.log(`broj ${c1} je najeveci`);
    if ( c2 > c3){
        console.log(`broj ${c2} je srednji, a broj ${c3} najmanji`);
    }else if( c2 < c3){
        console.log(`broj ${c3} je srednji, a broj ${c2} najmanji`);
    }
}
if ( c2 > c1 && c2 > c3){
    console.log(`broj ${c2} je najeveci`);
    if ( c1 > c3){
        console.log(`broj ${c1} je srednji, a broj ${c3} najmanji`);
    }else if( c1 < c3){
        console.log(`broj ${c3} je srednji, a broj ${c1} najmanji`);
    }
}
if ( c3 > c2 && c3 > c1){
    console.log(`broj ${c3} je najeveci`);
    if ( c2 > c1){
        console.log(`broj ${c2} je srednji, a broj ${c3} najmanji`);
    }else if( c1 < c2){
        console.log(`broj ${c2} je srednji, a broj ${c1} najmanji`);
    }   
}

// drugo resenje
let prvi = 12;
let drugi = -27;
let treci = -55;
// min
let min = prvi;
if(drugi < min){
     min = drugi;
}
if(treci < min){
    min = treci;
}
console.log(`Najmanji broj je ${min}`);
// max
let max = prvi;
if(drugi > max){
    max = drugi;
}
if(treci > max){
    max = treci;
}
console.log(`Najveci broj je ${max}`);
// srednji broj
let srednji = ((prvi + drugi + treci)-(min + max));
console.log(`Srednji broj je ${srednji}`);

// trece resenje
let x1 = 12;
let y1 = 22;
let z1 = 11;
let max1 = x1;
let mid1 = y1;
let min1 = z1;
let zbir = x1 + y1 + z1;
if ( y1 > max1 ) {
    max1 = y1;
}
if ( z1 > max1 ) {
    max1 = z1;
}
if ( y1 < min1 ) {
    min1 = y1;
}
if ( x1 < min1 ) {
    min1 = x1;
}
mid1 = zbir - max1 - min1;
console.log (`${max1} je najveci, ${mid1} je srednji, ${min1} je najmanji.`);

// 18.
// prvo resenje
let num6 = -23.9;
if(num6 === parseInt(num6, 10)) {
    console.log(`Broj je ceo.`);
} else {
    console.log(`Broj nije ceo.`);
}
// drugo resenje
if(num6 % 1 == 0) {
    console.log(`Broj je ceo.`);
} else {
    console.log(`Broj nije ceo.`);
}

// 20
let br9 = 23;
let br10 = 45;
if(br9 > br10 && br9 % 2 == 0) {
    console.log(`Broj ${br9} je veci i paran je`)
} else if(br9 > br10 && br9 % 2 !== 0) {
    console.log(`Broj ${br9} je veci i neparan`);
} else if(br10 > br9 && br10 % 2 == 0){
    console.log(`Broj ${br10} je veci i paran je`);
} else if(br10 > br9 && br10 % 2 !== 0){
    console.log(`Broj ${br10} je najveci i neparan`);
}