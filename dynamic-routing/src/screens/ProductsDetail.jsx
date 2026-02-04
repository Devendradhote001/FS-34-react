import React, { useContext } from "react";
import { useParams } from "react-router";
import { MyStore } from "../MyContext";

const ProductsDetail = () => {
  let { id } = useParams();

  let { products } = useContext(MyStore);

  let getSingleProduct = products.find((val) => val.id == id);
  console.log(getSingleProduct);

  return (
    <div>
      <img src={getSingleProduct?.image} alt="" />
      <h1 className="text-3xl font-bold">Name - {getSingleProduct?.name}</h1>
      <h4>Description - {getSingleProduct?.description}</h4>
      <h4 className="text-2xl">Price - {getSingleProduct?.price}</h4>
    </div>
  );
};

export default ProductsDetail;
