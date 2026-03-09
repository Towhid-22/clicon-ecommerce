import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCategory: "",
  pricerange: [0, 200000],
  currentProduct: {},
  sortProduct: "",
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
    },
    currProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
    sortProduct: (state, action) => {
      state.sortProduct = action.payload;
    },
  },
});

export const { shopCategory, pricerange, currProduct, sortProduct } =
  productSlice.actions;

export default productSlice.reducer;
