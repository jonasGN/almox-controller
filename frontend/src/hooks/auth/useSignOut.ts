import { useNavigate } from "react-router-dom";
import { useAuth, UserContextData } from "./useAuth";
import { signOut } from "../../repositories/auth";
import { deleteData } from "../../services/localStorage";

type SignOutHook = () => Promise<void>;

export const useSignOut = (): SignOutHook => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const logOut = async () => {
    try {
      await signOut();
    } catch (e) {
      console.error(e);
    } finally {
      setUser({} as UserContextData);
      deleteData("user");
      navigate("/");
    }
  };

  return logOut;
};
