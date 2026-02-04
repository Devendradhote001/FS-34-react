import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../MyContext";

const ProductCard = ({ elem = {} }) => {
  let navigate = useNavigate();
  const [isCart, setIsCart] = useState(false);

  let { setCartItems, products, cartItems } = useContext(MyStore);

  let checkPRoductInCart = cartItems.find((val) => val.id === elem.id);

  const handleAddToCart = () => {
    setCartItems((prev) => [...prev, { ...elem, quantity: 1 }]);
  };

  const handleQuantityInc = () => {
    checkPRoductInCart.quantity++;
    setCartItems((prev) => [...prev]);
  };

  const handleQuantityDec = () => {
    if (checkPRoductInCart.quantity === 0) {
      setIsCart(false);
      return;
    }
    checkPRoductInCart.quantity--;
    setCartItems((prev) => [...prev]);
  };

  return (
    <div className="p-4 border rounded-xl w-[30%]">
      <div
        onClick={() => navigate(`/products/${elem.id}`)}
        className="h-[60%] mb-5"
      >
        <img className="h-full w-full" src={elem?.image} alt="" />
      </div>
      <div className="flex flex-col">
        <h4>{elem?.productName}</h4>
        <p>{elem?.description}</p>
        <p className="mb-5">{elem?.price}</p>
        {!checkPRoductInCart || isCart ? (
          <button
            onClick={handleAddToCart}
            className="w-full py-2 rounded-xl bg-blue-800 text-white cursor-pointer"
          >
            Add to cart
          </button>
        ) : (
          <div className="flex gap-5 items-center self-center">
            <button
              onClick={handleQuantityDec}
              className="px-3 py-1 cursor-pointer rounded text-3xl bg-red-600 text-white"
            >
              -
            </button>
            <p className="text-2xl">{checkPRoductInCart?.quantity}</p>
            <button
              onClick={handleQuantityInc}
              className="px-3 py-1 cursor-pointer rounded text-3xl bg-green-600 text-white"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
