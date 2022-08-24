import ReactDOM from "react-dom";
import { ReactChildrenElement } from "../../../@types/elements";

import { OptionButton } from "../../Buttons";
import { CloseIcon } from "../../Icons";

import styles from "./styles.module.scss";

type VoidCallback = () => void;

export interface BaseModalProps {
  isOpen: boolean;
  onCloseModal: VoidCallback;
  ref: React.RefObject<HTMLDivElement>;
}

interface ModalProps extends BaseModalProps {
  className?: string;
  children: ReactChildrenElement;
}

const modalNode = document.getElementById("modal");

export const Modal = (props: ModalProps): JSX.Element | null => {
  const { isOpen, onCloseModal, ref, className, children } = props;

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} role="dialog" aria-modal>
      <div ref={ref} className={styles.modal}>
        <div className={styles.closeButton}>
          <OptionButton
            icon={<CloseIcon />}
            styleType="no-bg-default"
            onClick={onCloseModal}
          />
        </div>

        <div className={className}>{children}</div>
      </div>
    </div>,
    modalNode!
  );
};
