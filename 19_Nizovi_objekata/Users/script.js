let blog1 = {
  title: 'HTML',
  likes: 50,
  dislikes: 3,
};

let blog2 = {
  title: 'CSS',
  likes: 170,
  dislikes: 104,
};

let blog3 = {
  title: 'JS',
  likes: 170,
  dislikes: 110,
};

let user1 = {
  userName: 'Stefan',
  age: 31,
  blogs: [blog1, blog2, blog3],
  logBlogs: function () {
    this.blogs.forEach(e => {
      console.log(e.title);
    });
  },
  sumLikes: function () {
    let sum = 0;
    this.blogs.forEach(e => {
      sum += e.likes;
    });
    return sum;
  },
};

// 1. U objektu user, napraviti metod koji ispisuje sve blogove korisnika
user1.logBlogs();

// 2. Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
let user2 = {
  userName: 'Jelena',
  age: 26,
  blogs: [blog2, blog3],
  sumLikes: function () {
    let sum = 0;
    this.blogs.forEach(e => {
      sum += e.likes;
    });
    return sum;
  },
};

let user3 = {
  userName: 'Milena',
  age: 14,
  blogs: [blog1, blog2],
  sumLikes: function () {
    let sum = 0;
    this.blogs.forEach(e => {
      sum += e.likes;
    });
    return sum;
  },
};

let users = [user1, user2, user3];

// 3. Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(e => {
  let godine = e.age;
  if (godine < 18) {
    console.log(e.userName);
  }
});

// 4 Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(e => {
  let userBlogs = e.blogs;
  userBlogs.forEach(e2 => {
    if (e2.likes > 50) {
      console.log(e2.title, e.userName);
    }
  });
});

// 5. Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(e => {
  let userName = e.userName;
  let userBlogs = e.blogs;
  userBlogs.forEach(e2 => {
    if (userName == 'Stefan') {
      console.log(e2.title);
    }
  });
});

// 6. Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
// prvi nacin
users.forEach(e => {
  let userBlogs = e.blogs;
  let suma = 0;
  userBlogs.forEach(e2 => {
    suma += e2.likes;
  });
  if (suma > 100) {
    console.log(e.userName);
  }
});

// drugi nacin
// metoda sumLikes u svakom useru
users.forEach(e => {
  if (e.sumLikes() > 100) {
    console.log(e.userName);
  }
});

// treci nacin
let sum = blogs => {
  let suma = 0;
  blogs.forEach(e => {
    suma += e.likes;
  });
  return suma;
};
console.log(sum(user1.blogs));

users.forEach(e => {
  let userBlogs = e.blogs;
  let likes = sum(userBlogs);
  if (likes > 100) {
    console.log(e.userName);
  }
});

// 7. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena
let avgGeneral;
// prosecna ocena u odnosu na sve blogove svih korisnika
let sumGeneral = 0;
let countGeneral = 0;
// prvi nacin odredjivanja prosecnog broja pozitivnih ocena
// users.forEach(e => {
//   e.blogs.forEach(e2 => {
//     sumGeneral += e2.likes;
//     countGeneral++;
//   });
// });
// avgGeneral = sumGeneral / countGeneral;
// console.log(avgGeneral);

// drugi nacin
users.forEach(e => {
  sumGeneral += e.sumLikes();
  countGeneral += e.blogs.length;
});

avgGeneral = sumGeneral / countGeneral;
console.log(avgGeneral);

users.forEach(e => {
  e.blogs.forEach(e2 => {
    if (e2.likes > avgGeneral) {
      console.log(e2.title);
    }
  });
});
// 8. Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena i ispodprosečan broj negativnih ocena
sumGeneral = 0;
countGeneral = 0;
users.forEach(e => {
  e.blogs.forEach(e2 => {
    sumGeneral += e2.dislikes;
    countGeneral++;
  });
});

let avgGeneral2 = sumGeneral / countGeneral;
console.log(avgGeneral2);

users.forEach(e => {
  e.blogs.forEach(e2 => {
    if (e2.likes > avgGeneral && e2.dislikes < avgGeneral2) {
      console.log(e2.title);
    }
  });
});
