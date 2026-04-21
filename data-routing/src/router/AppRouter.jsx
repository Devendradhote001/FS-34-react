import React, { useEffect } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from "react-router";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import ProtectedRoute from "../components/ProtectedRoute";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../features/authSlice";
import PublicRoute from "../components/PublicRoute";

const AppRouter = () => {
  let dispatch = useDispatch();

  useEffect(() => {
    let callMeApi = async () => {
      try {
        let res = await axios.get("http://localhost:3000/me", {
          withCredentials: true,
        });
        console.log("me api", res);

        dispatch(addUser(res.data.user));
      } catch (error) {
        dispatch(removeUser());
        console.log("error in me api", error);
      }
    };

    callMeApi();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
        },
      ],
    },

    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
