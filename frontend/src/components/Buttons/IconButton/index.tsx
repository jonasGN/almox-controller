import { classNames } from "../../../utils/styles-helper";

import { Icon } from "../../Icons";
import { RawButton, RawButtonProps } from "../RawButton";

import styles from "./styles.module.scss";

interface IconButtonProps extends RawButtonProps {
  icon: Icon;
  size?: "icon" | "button";
  className?: string;
}

export const IconButton = (props: IconButtonProps): JSX.Element => {
  const { size, icon, className, ...rest } = props;

  const classes = classNames(styles.iconButton, className!);

  return (
    <RawButton customClassName={classes} data-size={size} {...rest}>
      {icon}
    </RawButton>
  );
};
