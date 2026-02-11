import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full">
      <nav className="w-[20%] border-r border-gray-400 p-4">
        <Navbar />
      </nav>
      <div className="w-[80%] p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
