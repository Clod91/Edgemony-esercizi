// ## Esercizio 1

// Creare una singola card tutto in statico (via HTML), inserire gli elementi a piacere, come immagini, testo o titoli, indispensabile pero aggiungere un button con una X come testo.

// Aggiungere un evento al cui click del mouse sulla class intera:

// - Cambi il colore del testo di tutta la card

// Aggiungere un secondo evento al cui click del mouse sul pulsante con la X - Elimini la card stessa

function textChanger() {
  changeText.style.color = "#f8d9d9";
}
function removeBtn() {
  const cardEl = document.querySelector(".card");
  cardEl.remove();
}

const btnClickEl = document.querySelector(".btn");
const changeText = document.querySelector(".testo");

btnClickEl.addEventListener("click", textChanger);
btnClickEl.addEventListener("click", removeBtn);
