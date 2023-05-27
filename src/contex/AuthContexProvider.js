import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthContex = createContext();

export const useAuthContex = () => useContext(AuthContex);

const AuthContexProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Abdur Rahim" });
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signInWithProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });

    return unSubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authInfo = {
    user,
    loading,
    signUp,
    signIn,
    logOut,
    signInWithProvider,
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthContexProvider;
