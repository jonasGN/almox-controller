/**
 * Add a `0` char in number less than 10
 */
export const leadingZeroOn = (number: number): string => {
  if (number < 10) return `0${number}`;
  return String(number);
};
