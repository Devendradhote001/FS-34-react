import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  let { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);

  if (isLoading) return <h1>Loading...</h1>;

  if (!isAuthenticated) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
