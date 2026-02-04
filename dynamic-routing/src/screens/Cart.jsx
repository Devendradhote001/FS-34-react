import React, { useContext } from "react";
import { MyStore } from "../MyContext";

const Cart = () => {
  let { cartItems } = useContext(MyStore);
  return (
    <div>
      <h1>Cart</h1>

      {cartItems.map((elem) => {
        return <h1>{elem.name}</h1>;
      })}
    </div>
  );
};

export default Cart;
