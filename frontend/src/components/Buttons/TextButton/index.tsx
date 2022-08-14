import { BaseButton, BaseButtonProps } from "../BaseButton";

import styles from "./styles.module.scss";

interface TextButtonProps extends BaseButtonProps {
  title: string;
}

export const TextButton = (props: TextButtonProps): JSX.Element => {
  const { title, ...rest } = props;

  return (
    <BaseButton
      title={title}
      customClassName={styles.textButton}
      size="medium"
      disabled
      {...rest}
    ></BaseButton>
  );
};
