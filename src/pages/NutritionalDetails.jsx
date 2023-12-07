export const NutritionalDetails = ({ nutrition }) => {
  const nutritionalDetails = getNutritionalDetails(nutrition);
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

const getNutritionalDetails = (nutrition) => {
  if (nutrition == undefined) {
    return;
  }

  const calories = getAmount("Calories", nutrition.nutrients);
  const fat = getAmount("Calories", nutrition.nutrients);
  const carbs = getAmount("Calories", nutrition.nutrients);
  const protein = getAmount("Calories", nutrition.nutrients);
  return { calories, fat, carbs, protein };
};

const getAmount = (key, nutrients) => {
  return nutrients.filter((n) => n.name == key)[0].amount.toFixed();
};
