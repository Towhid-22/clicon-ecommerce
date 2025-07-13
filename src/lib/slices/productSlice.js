import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: "",
  pricerange: [0, 200000],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    shopCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
    pricerange: (state, action) => {
      state.pricerange = action.payload;
      console.log("price range", action.payload);
    },
  },
});

export const { shopCategory, pricerange } = productSlice.actions;

export default productSlice.reducer;
