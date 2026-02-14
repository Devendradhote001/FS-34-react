import React from "react";
import { axiosInstance } from "../config/axiosInstance";

const Cart = () => {
  let getCartData = async () => {
    let res = await axiosInstance.get("/carts");
    if (res) {
      console.log(res.data);
    }
  };

  getCartData();

  return <div>cart</div>;
};

export default Cart;
