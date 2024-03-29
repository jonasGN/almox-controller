import styles from "./styles.module.scss";

interface PageHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const PageHeader = (props: PageHeaderProps): JSX.Element => {
  const { title, children } = props;

  return (
    <div className={styles.pageHeader}>
      <h1>{title}</h1>
      <div className={styles.actions}>{children}</div>
    </div>
  );
};
