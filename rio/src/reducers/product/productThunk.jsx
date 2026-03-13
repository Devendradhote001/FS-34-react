import axios from "axios";
import { setProducts } from "./productSlice";

export let fetchProducts = () => async (dispatch, getState) => {
  try {
    let res = await axios.get("https://fakestoreapi.com/products");

    let data = res.data.filter((elem) => elem.id <= 10);
    dispatch(setProducts(data));
  } catch (error) {
    console.log("error in api in thunk", error);
  }
};
