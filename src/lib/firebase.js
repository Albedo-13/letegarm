// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3acA2EjS_7w-icbZBVEA3REA4TdbTies",
  authDomain: "letegarm.firebaseapp.com",
  projectId: "letegarm",
  storageBucket: "letegarm.appspot.com",
  messagingSenderId: "59234145151",
  appId: "1:59234145151:web:e827f3850d1c848b43004a",
  measurementId: "G-J8YZLDTKPC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


