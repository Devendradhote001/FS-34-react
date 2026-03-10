import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/authSlice";
import playerReducer from "../features/player/state/playerSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    player: playerReducer,
  },
});
