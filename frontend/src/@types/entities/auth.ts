import type { UserRoles } from "../common";

export interface AuthData {
  accessToken: string;
  refreshToken: string;
  roles: Array<UserRoles>;
  user: {
    name: string;
    internalCode: string;
    avatar: string;
  };
}

export interface RefreshTokenData {
  accessToken: string;
  refreshToken: string;
  roles: string[];
  user: {
    name: string;
    internalCode: string;
    avatar: string;
  };
}
