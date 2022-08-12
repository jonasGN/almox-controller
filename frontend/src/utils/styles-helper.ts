/**
 * Concat multiple class-name's into one single class-name
 */
export const multipleClasses = (...classNames: string[]): string => {
  let className = "";

  for (let c of classNames) {
    className = className.concat(" ", c);
  }

  return className.trim();
};
