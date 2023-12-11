import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeSplide } from "./RecipeSplide";
import { getVegetarianRecipeItems } from "../../reducers/recipe/recipeSlice";

export const Vegetarian = () => {
  const { isVegetarianRecipeLoading, vegetarianRecipeItems } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVegetarianRecipeItems());
  }, [dispatch]);

  return (
    <RecipeSplide
      title="Popular Vegetarian Recipes"
      recipes={vegetarianRecipeItems}
      isLoading={isVegetarianRecipeLoading}
    />
  );
};
