import { createContext, useState } from "react";
import { UserRoles } from "../@types/common";
import { ReactChildrenElement } from "../@types/elements";

interface UserContextData {
  name: string;
  avatar: string;
  internalCode: string;
  roles: Array<UserRoles>;
  accessToken: string;
}

interface AuthContextData {
  user: UserContextData;
  setUser: (user: UserContextData) => void;
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
