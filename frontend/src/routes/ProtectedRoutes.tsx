import { UserRoles } from "../@types/common";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { isObjectEmpty } from "../utils/helpers";

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
