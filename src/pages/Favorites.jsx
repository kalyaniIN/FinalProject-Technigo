import { useSelector } from "react-redux";

import RecipeList from "../components/RecipeList";

export const Favorites = () => {
  const { favoriteRecipeItems } = useSelector((state) => state.recipe);

  return <RecipeList recipeList={favoriteRecipeItems} />;
};
