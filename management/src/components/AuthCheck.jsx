import React from "react";
import { Navigate, Outlet } from "react-router";

const AuthCheck = () => {
  let logUser = JSON.parse(localStorage.getItem("log user"));

  if (logUser) {
    return <Navigate to="/main" />;
  }

  return <Outlet />;
};

export default AuthCheck;
