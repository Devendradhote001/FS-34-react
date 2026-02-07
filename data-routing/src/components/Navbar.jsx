import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  let navigate = useNavigate();

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
        <NavLink className="px-4 py-2 bg-black text-white rounded" to="/home">
          Home
        </NavLink>
        <NavLink
          className="px-4 py-2 bg-black text-white rounded"
          to="/home/about/9"
        >
          About
        </NavLink>
        <NavLink
          className="px-4 py-2 bg-black text-white rounded"
          to="/home/contact"
        >
          Contact
        </NavLink>
        <NavLink className="px-4 py-2 bg-black text-white rounded" to="/">
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
