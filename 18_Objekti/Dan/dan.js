let dan = {
  datum: `2021/05/17`,
  kisa: true,
  sunce: true,
  oblacno: true,
  temperature: [10, 15, 17, 21, 21, 21, 18, 13, 11],
  // temperature: [1, 10, 8, -12],
  // 1.
  prosecna: function () {
    let suma = 0;
    this.temperature.forEach(temp => {
      suma += temp;
    });
    return suma / this.temperature.length;
  },

  // 2.
  natprosecna: function () {
    let avg = this.prosecna();
    let br = 0;
    this.temperature.forEach(e => {
      if (e > avg) {
        br++;
      }
    });
    return br;
  },

  // 3.
  merenjaMax: function () {
    let max = this.temperature[0];
    let br = 0;
    this.temperature.forEach(e => {
      if (e > max) {
        max = e;
      }
    });
    this.temperature.forEach(e => {
      if (e == max) {
        br++;
      }
    });
    return br;
  },
  // drugi nacin
  maksimalna: function () {
    let max = this.temperature[0];
    // trazenje maksimuma for petljom
    // for(let i = 0; i < this.temperature.length; i++) {
    //   if(max < this.temperature[i]) {
    //     max = this.temperature[i];
    //   }
    // }

    // Trazenje maksimuma forEach petljom
    this.temperature.forEach(e => {
      if (max < e) {
        max = e;
      }
    });
    return max;
  },
  brojMaksimalnih: function () {
    let max = this.maksimalna();
    let broj = 0;
    this.temperature.forEach(e => {
      if (e == max) {
        broj++;
      }
    });
    return broj;
  },

  // 4.
  izmedjuDve: function (a, b) {
    let br = 0;
    this.temperature.forEach(e => {
      if (e > a && e < b) {
        br++;
      } else if (e < a && e > b) {
        br++;
      }
    });
    return br;
  },
  // drugi nacin
  izmedjuDve2: function (temp1, temp2) {
    // Da je temp1 < temp2
    if (temp1 > temp2) {
      let tmp = temp1;
      temp1 = temp2;
      temp2 = tmp;
    }

    let broj = 0;
    this.temperature.forEach(e => {
      if (e > temp1 && e < temp2) {
        broj++;
      }
    });
    return broj;
  },

  // 5.
  ispodprosecna: function () {
    let avg = this.prosecna();
    let br = 0;
    this.temperature.forEach(e => {
      if (e < avg) {
        br++;
      }
    });
    return br;
  },
  vecinaIznad: function () {
    let iznadProseka = this.natprosecna();
    let ispodProseka = this.ispodprosecna();
    if (iznadProseka > ispodProseka) {
      return true;
    } else {
      return false;
    }
  },
  // drugi nacin
  vecinomNatprosecna: function () {
    let iznad = this.natprosecna();
    let ispod = this.temperature.length - iznad;
    return iznad > ispod;
    // if(iznad > ispod) {
    //   return true;
    // } else {
    //   return false;
    // }
  },

  // 6.
  leden: function () {
    // prvi nacin
    // let res = true;
    // this.temperature.forEach(e => {
    // moze i ovako upotrebom ternarnog operatora
    // e >= 0 ? leden = false : null;
    //   if (e >= 0) {
    //     res = false;
    //     // nema koriscenja break, nema return
    //   }
    //   // else ne sme
    // });
    // return res;

    // // drugi nacin
    // for (i = 0; i < this.temperature.length; i++) {
    //   if (this.temperature[i] >= 0) {
    //     return false;
    // ne ide break, cim naidje na return prekida
    //   }
    // }
    // return true;

    // treci nacin
    let res = true;
    for (i = 0; i < this.temperature.length; i++) {
      if (this.temperature[i] >= 0) {
        res = false;
        break;
      }
    }
    return res;
  },

  // 7.
  tropski: function () {
    let res = true;
    for (let i = 0; i < this.temperature.length; i++) {
      if (this.temperature[i] < 24) {
        res = false;
        break;
      }
    }
    return res;
  },

  // 8.
  nepovoljan: function () {
    let res = false;
    for (let i = 0; i < this.temperature.length - 1; i++) {
      if (Math.abs(this.temperature[i] - this.temperature[i + 1]) > 8) {
        res = true;
      }
    }
    return res;
  },
};

// 1. Metoda: Određuje i vraća prosečnu temperaturu izmerenu tog dana.
console.log(dan.prosecna());

// 2. Metoda: Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
console.log(dan.natprosecna());

// 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
console.log(dan.merenjaMax());

// 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
console.log(dan.izmedjuDve(-15, 18));

// 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false.
console.log(dan.vecinaIznad());

// 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
console.log(dan.leden());

// 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
console.log(dan.tropski());

// 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
console.log(dan.nepovoljan());

// 9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
