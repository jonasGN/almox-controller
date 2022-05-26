import styles from "./styles.module.scss";

export function UserAvatar() {
  return (
    <a className={styles.userAvatar}>
      <span className={styles.userInitials}>JG</span>
    </a>
  );
}
