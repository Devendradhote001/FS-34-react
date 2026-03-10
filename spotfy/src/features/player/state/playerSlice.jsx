import { createSlice } from "@reduxjs/toolkit";

let playerSlice = createSlice({
  name: "player",
  initialState: {
    currentSong: null,
    isPlaying: false,
    queue: [],
  },
  reducers: {
    setSong: (state, action) => {
      state.currentSong = action.payload;
      state.isPlaying = true;
    },

    play: (state) => {
      state.isPlaying = true;
    },
    pause: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { setSong, play, pause } = playerSlice.actions;
export default playerSlice.reducer;
