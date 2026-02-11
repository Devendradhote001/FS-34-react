import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  let getProductsFromApi = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      if (res) {
        setProducts(res.data);
      }
    } catch (error) {
      console.log("error in products api", error);
    }
  };

  useEffect(() => {
    getProductsFromApi();
  }, []);

  return (
    <div className="flex flex-wrap gap-6 h-screen overflow-auto ">
      {products.map((elem) => (
        <ProductCard elem={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default Home;
