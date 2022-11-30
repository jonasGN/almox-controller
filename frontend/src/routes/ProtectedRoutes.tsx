import type { UserRoles } from "@Types/common";
import { useLocation, Outlet, Navigate } from "@/wrappers/navigation";
import { useAuth } from "@/hooks/auth";
import { isObjectEmpty } from "@/utils/common";

interface ProtectedRoutesProps {
  allowedRoutes?: Array<UserRoles>;
}

export const ProtectedRoutes = ({ allowedRoutes }: ProtectedRoutesProps): JSX.Element => {
  const location = useLocation();
  const { user } = useAuth();

  return isObjectEmpty(user) ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
