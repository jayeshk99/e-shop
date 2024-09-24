import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.login);
  const location = useLocation();

  console.log("isAuthenticated:", isAuthenticated);
  //   const { isLoggedIn } = useContext(AuthContext);
  if (!isAuthenticated) {
    return <Navigate to={"/login"} state={{ from: location }} />;
  } else {
    return children;
  }
};
