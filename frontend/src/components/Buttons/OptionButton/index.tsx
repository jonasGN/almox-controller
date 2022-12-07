import type { Icons } from "@Types/icons";
import { classNames } from "@/utils/styles";

import { RawButtonProps } from "../RawButton";
import { IconButton } from "../IconButton";

import styles from "./styles.module.scss";

type StyleType = "default" | "danger";

interface OptionButtonProps extends RawButtonProps {
  icon: Icons;
  styleType?: StyleType;
  hasBackground?: boolean;
}

export const OptionButton = (props: OptionButtonProps): JSX.Element => {
  const { icon, styleType = "default", hasBackground = true, ...rest } = props;

  const classes = classNames(
    styles.optionButtonContainer,
    styleType === "danger" ? styles.danger : "",
    hasBackground ? "" : styles.noBg
  );

  return <IconButton icon={icon} size="button" className={classes} {...rest} />;
};
