let a = [1, 2, 3, 4, 5];

console.log(typeof a);

let blog = {
  title: 'Objekti',
  content: 'Ovo su objekti...',
  author: 'Jelena',
};

console.log(blog);
console.log(typeof blog);

// let x = 5;
// console.log(typeof x);
// Mozete proveriti tip ma koje druge promenljive

// pristup osobini.propertiju u objektu
console.log(blog.title);
console.log(blog[`content`]);

// Izmena jedne osobine/propertija u objektu
blog.content = `Objekti su slozeni tipovi podataka`;
console.log(blog.content);

blog[`author`] = `Jelena Matejic`;
console.log(blog[`author`]);

///////////////////////////////////////////////

let user = {
  userName: `John`,
  age: 32,
  blogs: [`Minimum`, `Maximum`, `Average`],
  login: function () {
    console.log(`Ulogovani ste`);
  },
  // metod je funckija u objektu, a funkcija je van objekta
  logBlogs: function () {
    // console.log(this.blogs);
    this.blogs.forEach(blog => {
      console.log(blog);
    });
  },
  // kada smo u objektu ne mozemo da pristupamo svojstvima, osim kada koristimo this
  plata: function (x, y) {
    console.log(x + y);
  },
  // mogu biti i metode sa parametrima kao i bilo koja funkcija
  test: function () {
    console.log(this);
  },
};

console.log(user);
user.login();
user.logBlogs();
user.plata(1200, 500);
user.test();
// daje informacije o objektu
user.test(this);
