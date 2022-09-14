import { forwardRef, ForwardRefRenderFunction } from "react";
import ReactDOM from "react-dom";

import { ShowWhen } from "../../../layout";
import { classNames } from "../../../utils/styles";
import { OptionButton } from "../../Buttons";
import { CloseIcon } from "../../Icons";

import styles from "./styles.module.scss";

type VoidCallback = () => void;

export interface BaseModalProps {
  isOpen: boolean;
  onCloseModal?: VoidCallback;
}

interface BaseModalComponentProps extends BaseModalProps {
  modalClassName?: string;
  contentClassName?: string;
  hasOnCloseButton?: boolean;
  children: React.ReactNode;
}

type ForwardRefRender = ForwardRefRenderFunction<HTMLDivElement, BaseModalComponentProps>;

const modalNode = document.getElementById("modal");

const BaseModalComponent: ForwardRefRender = (props, ref): JSX.Element | null => {
  const {
    isOpen,
    modalClassName,
    contentClassName,
    hasOnCloseButton = true,
    onCloseModal,
    children,
  } = props;

  if (!isOpen) return null;

  const modalClasses = classNames(styles.modal, modalClassName!);

  return ReactDOM.createPortal(
    <div className={styles.overlay} role="dialog" aria-modal>
      <div ref={ref} className={modalClasses}>
        <ShowWhen condition={hasOnCloseButton}>
          <div className={styles.closeButton}>
            <OptionButton
              icon={<CloseIcon />}
              styleType="no-bg-default"
              onClick={onCloseModal}
            />
          </div>
        </ShowWhen>

        <div className={contentClassName}>{children}</div>
      </div>
    </div>,
    modalNode!
  );
};

export const BaseModal = forwardRef(BaseModalComponent);
