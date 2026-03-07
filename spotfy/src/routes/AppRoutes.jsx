import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
    },

    {
      path: "/",
      element: <MainLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
