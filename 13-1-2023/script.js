import { cE, qS } from "./utils.js";

const images = [
  "./img/tropical1.jpg",
  "./img/tropical2.jpg",
  "./img/tropical3.jpg",
];

const sliderImg = qS(".slider_img");
const firstBtnEl = qS(".first-btn");
const secondBtnEl = qS(".second-btn");
const thirdBtnEl = qS(".third-btn");

firstBtnEl.addEventListener("click", () => {
  sliderImg.setAttribute("src", images[0]);
  firstBtnEl.style.backgroundColor = "#c53737";
  secondBtnEl.style.backgroundColor = "#fce043";
  thirdBtnEl.style.backgroundColor = "#fce043";
});

secondBtnEl.addEventListener("click", () => {
  sliderImg.setAttribute("src", images[1]);
  firstBtnEl.style.backgroundColor = "#fce043";
  secondBtnEl.style.backgroundColor = "#c53737";
  thirdBtnEl.style.backgroundColor = "#fce043";
});

thirdBtnEl.addEventListener("click", () => {
  sliderImg.setAttribute("src", images[2]);
  firstBtnEl.style.backgroundColor = "#fce043";
  secondBtnEl.style.backgroundColor = "#fce043";
  thirdBtnEl.style.backgroundColor = "#c53737";
});

// ### Avanzato

// Creare il template dello slider cui sopra completamente dinamico (via Javascript).

// const sliderCreator = (
//   sliderTitle,
//   sliderText,
//   sliderImg,
//   firstBtnEl,
//   secondBtnEl,
//   thirdBtnEl
// ) => {
//   const sliderTitle = cE("h1");
//   const sliderText = cE("p");
//   sliderTitle.className = "slider_title";
//   sliderText.className = "slider_text";
//   sliderTitle.textContent = "LA VACANZA DA SOGNO";
//   sliderText.textContent = "Scegli dove andare al resto pensiamo noi";
//   const sliderImg = cE("img");
//   sliderImg.setAttribute("src", "./img/welcome.jpg");
//   sliderImg.className = "slider_img";
//   const firstBtnEl = cE("button");
//   const secondBtnEl = cE("button");
//   const thirdBtnEl = cE("button");
// };
