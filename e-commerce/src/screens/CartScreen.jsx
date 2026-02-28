import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const CartScreen = () => {
  let { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="flex gap-4 flex-wrap">
      {cartItems.map((elem) => (
        <ProductCard elem={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default CartScreen;
