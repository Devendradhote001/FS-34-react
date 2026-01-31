import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
import ProductDescription from "../components/ProductDescription";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="desc/:data" element={<ProductDescription />} />
        </Route>
        <Route path="/products/:chacha" element={<Products />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
