import React from "react";
import SearchBar from "./SearchBar";
import { CircleUserRound } from "lucide-react";
import { Handbag } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

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
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer text-black"
              : "cursor-pointer text-gray-400"
          }
          to="/"
        >
          Men
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer text-black"
              : "cursor-pointer text-gray-400"
          }
          to="/womens"
        >
          Womens
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer text-black"
              : "cursor-pointer text-gray-400"
          }
          to="/kids"
        >
          Kids
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "cursor-pointer text-black"
              : "cursor-pointer text-gray-400"
          }
          to="/beauty"
        >
          Beauty
        </NavLink>
      </div>
      <div>
        <SearchBar />
      </div>

      <div className=" flex items-center gap-8 text-gray-500">
        <CircleUserRound className="cursor-pointer" />
        <Handbag onClick={() => navigate("cart")} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
