import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import Cart from "../screens/Cart";
import ProductsDetail from "../screens/ProductsDetail";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
