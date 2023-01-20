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
const deleteForm = qS("#deleteForm");
const deleteId = qS("#delete_id");
const modForm = qS("#mod_form");

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
  funzionePost(newProduct, "products");
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
    .then((data) => alert("abbiamo aggiunto in memoria il tuo prodotto: "))
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

deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();
  functionDelete(deleteId.value);
});

const functionDelete = (newDel) => {
  fetch(`https://api.escuelajs.co/api/v1/products/` + newDel, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data !== true) {
        alert("Il prodotto non è stato eliminato" + data.name);
      } else {
        alert("Il prodotto è stato eliminato!");
      }
    })
    .catch((e) => console.log("ERRORE: ", e));
};

modForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const modProd = {
    name: event.target[1].value,
    price: parseInt(event.target[2].value),
    categoryId: parseInt(event.target[3].value),
    image: event.target[4].value,
    description: event.target[5].value,
  };

  funzioneMod(modProd, event.target[0].value);
});

const funzioneMod = (prodBody, param) => {
  fetch("https://api.escuelajs.co/api/v1/products/" + param, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(prodBody),
  })
    .then((res) => res.json())
    .then((data) => alert("abbiamo modificato il prodotto: " + data.title))
    .catch((e) => console.log("ERRORE: ", e));
};
