import { ElementException } from "../../../exceptions";

import { Icon } from "../../Icon";
import { Icons } from "../../Icons";
import { RawButton, RawButtonProps } from "../RawButton";

import styles from "./styles.module.scss";

interface IconButtonProps extends RawButtonProps {
  icon?: Icons;
  size?: "icon" | "button";
}

export const IconButton = (props: IconButtonProps): JSX.Element => {
  const { size, icon, ...rest } = props;

  if (!icon) {
    throw new ElementException("You must inform an icon and it can't be empty");
  }

  return (
    <RawButton customClassName={styles.iconButton} data-size={size} {...rest}>
      <Icon icon={icon} />
    </RawButton>
  );
};
