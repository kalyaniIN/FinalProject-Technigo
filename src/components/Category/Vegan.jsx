import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeList } from "./RecipeList";
import { getVeganRecipeItems } from "../../reducers/recipe/recipeSlice";

export const Vegan = () => {
  const { isVeganRecipeLoading, veganRecipeItems } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVeganRecipeItems());
  }, [dispatch]);

  if (isVeganRecipeLoading) {
    return <h1>Loading in progress...</h1>;
  }

  return (
    <RecipeList title="Popular Vegan Recipes" recipes={veganRecipeItems} />
  );
};
