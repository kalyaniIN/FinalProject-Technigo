import { fetchData } from "./fetchData";

const API_KEY = "dca7e0f9f77c400aa4cb72b57e168d23";

const BASE_URL = "https://api.spoonacular.com/";
const SEARCH_BASE_URL = `${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=12&addRecipeNutrition=true&sort=random`;
const RECIPE_DETAILS_BASE_URL = `https://api.spoonacular.com/recipes`;
export const IMAGE_BASE_URL = `${BASE_URL}/recipes/complexSearch`;

export const getPopularKeto = async () => {
  const popularKey = "popular_keto";
  const URL = `${SEARCH_BASE_URL}&diet=keto`;

  return tryGetLocalStorageData(popularKey, URL);
};

export const getVegetarianKeto = async () => {
  const vegetarianKey = "vegetarian_keto";
  const URL = `${SEARCH_BASE_URL}&diet=vegetarian`;

  return tryGetLocalStorageData(vegetarianKey, URL);
};

export const getVeganKeto = async () => {
  const vegKey = "vegan_keto";
  const URL = `${SEARCH_BASE_URL}&diet=vegan`;

  return tryGetLocalStorageData(vegKey, URL);
};

export const getHealthyDietRecipes = async () => {
  const healthyDietKey = "healthy_diet_keto";
  const URL = `${BASE_URL}/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeNutrition=true&sort=random`;

  const localData = localStorage.getItem(healthyDietKey);
  if (localData && localData !== "undefined" && localData.length > 0) {
    return Promise.resolve(JSON.parse(localData));
  }

  const fetchedData = await fetchData(URL);
  const filtered = fetchedData.results.filter((d) => d.healthScore > 80);
  localStorage.setItem(healthyDietKey, JSON.stringify(filtered));
  return Promise.resolve(filtered);
};

export const getRecipeDetails = async (id) => {
  const recipeKey = `recipe_${id}`;
  const URL = `${RECIPE_DETAILS_BASE_URL}/${id}/information?apiKey=${API_KEY}&includeNutrition=true`;

  const localData = localStorage.getItem(recipeKey);
  if (localData && localData !== "undefined") {
    return Promise.resolve(JSON.parse(localData));
  }

  const fetchedData = await fetchData(URL);
  localStorage.setItem(recipeKey, JSON.stringify(fetchedData));
  return Promise.resolve(fetchedData);
};

export const searchRecipesByQuery = async (query) => {
  const URL = `${SEARCH_BASE_URL}&query=${query}`;
  return await fetchData(URL);
};

export const searchRecipesByCuisine = async (cusine) => {
  const URL = `${SEARCH_BASE_URL}&cuisine=${cusine}`;
  return tryGetLocalStorageData(cusine, URL);
};

// As fetching data from API involves cost after 150 free request points,
// we decided to store the api results in local storage for this demo project.
const tryGetLocalStorageData = async (key, fetchUrl) => {
  const localData = localStorage.getItem(key);
  if (localData && localData !== "undefined") {
    return Promise.resolve(JSON.parse(localData));
  }

  const fetchedData = await fetchData(fetchUrl);
  localStorage.setItem(key, JSON.stringify(fetchedData.results));
  return Promise.resolve(fetchedData.results);
};
