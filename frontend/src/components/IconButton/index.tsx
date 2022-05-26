import { AppIcon } from "../AppIcon";

import styles from "./styles.module.scss";

interface IconButtonProps {
  icon: string;
  onClick: () => void;
  iconAlt?: string;
}

export function IconButton({ icon, onClick, ...props }: IconButtonProps) {
  return (
    <button className={styles.iconContainer} onClick={onClick}>
      <AppIcon icon={icon} iconAlt={props.iconAlt} />
    </button>
  );
}
