import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router";
import { removeUser } from "../features/authSlice";

const Navbar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  let handleLogout = async () => {
    try {
      let res = await axios.get("http://localhost:3000/api/auth/logout", {
        withCredentials: true,
      });
      alert("user logged out");
      dispatch(removeUser());
    } catch (error) {
      console.log("error in logout api", error);
    }
  };

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
        <NavLink
          onClick={handleLogout}
          className="px-4 py-2 bg-black text-white rounded"
          to="/"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
