"use client";

import { useCallback, useEffect, useRef } from "react";

type TFormData = {
  email: { value: string };
  password: { value: string };
};

type TProps = {
  readonly createUser: (email: string, password: string) => void
};

export default function SignUpUserForm({ createUser }: TProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: метод (или createUser) должен возвращать формат ошибки, что пользователя не существует
    e.preventDefault();
    const target = e.target as HTMLFormElement & TFormData;
    createUser(target.email.value, target.password.value);
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
