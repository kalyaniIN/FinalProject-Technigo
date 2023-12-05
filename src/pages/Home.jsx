import { PopularKeto } from "../components/Category/Popular";
import { Vegetarian } from "../components/Category/Vegetarian";
import { Vegan } from "../components/Category/Vegan";

export const Home = () => {
  return (
    <div>
      <Vegetarian />
      <PopularKeto />
      <Vegan />
    </div>
  );
};
