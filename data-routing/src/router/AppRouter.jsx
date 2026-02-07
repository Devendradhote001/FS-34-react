import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";

const AppRouter = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
    },

    {
      path: "/home",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about/:id",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
