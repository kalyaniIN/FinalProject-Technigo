import styled from "styled-components";

import { RecipeCard } from "./RecipeCard";

import { getDisplayDataFromRecipes } from "./helper";

export const RecipeList = ({ recipeList }) => {
  const displayData = getDisplayDataFromRecipes(recipeList);

  return (
    <Wrapper>
      {displayData.map((item) => (
        <RecipeCard key={item.id} recipe={item} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
  @media (min-width: 320px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 641px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 961px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default RecipeList;
