import styles from "./styles.module.scss";

interface ItemFormHeaderProps {
  title: string;
  subtitle: string;
}

export const ItemFormHeader = (props: ItemFormHeaderProps): JSX.Element => {
  const { title, subtitle } = props;

  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </header>
  );
};
