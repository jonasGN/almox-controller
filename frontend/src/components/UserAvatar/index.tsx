import styles from "./styles.module.scss";

export function UserAvatar() {
  return (
    <button className={styles.userAvatar}>
      <span className={styles.userInitials}>JG</span>
    </button>
  );
}
