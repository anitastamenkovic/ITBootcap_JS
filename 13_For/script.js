let i;

for(i = 1; i <= 5; i++){
 console.log(`Na redu je broj ${i}`)
}
console.log(`I je ${i}`); 
// undefined
// scope oblast vazenja
// let ima oblast vazenja unutar bloka
// var ima oblast vazenja van bloka unutar funkcije
// let i;
// // globalna
// var j;
// // globalna
// if(i != j){
//  let k;
//  // lokalna promenljiva
//  var k;
//  // globalna promenljiva
// }


// 1. Ispisati brojeve od 1 do 20 

for(i = 1; i <= 20; i++){
 console.log(i);
}

// 2. Ispisati brojeve od 20 do 1

for(i = 20; i >= 1; i--){
 console.log(i);
}

// 3 zadatak
// Ispisati parne brojeve od 1 do 20 

// prvi nacin
for(i = 1; i <= 20; i++){
 if(i % 2 == 0){
  console.log(`Vrednost i je ${i}`);
 }
}

// drugi nacin
for(i = 2; i <= 20; i += 2){
 console.log(i);
}

// neparni
for(i = 1; i <= 20; i += 2){
 console.log(i);
}

// 4 Ispisati dvostruku vrednost brojeva od 5 do 15

for(i = 5; i <= 15; i++){
 console.log(i * 2);
}

// 5 Odrediti sumu brojeva od 1 do n
let n = 5;
let suma = 0;
for(i = 1; i <= n; i++){
 suma += i;
}
console.log(`Suma brojeva od 1 do n je ${suma}`);

// 6 Odrediti sumu brojeva od n do m 
n = 5;
let m = 10;
suma = 0;
for(i = n; i <= m; i++){
 suma += i;
}
console.log(`Suma brojeva od n do m je ${suma}`);

// 7 Odrediti proizvod brojeva od n do m

let proizvod  = 1;
n = 5;
m = 10;
for(i = n; i <= m; i++){
 proizvod *= i;
}
console.log(proizvod);

// 8 Odrediti sumu kvadrata brojeva od n do m *

n = 5;
m = 10;
suma = 1;
for(i = n; i <= m; i++){
 suma += i**2;
}
console.log(suma);

// 9. Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).

n = 3;
// for(i = 1; i <= n; i++){
//  if(i % 3 == 1){
//   document.body.innerHTML += `<img src="1.jpg">`;
//  } else if(i % 3 == 2){
//   document.body.innerHTML += `<img src="2.jpg">`;
//  } else {
//   document.body.innerHTML += `<img src="3.jpg">`;
//  }
// }

// drugi nacin
for(i = 0; i < n; i++){
 let k = 1 % 3;
 document.body.innerHTML += `<img src="${k + 1}.img">`;
}

// 10. Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100.
// prvi nacin
n = 20;
m = 100;
proizvod = 1;
for(i = n; i <= m; i++){
 if(i % 11 == 0){
  proizvod *= i;
 }
}
console.log(proizvod);

// drugi nacin
proizvod = 1;
for(i = 22; i <= 100; i += 11){
 proizvod *= i;
}
console.log(proizvod);

// 11. Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.

n = 5;
m = 150;
let brojDeljivih = 0;
for(i  = n; i <= m; i++){
 if(i % 13 == 0){
  brojDeljivih++;
 }
}
console.log(brojDeljivih);

// 12. Ispisati aritmetičku sredinu brojeva od n do m.

// prvi nacin
n = 5;
m = 9;
as = 0;
for(i = n; i <= m; i++){
 as += i;
}
console.log(as / ((m - n) + 1));

// drugi nacin
suma = 0;
let broj = 0;
for(i = n; i <= m; i++){
 suma += i;
 broj++;
}
as = suma / broj;
console.log(as);

// 13. Prebrojati koliko brojeva od n do m je pozitivno, a koliko njih je negativno. 

n = -5;
m = 5;
let pozitivniBrojevi = 0;
let negativniBrojevi = 0;
for(i = n; i <= m; i++){
 if(i << 0){
  pozitivniBrojevi++;
 }
 if(i >> 0){
  negativniBrojevi++
 }
}
console.log(pozitivniBrojevi, negativniBrojevi);

