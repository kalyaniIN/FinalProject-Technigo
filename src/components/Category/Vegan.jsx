import { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Vegan = () => {
  const [vegan, setVegan] = useState([]);
  const apiKey = "6956b057226e408db3573c050e8af970";
  useEffect(() => {
    getVegetarian();
  }, []);

  const getVegetarian = async () => {
    try {
      const localRecipes = localStorage.getItem("vegan");
      if (localRecipes) {
        const localJSON = JSON.parse(localRecipes);
        setVegan(localJSON);
      } else {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&diet=vegan&number=9`
        );
        const responseJson = await response.json();

        const apiRecipies = responseJson.recipes;

        localStorage.setItem("vegan", JSON.stringify(apiRecipies));
        setVegan(apiRecipies);
      }
    } catch (error) {
      console.error("Error setting popular recipes:", error);
    }
  };

  return (
    <Wrapper>
      <h3>Popular Vegan Recipies</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          drag: "free",
          gap: "1rem",
        }}
      >
        {vegan.map((item) => {
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
