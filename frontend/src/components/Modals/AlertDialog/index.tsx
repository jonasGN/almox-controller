import { ReactChildrenElement } from "../../../@types/elements";
import { classNames } from "../../../utils/styles";

import { ShowWhen } from "../../../layout";
import { SplitButton } from "../../Buttons";
import { Icon } from "../../Icons";
import { BaseModalProps, Modal } from "../Modal";

import styles from "./styles.module.scss";

type VoidCallback = () => void;
type ButtonStyle = "confirm" | "danger" | "cancel";

interface AlertDialogProps extends BaseModalProps {
  icon: Icon;
  title: string;
  description: string;
  leftTitle?: string;
  rightTitle?: string;
  leftButtonStyle?: ButtonStyle;
  rightButtonStyle?: ButtonStyle;
  onClickLeft?: VoidCallback;
  onClickRight?: VoidCallback;
  useSingleButton?: boolean;
  children?: ReactChildrenElement;
}

export const AlertDialog = (props: AlertDialogProps): JSX.Element => {
  const {
    icon,
    title,
    description,
    leftTitle,
    rightTitle,
    leftButtonStyle,
    rightButtonStyle,
    onClickLeft,
    onClickRight,
    useSingleButton = false,
    children,
    ...rest
  } = props;

  const actionContainerClasses = classNames(
    styles.actionContainer,
    useSingleButton ? styles.single : ""
  );

  return (
    <Modal className={styles.dialogContainer} {...rest}>
      {/* {React.cloneElement(icon, )} */}
      {icon}
      <strong>{title}</strong>
      <p>{description}</p>

      <ShowWhen condition={!!children}>
        <div className={styles.contentContainer}>{children}</div>
      </ShowWhen>

      <SplitButton
        leftTitle={leftTitle}
        rightTitle={rightTitle ?? (useSingleButton ? "Ok" : "Cancelar")}
        leftButtonStyle={leftButtonStyle ?? "danger"}
        rightButtonStyle={rightButtonStyle ?? "cancel"}
        onClickLeft={onClickLeft ?? rest.onCloseModal}
        onClickRight={onClickRight ?? rest.onCloseModal}
        useSingleButton={useSingleButton}
        containerClassName={actionContainerClasses}
      />
    </Modal>
  );
};
