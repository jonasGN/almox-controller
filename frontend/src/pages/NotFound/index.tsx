import { ScreenContainer } from "../../layout";

import styles from "./styles.module.scss";

export const NotFoundPage = (): JSX.Element => {
  return (
    <ScreenContainer className={styles.notFoundContainer}>
      <h1>Página não encontrada</h1>
    </ScreenContainer>
  );
};
