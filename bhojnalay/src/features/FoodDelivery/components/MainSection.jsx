import React from "react";
import { useMain } from "../hooks/useMainSection";
import ProductCard from "./utlilityCards/ProductCard";

const MainSection = () => {
  let { name } = useMain();

  return (
    <div className="px-[10vw] my-7">
      <h1>{name}</h1>
      <div className="">
        <p>Top restaurants in Bhopal</p>
        <div className="flex flex-wrap">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
