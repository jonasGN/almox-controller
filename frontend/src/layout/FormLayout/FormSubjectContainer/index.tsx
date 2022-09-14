import styles from "./styles.module.scss";

interface FormSubjectContainerProps {
  children: React.ReactNode;
}

export const FormSubjectContainer = (props: FormSubjectContainerProps): JSX.Element => {
  const { children } = props;

  return <div className={styles.formSubject}>{children}</div>;
};
