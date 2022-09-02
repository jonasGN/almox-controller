import { useAuth } from "../../context/AuthProvider";
import { Avatar } from "../Avatar";

import styles from "./styles.module.scss";

export const Header = (): JSX.Element => {
  const { user } = useAuth();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerAvatarContainer}>
        <div className={styles.userInfo}>
          <strong>{user.name}</strong>
          <span>{user.internalCode}</span>
        </div>

        <Avatar userName={user.name} userImage={user.avatar} onClick={() => {}} />
      </div>
    </header>
  );
};
