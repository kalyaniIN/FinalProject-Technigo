import { useState, useEffect } from "react";

import { getVegetarianKeto } from "../../apis/fetchRecipes";
import { RecipeList } from "./RecipeList";

export const Vegetarian = () => {
  const [vegetarianRecipes, setVegetarian] = useState([]);

  useEffect(() => {
    getVegetarianList();
  }, []);

  const getVegetarianList = async () => {
    try {
      const data = await getVegetarianKeto();
      setVegetarian(data);
      console.log(data);
    } catch (error) {
      console.error("Error setting vegetarian recipes:", error);
    }
  };

  return (
    <RecipeList
      title="Popular Vegetarian Recipes"
      recipes={vegetarianRecipes}
    />
  );
};
