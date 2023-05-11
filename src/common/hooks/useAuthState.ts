import { auth } from "@backend/db";
import { useAuthState as useAuthStateHook } from "react-firebase-hooks/auth";

export const useAuthState = () => {
  const [user, loading] = useAuthStateHook(auth);

  return { user, loading };
};
