import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Home from "../screens/Home";
import Users from "../screens/Users";
import Cart from "../screens/Cart";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthCheck from "../components/AuthCheck";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthCheck />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              index: true,
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
