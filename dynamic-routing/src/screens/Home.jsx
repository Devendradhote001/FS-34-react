import React, { useContext } from "react";
import { MyStore } from "../MyContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  let { products } = useContext(MyStore);

  return (
    <div className="flex flex-wrap gap-6">
      {products.map((elem) => {
        return <ProductCard key={elem.id} elem={elem} />;
      })}
    </div>
  );
};

export default Home;
