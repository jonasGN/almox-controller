import styles from "./styles.module.scss";

interface AppIconProps {
  icon: string;
  iconAlt?: string;
}

export function AppIcon({ icon, ...props }: AppIconProps) {
  return <img className={styles.icon} src={icon} alt={props.iconAlt} />;
}
