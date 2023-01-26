import { qS, cE, GET } from "./utils.js";
const bodyEl = document.body;

const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
const titleEl = cE("h2");
titleEl.className = "title";
titleEl.textContent = "Prodotti divisi per fasce di prezzo";
bodyEl.append(titleEl, wrapperEl);

const prodPrizeBarGen = (value, productsPrice) => {
  const wrapper = cE("div");
  const textEl = cE("h4");
  const statusEl = cE("div");

  wrapper.className = "products_price_bar";
  textEl.textContent = value + "€";
  statusEl.className = "price_bar";
  statusEl.style.height = `${productsPrice * 5}px`;

  statusEl.style.backgroundColor = `#${Math.floor(
    Math.random() * 16777215
  ).toString(16)}`;

  wrapper.append(textEl, statusEl);
  return wrapper;
};

let firstPriceRange,
  secondPriceRange,
  thirdPriceRange,
  fourthPriceRange,
  fifthPriceRange;
let productsPriceRange = [];

GET("products?limit=100")
  .then(({ products }) => {
    const productsPrice = products.map((product) => product.price);

    firstPriceRange = {
      price: productsPrice.filter((price) => price <= 400),
      text: "0 - 400",
    };
    secondPriceRange = {
      price: productsPrice.filter((price) => price <= 800 && price >= 401),
      text: "401 - 800",
    };
    thirdPriceRange = {
      price: productsPrice.filter((price) => price <= 1199 && price >= 801),
      text: "801 - 1199",
    };
    fourthPriceRange = {
      price: productsPrice.filter((price) => price <= 1599 && price >= 1200),
      text: "1200 - 1599",
    };
    fifthPriceRange = {
      price: productsPrice.filter((price) => price <= 199 && price >= 1600),
      text: "1600 - 1999",
    };

    productsPriceRange.push(
      firstPriceRange,
      secondPriceRange,
      thirdPriceRange,
      fourthPriceRange,
      fifthPriceRange
    );
  })
  .then(() => {
    productsPriceRange.map((range) =>
      wrapperEl.appendChild(prodPrizeBarGen(range.text, range.price.length))
    );
  });
