import React from "react";
import Navigation from "./components/Navigation";
import CreateProduct from "./components/CreateProduct";
import Products from "./components/Products";
import { useState } from "react";
import { useContext } from "react";
import { MyStore } from "./MyContext";

const App = () => {
  let { products, toggle } = useContext(MyStore);

  return (
    <div className="h-screen p-5 w-full flex gap-5">
      <div className="w-[20%] border-r-2 border-black/30">
        <Navigation />
      </div>
      <div className="w-[80%] ">
        {toggle ? (
          <CreateProduct />
        ) : (
          <div className="w-full flex gap-5 flex-wrap">
            {products.length ? (
              products.map((elem, ind) => {
                return <Products key={ind} elem={elem} />;
              })
            ) : (
              <h1 className="text-5xl">No products here..</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
