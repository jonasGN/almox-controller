import { forwardRef, ForwardRefRenderFunction } from "react";
import { ReactChildrenElement } from "../../../@types/elements";
import { classNames } from "../../../utils/styles";

import { DefaultBaseModalProps, DefaultModal } from "../DefaultModal";
import { SplitButton } from "../../Buttons";
import { ShowWhen } from "../../../layout";

import styles from "./styles.module.scss";

type VoidCallback = () => void;
type ButtonStyle = "confirm" | "danger" | "cancel";

interface AlertDialogProps extends DefaultBaseModalProps {
  leftTitle?: string;
  rightTitle?: string;
  leftButtonStyle?: ButtonStyle;
  rightButtonStyle?: ButtonStyle;
  onClickLeft?: VoidCallback;
  onClickRight?: VoidCallback;
  useSingleButton?: boolean;
  children?: ReactChildrenElement;
}

type ForwardRefRender = ForwardRefRenderFunction<HTMLDivElement, AlertDialogProps>;

const AlertDialogBase: ForwardRefRender = (props, ref): JSX.Element => {
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
    <DefaultModal ref={ref} icon={icon} title={title} description={description} {...rest}>
      <ShowWhen condition={!!children}>
        <div className={styles.extraContent}>{children}</div>
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
    </DefaultModal>
  );
};

export const AlertDialog = forwardRef(AlertDialogBase);
