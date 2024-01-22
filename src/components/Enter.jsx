"use client";

import { AuthContext } from "@/lib/AuthContext";
import { useContext } from "react";
import Link from "next/link";

export default function Enter() {
  const { user, logOutUser } = useContext(AuthContext);

  console.log("user", user);

  return (
    <div>
      <h2>Welcome, {user ? `${user.displayName ?? user.email}` : "Anonim"}</h2>
      <button onClick={logOutUser} className="p-3 bg-pink-500 rounded-lg">
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
