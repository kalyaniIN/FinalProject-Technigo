import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RecipeList } from "./RecipeList";
import { getHealthyDietRecipeItems } from "../../reducers/recipe/recipeSlice";

export const HealthyDiet = () => {
  const { isHealthyDietRecipeLoading, healthyDietRecipeItems } = useSelector(
    (state) => state.recipe
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHealthyDietRecipeItems());
  }, [dispatch]);

  return (
    <RecipeList
      title="HealthyDiet Recipes (Low meat or no meat)"
      recipes={healthyDietRecipeItems}
      isLoading={isHealthyDietRecipeLoading}
    />
  );
};
