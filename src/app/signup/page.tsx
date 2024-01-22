import SignUpUserForm from "@/components/SignUpUserForm";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <>
      <Link href={"/"} className="p-2 bg-yellow-500">← HOME</Link>
      <SignUpUserForm />
      <Link href={"/login"} className="bg-orange-500">have an accout? login here</Link>
    </>
  )
}
