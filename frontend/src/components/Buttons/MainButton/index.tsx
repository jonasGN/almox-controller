import { BaseButton, BaseButtonProps } from "../BaseButton";

import styles from "./styles.module.scss";

interface MainButtonProps extends BaseButtonProps {
  title: string;
  isLoading?: boolean;
}

export const MainButton = (props: MainButtonProps): JSX.Element => {
  const { title, isLoading, ...rest } = props;

  return (
    <BaseButton
      title={isLoading ? "carregando..." : title}
      customClassName={styles.mainButton}
      disabled={isLoading || rest.disabled}
      {...rest}
    ></BaseButton>
  );
};
