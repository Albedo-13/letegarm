"use client";

import { AuthContext } from "@/lib/AuthContext";
import { useContext, useRef } from "react";
import { redirect } from "next/navigation";

export default function LoginUserForm() {
  const { loginUser } = useContext(AuthContext);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    // TODO: метод (или loginUser) должен возвращать формат ошибки, что пользователя не существует
    // TODO: редирект только на успешной форме
    e.preventDefault();
    const target = e.target;
    loginUser(target.email.value, target.password.value);

    formRef.current?.reset();
    redirect("/");
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-10">
      <p>Login Form</p>
      <input type="text" name="email" required className="block text-black" />
      <input type="password" name="password" required className="block text-black mt-2" />
      <button type="submit" className="block">
        submit
      </button>
    </form>
  );
}
