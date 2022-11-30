import type { Icon } from "../../Icons";
import { classNames } from "@/utils/styles";

import { RawButtonProps } from "../RawButton";
import { IconButton } from "../IconButton";

import styles from "./styles.module.scss";

type ButtonStyle = "default" | "danger" | "no-bg-default" | "no-bg-danger";

interface OptionButtonProps extends RawButtonProps {
  icon: Icon;
  styleType?: ButtonStyle;
}

export const OptionButton = (props: OptionButtonProps): JSX.Element => {
  const { icon, styleType, ...rest } = props;

  const styleTypeClassName = (): string => {
    const withBg = styles.optionButtonContainer;
    const withoutBg = styles.noBg;

    switch (styleType) {
      case "danger":
        return classNames(withBg, styles.danger);
      case "no-bg-default":
        return withoutBg;
      case "no-bg-danger":
        return classNames(withoutBg, styles.danger);
      default:
        return withBg;
    }
  };

  const classes = classNames(styleTypeClassName());

  return <IconButton icon={icon} size="button" className={classes} {...rest} />;
};
