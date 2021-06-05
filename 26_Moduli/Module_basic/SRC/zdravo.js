// Nudim promenljivu ime i fju zdravo
let ime = 'Anita';

function ispis(poruka) {
  console.log(poruka);
}

function zdravo(ime) {
  ispis(`Zdravo ${ime}!`);
}

// Exportovanje
export { ime, zdravo };
