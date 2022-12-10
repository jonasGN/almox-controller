import type { ReactState } from "@Types/aliases";
import type { UserRoles } from "@Types/common";
import { createContext, useState } from "react";

export interface UserContextData {
  name: string;
  avatar: string;
  internalCode: string;
  roles: Array<UserRoles>;
  accessToken: string;
}

interface AuthContextData {
  user: UserContextData;
  setUser: ReactState<UserContextData>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [auth, setAuth] = useState<UserContextData>({} as UserContextData);

  return (
    <AuthContext.Provider value={{ user: auth, setUser: setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
