import React from "react";

const MainLayout = () => {
  return (
    <div className="flex h-screen flex-col gap-2 p-2">
      <div className="h-[7%] bg-red-600">Navbar</div>
      <div className="flex h-[82%] grid grid-cols-[1fr_3fr_1fr] gap-2">
        <div className="bg-blue-600">playlist</div>
        <div className="bg-green-500">Home</div>
        <div className="bg-gray-500">videoPlayer</div>
      </div>
      <div className="h-[11%] bg-indigo-400">Player</div>
    </div>
  );
};

export default MainLayout;
