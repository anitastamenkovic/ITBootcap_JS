/////////////////////////
// FETCH
/////////////////////////

// fetch vraca promise - asocijacija na promise je then i catch
// upada u catch granu samo ako je doslo do network error
// Sled od 4 koraka
// 1. fetch .json fajla
// 2. return response.json()
// 3. uzeti podatke iz response
// 4. catch error
fetch('../JSON/todo.json')
  .then(response => {
    // response je objekat koji nosi sa sobom veliki broj atributa
    console.log('resolved', response);
    return response.json();
    // response.json() je promise i zbog toga moramo ponovo da radimo then i catch
  })
  .then(data => {
    console.log('resolved1', data);
  })
  .catch(err => {
    console.log('rejected', err);
  });

//////////////////////////////
// ASYNC & AWAIT
//////////////////////////////
// Asinhrona fja se prosledjuje kao parametar i ima zagrade
// asinhrona fja ispred () mora da ima async
// kao rezultat vraca promise
// sinhronizuje se tok
// await iskljucivo u asinhronoj funkciji

let getToDo = async () => {
  let response = await fetch('../JSON/todo.json');
  // vraca response zbog cega smo ranije koristili then i catch
  // await ("cekaj / zaustavi kod") dokle god se ne izvrsi komanda koja je iza await
  // console.log(response);

  // ispistivanje statusa
  if (response.status != 200) {
    throw new Error(`Ne mogu da dohvatim podatke`);
  } else {
    let data = await response.json();
    // vraca promise
  }

  // Sa ovim delom krece tek kada su izvrsene prethodne linije u potpunosti
  response = await fetch('../JSON/fruits.json');
  data = await response.json();
  return data;
  // vraca promise sto znaci da cu za njega morati da radim then i catch
};

console.log(`Nesto 1`);
console.log(`Nesto 2`);

getToDo()
  .then(data => {
    console.log('resolved', data);
  })
  .catch(err => {
    console.log('rejected', err);
  });

// Moze i ovako skraceno
// getToDo()
//   .then(data => console.log('resolved', data))
//   .catch(err => console.log('rejected', err));

console.log(`Nesto 3`);
console.log(`Nesto 4`);
