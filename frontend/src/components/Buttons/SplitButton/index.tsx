import React from "react";
import { classNames } from "@/utils/styles";

import { ShowWhen } from "@/layout";
import { BaseButton } from "../BaseButton";

import styles from "./styles.module.scss";

type ClickCallback = (event: React.MouseEvent) => void;
type ButtonStyle = "confirm" | "danger" | "cancel";

interface SplitButtonProps {
  leftTitle?: string;
  rightTitle?: string;
  onClickLeft?: ClickCallback;
  onClickRight?: ClickCallback;
  leftButtonStyle?: ButtonStyle;
  rightButtonStyle?: ButtonStyle;
  useSingleButton?: boolean;
  containerClassName?: string;
}

export const SplitButton = (props: SplitButtonProps): JSX.Element => {
  const {
    leftTitle,
    rightTitle,
    onClickLeft,
    onClickRight,
    leftButtonStyle,
    rightButtonStyle,
    useSingleButton = false,
    containerClassName,
  } = props;

  const buttonStyle = (style: ButtonStyle): string => {
    switch (style) {
      case "cancel":
        return styles.cancel;
      case "danger":
        return styles.danger;
      case "confirm":
        return "";
    }
  };

  const classes = classNames(styles.splitContainer, containerClassName!);

  return (
    <div className={classes}>
      <ShowWhen condition={!useSingleButton}>
        <BaseButton
          size="medium"
          title={leftTitle ?? "cancelar"}
          onClick={onClickLeft}
          customClassName={buttonStyle(leftButtonStyle ?? "cancel")}
        />
      </ShowWhen>
      <BaseButton
        size="medium"
        title={rightTitle ?? "ok"}
        onClick={onClickRight}
        customClassName={buttonStyle(rightButtonStyle ?? "confirm")}
      />
    </div>
  );
};
