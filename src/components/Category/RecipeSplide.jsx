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
      <p className="title-style">{title}</p>
      {isLoading && <Loading />}
      {!isLoading && (
        <Splide
          options={{
            perPage: 1,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "1rem",
            mediaQuery: "min",
            breakpoints: {
              320: {
                perPage: 1,
              },
              641: {
                perPage: 2,
              },
              961: {
                perPage: 3,
              },
            },
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
  margin-bottom: 1rem;
  .title-style {
    font-size: 1em;
    font-weight: bolder;
    margin-bottom: 5px;
  }
  .title-style {
    color: rgb(244, 183, 70);
  }
  @media (min-width: 320px) {
    margin-bottom: 2rem;
    .title-style {
      font-size: 1em;
      font-weight: bolder;
      margin-bottom: 10px;
    }
  }
  @media (min-width: 641px) {
    margin-bottom: 3rem;
    .title-style {
      font-size: 1.17em;
      font-weight: bolder;
      margin-bottom: 10px;
    }
  }
  @media (min-width: 961px) {
    margin-bottom: 3rem;
    .title-style {
      font-size: 1.5em;
      font-weight: bolder;
      margin-bottom: 20px;
    }
  }
`;
