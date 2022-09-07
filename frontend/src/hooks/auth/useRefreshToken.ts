import { useAuth } from "./useAuth";
import { refreshToken } from "../../repositories/auth";

type RefreshTokenHook = () => Promise<string>;

export const useRefreshToken = (): RefreshTokenHook => {
  const { setUser } = useAuth();

  const refresh = async () => {
    const data = await refreshToken();
    const accessToken = data.accessToken;

    setUser((prev) => {
      console.log(prev);
      console.log(accessToken);
      return { ...prev, accessToken };
    });

    return accessToken;
  };

  return refresh;
};
