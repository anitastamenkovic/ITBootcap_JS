let car1 = "Volvo";
let car2 = "BMW";
let car3 = "Toyota";

// moze i ovako
let cars = ["Volvo", "BMW", "Toyota"];
console.log(cars);

console.log(cars[0]);
console.log(cars[2]);

let voce = ["jagoda", "jabuka", "malina", "kupina", "ananas", "breskva"];
console.log(voce);
console.log(voce[2]);

voce[2] = "tresnja";
console.log(voce);

// Ispis elemenata niza
console.log(voce[0], voce[1], voce[2]);

// Ispis elemenata niza koriscenjem petlje
for(let i = 0; i < voce.length; i++){
 console.log(voce[i]);
}
// znak < a ne <= jer bi isli izvan granice niza

// voce[3] = "ananas";
// console.log(voce); ne dodavati ovako

// Koliko niz ima elemenata
console.log(voce.length);

voce = ["kajsija", "dunja", "visnja"];
console.log(voce);
// voce = 10;
// console.log(voce); ponasa se kao i druga promenljiva

const povrce = ["tikvica", "buranija", "krompir"];
console.log(povrce);
povrce[0] = "tikva";
// moze se menjati clan niza iako je konstantna varijabla
console.log(povrce);

// povrce = ["grasak", "pasulj"]; ne moze se menjati konstantna varijabla

let razno = [3, -15.5, false, "bla bla bla", ["a", "b", "c"]];
console.log(razno);