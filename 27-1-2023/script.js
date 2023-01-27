import { GET } from "./api.js";
import { createHero, qS, cE, qSA, CardGen } from "./utils.js";

createHero(
  "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
  "Noi Consigliamo"
);

const mostPopularEl = qS(".popular_series");

GET("tv", "popular").then((data) => {
  data.results.map((tvShow) => mostPopularEl.append(CardGen(tvShow)));
});
