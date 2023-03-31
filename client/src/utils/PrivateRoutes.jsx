import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoutes({ children }) {
  let { data } = useSelector((store) => store.auth);

  if (data.isAuthenticated === false) {
    return <Navigate to={"/login"} />;
  }
  return children;
}
