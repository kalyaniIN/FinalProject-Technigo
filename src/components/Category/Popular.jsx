import { useEffect, useState } from "react";
export const PopularKeto = () => {
  const [popularKeto, setPopularKeto] = useState([]);
//   "6956b057226e408db3573c050e8af970"
  const Api_Key = "2704a40d7be1496ea5aac2c1d7f0a7fc";
  const getPopularKeto = async () => {
    try {
        const api = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${Api_Key}&diet=keto&number=9`
        );
        const data = await api.json();
        console.log(data);
        setPopularKeto(data.results);
        console.log("Updated popularKeto:", popularKeto); // Add this line
      } catch (error) {
        console.error("Error fetching keto recipes:", error);
      }
  };
  const getNutritionInfoForRecipe = async (recipeId) => {
    try {
      const nutritionApi = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${Api_Key}`
      );
      const nutritionData = await nutritionApi.json();
      console.log(nutritionData);
      return nutritionData;
    } catch (error) {
      console.error("Error fetching nutrition information:", error);
      return null;
    }
  };
  useEffect(() => {
    getPopularKeto();
  }, []);
  useEffect(() => {
    const fetchNutritionInfo = async () => {
      const recipesWithNutrition = await Promise.all(
        popularKeto.map(async (recipe) => {
          const nutritionInfo = await getNutritionInfoForRecipe(recipe.id);
          return { ...recipe, nutritionInfo };
        })
      );
      setPopularKeto(recipesWithNutrition);
    };

    if (popularKeto.length > 0) {
      fetchNutritionInfo();
    }
  }, [popularKeto]);
  return (
    <div>
      {popularKeto.length > 0 ? (
        popularKeto.map((recipe) => (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
            <img src={recipe.image} alt="popular food" />
            {recipe.nutrition && (
              <p>Calories: {recipe.nutritionInfo.calories.toFixed(2)}</p>
            )}
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};
