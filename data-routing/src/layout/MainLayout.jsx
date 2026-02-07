import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex w-[100%] h-screen">
      <div className="w-[20%] p-4 border-r border-gray-500">
        <Navbar />
      </div>
      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
