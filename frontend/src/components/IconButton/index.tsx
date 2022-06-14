import { classNameByCondition } from "../../utils/css-helper";
import { AppIcon } from "../AppIcon";

import styles from "./styles.module.scss";

interface IconButtonProps {
  icon: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  alt?: string;
  useWarning?: boolean;
  disabled?: boolean;
}

export function IconButton({ icon, onClick, ...props }: IconButtonProps) {
  const warningClass = classNameByCondition(props.useWarning!, styles.warning);

  return (
    <button
      className={`${styles.iconContainer} ${warningClass}`}
      onClick={onClick}
      disabled={props.disabled}
    >
      <AppIcon icon={icon} iconAlt={props.alt} />
    </button>
  );
}
