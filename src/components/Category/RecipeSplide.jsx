import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";

import { Loading } from "../Loading";
import { RecipeCard } from "../RecipeCard";

import { getDisplayDataFromRecipes } from "../helper";

export const RecipeSplide = ({ title, recipes, isLoading }) => {
  const displayData = getDisplayDataFromRecipes(recipes);

  return (
    <Wrapper>
      <h2>{title}</h2>
      {isLoading && <Loading />}
      {!isLoading && (
        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}
        >
          {displayData.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <RecipeCard recipe={recipe} />
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 3rem;
  h2 {
    color: rgb(244, 183, 70);
    margin-bottom: 20px;
  }
`;
