import { qS, cE } from "./utils.js";

const postForm = qS("#item_form");
const inputTitle = qS("#title");
const inputPrice = qS("#price");
const inputCategory = qS("#category_id");
const inputDescription = qS("#description");
const inputImage = qS("#image");

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const newProduct = {
    title: inputTitle.value,
    price: parseInt(inputPrice.value),
    description: inputDescription.value,
    categoryId: parseInt(inputCategory.value),
    images: [inputImage.value],
  };
  console.log(newProduct);
  funzionePost(newProduct);
});

const funzionePost = (prodBody) => {
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(prodBody),
  })
    .then((res) => res.json())
    .then((data) =>
      alert("abbiamo aggiunto in memoria il tuo prodotto: " + data.title)
    )
    .catch((e) => console.log("ERRORE: ", e));
};
