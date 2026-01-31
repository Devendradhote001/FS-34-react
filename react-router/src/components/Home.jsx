import React from "react";
import { Outlet, useNavigate } from "react-router";

const Home = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl">Home page</h1>
      <button onClick={() => navigate("/about/desc/")}>Click me</button>
      <Outlet />
    </div>
  );
};

export default Home;
