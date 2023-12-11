import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeSplide } from "./RecipeSplide";
import { getPopularRecipeItems } from "../../reducers/recipe/recipeSlice";

export const Popular = () => {
  const { isPopularRecipeLoading, popularRecipeItems } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularRecipeItems());
  }, [dispatch]);

  return (
    <>
      <RecipeSplide
        title="Popular Keto Recipes"
        recipes={popularRecipeItems}
        isLoading={isPopularRecipeLoading}
      />
    </>
  );
};
