const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);
const BASE_URL = "https://dummyjson.com/";
const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();
  return data;
};

export { cE, qS, GET };
