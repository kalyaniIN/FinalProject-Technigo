import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import {
  getVeganKeto,
  getVegetarianKeto,
  getPopularKeto,
} from "../../apis/fetchRecipes";

const initialState = {
  veganRecipeItems: [],
  vegetarianRecipeItems: [],
  popularRecipeItems: [],
  isVeganRecipeLoading: true,
  isVegetarianRecipeLoading: true,
  isPopularRecipeLoading: true,
};

export const getVeganRecipeItems = createAsyncThunk(
  "recipe/getVeganRecipes",
  async (payload, thunkAPI) => {
    try {
      return await getVeganKeto();
    } catch (error) {
      console.error("Error setting popular recipes:", error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getVegetarianRecipeItems = createAsyncThunk(
  "recipe/getVegetarianRecipes",
  async (payload, thunkAPI) => {
    try {
      return await getVegetarianKeto();
    } catch (error) {
      console.error("Error setting vegetarian recipes:", error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

export const getPopularRecipeItems = createAsyncThunk(
  "recipe/getPopularRecipeItems",
  async (payload, thunkAPI) => {
    try {
      const data = await getPopularKeto();
      return data;
    } catch (error) {
      console.error("Error setting vegan recipes:", error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVeganRecipeItems.pending, (state) => {
        state.isVeganRecipeLoading = true;
      })
      .addCase(getVeganRecipeItems.fulfilled, (state, action) => {
        state.isVeganRecipeLoading = false;
        state.veganRecipeItems = action.payload;
      })
      .addCase(getVeganRecipeItems.rejected, (state) => {
        state.isVeganRecipeLoading = false;
      })
      .addCase(getVegetarianRecipeItems.pending, (state) => {
        state.isVegetarianRecipeLoading = true;
      })
      .addCase(getVegetarianRecipeItems.fulfilled, (state, action) => {
        state.isVegetarianRecipeLoading = false;
        state.vegetarianRecipeItems = action.payload;
      })
      .addCase(getVegetarianRecipeItems.rejected, (state) => {
        state.isVegetarianRecipeLoading = false;
      })
      .addCase(getPopularRecipeItems.pending, (state) => {
        state.isPopularRecipeLoading = true;
      })
      .addCase(getPopularRecipeItems.fulfilled, (state, action) => {
        state.isPopularRecipeLoading = false;
        state.popularRecipeItems = action.payload;
      })
      .addCase(getPopularRecipeItems.rejected, (state) => {
        state.isPopularRecipeLoading = false;
      });
  },
});

export default recipeSlice.reducer;
