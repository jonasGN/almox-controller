import { UserRoles } from "../../@types/common";
import { useAuth } from "../../hooks";

interface ShowWhenHasRolesProps {
  allowedRoles: Array<UserRoles>;
  children: React.ReactNode;
}

export const ShowWhenHasRoles = (props: ShowWhenHasRolesProps): JSX.Element | null => {
  const { allowedRoles, children } = props;

  const { user } = useAuth();

  if (!user.roles.find((role) => allowedRoles.includes(role))) return null;

  return <>{children}</>;
};
