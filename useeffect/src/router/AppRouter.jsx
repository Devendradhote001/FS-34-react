import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router";
import Home from "../components/Home";
import About from "../components/About";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
