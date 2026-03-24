import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainScreen from "../features/landingPage/screens/MainScreen";
import FoodDeliveryLayout from "../layouts/FoodDeliveryLayout";
import MainSection from "../features/FoodDelivery/components/MainSection";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainScreen />,
    },
    {
      path: "/restaurants",
      element: <FoodDeliveryLayout />,
      children: [
        {
          path: " :name",
          element: <MainSection />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
