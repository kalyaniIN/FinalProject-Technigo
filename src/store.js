import { combineReducers, configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./reducers/recipe/recipeSlice";

const reducer = combineReducers({
  recipe: recipeReducer,
});

export const store = configureStore({
  reducer: reducer,
});
