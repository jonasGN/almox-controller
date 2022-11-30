import type { ReactButtonElement } from "@Types/elements";
import { BaseButton } from "../../BaseButton";

import styles from "./styles.module.scss";

type PredefinedTitles = "cancelar" | "ok" | "excluir";
type ButtonStyle = "confirm" | "danger" | "cancel";

interface SplitButtonProps extends ReactButtonElement {
  title?: string;
  predefinedTitles?: PredefinedTitles;
  buttonStyle?: ButtonStyle;
  className?: string;
}

export const SplitButton = (props: SplitButtonProps): JSX.Element => {
  const { title, predefinedTitles = "ok", buttonStyle, className, ...rest } = props;

  const getButtonStyle = (): string => {
    switch (buttonStyle) {
      case "cancel":
        return styles.cancel;
      case "danger":
        return styles.danger;
      default:
        return "";
    }
  };

  return (
    <BaseButton
      size="medium"
      title={title ?? predefinedTitles}
      customClassName={getButtonStyle()}
      {...rest}
    />
  );
};

SplitButton.componentName = "SplitButton";
