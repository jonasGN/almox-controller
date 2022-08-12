import { ButtonRaw, ButtonRawProps } from "../ButtonRaw";

import styles from "./styles.module.scss";

interface MainButtonProps extends ButtonRawProps {
  title: string;
  isLoading?: boolean;
}

export const MainButton = (props: MainButtonProps): JSX.Element => {
  const { title, isLoading, ...rest } = props;

  return (
    <ButtonRaw
      title={isLoading ? "carregando..." : title}
      customClassName={styles.mainButton}
      disabled={isLoading || rest.disabled}
      {...rest}
    ></ButtonRaw>
  );
};
