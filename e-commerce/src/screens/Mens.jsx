import React, { useCallback, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { fetchAllProducts } from "../apis/productApis";
import { useQuery } from "@tanstack/react-query";

const Mens = () => {
  let { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  let { isPending, data } = useQuery({
    queryKey: ["Products"],
    queryFn: fetchAllProducts,
    staleTime: 10000,
  });

  let getClickedCard = (id) => {
    let clickedCard = products.find((elem) => elem.id === id);
    let isInCart = cartItems.find((elem) => elem.id === id);
    if (isInCart) {
      alert("product already in cart");
      return;
    }
    if (clickedCard) {
      dispatch(addToCart(clickedCard));
      alert("product added to cart");
    }
  };

  if (isPending) return <h1 className="text-2xl">Loading data...</h1>;

  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {data.map((elem) => (
        <ProductCard
          key={elem.id}
          elem={elem}
          getClickedCard={getClickedCard}
        />
      ))}
    </div>
  );
};

export default Mens;
