import { useAuth, UserContextData } from "./useAuth";
import { useNavigation } from "../common";

import { signOut } from "@/repositories/auth";
import { deleteData } from "@/services/localStorage";

type SignOutHook = () => Promise<void>;

export const useSignOut = (): SignOutHook => {
  const { setUser } = useAuth();
  const { navigateTo } = useNavigation();

  const logOut = async () => {
    try {
      await signOut();
    } catch (e) {
      console.error(e);
    } finally {
      setUser({} as UserContextData);
      deleteData("user");
      navigateTo("/");
    }
  };

  return logOut;
};
