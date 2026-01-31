import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

const About = () => {
  console.log(cl);
  let rn = Math.floor(Math.random() * 100);

  let navigate = useNavigate();

  return (
    <div>
      <h1 className="text-2xl">About page</h1>
      <button onClick={() => navigate(`desc/${rn}`)}>Click me</button>
      <Outlet />
    </div>
  );
};

export default About;
