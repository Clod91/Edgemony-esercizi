const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const cardCreator = (data) => {
  const cardEl = cE("div");
  const qouteEl = cE("p");
  const authorEl = cE("p");
  cardEl.className = "quote_card";
  qouteEl.className = "quote";
  authorEl.className = "author";
  qouteEl.textContent = data.quote;
  authorEl.textContent = data.author;
  cardEl.append(qouteEl, authorEl);
  return cardEl;
};

export { qS, cE, cardCreator };
