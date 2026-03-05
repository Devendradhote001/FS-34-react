import React from "react";
import { useLocation, useNavigate } from "react-router";
import { useAddToCart } from "../hooks/useProductsHooks";

const ProductCard = ({ elem, getClickedCard }) => {
  const navigate = useNavigate();
  let { pathname } = useLocation();

  return (
    <div className="p-4 rounded-xl items-center bg-white shadow-md flex flex-col gap-4">
      <div
        onClick={() => navigate(`product/${elem.id}`)}
        className="h-[250px] "
      >
        <img
          className="h-full object-center rounded-xl"
          src={elem.image}
          alt=""
        />
      </div>
      <div className="text-xl flex flex-col gap-2 font-semibold">
        <p>
          {elem.title.length > 30
            ? `${elem.title.slice(0, 30)}...`
            : elem.title}
        </p>
        <p>{elem.category}</p>
        <p>${elem.price}</p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button className="py-3 rounded-xl cursor-pointer px-4 bg-red-700 text-white">
          Remove
        </button>

        {pathname === "/cart" ? null : (
          <button
            onClick={() => useAddToCart(elem.id)}
            className="py-3 rounded-xl cursor-pointer px-4 bg-green-700 text-white"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
