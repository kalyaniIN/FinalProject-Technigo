import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Loading } from "../Loading";

export const RecipeList = ({ title, desc, recipes, isLoading }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <h4>{desc}</h4>
      {isLoading && <Loading />}
      {!isLoading && (
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "1rem",
          }}
        >
          {recipes.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={`recipe/${recipe.id}`}>
                    <Title>
                      <p>{recipe.title}</p>
                    </Title>
                    <img src={recipe.image} alt="popular food" />
                    <Gradient>
                      <p>
                        Calories:{" "}
                        {recipe.nutrition.nutrients
                          .filter((n) => n.name == "Calories")[0]
                          .amount.toFixed()}
                      </p>
                    </Gradient>
                  </Link>
                </Card>
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
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  margin-top: 0.7rem;
  img {
    border-radius: 20px;
    object-fit: cover;
    width: 100%;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: fit-content;
  z-index: 2;
  p {
    font-size: 1rem;
    color: white;
    text-align: center;
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #3a000000, #000000b2);
  border-radius: 20px;
  color: white;
`;
