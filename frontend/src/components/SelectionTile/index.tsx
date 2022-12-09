import styles from "./styles.module.scss";

interface SelectionTileProps {
  name: string;
  title: string;
  value: string;
  subtitle: string;
  onClick: () => void;
}

export const SelectionTile = (props: SelectionTileProps): JSX.Element => {
  const { name, title, value, subtitle, onClick } = props;

  const id = value;

  return (
    <label htmlFor={id} className={styles.select}>
      <div className={styles.info}>
        <p>{title}</p>
        <span>{subtitle}</span>
      </div>
      <input type="radio" name={name} id={id} onClick={onClick} />
    </label>
  );
};
