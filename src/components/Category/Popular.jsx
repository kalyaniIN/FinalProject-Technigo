import { useEffect, useState } from "react";

import { getPopularKeto } from "../../apis/fetchRecipes";
import { RecipeList } from "./RecipeList";

export const PopularKeto = () => {
  const [popularRecipes, setPopularItems] = useState([]);

  useEffect(() => {
    getPopularList();
  }, []);

  const getPopularList = async () => {
    try {
      const data = await getPopularKeto();
      setPopularItems(data);
      console.log(data);
    } catch (error) {
      console.error("Error setting popular recipes:", error);
    }
  };

  return <RecipeList title="Popular Keto Recipes" recipes={popularRecipes} />;
};
