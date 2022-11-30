import type { Icon } from "../../Icons";
import type { BaseModalProps } from "../BaseModal";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { classNames } from "@/utils/styles";

import { BaseModal } from "../BaseModal";

import styles from "./styles.module.scss";

export interface DefaultBaseModalProps extends BaseModalProps {
  icon: Icon;
  title: string;
  description: string;
}

interface DefaultModalProps extends DefaultBaseModalProps {
  hasOnCloseButton?: boolean;
  modalClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
}

type ForwardRefRender = ForwardRefRenderFunction<HTMLDivElement, DefaultModalProps>;

export const DefaultModalBase: ForwardRefRender = (props, ref): JSX.Element => {
  const {
    icon,
    title,
    description,
    hasOnCloseButton,
    modalClassName,
    contentClassName,
    children,
    ...rest
  } = props;

  const modalClasses = classNames(styles.modal, modalClassName!);
  const contentClasses = classNames(styles.content, contentClassName!);

  return (
    <BaseModal
      ref={ref}
      hasOnCloseButton={hasOnCloseButton}
      modalClassName={modalClasses}
      contentClassName={contentClasses}
      {...rest}
    >
      {/* {React.cloneElement(icon, )} */}
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </BaseModal>
  );
};

export const DefaultModal = forwardRef(DefaultModalBase);
