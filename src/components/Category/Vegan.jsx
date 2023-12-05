import { useState, useEffect } from "react";

import { getVeganKeto } from "../../apis/fetchRecipes";
import { RecipeList } from "./RecipeList";

export const Vegan = () => {
  const [veganRecipes, setVegan] = useState([]);

  useEffect(() => {
    getVeganList();
  }, []);

  const getVeganList = async () => {
    try {
      const data = await getVeganKeto();
      setVegan(data);
      console.log(data);
    } catch (error) {
      console.error("Error setting vegan recipes:", error);
    }
  };

  return <RecipeList title="Popular Vegan Recipes" recipes={veganRecipes} />;
};
