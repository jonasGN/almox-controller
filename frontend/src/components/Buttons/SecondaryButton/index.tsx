import type { ButtonCallback } from "@Types/aliases";
import type { ButtonType } from "@Types/components";
import { BaseButton } from "../BaseButton";
import { classNames } from "@/utils/styles";

import styles from "./styles.module.scss";

interface SecondaryButtonProps {
  title: string;
  type?: ButtonType;
  disabled?: boolean;
  onClick?: ButtonCallback;
}

export const SecondaryButton = (props: SecondaryButtonProps): JSX.Element => {
  const { title, type, disabled = false, onClick } = props;

  let typeClassName = "";
  switch (type) {
    case "danger":
      typeClassName = styles.danger;
      break;
    case "indiferent":
      typeClassName = styles.indiferent;
      break;
  }

  const buttonClassName = classNames(styles.secondary, disabled ? "" : typeClassName);

  return (
    <BaseButton
      title={title}
      size="medium"
      disabled={disabled}
      onClick={onClick}
      customClassName={buttonClassName}
    />
  );
};
