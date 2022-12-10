type DateOptions = Intl.DateTimeFormatOptions;

/**
 * Formate date for an app pattern
 */
export const toFormattedDate = (date: Date, options?: DateOptions): string => {
  return Intl.DateTimeFormat(
    "pt-BR",
    options ?? { day: "2-digit", month: "short", year: "numeric" }
  ).format(date);
};

/**
 * Transform a number into currency
 */
export const toCurrency = (number: number): string => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};

/**
 * Add a `0` char into a number that is less than 10
 */
export const leadingZeroOn = (number: number): string => {
  return number < 10 ? `0${number}` : String(number);
};

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

export const formatter = {
  toCurrency,
  toFormattedDate,
  leadingZeroOn,
  initialsOf,
  toShortName,
};
