import styles from "./styles.module.scss";

interface FormGroupProps {
  title: string;
  subtitle: string;
  sectionId?: string;
  children: React.ReactNode;
}

export const FormGroup = (props: FormGroupProps): JSX.Element => {
  const { title, subtitle, sectionId, children } = props;

  return (
    <div data-section={sectionId} className={styles.group}>
      <header className={styles.header}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </header>
      <div className={styles.inputs}>{children}</div>
    </div>
  );
};
