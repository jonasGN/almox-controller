/**
 * Returns a single className including all given classes name
 */
export const multipleClasses = (...classNames: string[]): string => {
  let name = "";
  for (const c of classNames) {
    name += `${c} `;
  }

  return name.trimEnd();
};

/**
 * Returns the give `className` when the `predicate` is true.
 *
 * Default returns a `empty` className
 */
export const classNameWhen = (predicate: boolean, className: string): string => {
  return predicate ? className : "";
};
