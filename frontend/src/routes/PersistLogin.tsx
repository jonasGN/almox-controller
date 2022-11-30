import { useEffect, useState } from "react";
import { Outlet } from "@/wrappers/navigation";
import { useAuth, useRefreshToken } from "@/hooks/auth";

export const PersistLogin = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { user } = useAuth();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    !user?.accessToken ? verifyRefreshToken() : setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   console.log(`isLoading: ${isLoading}`);
  //   console.log(`aT: ${JSON.stringify(user?.accessToken)}`);
  // }, [isLoading]);

  return <>{isLoading ? <span>adicionar componente FullReload</span> : <Outlet />}</>;
};
