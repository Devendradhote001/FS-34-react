import React from "react";
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter, NavLink, Link } from "react-router";
import Contact from "../screens/Contact";
import Home from "../screens/Home";
import Cart from "../screens/Cart";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "contact",
          element: <Contact />,
        },
        {
          index: true,
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
