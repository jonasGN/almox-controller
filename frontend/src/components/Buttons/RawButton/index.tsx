import type { ReactButtonElement } from "../../../@types/elements";

import { classNames } from "../../../utils/styles-helper";

import styles from "./styles.module.scss";

export interface RawButtonProps extends ReactButtonElement {
  customClassName?: string;
}

export const RawButton = (props: RawButtonProps): JSX.Element => {
  const { customClassName, ...rest } = props;

  const className = classNames(customClassName!, styles.rawButton);

  return <button className={className} type={rest.type ?? "button"} {...rest} />;
};
