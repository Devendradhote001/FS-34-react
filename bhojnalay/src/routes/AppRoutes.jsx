import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainScreen from "../features/landingPage/screens/MainScreen";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
