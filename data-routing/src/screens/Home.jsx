import React from "react";
import { createBrowserRouter, NavLink, Outlet } from "react-router";

const Home = () => {
  return (
    <div>
      <nav>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/cart">cart</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Home;
