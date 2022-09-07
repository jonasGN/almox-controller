/**
 * Concat multiple class-name's into one single class-name
 */
export const classNames = (...classNames: string[]): string => {
  let className = "";

  for (let c of classNames) {
    if (!c) continue;
    className = className.concat(" ", c);
  }

  return className.trim();
};
