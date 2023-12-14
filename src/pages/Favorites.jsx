import { useSelector } from "react-redux";

import styled from "styled-components";

import RecipeList from "../components/RecipeList";

export const Favorites = () => {
  const { favoriteRecipeItems } = useSelector((state) => state.recipe);

  return (
    <Wrapper>
      <Title>Favorite recipes:</Title>
      <RecipeList recipeList={favoriteRecipeItems} />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
`;

const Title = styled.h2`
  text-align: left;
  margin-bottom: 10px;
`;
