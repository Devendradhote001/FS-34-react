import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCart: (state) => {
      state.cartItems = null;
    },
  },
});

export let { addToCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
