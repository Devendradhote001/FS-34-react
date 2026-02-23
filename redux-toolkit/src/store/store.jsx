import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import userReducer from "../features/userSlice";

export let store = configureStore({
  reducer: {
    count: counterReducer,
    user: userReducer,
  },
});
