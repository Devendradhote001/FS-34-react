import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div>
      <Link to="/home">home</Link>
      <Link to="/about">about</Link>
    </div>
  );
};

export default Navbar;
