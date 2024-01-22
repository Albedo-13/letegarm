'use client';

import { useRef } from "react";

type TProps = {
  readonly loginUser: (email: string, password: string) => void,
};

type TFormData = {
  email: { value: string };
  password: { value: string };
};

export default function LoginUserForm({ loginUser }: TProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // TODO: метод (или loginUser) должен возвращать формат ошибки, что пользователя не существует
    e.preventDefault();
    const target = e.target as HTMLFormElement & TFormData;

    loginUser(target.email.value, target.password.value);

    formRef.current?.reset();
  }

  return (

    <form ref={formRef} onSubmit={handleSubmit} className="mt-10">
      <p>Login Form</p>
      <input type="text" name="email" className="block text-black caret-pink-500" />
      <input type="password" name="password" className="block text-black mt-2" />
      <button type="submit" className="block">submit</button>
    </form>
  )
}
