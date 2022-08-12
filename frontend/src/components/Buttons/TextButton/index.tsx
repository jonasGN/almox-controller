import { ButtonRaw, ButtonRawProps } from "../ButtonRaw";

import styles from "./styles.module.scss";

interface TextButtonProps extends ButtonRawProps {
  title: string;
}

export const TextButton = (props: TextButtonProps): JSX.Element => {
  const { title, ...rest } = props;

  return (
    <ButtonRaw
      title={title}
      customClassName={styles.textButton}
      size="medium"
      disabled
      {...rest}
    ></ButtonRaw>
  );
};
