import axios from "axios";

export let axiosIntance = axios.create({
  baseURL: "https://dummyjson.com",
});

axiosIntance.interceptors.response.use(
  (response) => {
    console.log(response);
    return response
  },
  (error) => {}
);
