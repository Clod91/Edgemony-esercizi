import { GET } from "./api.js";
import { cE, CardGen2 } from "./utils.js";

const bodyEl = document.body;
const searchInputEl = cE("input");
searchInputEl.setAttribute("type", "text");
searchInputEl.className = "search";

const searchPopularEl = cE("div");
bodyEl.append(searchInputEl, searchPopularEl);

// GET("tv", "popular").then((data) => {
//   data.results.map((tvShow) => searchPopularEl.append(CardGen(tvShow)));
// });

let searchedName = "";

const cardDelete = () => {
  const cardEl = document.querySelectorAll(".tv_show");
  cardEl.forEach((user) => user.remove());
};

searchInputEl.addEventListener("input", (event) => {
  cardDelete();
  searchedName = event.target.value;
  console.log(searchedName);

  GET("tv", "popular").then((data) =>
    data.results.map((tvShow) => {
      if (tvShow.name.includes(searchedName))
        searchPopularEl.append(CardGen2(tvShow));
    })
  );
});
