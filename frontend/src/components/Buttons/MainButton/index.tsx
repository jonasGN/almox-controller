import { useState } from "react";

import { ButtonRaw, ButtonRawProps } from "../ButtonRaw";

import styles from "./styles.module.scss";

interface MainButtonProps extends ButtonRawProps {
  title: string;
  isLoading?: boolean;
}

export const MainButton = (props: MainButtonProps): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const { title, isLoading, ...rest } = props;

  return <ButtonRaw title={isLoading ? "carregando..." : title} {...rest}></ButtonRaw>;
};
