let br = 8;
let br2 = 50;

if(br < 10){
 br = "0" + br;
}
console.log(br);

if(br2 < 10){
 br = "0" + br;
}
console.log(br2);

// definisanje funkcije telo funkcije moze na pocetku, a i na kraju posle pozivanja
function mojaFunkcija(){
 console.log(`Zdravo svete!`);
}

console.log(`Neki tekst pre poziva funckije`);

// poziv funkcije
mojaFunkcija();

console.log(`Neki tekst posle poziva funnckije`);

// poziv funkcije
mojaFunkcija();

// definicija druge funnkcije
function ispisiTekst(tekst){
 console.log(`Ispisujem tekst: ` + tekst);
 // parametar tekst
}
// poziv funkcije
ispisiTekst("ITBootcamp");
// prilikom poziva funkcije prosledjuje se neka vrednost, argument

ispisiTekst('Pera Peric');

ispisiTekst(`Anita`);

ispisiTekst(25);

let x = "Mika";

ispisiTekst(x);
console.log(x);
// console.log(tekst);

let tekst = "Zika";
// neka globalna promenljiva
ispisiTekst(tekst);
// prosledjuje se vrednost

console.log(tekst);
// ovo je globalna promenljiva nije parametar tekst

function test(x){
 if(x % 2 == 0){
  var y = "paran";
  // var vazi u okviru funkcije - function scope
 } else {
  let z = "neparan";
  // let vazi u okviru bloka - block scope
 }
 console.log(x);
 console.log(y);
 // console.log(z); ne radi jer vazi samo u okviru bloka
}

test(6);
// test(5); ne radi jer vazi samo u okviru bloka
// console.log(x); ne radi jer vazi samo u okviru funkcije
// console.log(y); ne radi jer vazi samo u okviru funkcije
// console.log(z); ne radi jer vazi samo u okviru funkcije

// definicija funkcije
function korisnik(ime, prezime){
 console.log(`Korisnik ${ime} ${prezime}`);
}

// poziv funkcije
korisnik("Pera", "Peric");
korisnik("Laza, Lazic");
// druga vrednost undefined
korisnik("Laza", "Lazic");

// napisati funkciju koja ispisuje ime i prezime korisnika koji se prosledjuju kao parametri, i kao info da li je prezime dugacko

function korisnikPrezime(ime, prezime){
 if(prezime.length > 10){
  console.log(`Korisnik ${ime} ${prezime} ima dugacko prezime.`);
 } else {
  console.log(`Korisnik ${ime} ${prezime} nema dugacko prezime.`);
 }
}

korisnikPrezime("Jelena", "Matejic");
korisnikPrezime("Stefan", "Stanimirovic");

function korisnikGodine(ime, god){
 console.log(`Korisnik ${ime} ima ${god} godina.`);
}

korisnikGodine("Mika", 23);

function korisnikGodine2(ime, god){
 if(god >= 18){
  console.log(`Korisnik ${ime} ima ${god} godina i punoletna je osoba.`);
 } else{
  console.log(`Korisnik ${ime} ima ${god} godina i maloletna je osoba.`);
 }
}

korisnikGodine2("Mika", 23);
korisnikGodine2("Pera", 15);



// funkcija koja ispisuje zbir dva parametra
function zbir1(a, b){
 let rez = a + b;
 console.log(rez);
}
// ovde smo odredili vrednosti parametara a i b, oni postaju argumenti
zbir1(5, 10);

// console.log(a);
// console.log(b); ne rade jer promenljive a i b ne postoje

// ovde smo deklarisali nove promenljive a i b i dodelili im vrednosti
let a = 2;
let b = 7;
zbir1(a, b);
console.log(a);
console.log(b);
// ostaju iste



// let datum = new Date();
// let dan = datum.getDay();
// // vraca dan u nedelji
// // datum.getDay(); ne ispisuje



// funkcija koja vraca zbir dva parametra

function zbir2(a, b){
 let rez = a + b;
 return rez;
}
// smestamo vrednost funkcije u varijablu
let rezultat = zbir2(5, 17);
console.log(`Zbir brojeva je ${rezultat}`);
console.log(`Sum of numbers is equal to ${rezultat}.`);

if(rezultat >= 0){
 console.log(`Zbir je nenegativan broj`);
} else {
 console.log(`Zbir je negativan broj`);
}

if(zbir2(5, 6) >= 0){
 console.log(`Zbir brojeva je nenegativan broj.`);
} else {
 console.log(`Zbir je negativan broj`);
}
// ovo moze samo za zbir2, ne moze za zbir1 jer nema return

let s = zbir2(5, 8) + zbir2(8, 9);
console.log(`Zbir funkcija je ${s}`);
if(s % 2 == 0){
 console.log(`Zbir ova cetiri broja je paran`);
} else {
 console.log(`Zbir ova cetiri broja je neparan.`);
}

function proizvod(a, b){
 console.log(`Hello World`);
 return a * b;
 console.log(`Hello World`);
 // nakon return se ne izvrsava nista, pre da
}

// return ima dvojaku ulogu: 1) vraca vrednost funkciji; 2) prekida izvrsenje funkcije

console.log(`Proizvod brojeva je ${proizvod(5, 6)}`);