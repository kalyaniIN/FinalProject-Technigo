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
            {nutritionalDetails.map((detail, index) => (
              <p key={index}>
                {detail.name}: {detail.value} {detail.unit}
              </p>
            ))}
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

  return [
    calories,
    fat,
    carbs,
    protein,
    fiber,
    cholesterol,
    sugar,
    iron,
    calcium,
  ];
};

const getAmount = (key, nutrients) => {
  const nutrient = nutrients.filter((n) => n.name == key)[0];
  return {
    name: key,
    value: nutrient?.amount.toFixed(),
    unit: nutrient?.unit,
  };
};

const HeaderTitle = styled.div`
  h1 {
    color: rgb(244, 183, 70);
  }
`;

const NutritionalContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
`;
