import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import HomeScreen from "../features/home/screens/HomeScreen";
import GenreDetail from "../features/home/screens/GenreDetail";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <AuthLayout />,
    },

    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <HomeScreen />,
        },
        {
          path: "genre/:id",
          element: <GenreDetail />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
