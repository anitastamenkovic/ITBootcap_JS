let getToDo = resource => {
  let request = new XMLHttpRequest();

  // 2. Otvaranje kreiranog zahteva
  request.open('GET', resource);

  // 3. Saljemo zahtev
  request.send();

  return new Promise((resolve, reject) => {
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        // ako je sve ok
        // console.log(request, request.responseText);
        // callback(request.responseText, undefined);
        resolve(request.responseText);
      } else if (request.readyState === 4) {
        // console.log(`Ne mogu da dohvatim podatke`);
        // callback(undefined, 'Ne mogu da dohvatim podatke');
        reject(`Ne mogu da dohvatim podatke`);
      }
    });
  });
};

getToDo('../JSON/fruits.json')
  .then(data => {
    console.log(`Promise fruits resolved`, data);
    return getToDo('../JSON/vegetables.json');
  })
  .then(data => {
    console.log(`Promise vegetables resolved`, data);
    return getToDo('../JSON/cereals.json');
  })
  .then(data => {
    console.log(`Promise cereals resolved`, data);
  })
  .catch(err => {
    console.log(`Promise rejected`, err);
  });

console.log('Kraj');
