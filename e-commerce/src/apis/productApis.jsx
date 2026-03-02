import { axiosInstance } from "../config/axiosInstance";

export let fetchAllProducts = async () => {
  try {
    console.log("api fetched ....");
    let res = await axiosInstance.get("/products");
    return res.data;
  } catch (error) {
    console.log("error in products api->", error);
  }
};

export let getSingleProductDetail = async (id) => {
  try {
    let product = await axiosInstance.get(`/products/${id}`);
    return product.data;
  } catch (error) {
    console.log("error in deatils of products", error);
  }
};
