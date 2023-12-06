import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loading } from "../Loading";
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
    return <Loading />;
  }

  return (
    <RecipeList
      title="Popular Vegetarian Recipes"
      recipes={vegetarianRecipeItems}
    />
  );
};
