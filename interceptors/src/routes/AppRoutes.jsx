import React, { lazy } from "react";
import { NavLink, Route, Routes } from "react-router";
import About from "../components/About";
let App = lazy(() => import("../App"));
let Home = lazy(() => import("../components/Home"));

const AppRoutes = () => {
  return (
    <div>
      <div>
        <NavLink to="/">App</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
