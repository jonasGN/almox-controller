import styles from "./styles.module.scss";

interface LoadingProps {}

export const Loading = (props: LoadingProps): JSX.Element => {
  const {} = props;

  return (
    <div className={styles.loading}>
      <img width={160} height={210} src="/illustrations/loading.svg" alt="Carregando" />
      <p>Carregando...</p>
    </div>
  );
};
