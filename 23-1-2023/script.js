import { cE, qS, cardCreator } from "./utils.js";
const bodyEl = qS("body");
const cardSection = cE("div");
cardSection.className = "card_section";
const btnGen = cE("button");
btnGen.className = "card_gen";
btnGen.textContent = "Crea un'altra citazione!";
bodyEl.append(btnGen, cardSection);

const GET = async (value) => {
  const result = await fetch("https://dummyjson.com/quotes/" + value);
  const data = await result.json();
  return data;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const randomQuote = getRandomInt(100);

GET("1").then((data) => cardSection.appendChild(cardCreator(data)));

btnGen.addEventListener("click", () => {
  GET(randomQuote).then((data) => cardSection.appendChild(cardCreator(data)));
  btnGen.remove();
});
