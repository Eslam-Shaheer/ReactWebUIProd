import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuth = false;

  useEffect(() => {
    if (!isAuth) navigate("/login");
  }, [isAuth]);

  return children;
};

export default ProtectedRoute;
