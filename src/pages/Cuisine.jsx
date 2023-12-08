import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RecipeList from "../components/RecipeList";

import { searchRecipesByCuisine } from "../apis/fetchRecipes";

export const Cuisine = () => {
  let params = useParams();
  const [cuisine, setCuisine] = useState([]);

  useEffect(() => {
    getData(params.type);
  }, [params.type]);

  async function getData(type) {
    try {
      const data = await searchRecipesByCuisine(type);
      setCuisine(data);
    } catch (error) {
      console.log(error);
    }
  }

  return <RecipeList recipeList={cuisine} />;
};

export default Cuisine;
