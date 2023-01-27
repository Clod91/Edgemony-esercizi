const API_KEY = "cef5847fe743a2b8c12914daabc5979b";
const BASE_URL = "https://api.themoviedb.org/3/";

const GET = async (type = "tv", resource = "popular") => {
  const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`);
  const data = await res.json();
  return data;
};

export { GET };
