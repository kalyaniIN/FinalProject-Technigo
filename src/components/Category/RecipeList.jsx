import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Loading } from "../Loading";

export const RecipeList = ({ title, recipes, isLoading }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
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
                    {recipe.title.length < 35 ? (
              <p>{recipe.title}</p>
            ) : (
              <p>{recipe.title.substring(0, 35)}...</p>
            )}
                    </Title>
                    <img src={recipe.image} alt="popular food" />
                    <Gradient>
                      <p>
                        Calories:{" "}
                        {recipe.nutrition.nutrients
                          .filter((n) => n.name == "Calories")[0]
                          .amount.toFixed()}{" "}
                        kcal
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
  margin:10px;
  h2 {
  color: rgb(244, 183, 70);
  margin-top:35px;
  margin-bottom:20px;
  }
`;


const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  background:rgb(82, 78, 69);
  margin-top: 0.7rem;
  padding: 10px;
  border-radius: 25px;
  img {
    border-radius: 20px;
    object-fit: cover;
    width: 80%;
    margin-bottom:3rem;
    margin-top: 3rem;
  }
`;

const Gradient = styled.div`
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

const Title = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  color: White;
  margin-top:20px;
  font-weight:medium;
  font-size:20px;
  font-style:italic;
`;
