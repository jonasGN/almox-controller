import type { UserRoles } from "@Types/common";

/**
 * Converts a string array into a `UserRoles` to be used on application
 */
export const rolesToUserRoles = (roles: string[]): Array<UserRoles> => {
  const formattedRoles: UserRoles[] = roles.map((role) => {
    if (role === "ADMIN") return "admin";
    if (role === "OPERATOR") return "operator";
    if (role === "STANDARD") return "standard";
    throw Error("Invalid given user role");
  });

  return formattedRoles;
};
