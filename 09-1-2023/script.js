// ## Esercizio 1

// Sulla base della lezione del giorno, ricreare la calcolatrice fatta in passato utilizzando solo arrow functions.

let operationType = prompt("che operazione vuoi eseguire?");

const calculator = (num1, num2, operation) => {
  if (operation === "+") {
    const sum = (num1, num2) => num1 + num2;
    console.log("la somma dei tuoi numeri è " + sum(num1, num2));
  } else if (operation === "-") {
    const sub = (num1, num2) => num1 - num2;
    console.log("la differenza dei due numeri è " + sub(num1, num2));
  } else if (operation === "*") {
    const molt = (num1, num2) => num1 * num2;
    console.log("la moltiplicazione dei due numeri è " + molt(num1, num2));
  } else if (operation === "/") {
    const divi = (num1, num2) => num1 / num2;
    console.log("il risultato della divisione è " + divi(num1, num2));
  }
};

const n1 = 10;
const n2 = 2;

calculator(n1, n2, operationType);

// ## Avanzato

// Provare a completare l'esercizio sopra applicando qualche callback.
// Anche qui non importa l'impostazione, siate creativi, l'importante che si verifichi il caso di una callback.

function calc(callback, firstNum, secondNum) {
  return callback(firstNum, secondNum);
}

const addition = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtraction = function (firstNum, secondNum) {
  return firstNum - secondNum;
};

const moltiplication = function (firstNum, secondNum) {
  return firstNum * secondNum;
};

const division = function (firstNum, secondNum) {
  return firstNum / secondNum;
};

console.log(calc(addition, 20, 10));
console.log(calc(subtraction, 20, 10));
console.log(calc(moltiplication, 20, 10));
console.log(calc(division, 20, 10));
