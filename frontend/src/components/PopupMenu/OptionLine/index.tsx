import styles from "./styles.module.scss";

export interface OptionLineProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  warning?: boolean;
}

export function OptionLine({ warning = false, ...props }: OptionLineProps) {
  return (
    <li className={styles.option}>
      <a className={warning ? styles.warning : ""} onClick={props.onClick}>
        {props.title}
      </a>
    </li>
  );
}
