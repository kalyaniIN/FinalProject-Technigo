import { Popular, Vegetarian, Vegan } from "../components/Category";

export const Home = () => {
  return (
    <div>
      <Vegetarian />
      <Popular />
      <Vegan />
    </div>
  );
};
