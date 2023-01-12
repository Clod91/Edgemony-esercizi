// Sulla base della lezione odierna, e utilizzando l'array di oggetti , svolgere i seguenti esercizi:

// ### Esercizio 1

// Eseguire sull'array riportato sotto:

// - un metodo forEach che stampi in console.log i soli ID di ogni singolo elemento
// - un metodo map che memorizzi in una variabile tutti gli userId di ogni singolo elemento e quindi richiamarli con un console.log a parte
// - un metodo filter che stampi in console.log i soli ID di ogni singolo elemento i cui valori siano maggiori o uguali a 4

import { todos } from "./mocks.js";

todos.forEach((todo) => console.log(todo.id));

const userIds = todos.map((todo) => todo.userId);
console.log(userIds);

const filteredIds = todos.filter((todo) => todo.id >= 4).map((todo) => todo.id);
console.log(filteredIds);
