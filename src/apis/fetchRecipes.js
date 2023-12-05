import { fetchData } from "./fetchData";

const API_KEY = "6956b057226e408db3573c050e8af970";

const BASE_URL = "https://api.spoonacular.com/";
const SEARCH_BASE_URL = `${BASE_URL}/recipes/complexSearch`;
export const IMAGE_BASE_URL = `${BASE_URL}/recipes/complexSearch`;

export const getPopularKeto = async () => {
  const popularKey = "popular_keto";
  const URL = `${SEARCH_BASE_URL}?apiKey=${API_KEY}&diet=keto&number=9&addRecipeNutrition=true`;

  return tryGetLocalStorageData(popularKey, URL);
};

export const getVegetarianKeto = async () => {
  const vegKey = "veg_keto";
  const URL = `${SEARCH_BASE_URL}?apiKey=${API_KEY}&diet=vegetarian&number=9&addRecipeNutrition=true`;

  return tryGetLocalStorageData(vegKey, URL);
};

// As fetching data from API involves cost after 150 free request points,
// we decided to store the api results in local storage for this demo project.
const tryGetLocalStorageData = async (key, fetchUrl) => {
  const localData = localStorage.getItem(key);
  if (localData) {
    return Promise.resolve(JSON.parse(localData));
  }

  const fetchedData = await fetchData(fetchUrl);

  localStorage.setItem(key, JSON.stringify(fetchedData.results));

  return Promise.resolve(fetchedData.results);
};
