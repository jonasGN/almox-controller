import { classNameByCondition } from "../../../utils/css-helper";

import styles from "./styles.module.scss";

export interface OptionLineProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  warning?: boolean;
}

export function OptionLine({ warning = false, ...props }: OptionLineProps) {
  const warningClass = classNameByCondition(warning, styles.warning);

  return (
    <li className={styles.option}>
      <a className={warningClass} onClick={props.onClick}>
        {props.title}
      </a>
    </li>
  );
}
