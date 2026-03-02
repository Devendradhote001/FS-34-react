import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Mens from "../screens/Mens";
import Beauty from "../screens/Beauty";
import Kids from "../screens/Kids";
import Womens from "../screens/Womens";
import CartScreen from "../screens/CartScreen";
import ProductDetails from "../screens/ProductDetails";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Mens />,
        },
        {
          path: "womens",
          element: <Womens />,
        },
        {
          path: "kids",
          element: <Kids />,
        },
        {
          path: "beauty",
          element: <Beauty />,
        },
        {
          path: "cart",
          element: <CartScreen />,
        },

        {
          path: "product/:id",
          element: <ProductDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
