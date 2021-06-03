let getSomething = () => {
  return new Promise((resolve, reject) => {
    // resolve('Nesto resolve...');
    reject('Nesto reject...');
  });
};

// console.log(getSomething());

// vraca resolve ili reject
// Ako vrati resolve onda se izvrsava then grana
getSomething()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
