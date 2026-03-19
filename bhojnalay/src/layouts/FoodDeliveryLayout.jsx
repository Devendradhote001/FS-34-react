import React from "react";
import { Outlet } from "react-router";
import Navbar from "../features/FoodDelivery/components/Navbar";
import Footer from "../features/FoodDelivery/components/Footer";

const FoodDeliveryLayout = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default FoodDeliveryLayout;
