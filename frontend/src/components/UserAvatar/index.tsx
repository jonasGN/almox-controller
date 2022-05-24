import avatar from "/public/temp/beautiful-girl.png";

import styles from "./styles.module.scss";

export function UserAvatar() {
  return (
    <button className={styles.userAvatar}>
      <img src={avatar} alt="User avatar" />
    </button>
  );
}
