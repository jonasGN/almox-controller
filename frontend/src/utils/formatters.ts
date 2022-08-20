export const initialsOf = (name: string): string => {
  const arr = name.split(" ").filter((n) => n.length > 2);
  const firstName = arr[0];
  const lastName = arr[arr.length - 1];

  return firstName.charAt(0) + lastName.charAt(0);
};

export const toCurrency = (number: number): string => {
  return Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
};

/**
 * Add a `0` char in number less than 10
 */
export const leadingZeroOn = (number: number): string => {
  if (number < 10) return `0${number}`;
  return String(number);
};
