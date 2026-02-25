import React from "react";
import SearchBar from "./SearchBar";
import { CircleUserRound } from "lucide-react";
import { Handbag } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-full flex shadow-md justify-between px-10 items-center">
      <div>
        <img
          width={70}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_T3uxOitGVezdGwt5vuSvnPguHDr0-xHEYg&s"
          alt=""
        />
      </div>
      <div className="flex gap-8 text-xl font-semibold">
        <p className="cursor-pointer">Men</p>
        <p className="cursor-pointer">Women</p>
        <p className="cursor-pointer">Kids</p>
        <p className="cursor-pointer">Beauty</p>
      </div>
      <div>
        <SearchBar />
      </div>

      <div className=" flex items-center gap-8 text-gray-500">
        <CircleUserRound className="cursor-pointer" />
        <Handbag className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
