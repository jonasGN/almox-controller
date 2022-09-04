import { ScreenSizeLayout } from "../../layout";

import styles from "./styles.module.scss";

export const NotFoundPage = (): JSX.Element => {
  return (
    <ScreenSizeLayout className={styles.notFoundContainer}>
      <h1>Página não encontrada</h1>
    </ScreenSizeLayout>
  );
};
