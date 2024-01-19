'use server';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { revalidatePath } from "next/cache";
import { cookies } from "./cookies";

export async function SignUpUser(formData: FormData) {
  const rawFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  console.log("rawFormData", rawFormData);

  createUserWithEmailAndPassword(auth, rawFormData.email, rawFormData.password)

  revalidatePath('/');
}

export async function loginUser(formData: FormData) {
  const rawFormData = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }
  console.log("rawFormData", rawFormData);

  // const auth = getAuth();
  signInWithEmailAndPassword(auth, rawFormData.email, rawFormData.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user: ", user);
    // console.log("auth.currentUser: ", auth.currentUser?.email);
    // ...
    
    cookies.set("currentAuthUser", user);
    console.log("cookies.get('currentAuthUser')", cookies.get("currentAuthUser"));
  })

  revalidatePath('/');
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("uid", uid);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
