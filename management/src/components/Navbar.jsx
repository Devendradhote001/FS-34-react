import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-4 items-center mb-5">
        <div className="w-10">
          <img
            className="w-full"
            src="https://offline.sheryians.com/images/black-logo.png"
            alt=""
          />
        </div>
        <h1 className="text-sm font-semibold">Sheryians coding school</h1>
      </div>

      <div className="flex flex-col gap-5 pl-8">
        <NavLink className="px-4 py-2 bg-gray-300 rounded" to="/main">
          Home
        </NavLink>
        <NavLink className="px-4 py-2 bg-gray-300 rounded" to="/main/users">
          Users
        </NavLink>
        <NavLink className="px-4 py-2 bg-gray-300 rounded" to="/main/cart">
          Cart
        </NavLink>
        <NavLink className="px-4 py-2 bg-gray-300 rounded">Logout</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
