import React from "react";
import { Route, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
