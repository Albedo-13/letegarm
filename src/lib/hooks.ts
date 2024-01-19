import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "@/lib/firebase";

export function useUserInfo() {
  const [user, loading, error] = useAuthState(auth);
  // const user = auth.currentUser;
  // console.log("useAuthState", user, loading, error);
  return {
    user,
    loading,
    error
  };
}