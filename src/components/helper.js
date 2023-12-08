export const getDisplayDataFromRecipes = (recipes) => {
  const displayData = recipes
    .map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
      calories: recipe.nutrition.nutrients
        .filter((n) => n.name == "Calories")[0]
        .amount.toFixed(),
    }))
    .sort((r1, r2) => r1.calories - r2.calories);

  return displayData;
};
