import React from "react";
import { Navigate, Outlet } from "react-router";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  let logUser = JSON.parse(localStorage.getItem("log user"));

  console.log(logUser);

  if (!logUser) {
    toast.error("unauthorized user");
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
