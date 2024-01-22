import LoginUserForm from "@/components/LoginUserForm";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Link href={"/"} className="p-2 bg-orange-500">← HOME</Link>
      <LoginUserForm />
      <Link href={"/signup"} className="bg-yellow-500">dont have an accout? register here</Link>
    </>
  );
}
