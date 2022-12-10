export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  roles: string[];
  user: {
    name: string;
    internalCode: string;
    avatar: string;
  };
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  roles: string[];
  user: {
    name: string;
    internalCode: string;
    avatar: string;
  };
}
