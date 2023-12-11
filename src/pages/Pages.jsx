import { Route, Routes } from "react-router-dom";

import { Home } from "./Home";
import { Cuisine } from "./Cuisine";
import { RecipeDetails } from "./RecipeDetails";
import { SearchResults } from "./SearchResults";
import { Favorites } from "./Favorites";

export const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
      <Route path="/search/:query" element={<SearchResults />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};
