import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex h-screen flex-col gap-2 p-2">
      <div className="h-[7%]">
        <Navbar />
      </div>
      <div className="h-[82%] grid grid-cols-[1fr_3fr_1fr] gap-2">
        <div className="bg-blue-600 rounded-xl">playlist</div>
        <div className="p-4 rounded-xl border overflow-auto border-gray-700">
          <Outlet />
        </div>
        <div className="bg-gray-500 rounded-xl">videoPlayer</div>
      </div>
      <div className="h-[11%] bg-indigo-400">Player</div>
    </div>
  );
};

export default MainLayout;
