import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipeCard = ({ recipe }) => (
  <Card>
    <Link to={`recipe/${recipe.id}`}>
      <Title>
        <p>{recipe.title}</p>
      </Title>
      <img src={recipe.image} alt="popular food" />
      <Gradient>
        <p>Calories: {recipe.calories} kcal</p>
      </Gradient>
    </Link>
  </Card>
);

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: fit-content;
  margin-top: 0.7rem;
  img {
    border-radius: 20px;
    object-fit: cover;
    width: 80%;
    margin-bottom: 20px;
    margin-top: 3rem;
  }
`;

const Title = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #3a000000, #000000b2);
  border-radius: 20px;
  color: White;
  font-weight: bold;
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
