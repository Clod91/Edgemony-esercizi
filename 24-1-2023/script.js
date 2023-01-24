import { qS, cE } from "./utils.js";
const bodyEl = document.body;
const BASE_URL = "https://dummyjson.com/";

const cardGen = (data) => {
  const cardEl = cE("div");
  cardEl.className = "card";
  const generalities = cE("div");
  generalities.className = "gen";
  const nameEl = cE("h3");
  const surnameEl = cE("h3");
  nameEl.textContent = "Name: " + data.firstName;
  surnameEl.textContent = "Surname: " + data.lastName;
  const ageEl = cE("p");
  ageEl.textContent = "Age: " + data.age;
  const genderEl = cE("p");
  genderEl.textContent = "Gender: " + data.gender;

  const moreInfo = cE("div");
  moreInfo.className = "more_info";
  const userNameEl = cE("h4");
  userNameEl.textContent = "User: " + data.username;
  const passwordEl = cE("p");
  passwordEl.className = "password";
  passwordEl.textContent = "Password: " + data.password;
  //   const addressEl = cE("p");
  //   addressEl.textContent = "Address:" + data.address.address;
  //   const cityEl = cE("h2");
  //   cityEl.textContent = "City:" + data.address.city;
  const phoneEl = cE("p");
  phoneEl.textContent = "phone number: " + data.phone;
  generalities.append(nameEl, surnameEl, ageEl, genderEl);
  moreInfo.append(userNameEl, passwordEl, phoneEl);
  cardEl.append(generalities, moreInfo);
  return cardEl;
};

const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};
GET("users?limit=5").then((data) =>
  data.users.map((user) => bodyEl.appendChild(cardGen(user)))
);

// avanzato

// const searchNameEl = cE("input");
// let searchedName = "";
// bodyEl.appendChild(searchNameEl);

// const cardDelete = () => {
//   const cardEl = document.querySelectorAll(".card");
//   cardEl.forEach((user) => user.remove());
// };

// searchNameEl.addEventListener("input", (event) => {
//   cardDelete();
//   searchedName = event.target.value;
//   // console.log(searchedName);

//   GET("users?limit=10").then((data) =>
//     data.users.map((user) => {
//       if (user.firstName.includes(searchedName))
//         bodyEl.appendChild(cardGen(user));
//     })
//   );
// });
