// # Esercizio 1
// - scrivere una prima funzione che presa un stringa come argomento, ritorni la stessa stringa + la parola `bootcamp`;

function fullSentence(sentence, bootcamp) {
  bootcamp = " bootcamp";
  sentence = "ho iniziato un corso chiamato coding";
  console.log(sentence + bootcamp);
  return sentence + bootcamp;
}

fullSentence();

// # Esercizio 2

// - scrivere un oggetto col vostro nome che vi identifichi in proprietà (nome, cognome, ecc...)
// e per metodi (es. possono anche essere semplici console.log di voi che eseguite un hobby)

const claudio = {
  age: 31,
  name: "Claudio",
  lastName: "Loreto",
  residence: "Roma",
  male: true,
  hobbie: function () {
    console.log("i miei hobbie principali sono viaggiare e videogiocare"),
      console.log("ho un gatto di nome Tor ed un cane di nome Tequila");
  },
};
claudio.hobbie();

// # Avanzato

// - Scrivere una funzione calculator che preso come argomento una operazione e due numeri, ritorni alla fine il numero risultato dall'operazione scelta.

// function calculator(operation, num1, num2) {
//   if (operation === "+") {
//     console.log("la somma dei due numeri è " + (num1 + num2));
//   } else if (operation === "-") {
//     console.log("la differenza dei due numeri è " + (num1 - num2));
//   } else if (operation === "*") {
//     console.log("la moltiplicazione dei due numeri è " + num1 * num2);
//   } else if (operation === "/") {
//     console.log("il risultato della divisione è " + num1 / num2);
//   }
// }

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

// let n1 = getRandomInt(100);
// let n2 = getRandomInt(100);

// calculator("+", n1, n2);
// calculator("-", n1, n2);
// calculator("/", n1, n2);
// calculator("*", n1, n2);

// - Provare ad aggiungere i due numeri singolarmente (num1, num2) e anche in coppia dentro un array ([num1, num2]).

let numbers = [10, 5];

function calculatorArr(operation, n1, n2) {
  if (operation === "+") {
    console.log("la somma dei due numeri è " + (n1 + n2));
  } else if (operation === "-") {
    console.log("la differenza dei due numeri è " + (n1 - n2));
  } else if (operation === "*") {
    console.log("la moltiplicazione dei due numeri è " + n1 * n2);
  } else if (operation === "/") {
    console.log("il risultato della divisione è " + n1 / n2);
  }
}

calculatorArr("+", numbers[0], numbers[1]);
calculatorArr("-", numbers[0], numbers[1]);
calculatorArr("*", numbers[0], numbers[1]);
calculatorArr("/", numbers[0], numbers[1]);
