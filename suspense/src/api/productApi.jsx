import { axiosInstance } from "../config/axiosInstance";

export let fetchProducts = async () => {
  try {
    let res = await axiosInstance.get("/products");
    return res.data;
  } catch (error) {
    console.log("error in api", error);
  }
};
