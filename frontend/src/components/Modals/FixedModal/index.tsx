import { createRef } from "react";
import { DefaultBaseModalProps, DefaultModal } from "../DefaultModal";

import styles from "./styles.module.scss";

interface FixedModalProps extends DefaultBaseModalProps {}

export const FixedModal = (props: FixedModalProps): JSX.Element => {
  const { icon, title, description, ...rest } = props;

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
    />
  );
};
