import styles from "./styles.module.scss";

interface AppIconProps {
  icon: string;
  iconAlt?: string;
}

export const AppIcon = ({ icon, ...rest }: AppIconProps): JSX.Element => {
  return <img className={styles.icon} src={icon} alt={rest.iconAlt} />;
};
