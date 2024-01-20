"use client";

import { useRef } from "react";

type TFormData = {
  email: { value: string };
  password: { value: string };
};

type TProps = {
  readonly signIn: (email: string, password: string) => void
};

export default function SignUpUserForm({ signIn }: TProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement & TFormData;

    signIn(target.email.value, target.password.value);
    // console.log(target.email.value);
    // console.log(target.password.value);

    formRef.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="mt-10">
      <p className="inline bg-blue-500">Sign up form</p>
      <input type="text" name="email" className="block text-black caret-pink-500" />
      <input type="password" name="password" className="block text-black mt-2" />
      <button type="submit" className="block inline bg-blue-500">
        submit
      </button>
    </form>
  );
}
