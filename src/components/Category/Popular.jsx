import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getPopularKeto } from "../../apis/fetchRecipes";

// export const PopularKeto = () => {
//   const [popularKeto, setPopularKeto] = useState([]);
// //   "6956b057226e408db3573c050e8af970"
//   const Api_Key = "2704a40d7be1496ea5aac2c1d7f0a7fc";
//   const getPopularKeto = async () => {
//     try {
//         const api = await fetch(
//           `https://api.spoonacular.com/recipes/complexSearch?apiKey=${Api_Key}&diet=keto&number=9`
//         );
//         const data = await api.json();
//         console.log(data);
//         setPopularKeto(data.results);
//         console.log("Updated popularKeto:", popularKeto); // Add this line
//       } catch (error) {
//         console.error("Error fetching keto recipes:", error);
//       }
//   };
//   const getNutritionInfoForRecipe = async (recipeId) => {
//     try {
//       const nutritionApi = await fetch(
//         `https://api.spoonacular.com/recipes/${recipeId}/nutritionWidget.json?apiKey=${Api_Key}`
//       );
//       const nutritionData = await nutritionApi.json();
//       console.log(nutritionData);
//       return nutritionData;
//     } catch (error) {
//       console.error("Error fetching nutrition information:", error);
//       return null;
//     }
//   };
//   useEffect(() => {
//     getPopularKeto();
//   }, []);
//   useEffect(() => {
//     const fetchNutritionInfo = async () => {
//       const recipesWithNutrition = await Promise.all(
//         popularKeto.map(async (recipe) => {
//           const nutritionInfo = await getNutritionInfoForRecipe(recipe.id);
//           return { ...recipe, nutritionInfo };
//         })
//       );
//       setPopularKeto(recipesWithNutrition);
//     };

//     if (popularKeto.length > 0) {
//       fetchNutritionInfo();
//     }
//   }, [popularKeto]);
//   return (
//     <div>
//       {popularKeto.length > 0 ? (
//         popularKeto.map((recipe) => (
//           <div key={recipe.id}>
//             <p>{recipe.title}</p>
//             <img src={recipe.image} alt="popular food" />
//             {recipe.nutrition && (
//               <p>Calories: {recipe.nutritionInfo.calories.toFixed(2)}</p>
//             )}
//           </div>
//         ))
//       ) : (
//         <p>No recipes found.</p>
//       )}
//     </div>
//   );
// };

export const PopularKeto = () => {
  const [popularItems, setPopularItems] = useState([]);

  useEffect(() => {
    getPopularList();
  }, []);

  const getPopularList = async () => {
    try {
      const data = await getPopularKeto();
      setPopularItems(data);
      console.log(data);
    } catch (error) {
      console.error("Error setting popular recipes:", error);
    }
  };

  return (
    <Wrapper>
      <h3>Popular Keto Recipies</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem",
        }}
      >
        {popularItems.map((item) => {
          return (
            <SplideSlide key={item.id}>
              <Card>
                <Link to={"recipe/" + item.id}>
                  <Title>
                    <p>{item.title}</p>
                  </Title>
                  <img src={item.image} alt="popular food" />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
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
`;
