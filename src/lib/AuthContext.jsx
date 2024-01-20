"use client";

import { createContext, useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/lib/firebase";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  function signIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  function logOut() {
    signOut(auth).then(() => {
      console.log("sign out successfull");
    });
  }

  return <AuthContext.Provider value={{ user, signIn, logOut }}>{children}</AuthContext.Provider>;
}
