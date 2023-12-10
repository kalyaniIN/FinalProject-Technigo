import styled from "styled-components";

export const NutritionalDetails = ({ nutrition }) => {
  const nutritionalDetails = getNutritionalDetails(nutrition);

  return (
    <div>
      <HeaderTitle>
        <p>Nutritional Details</p>
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
  p {
    color: rgb(244, 183, 70);
    font-size: 0.83em;
    font-weight: bold;
  }
  @media (min-width: 320px) {
    p {
      font-size: 0.83em;
      font-weight: bold;
    }
  }
  @media (min-width: 641px) {
    p {
      font-size: 1em;
      font-weight: bold;
    }
  }
  @media (min-width: 961px) {
    p {
      font-size: 1.13em;
      font-weight: bold;
    }
  }
`;

const NutritionalContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 10px;
  @media (min-width: 961px) {
    margin-top: 20px;
  }
`;
