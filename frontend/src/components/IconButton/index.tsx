import { AppIcon } from "../AppIcon";

import styles from "./styles.module.scss";

interface IconButtonProps {
  icon: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  alt?: string;
}

export function IconButton({ icon, onClick, ...props }: IconButtonProps) {
  return (
    <button className={styles.iconContainer} onClick={onClick}>
      <AppIcon icon={icon} iconAlt={props.alt} />
    </button>
  );
}
