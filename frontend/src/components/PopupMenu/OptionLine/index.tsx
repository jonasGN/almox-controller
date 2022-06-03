import styles from "./styles.module.scss";

export interface OptionLineProps {
  title: string;
  onClick: () => void;
  warning?: boolean;
}

export function OptionLine({ warning = false, ...props }: OptionLineProps) {
  const warningClass = warning ? styles.warning : "";

  return (
    <li className={`${styles.option} ${warningClass}`}>
      <a onClick={props.onClick}>{props.title}</a>
    </li>
  );
}
