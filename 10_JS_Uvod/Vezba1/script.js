// 1. Date su dve promenljive u kojima su dati vreme u satima i minutima.  Izračunati koliko minuta je prošlo od ponoći.

let s = 12;
let m = 15;
let odPonoci = s * 60 + m;
console.log("Od ponoci je proslo: ", odPonoci);

let doPonoci = 24 * 60 - odPonoci;
console.log("Do ponoci je preostalo: ", doPonoci);

// 2. Za dato vreme u minutima koji su prošli od ponoći, odrediti koliko je to u satima i minutima.

// prvi nacin
let minOdPonoci = 123;
let h = Math.floor (minOdPonoci / 60);
// Math.round zaokruzuje na najpriblizniji
// Math.floor zaokruzuje na donji ceo broj
// Math.ceil na gornji ceo broj
let min = minOdPonoci % 60;
// ostatak od deljenja
console.log(h, ":", min);

// drugi nacin
min = minOdPonoci % 60;
h = (minOdPonoci - min) / 60;
console.log(h + ":" + min);

// 3. Date su dve promenljive kojima se zadaje cena robe i uneta novčanica kojom kupac plaća račun. Ispisati koliki kusur kasirka treba da mu vrati.

let cenaRobe = 120;
let novcanica = 200;
let kusur = novcanica - cenaRobe + " " + "dinara";
console.log(kusur);

// 4. Uraditi zadatak 1 tako da se dohvati trenutno vreme, i za njega odredi koliko minuta je prošlo od ponoći.

let datum = new Date();
// objekat koji vraca datum
console.log(datum);

let danUNedelji = datum.getDay(); 
// vraca dan u nedelji, od 0 do 6, pri cemu je 0 nedelja
console.log(danUNedelji);

let danUMesecu = datum.getDate();
// vraca dan u mesecu
console.log(danUMesecu);

let trenutnoSati = datum.getHours();
// vraca sate
console.log(trenutnoSati);

let trenutnoMinuta = datum.getMinutes();
// vraca minute
console.log(trenutnoMinuta);

let trenutnoOdPonoci = trenutnoSati * 60 + trenutnoMinuta;
console.log(trenutnoOdPonoci);


// 5. Ispisati u konzoli današnji datum u formatima dd.mm.yyyy. i yyyy/mm/dd.

let dd = datum.getDate();
let mm = datum.getMonth();
let yyyy = datum.getFullYear();

console.log(dd + "." + mm + "." + yyyy + ".");
console.log(yyyy + "/" + mm + "/" + dd);

// 6. Konverzija valute iz evra u dinare (i obrnuto).

// evro u dinar
let novacEvro = 200;
let kursEvra = 117.2;

let evroUDinare = novacEvro * kursEvra;
console.log(evroUDinare);

// dinar u evre
let novacUDinare = 2000;
let dinariUEvre = novacUDinare / kursEvra;
console.log(dinariUEvre);

// 7. Konverzija kursa iz dolara u evre, ako znamo dinarsku protivvrednost dolara i dinarsku protivvrednost evra 

let novacDolar = 250;
let kursDolar = 97;
let dolarUDinar = novacDolar * kursDolar;
console.log(dolarUDinar);

let novacEvro2 = 250;
let kursEvro2 = 117;
let evroUDinar2 = novacEvro2 * kursEvro2;
console.log(evroUDinar2);

novacDolar = 300;
novacEvro2 = novacDolar * (kursDolar / kursEvro2);
console.log(novacEvro2);

novacEvro2 = 300;
novacDolar = novacEvro2 * (kursEvro2 / kursDolar);
console.log(novacDolar);

// 8. Temperatura iz Celzijusa u Farenhajte i obrnuto.

let c = 20;
let f = c * 1.8 + 32;
console.log(f);

// 9. Temperatura iz Celzijusa u Kelvine i obrnuto.

let k = c + 273.15;
console.log(k);



