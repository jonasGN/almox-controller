import styles from "./styles.module.scss";

interface PageTitleProps {
  title: string;
}

export const PageTitle = ({ title }: PageTitleProps): JSX.Element => {
  return <h1 className={styles.pageTitle}>{title}</h1>;
};
