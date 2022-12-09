import type { BaseModalProps } from "../BaseModal";
import React from "react";
import { BaseModal } from "../BaseModal";

import styles from "./styles.module.scss";

interface SelectionModalProps extends BaseModalProps {
  title: string;
  children?: React.ReactNode;
}

type ForwardRefFunction = React.ForwardRefRenderFunction<
  HTMLDivElement,
  SelectionModalProps
>;

const SelectionModalBase: ForwardRefFunction = (props, ref): JSX.Element => {
  const { title, children, ...rest } = props;

  return (
    <BaseModal ref={ref} modalClassName={styles.selectionModal} {...rest}>
      <h3>{title}</h3>
      <div>{children}</div>
    </BaseModal>
  );
};

export const SelectionModal = React.forwardRef(SelectionModalBase);
