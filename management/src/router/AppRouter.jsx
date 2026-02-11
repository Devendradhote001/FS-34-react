import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../screens/Home";
import Users from "../screens/Users";
import Cart from "../screens/Cart";

const AppRouter = () => {
  let router = createBrowserRouter([
    { path: "/", element: <AuthLayout /> },
    {
      path: "/main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
