import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeSplide } from "./RecipeSplide";
import { getVeganRecipeItems } from "../../reducers/recipe/recipeSlice";

export const Vegan = () => {
  const { isVeganRecipeLoading, veganRecipeItems } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVeganRecipeItems());
  }, [dispatch]);

  return (
    <RecipeSplide
      title="Popular Vegan Recipes"
      recipes={veganRecipeItems}
      isLoading={isVeganRecipeLoading}
    />
  );
};
