import styles from "./styles.module.scss";

interface ElementSpliterProps {
  children: React.ReactNode;
}

export const ElementSpliter = (props: ElementSpliterProps): JSX.Element => {
  const { children } = props;

  return <div className={styles.spliter}>{children}</div>;
};
