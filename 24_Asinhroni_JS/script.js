let request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//   console.log(request);
// });

// request.addEventListener('readystatechange', () => {
//   if (request.readyState === 1) {
//     console.log(`Uspostavljena konekcija`);
//   } else if (request.readyState === 2) {
//     console.log(`Poslat je zahtev serveru`);
//   } else if (request.readyState === 3) {
//     console.log(`Odgovor je u statusu preuzimanja`);
//   } else if (request.readyState === 4) {
//     console.log(`Preuzet je odgovor sa servera u potpunosti`);
//     console.log(request.responseText);
//   }
// });

request.addEventListener('readystatechange', () => {
  //console.log(request, request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText);
    // odogovor je uvek string
    let data = JSON.parse(request.responseText);
    console.log(data);
  } else if (request.readyState === 4) {
    console.log(`Nemoguce dobiti odgovor od servera`);
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/users/1');
// uspostavljanje konekcije (0-1)
request.send();
// slanje zahteva (1-2)
// 2-3 i 3-4 u pozadini

console.log(`Nesto posle 1`);
console.log(`Nesto posle 2`);
