import { classNameByCondition } from "../../utils/css-helper";

import styles from "./styles.module.scss";

interface MainButtonProps {
  title: string;
  useAlert?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function MainButton(props: MainButtonProps) {
  const alertClass = classNameByCondition(props.useAlert!, styles.alert);

  return (
    <button
      className={`${styles.buttonContainer} ${alertClass}`}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  );
}
