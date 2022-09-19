import { forwardRef, ForwardRefRenderFunction } from "react";
import { ReactChildrenElement } from "@Types/elements";

import { ShowWhen } from "@/layout";
import { DefaultBaseModalProps, DefaultModal } from "../DefaultModal";
import { SplitButtonContainer, SplitButton } from "../../Buttons";

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

const AlertDialogBase: ForwardRefRender = (props, ref): JSX.Element | null => {
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

  return (
    <DefaultModal ref={ref} icon={icon} title={title} description={description} {...rest}>
      <ShowWhen condition={!!children}>
        <div className={styles.extraContent}>{children}</div>
      </ShowWhen>

      <SplitButtonContainer className={styles.actionContainer}>
        <SplitButton
          title={leftTitle}
          buttonStyle={leftButtonStyle ?? "danger"}
          onClick={onClickLeft ?? rest.onCloseModal}
        />
        <ShowWhen condition={!useSingleButton}>
          <SplitButton
            title={rightTitle ?? (useSingleButton ? "ok" : "Cancelar")}
            buttonStyle={rightButtonStyle ?? "cancel"}
            onClick={onClickRight ?? rest.onCloseModal}
          />
        </ShowWhen>
      </SplitButtonContainer>
    </DefaultModal>
  );
};

export const AlertDialog = forwardRef(AlertDialogBase);
