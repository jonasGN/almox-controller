import styles from "./styles.module.scss";

interface FormSpliterProps {
  children: React.ReactNode;
}

export const FormSpliter = (props: FormSpliterProps): JSX.Element => {
  const { children } = props;

  return <div className={styles.spliter}>{children}</div>;
};
