import { useRef } from "react";
import ReactDOM from "react-dom";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { AppIcon } from "../AppIcon";

import styles from "./styles.module.scss";

interface ModalProps {
  children: React.ReactNode;
  title?: string;
  isOpen: boolean;
  onRequestClose: () => void;
  className?: string;
}

const modalRoot = document.getElementById("modal");

export function Modal({ children, ...props }: ModalProps) {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, props.onRequestClose);

  if (!props.isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.fog}>
      <div ref={modalRef} className={styles.modal}>
        {props.title ? <h2>{props.title}</h2> : null}
        <button className={styles.closeButton} onClick={props.onRequestClose}>
          <AppIcon icon="/public/icons/close.svg" iconAlt="Close Modal" />
        </button>
        <div className={props.className}>{children}</div>
      </div>
    </div>,
    modalRoot!
  );
}
