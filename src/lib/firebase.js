// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, getFirestore, addDoc, collection, getDocs, limit, query, where } from "firebase/firestore";

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

export async function getUserSnapshotByEmail(email) {
  const userByEmailQuery = query(collection(db, "users"), where("email", "==", email), limit(1));
  const querySnapshot = await getDocs(userByEmailQuery);
  return querySnapshot;
}

export async function createUserInDatabase(email, password) {
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

