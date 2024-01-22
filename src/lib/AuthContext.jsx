"use client";

import { createContext, useEffect, useState, useMemo } from "react";
import { signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, createUserInDatabase, getUserSnapshotByEmail } from "@/lib/firebase";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, loginUser, createUser, logOutUser }), [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  async function loginUser(email, password) {
    const userSnapshot = await getUserSnapshotByEmail(email);
    const isUserExist = userSnapshot.size;

    // login new user ONLY if email is registered
    if (isUserExist) {
      console.log("login existing user");
      signInWithEmailAndPassword(auth, email, password).then(() => {
        console.log("login successfull");
      });
    }
  }

  async function createUser(email, password) {
    const userSnapshot = await getUserSnapshotByEmail(email);
    const isUserExist = userSnapshot.size;

    // create new user ONLY if email is not registered
    if (!isUserExist) {
      createUserInDatabase(email, password);
    }
  }

  function logOutUser() {
    signOut(auth).then(() => {
      console.log("sign out successfull");
    });
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
