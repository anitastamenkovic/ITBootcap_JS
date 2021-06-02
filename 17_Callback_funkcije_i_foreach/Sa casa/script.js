function ispisKonzola(poruka){
 console.log(poruka);
}

function ispisStranica(poruka){
 let div = document.getElementById("container");
 // div.innerHTML = poruka; ako se brise stari sadrzaj diva
 div.innerHTML += poruka + `<br>`;
}

function ispisNiza(niz, callback){
 let poruka = "";
 for(let i = 0; i < niz.length; i++){
  poruka += niz[i] + " ";
 }
 callback(poruka);
 // poziv callback funkcije koju mozemo nazvati kako zelimo
}

let a = [1, 2, 3, -9, 8];
let b = ["Vuk", "Nikola", "Jelena", "Jelena", "Anita"];

ispisNiza(a, ispisKonzola);
// poziv funkcije ispisNiza
ispisNiza(a, ispisStranica);
ispisNiza(b, ispisStranica);
ispisNiza(b, ispisKonzola);

// pozivi funkcije preko aninimnih callback funkcija
// arrow funckija
ispisNiza(a, por => {
 console.log(por);
});

// anonimna funkcija
ispisNiza(a, function(por) {
 let div = document.getElementById("container");
 div.innerHTML += por + `<br>`;
});


// forEach petlja
// moze ovako
function ispis(poruka) {
 console.log(`Element niza je: ${poruka}`);
}
a.forEach(ispis);
// forEach petlja poziva callback funciju za svaki elemenat niza a prosledjuje taj elemenat niza kao parametar callback funckije
// npr za niz a = [1, 2, 3, -9, 8]
// ispis(1) ... ispis(8)
b.forEach(ispis);

// ali vise se koristi ovako
// Primer ispis elemenata niza
a.forEach(e => {
 console.log(`Element niza je: ${e}`);
});

// Primer ispis elemenata niza i njihovih indeksa
b.forEach((e, i) => {
 console.log(`Elemennt ${e} sa indeksom ${i}`);
});

// Ispis elemenata niza sa parnim indeksom
b.forEach((e, i) => {
 if(i % 2 == 0){
  console.log(`Element ${e} ima paran indeks.`)
 }
});
