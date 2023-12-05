import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeList } from "./RecipeList";
import { getVegetarianRecipeItems } from "../../reducers/recipe/recipeSlice";

export const Vegetarian = () => {
  const { isVegetarianRecipeLoading, vegetarianRecipeItems } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVegetarianRecipeItems());
  }, [dispatch]);

  if (isVegetarianRecipeLoading) {
    return <h1>Loading in progress...</h1>;
  }

  return (
    <RecipeList
      title="Popular Vegetarian Recipes"
      recipes={vegetarianRecipeItems}
    />
  );
};
