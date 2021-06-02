// 1. Za uneto vreme u satima i minutima, izračunati koliko minuta je prošlo od ponoći 

let h = 14;
let m = 32;

let odPonoci = h * 60 + m;
console.log(odPonoci);

let doPonoci = 24 * 60 - odPonoci;
console.log(doPonoci);

// 2. Za uneto vreme u satima i minutima, izračunati koliko minuta je prošlo od ponoći 
// g - 12-hour format of an hour (1 to 12)
// G - 24-hour format of an hour (0 to 23)
// h - 12-hour format of an hour (01 to 12)
// H - 24-hour format of an hour (00 to 23)
//         	i - Minutes with leading zeros (00 to 59)
// date_default_timezone_set('Europe/Belgrade'); - promena vremenske zone

//  $sati = date('G');
//  $minuti = date('i');



// 3. Za unetu cenu robe, unetu novčanicu kojom kupac plaća račun ispisati koliki kusur kasirka treba da mu vrati.

let cenaRobe = 600;
let novcanica = 1000;
let kusur = novcanica - cenaRobe;
console.log(kusur);

// 4. Konverzija valute iz evra u dinare (i obrnuto).

let evro = 200;
let kursEvro = 117;
let evroUDinar = evro * kursEvro;
console.log(evroUDinar);

let dinar = 25000;
let dinarUEvro = dinar / kursEvro;
console.log(dinarUEvro);

// 5. Konverzija kursa iz dolara u evre, ako znamo dinarsku protivvrednost dolara i dinarsku protivvrednost evra 

dolar = 200;
kursDolar = 97;
let dolarUEvro = dolar * (kursDolar / kursEvro);
console.log(dolarUEvro);

// 6. Temperatura iz Celzijusa u Farenhajte i obrnuto

let c = 25;
let f = c * 1.8 + 32;
console.log(f);

f = 120;
c = (f -32) / 1.8;
console.log(c);

// 7. Temperatura iz Celzijusa u Kelvine i obrnuto.

c = 30;
let k = c + 273.15;
console.log(k);

k = 290;
c = k - 273.15;
console.log(c);

// 8. Izvršiti konverziju zapremine iz galona u litre i obratno, ako važi da je:
// 1 galon = 3.785 litara.

let g = 5;
let jedanGalon = 3.785;
let galonULitre = g * jedanGalon;
console.log(galonULitre);

let l = 10;
jedanLitar = 1 / 3.785;
let litarUGalon = l * jedanLitar;
console.log(litarUGalon);




