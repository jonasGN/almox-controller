import type { ReactButtonElement, ReactChildrenElements } from "../../../@types/elements";

import { ElementException } from "../../../exceptions/ElementException";
import { classNames } from "../../../utils/styles-helper";

import styles from "./styles.module.scss";

export interface ButtonRawProps extends ReactButtonElement {
  title?: string;
  size?: "default" | "medium";
  customClassName?: string;
  children?: ReactChildrenElements;
}

export const ButtonRaw = (props: ButtonRawProps): JSX.Element => {
  const { title, children, size, customClassName, ...rest } = props;

  if (!title && !children) {
    throw new ElementException(
      "Must have at least one of the properties: `title` or `children`"
    );
  }

  const className = classNames(styles.button, customClassName!);

  return (
    <button className={className} type={rest.type ?? "button"} data-size={size} {...rest}>
      {title?.toUpperCase()}
    </button>
  );
};
