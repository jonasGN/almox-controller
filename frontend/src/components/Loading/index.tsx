import styles from "./styles.module.scss";

interface LoadingProps {}

export const Loading = (props: LoadingProps): JSX.Element => {
  return (
    <div className={styles.loading}>
      <span>Carregando conteúdo...</span>
    </div>
  );
};
