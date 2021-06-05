// Importovanje
import { ime, zdravo } from './SRC/zdravo.js';

// Nudim promenljivu prezime
let prezime = 'Stamenkovic';

// Dohvati promenljivu ime i fju zdravo iz modula zdravo.js
console.log(ime + ' ' + prezime);

zdravo('Pera');
zdravo(ime);
