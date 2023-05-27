import React from "react";
import { useAuthContex } from "../../contex/AuthContexProvider";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const RequireAuth = ({ children }) => {
  const { user, loading } = useAuthContex();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user?.uid) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default RequireAuth;
