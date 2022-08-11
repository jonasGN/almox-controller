import styles from "./styles.module.scss";

interface LocationCardProps {
  title: string;
  description: string;
}

export const LocationCard = (props: LocationCardProps): JSX.Element => {
  const { description, title } = props;

  return (
    <div className={styles.locationCard}>
      <strong>{title}</strong>
      <p>{description}</p>
    </div>
  );
};
