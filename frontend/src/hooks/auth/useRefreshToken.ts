import { useAuth } from "./useAuth";
import { refreshToken } from "@/repositories/auth";
import { rolesToUserRoles } from "@/utils/converters";
import { toShortName } from "@/utils/formatters";

type RefreshTokenHook = () => Promise<string>;

export const useRefreshToken = (): RefreshTokenHook => {
  const { setUser } = useAuth();

  const refresh = async () => {
    const data = await refreshToken();
    const accessToken = data.accessToken;
    const roles = rolesToUserRoles(data.roles);
    const user = data.user;

    setUser((prev) => {
      console.log("PREV AUTH STATE:", prev);
      console.log("CURRENT ACCESS TOKEN:", accessToken);
      return {
        ...prev,
        roles,
        accessToken,
        ...user,
        name: toShortName(user.name),
      };
    });

    return accessToken;
  };

  return refresh;
};
