import axios from "axios";
import { toast } from "react-toastify";
import { dispatch } from "../app/store";
import { setError } from "../features/errorSlice";

export let axiosIntance = axios.create({
  baseURL: "https://dummyjson.com",
});

axiosIntance.interceptors.response.use(
  (response) => {
    console.log(response);
    toast.success("ok");
    return response;
  },
  (error) => {
    console.log(error);
    dispatch(setError(error.message));
  }
);
