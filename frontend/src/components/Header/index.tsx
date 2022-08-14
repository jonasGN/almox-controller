import { Avatar } from "../Avatar";

import styles from "./styles.module.scss";

const tempImage =
  "https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&w=640&h=960&dpr=1";
const userName = "Ana Teixeira";
const userCode = "987654321";

interface HeaderProps {}

export const Header = (props: HeaderProps): JSX.Element => {
  const {} = props;

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerAvatarContainer}>
        <div className={styles.userInfo}>
          <strong>{userName}</strong>
          <span>{userCode}</span>
        </div>

        <Avatar userName={userName} userImage={tempImage} onClick={() => {}} />
      </div>
    </header>
  );
};
