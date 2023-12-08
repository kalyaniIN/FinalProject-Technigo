import { Home } from "./Home";
import { Cuisine } from "./Cuisine";
import { Route, Routes } from "react-router-dom";
import { RecipeDetails } from "./RecipeDetails";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
  );
};
