import { MenuButton } from "../MenuButton";
import { UserAvatar } from "../UserAvatar";

import logo from "/images/logo.svg";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <span>
          <img src={logo} alt="Almox Controller" />
        </span>
        <nav className={styles.menuNav}>
          <ul className={styles.menuOptions}>
            <li className={styles.menuOption}>
              <MenuButton title="Itens" isActive={true} onClick={() => {}} />
            </li>
            <li className={styles.menuOption}>
              <UserAvatar onClick={() => {}} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
