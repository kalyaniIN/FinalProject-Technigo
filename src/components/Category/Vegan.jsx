import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loading } from "../Loading";
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
    return <Loading />;
  }

  return (
    <RecipeList title="Popular Vegan Recipes" recipes={veganRecipeItems} />
  );
};
