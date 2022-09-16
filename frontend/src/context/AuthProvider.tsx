import { createContext, useState } from "react";
import { ReactState } from "@Types/aliases";
import { UserRoles } from "@Types/common";
import { ReactChildrenElement } from "@Types/elements";

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
  children: ReactChildrenElement;
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
