import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "../features/errorSlice";

export let store = configureStore({
  reducer: {
    error: errorReducer,
  },
});
