import React from "react";
import ProductCard from "../components/ProductCard";

import { useDispatch } from "react-redux";
import { useGetAllProducts } from "../hooks/useProductsHooks";

const Mens = () => {
  const dispatch = useDispatch();

  let { isPending, data, error } = useGetAllProducts();
  if (isPending) return <h1 className="text-2xl">Loading data...</h1>;

  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {data?.map((elem) => (
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
