"use client";

import { createContext, useEffect, useState, useMemo } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { addDoc, collection, getDocs, limit, query, where } from "firebase/firestore";

export const AuthContext = createContext(null);

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, LoginUserWithGoogle, loginUser, createUser, logOutUser }), [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  function LoginUserWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    console.log("login with google successfull");
  }

  async function loginUser(email, password) {
    const userByEmailQuery = query(collection(db, "users"), where("email", "==", email), limit(1));
    const querySnapshot = await getDocs(userByEmailQuery);

    // login new user ONLY if email is registered
    if (querySnapshot.size) {
      console.log("login existing user");
      signInWithEmailAndPassword(auth, email, password).then(() => {
        console.log("login successfull");
      });
    }
  }

  async function createUser(email, password) {
    // TODO: Инкапсулировать логику и поместить в firebase.js

    const userByEmailQuery = query(collection(db, "users"), where("email", "==", email), limit(1));
    const querySnapshot = await getDocs(userByEmailQuery);

    // create new user ONLY if email is not registered
    if (!querySnapshot.size) {
      console.log("create new user");
      const usersRef = await addDoc(collection(db, "users"), {
        email,
        password,
      });
      console.log("Document written: ", usersRef);

      createUserWithEmailAndPassword(auth, email, password).then(() => {
        console.log("registration successfull");
      });
    }
  }

  function logOutUser() {
    signOut(auth).then(() => {
      console.log("sign out successfull");
    });
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
