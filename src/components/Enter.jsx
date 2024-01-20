"use client";

import { AuthContext } from "@/lib/AuthContext";
// import { useUserInfo } from "@/lib/hooks";
// import SignUpUserForm from "./SignUpUserForm";
// import LoginUserForm from "./LoginUserForm";
// import SignOutButton from "./SignOutButton";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "@/lib/firebase";
import { useContext } from "react";

export default function Enter() {
  const { user, signIn, logOut } = useContext(AuthContext);

  console.log("user", user);
  console.log("signIn", signIn);
  console.log("logOut", logOut);
  // TODO: отказаться от сервер экшенов. Они нужны только для работы с таблицами, но не авторизацией
  // https://www.youtube.com/watch?v=S_sV6bYWKXQ&ab_channel=CodeCommerce
  // https://github.com/fireclint/next-auth-firebase/blob/main/app/context/AuthContext.js

  // TODO: Попробовать регистрацию с гугла
  // TODO: Попробовать сделать на клиенте через куки. Может проблема из-за SSR
  return (
    <div>
      <h2>Welcome, {user ? user.displayName : "Anonim"}</h2>
      <button onClick={signIn} className="mx-2 p-4 bg-amber-500 rounded-lg">
        Sign in
      </button>
      <button onClick={logOut} className="p-4 bg-pink-500 rounded-lg">
        Sign Out
      </button>
    </div>
  );
}
