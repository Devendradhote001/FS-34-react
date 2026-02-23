import { createSlice } from "@reduxjs/toolkit";

let counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      if (state.count === 0) return;

      state.count--;
    },
  },
});

export let { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
