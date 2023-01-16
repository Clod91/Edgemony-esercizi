import { qS, cE } from "./utils.js";

const bodyEl = document.body;

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((products) => productsExtractor(products));

const productsExtractor = (products) => {
  products.forEach((product) => {
    console.log("--------------" + product.title);
    console.log(product.description);
  });
};

// ho un pochino di problemi a casa e non riesco a fare l'avanzato
