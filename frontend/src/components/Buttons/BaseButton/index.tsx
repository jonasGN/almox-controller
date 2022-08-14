import type { ReactButtonElement, ReactChildrenElement } from "../../../@types/elements";

import { ElementException } from "../../../exceptions";
import { classNames } from "../../../utils/styles-helper";
import { RawButton } from "../RawButton";

import styles from "./styles.module.scss";

export interface BaseButtonProps extends ReactButtonElement {
  title?: string;
  size?: "default" | "medium";
  customClassName?: string;
  children?: ReactChildrenElement;
}

export const BaseButton = (props: BaseButtonProps): JSX.Element => {
  const { title, children, size, customClassName, ...rest } = props;

  if (!title && !children) {
    throw new ElementException(
      "Must have at least one of the properties: `title` or `children`"
    );
  }

  const className = classNames(styles.baseButton, customClassName!);

  return (
    <RawButton customClassName={className} data-size={size} {...rest}>
      {title?.toUpperCase()}
    </RawButton>
  );
};
