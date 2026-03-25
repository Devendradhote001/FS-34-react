import axios from "axios";
import { dispatch } from "../app/store";
import { setError } from "../features/errorSlice";

export let axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.message);
    dispatch(setError(error.message));
  }
);
