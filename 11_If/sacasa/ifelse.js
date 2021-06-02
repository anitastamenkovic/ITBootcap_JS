let a = 7;
let b = 7;

if(a == b){
 console.log(`a i b su jednake vrednosti`);
} 
else {
 console.log(`a i b nisu jednake vrednosti`);
}

if(a != b){
 console.log(`a i b nisu jednake vrednosti`);
} 
else {
 console.log(`a i b su jednake vrednosti`);
}

// Dodavanje html elementa iz scripta

document.body.innerHTML = "<h1>Ovo je <i>IF Else</i> Naredba grananja</h1>";
document.body.innerHTML += "<h3>Zadaci</h3>";

// document.body.innerHTML += "<p>";
// document.body.innerHTML += "zadaci za vezbanje";
// document.body.innerHTML += "</p>"; Ukoliko dodamo otvoren tag automatski ga zatvara i obrnuto.

let g = 2021;
document.body.innerHTML += `<p>
Hello
World
</p>
<p>
Godina je ${g}
</p>`;

console.log(`Vrednost promenljive g je ${g}.`);

// Dodavanje slike
let slika = "";
document.body.innerHTML += `<img src="${slika}">`;

// if else if else
let broj = -5;
if(broj < 0){
 console.log(`broj je manji od nule`);
} else if(broj == 0){
 console.log(`broj je jednak nuli`);
} else if(broj > 0) {
 console.log(`broj je veci od nule`);
} else {
 console.log(`Doslo je do greske`);
}
console.log(`kraj`);

// prvi nacin
// ako je vise uslova tacno vise ce prikazati
let stepeni = -10;
if(stepeni < 0) {
    console.log(`Ispod nula stepeni`);
}
if(stepeni < 10){
    console.log(`Ispod 10 stepeni`);
}
if(stepeni < 20) {
    console.log(`Ispod 20 stepeni`)
} else {
    console.log(`20 i vise stepeni`);
}

// drugi nacin
// ako je prvi uslov tacan ostale ne cita
if(stepeni < 0) {
    console.log(`Ispod nula stepeni`);
}
else if(stepeni < 10){
    console.log(`Ispod 10 stepeni`);
}
else if(stepeni < 20) {
    console.log(`Ispod 20 stepeni`)
} else {
    console.log(`20 i vise stepeni`);
}

let poeni = 81;
if(poeni > 100) {
    console.log(`Poeni ne mogu uzeti vrednost vecu od 100`)
} else if(poeni >= 91) {
    console.log(`Ocena 10`)
} else if(poeni >=81) {
    console.log(`Ocena 9`)
} else if(poeni >=71) {
    console.log(`Ocena 8`) } else if(poeni >=61) {
    console.log(`Ocena 7`) } else if(poeni >=51) {
    console.log(`Ocena 6`) } else{
    console.log(`Pali ste`) } 


// Ugnjezdavanje
let pol = "m";
let god = 32;

if (pol == "m") 
{
     if (god >= 18) 
     {
	console.log(`Muško punoletan`);
     }
     else
     {
	console.log(`Muško, maloletan`);
     }
}
else
{
     if (god >= 18) 
     {
	console.log(`Žena, punoletna`);
     }
     else
    {
	console.log(`Žena, maloletna`);
    }
}



