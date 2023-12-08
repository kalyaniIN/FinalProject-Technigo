import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipeList = ({ recipeList }) => (
  <Wrapper>
    {recipeList.map((item) => {
      return (
        <Card key={item.id}>
          <Link to={"/recipe/" + item.id}>
            <Title>
              <p>{item.title}</p>
            </Title>
            <img src={item.image} alt={item.title} />
          </Link>
        </Card>
      );
    })}
  </Wrapper>
);

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
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

export default RecipeList;
