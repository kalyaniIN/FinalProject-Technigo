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
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
`;

export default RecipeList;
