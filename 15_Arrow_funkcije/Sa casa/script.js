// Imenovane funkcije

// Deklaracija imenovane funkcije
function suma(a, b){
 return a + b;
}

// Poziv imenovane funkcije
console.log(suma(1, 2));



// Anonimne funkcije

// Deklarisanje anonimne funkcije
let suma2 = function(a, b){
 return a + b;
}

// Poziv anonimne funkcije
console.log(suma2(3, 4));


// Arrow funkcije
let suma3 = (a, b) => {
 return a + b;
}

console.log(suma3(2,3));



let hello = () => {
 console.log(`Hello world`);
}

hello();
hello();

let korisnik = (ime) => {
 console.log(`Hello ${ime}!`)
}

korisnik("Stefan");
korisnik("Jelena");



let korisnik2 = (ime, godine) => {
    if(godine < 18){
        let ispis = `Korisnik ` + ime + ` je maloletno lice`;
        document.body.innerHTML += `<p style="color: green;"> ${ispis} </p>`
    }
    else{
        let ispis = `Korisnik ` + ime + ` je punoletno lice`;
        document.body.innerHTML += `<p style="color: yellow;"> ${ispis} </p>`
    }
}
korisnik2(`Glorija`, 28);
korisnik2(`Petar`, 7);

