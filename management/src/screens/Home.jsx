import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { MyStore } from "../MyContext";
import { axiosInstance } from "../config/axiosInstance";

const Home = () => {
  let { isLoading, setIsLoading } = useContext(MyStore);

  const [products, setProducts] = useState([]);
  console.log(products);

  let getProductsFromApi = async () => {
    try {
      let res = await axiosInstance.get("/products");
      if (res) {
        setIsLoading(false);
        setProducts(res.data);
      }
    } catch (error) {
      console.log("error in products api", error);
    }
  };

  useEffect(() => {
    getProductsFromApi();

    return () => {
      setIsLoading(true);
    };
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-wrap gap-6 h-screen overflow-auto ">
      {products.map((elem) => (
        <ProductCard elem={elem} key={elem.id} />
      ))}
    </div>
  );
};

export default Home;
