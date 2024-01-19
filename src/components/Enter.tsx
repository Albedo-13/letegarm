'use client';

import { useUserInfo } from "@/lib/hooks";
import SignUpUserForm from "./SignUpUserForm";
import LoginUserForm from "./LoginUserForm";
import SignOutButton from "./SignOutButton";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { cookies } from "@/lib/cookies";

export default function Enter() {

  const user = cookies.get("currentAuthUser");
  console.log("cookied user", user);
  // TODO: Попробовать регистрацию с гугла
  // TODO: Попробовать сделать на клиенте через куки. Может проблема из-за SSR
  return (
    <div>
      <SignUpUserForm />
      <LoginUserForm />
      <SignOutButton />
    </div>
  )
}
