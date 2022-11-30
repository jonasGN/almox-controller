import type { DefaultBaseModalProps } from "../DefaultModal";
import { createRef } from "react";
import { DefaultModal } from "../DefaultModal";

import styles from "./styles.module.scss";

interface FixedModalProps extends DefaultBaseModalProps {
  children?: React.ReactNode;
}

export const FixedModal = (props: FixedModalProps): JSX.Element => {
  const { icon, title, description, children, ...rest } = props;

  const ref = createRef<HTMLDivElement>();

  return (
    <DefaultModal
      ref={ref}
      icon={icon}
      title={title}
      description={description}
      modalClassName={styles.fixed}
      hasOnCloseButton={false}
      {...rest}
    >
      {children}
    </DefaultModal>
  );
};
