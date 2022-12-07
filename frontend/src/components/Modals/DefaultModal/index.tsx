import type { Icons } from "@Types/icons";
import type { BaseModalProps } from "../BaseModal";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { classNames } from "@/utils/styles";

import { Icon } from "@/components/Icon";
import { BaseModal } from "../BaseModal";

import styles from "./styles.module.scss";

export interface DefaultBaseModalProps extends BaseModalProps {
  icon: Icons;
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
      <Icon name={icon} />
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </BaseModal>
  );
};

export const DefaultModal = forwardRef(DefaultModalBase);
