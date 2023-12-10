import styled from "styled-components";
export const NutritionalDetails = ({ nutrition }) => {
  const nutritionalDetails = getNutritionalDetails(nutrition);
  return (
    <div>
      <HeaderTitle>
      <h1>Nutritional Details</h1>
      </HeaderTitle>
      
      <NutritionalContainer>
      {nutritionalDetails && (
        <div>
          {/* <h2>Servings: {nutritionalDetails.servings}</h2> */}
          <p>Calories: {nutritionalDetails.calories} kcal</p>
          <p>Fat: {nutritionalDetails.fat} g</p>
          <p>Carbohydrates: {nutritionalDetails.carbs} g</p>
          <p>Protein: {nutritionalDetails.protein} g</p>
          <p>Fiber: {nutritionalDetails.fiber} g</p>
          <p>Cholesterol: {nutritionalDetails.cholesterol} g</p>
          <p>Sugar: {nutritionalDetails.sugar} g</p>
          <p>Iron: {nutritionalDetails.iron} g</p>
          <p>Calcium: {nutritionalDetails.calcium} g</p>
        </div>
      )}
      </NutritionalContainer>
    </div>
  );
};

const getNutritionalDetails = (nutrition) => {
  if (nutrition == undefined) {
    return;
  }
 
  const calories = getAmount("Calories", nutrition.nutrients);
  const fat = getAmount("Fat", nutrition.nutrients);
  const carbs = getAmount("Carbohydrates", nutrition.nutrients);
  const protein = getAmount("Protein", nutrition.nutrients);
  const fiber = getAmount("Fiber", nutrition.nutrients);
  const cholesterol = getAmount("Cholesterol", nutrition.nutrients);
  const sugar = getAmount("Sugar", nutrition.nutrients);
  const iron = getAmount("Iron", nutrition.nutrients);
  const calcium = getAmount("Calcium", nutrition.nutrients);
  return { calories, fat, carbs, protein,fiber,cholesterol,sugar,iron,calcium };
};

const getAmount = (key, nutrients) => {
  return nutrients.filter((n) => n.name == key)[0]?.amount.toFixed();
};

const HeaderTitle = styled.div`
h1{
  color: rgb(244, 183, 70);
}
`;

const NutritionalContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
`;
