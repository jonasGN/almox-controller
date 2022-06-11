import { useRef } from "react";
import ReactDOM from "react-dom";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { IconButton } from "../IconButton";

import styles from "./styles.module.scss";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onRequestClose: () => void;
  className?: string;
  useMaxWidth?: boolean;
  actionSet?: React.ReactNode;
}

const modalRoot = document.getElementById("modal");

export function Modal({ children, ...props }: ModalProps) {
  const modalRef = useRef(null);
  useOnClickOutside(modalRef, props.onRequestClose);

  if (!props.isOpen) return null;

  const maxWidthClass = props.useMaxWidth ? styles.maxWidthContainer : "";
  const headerClass = props.title ? "" : styles.actionsHeader;

  const modalClasses = `${styles.modal} $ ${maxWidthClass} ${headerClass}`;

  return ReactDOM.createPortal(
    <div className={styles.fog}>
      <div ref={modalRef} className={modalClasses}>
        {props.title ? <h2>{props.title}</h2> : null}
        <div className={styles.actionsContainer}>
          {props.actionSet}
          <IconButton
            icon="/public/icons/close.svg"
            iconAlt="Close Modal"
            onClick={props.onRequestClose}
          />
        </div>
        <div className={props.className}>{children}</div>
      </div>
    </div>,
    modalRoot!
  );
}
