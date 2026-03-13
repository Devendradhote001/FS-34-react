import { createSlice } from "@reduxjs/toolkit";

let productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isLoading: true,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});
export let { setProducts } = productSlice.actions;
export default productSlice.reducer;
