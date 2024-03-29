import type { UserRoles } from "@Types/common";
import { useLocation, Outlet, Navigate } from "@/wrappers/navigation";
import { useAuth } from "@/hooks/auth";
import { utils } from "@/utils";
import { Paths } from "./paths";

interface ProtectedRoutesProps {
  allowedRoutes?: Array<UserRoles>;
}

export const ProtectedRoutes = ({ allowedRoutes }: ProtectedRoutesProps): JSX.Element => {
  const location = useLocation();
  const { user } = useAuth();

  return utils.isObjectEmpty(user) ? (
    <Navigate to={Paths.SIGN_IN} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
