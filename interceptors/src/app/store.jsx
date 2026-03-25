import { configureStore } from "@reduxjs/toolkit";
import errorReducer from "../features/errorSlice";

export const store = configureStore({
  reducer: {
    error: errorReducer,
  },
});

export let dispatch = store.dispatch;
