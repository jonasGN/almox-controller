import styles from "./styles.module.scss";

interface InformationSectionProps {
  title: string;
  children: React.ReactNode;
}

export const InformationSection = (props: InformationSectionProps): JSX.Element => {
  const { title, children } = props;

  return (
    <div className={styles.infoSection}>
      <h3>{title}</h3>
      <div className={styles.infoContainer}>{children}</div>
    </div>
  );
};
