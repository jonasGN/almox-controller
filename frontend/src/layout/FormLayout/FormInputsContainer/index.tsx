import styles from "./styles.module.scss";

interface FormInputsContainerProps {
  children: React.ReactNode;
}

export const FormInputsContainer = (props: FormInputsContainerProps): JSX.Element => {
  const { children } = props;

  return <div className={styles.inputs}>{children}</div>;
};
