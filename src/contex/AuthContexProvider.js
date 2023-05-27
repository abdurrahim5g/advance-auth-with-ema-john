import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthContex = createContext();

export const useAuthContex = () => useContext(AuthContex);

const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Abdur Rahim" });

  const auth = getAuth(app);

  const signIn = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });

    return unSubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authInfo = { user, signIn };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthContexProvider;