// 14. Prebrojati koliko je brojeva od 5 do 50 koji su deljivi sa 3 ili sa 5.
broj = 0;
for(i = 5; i <= 50; i++){
 if((i % 3 == 0) || (i % 5 == 0)){
  broj++;
 }
}
console.log(broj);
 
// 15 Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4 i parni su.

n = 12;
m = 45;
suma = 0;
for(i = n; i <= m; i++){
 if(i % 10 == 4 || i % 10 == -4) {
  suma += i;
 }
}
console.log(suma);

// 16 Odrediti sumu brojeva od n do m koji nisu deljivi brojem a
n = 12;
m = 28;
let a = 3;
suma = 0;
for(i = n; i <= m; i++){
 if(i % a != 0){
  suma += i;
 }
}
console.log(suma);

// 17 Odrediti proizvod brojeva od n do m koji su deljivi brojem a 

n = 6;
m = 15;
a = 5;
proizvod = 1;
for(i = n; i <= m; i++){
 if(i % a == 0){
  proizvod *= i;
 }
}
console.log(proizvod);


// 18 Napraviti tabelu sa 6 redova.
// Svaki red tabele treba da ima po dve ćelije (dve kolone).
// Svakom parnom redu dodati klasu „obojen“.
// Korišćenjem CSS-a, klasi obojen postaviti proizvoljnu boju pozadine. 

// prvi nacin
let redovi = 6;
let tabela = `<table>`;
for(i = 1; i <= redovi; i++){
 if(i % 2 == 0){
  tabela += `<tr class="obojen">`;
 } else {
  tabela += `<tr class="boja2">`;
 }
 tabela += 
 `<td>Tekst</td>
 <td>Tekst</td>
 </tr>
 `;
}
tabela += `</table>`;
document.body.innerHTML += tabela;

// Primer
let element = document.getElementById("naslov");
element.innerHTML += ` Jos tekst`;
// = "jos tekst" + element.innerHTML da dodamo pre teksta u elementu


// drugi nacin

let htmlTabela = document.getElementById("mojaTabela");
for(i = 1; i <= redovi; i++){
 if(i % 2 == 0){
  htmlTabela.innerHTML += 
 `
 <tr class="obojen">
 <td>Tekst</td>
 <td>Tekst</td>
 </tr>
 `
 } else {
  htmlTabela.innerHTML += 
 `
 <tr class="boja2">
 <td>Tekst</td>
 <td>Tekst</td>
 </tr>
 `
 }
 
}


// 19 Koristeći for petlju kreirati neuređenu listu sa ugnježdenim elementima, kao što je prikazano na slici sa desne strane.

// prvi nacin
let brLi = 10;
let lista = `<ul>`;
for (i = 1; i <= brLi; i++) {
    lista += `<li> Element ${i}`;
    if (i % 3 == 2) {
        i++;
        lista +=
            `
        <ul>
            <li class="ljubicasti"> Element ${i} </li>
        </ul>
        `;
    }
    lista += ` </li>`;
}
lista += `</ul>`;
document.body.innerHTML += lista;

// drugi nacin
let lista1 = `<ul>`;
for (i = 1; i <= brLi; i++) {
    if (i % 3 == 0) {
        lista1 +=
            `
            <ul>
                <li class="ljubicasti">Element ${i}</li>
            </ul>
        `;
    }
    else {
        lista1 += `<li>Element ${i}</li>`;
    }
}
lista1 += `</ul>`;
document.body.innerHTML += lista1;

// 20 Kreirati 64 span elemenata i rasporediti ih kao na slici desno, koristeći for petlju.

for(i = 1; i <= 64; i++) {
 document.body.innerHTML += `<span>${i}</span>`;
 if(i % 8 == 0){
  document.body.innerHTML += `<br>`;
 }
}

// 21 Kreirati 64 span elemenata i rasporediti ih kao na slici desno, tako da elementi izgledaju kao polja šahovske table. 
// U realizaciji ovog zadatka koristiti for petlju.

