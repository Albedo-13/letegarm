"use client";

import { AuthContext } from "@/lib/AuthContext";
import { useContext } from "react";
import Link from "next/link";
import { useUserInfo } from "@/lib/hooks";

export default function Enter() {
  const { user, LoginUserWithGoogle, loginUser, createUser, logOutUser } = useContext(AuthContext);

  console.log("user", user);
  console.log("loginUser", loginUser);
  console.log("createUser", createUser);
  console.log("logOutUser", logOutUser);
  // TODO: отказаться от сервер экшенов. Они нужны только для работы с таблицами, но не авторизацией
  // https://www.youtube.com/watch?v=S_sV6bYWKXQ&ab_channel=CodeCommerce
  // https://github.com/fireclint/next-auth-firebase/blob/main/app/context/AuthContext.js

  // TODO: Попробовать регистрацию с гугла
  // TODO: Попробовать сделать на клиенте через куки. Может проблема из-за SSR
  return (
    <div>
      <h2>Welcome, {user ? `${user.displayName ?? user.email}` : "Anonim"}</h2>
      <button onClick={LoginUserWithGoogle} className="mx-2 p-4 bg-blue-500 rounded-lg">
        Google Sign in
      </button>
      <button onClick={logOutUser} className="p-4 bg-pink-500 rounded-lg">
        Sign Out
      </button>

      <div className="block mt-5">
        <Link href={"/signup"} className="inline-block p-2 bg-yellow-500 mx-4">
          Sign up →
        </Link>
        <Link href={"/login"} className="inline-block p-2 bg-orange-500">
          Login →
        </Link>
      </div>
      {/* <SignUpUserForm />
      <LoginUserForm /> */}
    </div>
  );
}
