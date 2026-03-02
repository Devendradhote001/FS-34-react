import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSingleProductDetail } from "../apis/productApis";

const ProductDetails = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  let fetchProductDetail = async () => {
    let res = await getSingleProductDetail(id);
    setProduct(res);
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  return (
    <div>
      <h1>Product ki details</h1>

      <img width={200} src={product.image} alt="" />
      <h1>{product.title}</h1>
      <h1>{product.description}</h1>
      <h1>{product.price}</h1>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductDetails;
