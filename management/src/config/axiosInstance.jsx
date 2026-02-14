import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (res) => {
    console.log("res in interceptors->", res);
    return res;
  },
  (err) => {
    console.log("error in interceptors->", err);
  }
);
