/**
 * Retrive the initials of a given name
 */
export const initialsOf = (name: string): string => {
  const arr = name.split(" ").filter((n) => n.length > 2);
  const firstName = arr[0];
  const lastName = arr[arr.length - 1];

  return firstName.charAt(0) + lastName.charAt(0);
};

/**
 * Reduce a user name to firt and last name only
 */
export const toShortName = (name: string): string => {
  const arr = name.split(" ").filter((n) => n.length > 2);
  const first = arr[0];
  const last = arr[arr.length - 1];

  return `${first} ${last}`;
};
