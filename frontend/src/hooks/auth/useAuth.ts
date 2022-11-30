import type { UserContextData } from "@/context/AuthProvider";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";

export type { UserContextData };

export const useAuth = () => useContext(AuthContext);
