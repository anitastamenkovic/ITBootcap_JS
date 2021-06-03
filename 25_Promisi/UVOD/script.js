// 1. Kreiranje XML objekta
let request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  if (request.readyState === 4 && request.status === 200) {
    // ako je sve ok
    console.log(request, request.responseText);
  } else if (request.readyState === 4) {
    console.log(`Ne mogu da dohvatim podatke`);
  }
});

// 2. Otvaranje kreiranog zahteva

request.open('GET', '../JSON/todo.json');

// 3. Saljemo zahtev
request.send();

// PRIMER CALLBACK FJE

// fja myFunc prima kao parametar drugu funkciju (callback)
// myFunck moze da poziva funkciju koja joj je prosledjena kao parametar i da joj prosledjuje argumente
let myFunc = callback => {
  let value1 = 5;
  let value2 = 6;
  callback(value1, value2);
};

// Kada pozivamo fju myFunc ona ocekuje da joj prosedimo drugu fju, mi joj prosledjujemo realizaciju callback funkcije(telo fje)
myFunc((value1, value2) => {
  console.log(value1 + value2);
});
