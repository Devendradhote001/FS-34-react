import React from "react";
import { Outlet, useParams } from "react-router";

const Products = () => {
  let { chacha } = useParams();
  console.log(chacha);

  return (
    <div>
      <h1 className="text-2xl">Product page -- {chacha}</h1>
      <Outlet />
    </div>
  );
};

export default Products;
