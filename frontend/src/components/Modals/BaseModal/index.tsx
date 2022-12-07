import { forwardRef, ForwardRefRenderFunction } from "react";
import ReactDOM from "react-dom";
import { classNames } from "@/utils/styles";

import { ShowWhen } from "@/layout";
import { OptionButton } from "../../Buttons";

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
    <div className={styles.overlay} role="dialog" aria-modal aria-hidden>
      <div ref={ref} tabIndex={-1} className={modalClasses}>
        <ShowWhen condition={hasOnCloseButton}>
          <div className={styles.closeButton}>
            <OptionButton
              icon="close"
              onClick={onCloseModal}
              autoFocus
              aria-label="Fechar"
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
