import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const AuthContex = createContext();

export const useAuthContex = () => useContext(AuthContex);

const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Abdur Rahim" });

  const authInfo = { user };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthContexProvider;
