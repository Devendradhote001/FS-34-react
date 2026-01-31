import React from "react";
import { useParams } from "react-router";

const ProductDescription = () => {
  let { data } = useParams();
  return (
    <div>
      <h1>ProductDescription -- {data}</h1>
    </div>
  );
};

export default ProductDescription;
