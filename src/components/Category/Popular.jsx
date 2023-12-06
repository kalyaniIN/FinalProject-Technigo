import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loading } from "../Loading";
import { RecipeList } from "./RecipeList";
import { getPopularRecipeItems } from "../../reducers/recipe/recipeSlice";

export const Popular = () => {
  const { isPopularRecipeLoading, popularRecipeItems } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularRecipeItems());
  }, [dispatch]);

  if (isPopularRecipeLoading) {
    return <Loading />;
  }

  return (
    <RecipeList title="Popular Keto Recipes" recipes={popularRecipeItems} />
  );
};
