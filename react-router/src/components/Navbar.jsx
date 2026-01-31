import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="h-15 text-xl font-semibold bg-blue-600 flex px-10 items-center justify-between text-white">
      <div>
        <h1>Logo</h1>
      </div>
      <div className="flex gap-10">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-white"
          }
          to="/products"
        >
          Products
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
