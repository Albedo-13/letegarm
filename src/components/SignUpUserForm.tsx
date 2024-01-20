'use client';

// import { SignUpUser } from "@/lib/actions";
import { useRef } from "react";

export default function SignUpUserForm() {
  const formRef = useRef<HTMLFormElement>(null);

  return (

    <form ref={formRef} action={
        (formData) => {
          // SignUpUser(formData);
          // formRef.current?.reset();
        }
      }>Sign up form
      <input type="text" name="email" className="block text-black caret-pink-500" />
      <input type="password" name="password" className="block text-black mt-2" />
      <button type="submit" className="block">submit</button>
    </form>
  )
}
