import { classNames } from "../../../utils/styles-helper";

import { Icon } from "../../Icon";
import { Icons } from "../../Icons";
import { RawButton, RawButtonProps } from "../RawButton";

import styles from "./styles.module.scss";

interface IconButtonProps extends RawButtonProps {
  icon: Icons;
  size?: "icon" | "button";
  className?: string;
}

export const IconButton = (props: IconButtonProps): JSX.Element => {
  const { size, icon, className, ...rest } = props;

  const classes = classNames(styles.iconButton, className!);

  return (
    <RawButton customClassName={classes} data-size={size} {...rest}>
      <Icon icon={icon} />
    </RawButton>
  );
};
