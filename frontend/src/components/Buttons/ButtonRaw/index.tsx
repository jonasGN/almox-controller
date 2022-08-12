import type { ReactButtonElement, ReactChildrenElements } from "../../../@types/elements";
import { ElementException } from "../../../exceptions/ElementException";

import styles from "./styles.module.scss";

export interface ButtonRawProps extends ReactButtonElement {
  title?: string;
  size?: "default" | "medium";
  children?: ReactChildrenElements;
}

export const ButtonRaw = (props: ButtonRawProps): JSX.Element => {
  const { title, children, size, ...rest } = props;

  if (!title && !children) {
    throw new ElementException(
      "Must have at least one of the properties: `title` or `children`"
    );
  }

  return (
    <button
      className={styles.button}
      type={rest.type ?? "button"}
      data-size={size}
      {...rest}
    >
      {title?.toUpperCase()}
    </button>
  );
};
