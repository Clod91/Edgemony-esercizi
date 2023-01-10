// const bodyEl = document.body;
// const heroEl = document.createElement("section");
// const heroImg = document.createElement("img");
// const heroTitle = document.createElement("h3");
// const heroDesc = document.createElement("p");

// heroEl.className = "hero";

// heroImg.className = "heroImg";
// heroImg.setAttribute("src", "./img/hero.jpg");
// heroImg.setAttribute("alt", "immagine del futuro");

// heroTitle.className = "titolo";
// heroTitle.textContent = "Benvenuto nel futuro";

// heroDesc.className = "descrizione";
// heroDesc.textContent = "il mondo di domani, già oggi";

// heroEl.append(heroImg, heroTitle, heroDesc);
// bodyEl.appendChild(heroEl);

const createHero = (img, title, description) => {
  const bodyEl = document.body;
  const heroEl = document.createElement("section");
  const heroImg = document.createElement("img");
  const heroTitle = document.createElement("h3");
  const heroDesc = document.createElement("p");

  heroEl.className = "hero";

  heroImg.className = "heroImg";
  heroImg.setAttribute("src", img);
  heroImg.setAttribute("alt", title);

  heroTitle.className = "titolo";
  heroTitle.textContent = title;

  heroDesc.className = "descrizione";
  heroDesc.textContent = description;

  heroEl.append(heroImg, heroTitle, heroDesc);
  bodyEl.appendChild(heroEl);
};

createHero(
  "./img/hero.jpg",
  "Benvenuto nel futuro",
  "Il mondo di domani già oggi"
);
