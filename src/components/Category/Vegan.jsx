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

  return (
    <RecipeList
      title="Popular Vegan Recipes"
      desc = "it is best food"
      recipes={veganRecipeItems}
      isLoading={isVeganRecipeLoading}
    />
  );
};
