import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const NutritionalDetails = () => {
  const API_KEY = "6956b057226e408db3573c050e8af970";
  let params = useParams();
  const [nutritionalDetails, setNutritionalDetails] = useState(null);

  useEffect(() => {
    getNutritionalImage(params.id);
  }, [params.id]);

  async function getNutritionalImage(id) {
    try {
      let response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`
      );
      console.log(response);

      if (response.ok) {
        let responseJSON = await response.json();
        setNutritionalDetails(responseJSON);
      } else {
        console.error("Error fetching nutritional details");
      }
    } catch (error) {
      console.error("Error during nutritional details fetching:", error);
    }
  }

  return (
    <div>
      <h1>Nutritional Details</h1>
      {nutritionalDetails && (
        <div>
          <p>Calories: {nutritionalDetails.calories}</p>
          <p>Fat: {nutritionalDetails.fat}g</p>
          <p>Carbohydrates: {nutritionalDetails.carbs}g</p>
          <p>Protein: {nutritionalDetails.protein}g</p>
        </div>
      )}
    </div>
  );
};
