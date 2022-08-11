import { classNameWhen, multipleClasses } from "../../utils/styles-helper";
import { AppIcon } from "../AppIcon";

import styles from "./styles.module.scss";

interface IconButtonProps {
  icon: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  alt?: string;
  useWarning?: boolean;
  disabled?: boolean;
}

export const IconButton = (props: IconButtonProps): JSX.Element => {
  const { icon, onClick, alt, disabled, useWarning } = props;

  const warningClass = classNameWhen(useWarning!, styles.warning);
  const className = multipleClasses(styles.iconContainer, warningClass);

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      <AppIcon icon={icon} iconAlt={alt} />
    </button>
  );
};
