import { createSlice } from "@reduxjs/toolkit";

let errorSlice = createSlice({
  name: "error",
  initialState: {
    error: null,
  },
  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export let { setError } = errorSlice.actions;
export default errorSlice.reducer;
