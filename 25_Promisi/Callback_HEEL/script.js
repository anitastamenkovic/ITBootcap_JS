let getToDo = (resource, callback) => {
  // 1. Kreiranje XML objekta
  let request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      // ako je sve ok
      // console.log(request, request.responseText);
      callback(request.responseText, undefined);
    } else if (request.readyState === 4) {
      // console.log(`Ne mogu da dohvatim podatke`);
      callback(undefined, 'Ne mogu da dohvatim podatke');
    }
  });

  // 2. Otvaranje kreiranog zahteva

  request.open('GET', resource);

  // 3. Saljemo zahtev
  request.send();
};

// getToDo("../JSON/todo.json", () => {});

getToDo('../JSON/todo.json', (data, err) => {
  console.log(`Callback okinuta`);
  // Ako je err == true ispisati tu gresku
  if (err) {
    console.log(err);
    // ispisuje gresku
  } else {
    console.log(data);
    // ispisuje podatke sa kojima moze da se raspolaze
    // Nakon sto se ucita todo.json, ucita se fruits.json
    getToDo('../JSON/fruits.json', (data, err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
        // Nakon sto se ucita fruits.json, ucita se vegetables.json
        getToDo('../JSON/vegetables.json', (data, err) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
            // Nakon sto se ucita vegetables.json, ucita se cereals.json
            getToDo('../JSON/cereals.json', (data, err) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data);
              }
            });
          }
        });
      }
    });
  }
});

console.log('Kraj');
