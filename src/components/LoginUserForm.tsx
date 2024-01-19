'use client';

import { loginUser } from "@/lib/actions";
import { useRef } from "react";

export default function LoginUserForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (

    <form ref={formRef} action={
        (formData) => {
          loginUser(formData);
          formRef.current?.reset();
        }
      }>Login Form
      <input type="text" name="email" className="block text-black caret-pink-500" />
      <input type="password" name="password" className="block text-black mt-2" />
      <button type="submit" className="block">submit</button>
    </form>
  )
}
