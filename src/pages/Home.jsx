import { Popular, Vegetarian, Vegan } from "../components/Category";
import { NutritionalDetails } from "./NutritionalDetails";


export const Home = () => {
  return (
    <div>
      <Vegetarian />
      <Popular />
      <Vegan />
      <NutritionalDetails />
    </div>
  );
};
