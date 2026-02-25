import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../screens/Home";
import MainLayout from "../layouts/MainLayout";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
