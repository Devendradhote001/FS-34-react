import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    addUser: (state, action) => {
      console.log("action->", action);
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export let { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
