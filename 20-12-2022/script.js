//  Esercizio 1

// Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, e aggiungere al suo interno dieci elementi di tipo `string` a scelta, rispettando i seguenti punti:

// - utilizzare il ciclo for classico

// - sarà l'utente ad inserire queste stringhe (`prompt`)

// - alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console

let christmasFood = [];

for (let i = 0; i < 10; i++) {
  christmasFood.push(prompt("cosa mangerai durante le feste di Natale?"));
}

console.log("durante le feste mangerai" + christmasFood);

//  Avanzato

// Riscrivere l'esercizio sopra utilizzando le altre due versioni minimal del ciclo for (`for in`ed in `for of`)

// // for (let food of christmasFood) {
// //   console.log(food);
// // }

// // for (let crsFoodIndex in christmasFood) {
// //   console.log(crsFoodIndex);
// }
