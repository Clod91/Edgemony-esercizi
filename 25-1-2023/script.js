import { cE, qS, cardCreator } from "./utils.js";
import myJson from "./mocks.json" assert { type: "json" };

const bodyEl = qS("body");
const cardSection = cE("div");
cardSection.className = "card_section";
bodyEl.append(cardSection);
console.log(myJson);

myJson.quotes.map((quotes) => cardSection.appendChild(cardCreator(quotes)));
