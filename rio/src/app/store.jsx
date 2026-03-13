import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../reducers/product/productSlice";

export let store = configureStore({
  reducer: {
    product: productReducer,
  },
});
