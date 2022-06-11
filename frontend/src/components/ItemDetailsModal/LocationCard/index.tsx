import styles from "./styles.module.scss";

interface LocationCardProps {
  title: string;
  description: string;
}

export function LocationCard(props: LocationCardProps) {
  return (
    <div className={styles.locationCard}>
      <strong>{props.title}</strong>
      <p>{props.description}</p>
    </div>
  );
}
