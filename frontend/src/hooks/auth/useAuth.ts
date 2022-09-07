import { useContext } from "react";
import { AuthContext, UserContextData } from "../../context/AuthProvider";

export type { UserContextData };

export const useAuth = () => useContext(AuthContext);
