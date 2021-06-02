// Brojevi
console.log(3);
console.log(-15.555);

// string
console.log('Hello');
console.log("Hello");
console.log("Mark's pen");

console.log(3 + 2);
// radi kao sabiranje brojeva
console.log("3 + 2")
console.log("3" + "2"); 
// radi kao konkatenacija stringova
console.log(3 + "5");
// broj 3 se prikazuje kao string a broj 5 vrsi se konkatenacija stringa


// Logicke vrednosti
console.log(true);
console.log(false);


// Promenljive
let x;
// deklarisanje promenljive
x = 3;
// x dobija vrednost 3

console.log(x);

x = 5;
console.log(x);

x = "Pera Peric";
let y = 0.5;
console.log(x);
console.log(y);
console.log(x, y);

const pi = 3.14;
console.log(pi);

// pi = 3.1415; ovo je konstanta, ne mozemo ponovo deklarisati niti dodeliti vrednost

// let 0 = 2 * 5 * pi;
// r = pi;
// s = pi; ovo moze

let a;
console.log(a);
// nedefinisana vrednost promenljive

// console.log(b);
// nedefinisana promenljiva

let recenica = "JS kaze: \" Hello world \" ";
console.log(recenica);

let god;
console.log(god, god + 3);
// undefined, NaN nije broj

let god1 = null;
console.log(god1, god1 + 3);
// null 3

// Konkatenacija stringova

let ime = "Anita";
let prezime = "Stamenkovic";
let imePrezime = ime + " " + prezime;
console.log(imePrezime);
// + kada koristimo reci on vrsi konkatenaciju tj. nadovezuje reci

console.log(ime.length + prezime.length);
// + vrsi sabiranje brojeva

// Osnovne aritmeticke operacije
let p = 7;
let q = 3;

let zbir = p + q;
console.log(zbir);

let razlika = p - q;
console.log(razlika);

let proizvod = p * q;
console.log(proizvod);

let kolicnik = p / q;
console.log(kolicnik);

// +=, -+, *=, /=
p += 3;
// p = p + 3;
console.log(p);

p -= 5;
// p = p - 5;
console.log(p);

// ++ Implementacija
p++;
console.log(p); 
// 6 povecava za 1

let r = 50;
console.log(r++);
// prvo ispise pa poveca
console.log(r);
// ovde ispise povecano

console.log(++r);
// prvo poveca pa ispise

// Ostatak pri deljenju
x = 7;
y = 3;
ost = 7 % 3;
console.log(ost);

// Stepenovanje
stepen = y**4;
console.log(stepen);

// Redosled operacija - zagrade, stepenovanje, deljenje, mnozenje, sabiranje, oduzimanje

let x1 = "godina";
let y1 = "prestupna";
console.log(x1 + " " + y1);

let rezultat = 26 + " " + "godina";
console.log(rezultat);
// nadovezuje kao da su dva stringa u pitanju

rezultat1 = "26" + "godina";
console.log(rezultat1);

rezultat3 = 26 + 1 + "godina";
console.log(rezultat3);
// prvo sabere pa nadoveze

let rezultat4 = 26 + "godina" + 1
console.log(rezultat4);

let rezultat5 = "26" + "1" + "godina";
console.log(rezultat5);

let rezultat6 = 26 / "godina";
console.log(rezultat6);
// NaN






