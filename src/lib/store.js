import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./slices/productSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      product: productSlice,
    },
  });
};
