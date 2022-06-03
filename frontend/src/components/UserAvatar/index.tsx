import React from "react";
import styles from "./styles.module.scss";

interface UserAvatarProps {
  onClick: () => void;
}

export function UserAvatar(props: UserAvatarProps) {
  function handleOnClick(event: React.MouseEvent) {
    event.preventDefault();
    props.onClick();
  }

  return (
    <a className={styles.userAvatar} onClick={handleOnClick}>
      <span className={styles.userInitials}>JG</span>
    </a>
  );
}
