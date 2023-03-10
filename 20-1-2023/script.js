import { cE, qS } from "./utils.js";

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");

const hamburgerBtn = document.querySelector(".hamburger");
const tendina = document.querySelector(".tendina");
const productsList = document.querySelector(".products");
const counter = qS(".counter");

let counterNum = 0;
parseInt(counterNum);
const cart = [];
const bodyEl = document.body;

btn1.addEventListener("click", () => {
  img1.classList.add("show");
  img2.classList.remove("show");
  img3.classList.remove("show");

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});

btn2.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.add("show");
  img3.classList.remove("show");

  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
});

btn3.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.remove("show");
  img3.classList.add("show");

  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
});

hamburgerBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

const downloadDataBtn = document.querySelector(".button");
const loaderElement = document.querySelector(".loader");

downloadDataBtn.addEventListener("click", () => {
  loaderElement.textContent = "loading...";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((element) => {
        cardCreator(element);
      })
    );
});
const cardCreator = (item) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.images[0]);
  imgEl.setAttribute("alt", "#");

  const h1El = document.createElement("h1");
  h1El.className = "title";
  h1El.textContent = item.title.substr(0, 14);

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = item.price + "???";

  const descEl = document.createElement("p");
  descEl.className = "description";
  descEl.textContent = item.description.substr(0, 30);

  const addBtn = document.createElement("button");
  addBtn.textContent = "Aggiungi al Carrello";

  addBtn.addEventListener("click", () => {
    cart.push(item);
    cartCreation();
    counterNum = counterNum + 1;
    counter.textContent = counterNum;
    alert("prodotto aggiunto al carrello!");
  });

  cardEl.append(imgEl, h1El, priceEl, descEl, addBtn);
  productsList.appendChild(cardEl);
  loaderElement.textContent = "";
};

const cartCreation = () => {
  tendina.innerHTML = "";
  cart.forEach((item) => {
    const cartEl = cE("div");
    cartEl.innerHTML = `<p>${item.title}</p><p>${item.price}</p>`;
    const deleteBtn = cE("button");
    deleteBtn.className = "delete";
    cartEl.appendChild(deleteBtn);
    tendina.appendChild(cartEl);
    deleteBtn.addEventListener("click", () => {
      counterNum = counterNum - 1;
      counter.textContent = counterNum;
      cartEl.remove();
    });
  });
};

const darkBtn = qS(".dark_mode");

darkBtn.addEventListener("click", function () {
  bodyEl.classList.toggle("dark-theme");
});
