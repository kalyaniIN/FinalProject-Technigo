import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { NutritionalDetails } from "../components/NutritionalDetails";

import { getRecipeDetails } from "../apis/fetchRecipes";


export const RecipeDetails = () => {
  const params = useParams();
  const [recipe, setRecipe] = useState({});
  

  useEffect(() => {
    getData(params.id);
  }, [params.id]);

  const [activeTab, setActiveTab] = useState("instructions");

  async function getData(id) {
    try {
      const data = await getRecipeDetails(id);
      setRecipe(data);
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Wrapper>
      <Image>
        <p>{recipe.title}</p>
        <img src={recipe.image} alt={recipe.title} />
      </Image>
      <Details>
        <div>
          <Button
            className={activeTab === "instructions" ? "activated" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === "ingredients" ? "activated" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
        </div>
        <Info>
          {activeTab === "instructions" && (
            <div>
              <p dangerouslySetInnerHTML={{ __html: recipe.instructions }}></p>
            </div>
          )}

          {activeTab === "ingredients" && (
            <ul>
              {recipe.extendedIngredients.map((ingredient) => {
                return <li key={ingredient.id}>{ingredient.original}</li>;
              })}
            </ul>
          )}
        </Info>
      </Details>
      <NutritionalDetails nutrition={recipe.nutrition} />
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  .activated {
    background: linear-gradient(to right, rgb(244, 183, 70), #e94057);
    color: white;
  }
  text-align: left;
`;

const Image = styled.div`
  flex: 1;
  p {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 3rem;
    color: rgb(244, 183, 70);
  }
  img {
    width: 75%;
  }
`;

const Details = styled.div`
  flex: 1;
  div {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
  }
`;

const Button = styled.button`
  border: solid 2px black;
  color: black;
  padding: 0.7rem 2rem;
  font-weight: bolder;
  background-color: white;
  cursor: pointer;
`;

const Info = styled.div`
  div {
    flex-direction: column;
  }
`;
