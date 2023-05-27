import React from "react";
import { useAuthContex } from "../../contex/AuthContexProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const { user, loading } = useAuthContex();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user?.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default RequireAuth;
