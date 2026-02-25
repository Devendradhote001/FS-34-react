import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="h-screen">
      <nav className="h-[10%]">
        <Navbar />
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
