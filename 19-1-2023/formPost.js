import { qS, cE } from "./utils.js";

const postForm = qS("#item_form");
const inputTitle = qS("#title");
const inputPrice = qS("#price");
const inputCategory = qS("#category_id");
const inputDescription = qS("#description");
const inputImage = qS("#image");

const categoryForm = qS("#categoryForm");
const catName = qS("#categoryName");
const catImage = qS("#categoryImage");

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

const funzionePost = (prodBody, param) => {
  fetch("https://api.escuelajs.co/api/v1/" + param, {
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

categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCat = {
    name: catName.value,
    image: catImage.value,
  };

  funzionePost(newCat, "categories");
});
