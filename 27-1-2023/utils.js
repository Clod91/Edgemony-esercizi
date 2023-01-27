const createHero = (img, title) => {
  const bodyEl = document.body;
  const heroEl = document.createElement("section");
  const heroImg = document.createElement("img");
  const heroTitle = document.createElement("h3");
  const sectionEl = qS(".hero_section");

  heroEl.className = "hero";

  heroImg.className = "heroImg";
  heroImg.setAttribute("src", img);
  heroImg.setAttribute("alt", title);

  heroTitle.className = "titolo";
  heroTitle.textContent = title;

  heroEl.append(heroImg, heroTitle);
  sectionEl.appendChild(heroEl);
};

const CardGen = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");

  cardEl.setAttribute("id", data.id);
  cardEl.className = "tv_show";
  if (data.poster_path) {
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  }
  imgEl.setAttribute("alt", data.title);
  cardEl.appendChild(imgEl);

  return cardEl;
};

const CardGen2 = (data) => {
  const cardEl = cE("div");
  const imgEl = cE("img");
  const titleEl = cE("h2");

  titleEl.textContent = data.name;
  cardEl.setAttribute("id", data.id);
  cardEl.className = "tv_show";
  if (data.poster_path) {
    imgEl.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    );
  }
  imgEl.setAttribute("alt", data.title);
  cardEl.append(imgEl, titleEl);

  return cardEl;
};

const qS = (type) => document.querySelector(type);
const qSA = (type) => document.querySelectorAll(type);
const cE = (element) => document.createElement(element);

export { createHero, qS, cE, qSA, CardGen, CardGen2 };
