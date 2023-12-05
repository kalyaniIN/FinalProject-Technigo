import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeList } from "./RecipeList";
import { getPopularRecipeItems } from "../../reducers/recipe/recipeSlice";

export const PopularKeto = () => {
  const { isPopularRecipeLoading, popularRecipeItems } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularRecipeItems());
  }, [dispatch]);

  if (isPopularRecipeLoading) {
    return <h1>Loading in progress...</h1>;
  }

  return (
    <RecipeList title="Popular Keto Recipes" recipes={popularRecipeItems} />
  );
};
