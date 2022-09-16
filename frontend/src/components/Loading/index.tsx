import styles from "./styles.module.scss";

interface LoadingProps {}

export const Loading = (props: LoadingProps): JSX.Element => {
  const {} = props;

  return (
    <div className={styles.loading}>
      <span>Carregando conteúdo...</span>
    </div>
  );
};
