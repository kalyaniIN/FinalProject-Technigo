import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { NutritionalDetails } from "../components/NutritionalDetails";
import { getRecipeDetails } from "../apis/fetchRecipes";
import { useDispatch } from "react-redux";
import { addToFavorites } from "../reducers/recipe/recipeSlice";

export const RecipeDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [recipe, setRecipe] = useState({});
  
  const handleFavoritesClick = () => {
    dispatch(addToFavorites(recipe));
    alert("Added to favorites!");
  };

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
        <IconWrapper>
        {location.pathname !== "/favorites" && (
          <ButtonHeart title="Add to favorite" onClick={handleFavoritesClick}>
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16.933333 16.933334"
            >
              <path
                d="M5.5429688 1.72632c-1.3973405.12793-2.3147222.54076-3.1308594 1.33199h-.00195C.73840872 
                4.76006.73795173 7.46473 2.3457064 9.20089c.01979.0505.049702.0963.087891.13476h.00195l5.7402343 5.75391c.1543639.15504.4050805.15594.5605469.002l5.7402334-5.73047c.0044-.004.0093-.008.01367-.0117.002-.002.004-.004.0059-.006.0097-.009.01963-.0183.0293-.0274.004-.004.0079-.008.01172-.0117 1.709157-1.75617 1.677419-4.57518-.07031-6.29297-1.655648-1.62642-4.246883-1.64589-5.9863287-.16796-.847356-.72896-1.8847572-1.12889-2.9375-1.11719zm.00977.78906c.9348454-.0104 1.8727796.33751 2.5976562 1.04297.00819.009.017285.0165.025391.0254.00445.005.009.009.013672.0137.028195.0281.060457.0518.095703.0703.023693.0122.048558.022.074219.0293.019156.006.038744.0106.058594.0137.00649.00083.013005.001.019531.002a.39759413.39759413 0 00.039062 0c.013046-.00002.026082-.00069.039062-.002.013112-.001.026149-.003.039062-.006.00656-.002.013073-.004.019531-.006.00656-.002.013073-.004.019531-.006.00591-.002.011766-.004.017578-.006.00658-.002.013093-.005.019531-.008.00592-.003.011784-.005.017578-.008.00594-.003.011805-.007.017578-.01l.00586-.004c.00394-.002.00785-.004.011719-.006.00131-.001.00262-.003.00391-.004.0006523-.00066.0013-.001.00195-.002.02241-.0141.043348-.0305.0625-.0488 1.426867-1.42362 3.72228-1.43203 5.160156-.0195 1.442106 1.4174 1.467535 3.72006.05859 5.16992-.000655.00068-.0013.001-.002.002-.0091.009-.01811.017-.02734.0254-.004.004-.0079.009-.01172.0137-.0081.007-.01596.0153-.02344.0234l-5.4492189 5.4375-5.4375-5.44922c-.00744-.009-.01526-.0173-.023437-.0254-1.4222667-1.42556-1.4319808-3.71814-.023438-5.15625.00132-.001.00259-.003.00391-.004h.00195c.709023-.72139 1.6393733-1.08922 2.5742188-1.09961z"
                fontWeight="400"
                fontFamily="sans-serif"
                overflow="visible"
                paintOrder="fill markers stroke"
              />
            </Svg>
          </ButtonHeart>
        )}
        
      </IconWrapper>
                  
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
  flex-direction: column;
  margin: 10px;
  text-align: left;
  
  .activated {
    background: linear-gradient(to right, rgb(244, 183, 70), #e94057);
    color: white;
  }
 
 
  @media (min-width: 641px) {
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    
  }
  @media (min-width: 961px) {
    padding-right:20px;
    display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  }
  
`;

const Image = styled.div`
  flex: 1;
  
  p {
    margin-bottom: 1rem;
    color: rgb(244, 183, 70);
    font-size: 1em;
    font-weight: bold;
    @media (min-width: 320px) {
      font-size: 1em;
      font-weight: bold;
    }
    @media (min-width: 641px) {
      font-size: 1.13em;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    @media (min-width: 961px) {
      font-size: 1.5em;
      font-weight: bold;
      // margin-bottom: 3rem;
      padding-top:10px;

      
    }
  }
  img {
    width: 100%;
   
  }
  @media (min-width: 961px) {
    margin-top:50px;
    img {
      height: auto;
    }
    
  }
`;
const IconWrapper = styled.span`
  width: auto;
  position: absolute;
  // top: 45%;
  // left: 35%;
  display: block;
  // justify-content: center;
  // gap: 25px;
  opacity: 1;
  transition: 0.4s;
`;
const Svg = styled.svg`
  fill: white;
  text-align:left;
  &:hover {
    scale: 1.5;
    fill:red;
  }
`;
const ButtonHeart = styled.button`
  width: 30px;
  background: transparent;
  border: none;
  
 h2{
  color:white;
 }
`;

const Details = styled.div`

  flex: 1;
  div {
    display: flex;
    gap: 1rem;
    align-items:center;
    justify-content: center; 
  }
  
  @media (min-width: 961px) {
    margin-top: 4.8rem;
   
    
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
margin-top:10px;
@media (min-width: 961px) {
  padding-left:30px;
  padding-right:30px;
}
ul {
  margin-left : 30px;
}
  div {
    flex-direction: column;
    p {
      margin-left : 30px;
    }

    @media (min-width: 320px) {
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
    }
    @media (min-width: 641px) {
      gap: 1rem;
      margin-bottom: 1rem;
      align-items:center;
    }
  }
`;
