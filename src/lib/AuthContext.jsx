"use client";

import { createContext, useEffect, useState, useMemo } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, signIn, logOut }), [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  function signIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function logOut() {
    signOut(auth).then(() => {
      console.log("sign out successfull");
    });
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
