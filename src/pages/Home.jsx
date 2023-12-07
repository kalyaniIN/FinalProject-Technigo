import {
  Popular,
  Vegetarian,
  Vegan,
  HealthyDiet,
} from "../components/Category";

export const Home = () => {
  return (
    <div>
      <Vegetarian />
      <Popular />
      <Vegan />
      <HealthyDiet />
    </div>
  );
};
