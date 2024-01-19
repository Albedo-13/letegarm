import { auth } from "@/lib/firebase"
import { signOut } from "firebase/auth"

export default function SignOutButton() {
  return (
    <button onClick={() => {
      signOut(auth).then(() => {console.log("sign out successfull")});
    }}>Sign Out</button>
  )
}
