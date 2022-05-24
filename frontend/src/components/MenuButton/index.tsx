import styles from "./styles.module.scss";

interface MenuButtonProps {
  title: string;
  isActive: boolean;
}

export function MenuButton(props: MenuButtonProps) {
  const activeClass = props.isActive ? styles.active : "";

  return (
    <a href="" className={`${styles.menuButton} ${activeClass}`}>
      {props.title}
    </a>
  );
}
