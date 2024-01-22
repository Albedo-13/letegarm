"use client";

import { AuthContext } from "@/lib/AuthContext";
import { useRouter } from "next/navigation";
import { useContext, useRef } from "react";

export default function SignUpUserForm() {
  const { createUser } = useContext(AuthContext);
  const formRef = useRef(null);
  const router = useRouter();

  const handleSubmit = (e) => {
    // TODO: метод (или createUser) должен возвращать формат ошибки, что пользователя не существует
    // TODO: редирект только на успешной форме
    e.preventDefault();
    const target = e.target;
    createUser(target.email.value, target.password.value);

    formRef.current?.reset();
    router.push("/");
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="mt-10">
      <p>Sign up form</p>
      <input type="text" name="email" required className="block text-black" />
      <input type="password" name="password" required className="block text-black mt-2" />
      <button type="submit" className="block">
        submit
      </button>
    </form>
  );
}
