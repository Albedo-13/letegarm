"use client";

import { createContext, useEffect, useState, useMemo } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, signIn, signInWithGoogle, logOut }), [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    console.log("sign in with google successfull");
  }

  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log("sign in successfull");
    });
  }

  function logOut() {
    signOut(auth).then(() => {
      console.log("sign out successfull");
    });
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
