import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";

export let store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
