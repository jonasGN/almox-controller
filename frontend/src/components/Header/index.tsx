import { MenuButton } from "../MenuButton";
import { UserAvatar } from "../UserAvatar";
import styles from "./styles.module.scss";

import logo from "/images/logo.svg";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <span>
          <img src={logo} alt="Almox Controller" />
        </span>
        <nav className={styles.menu}>
          <ul>
            <li>
              <MenuButton title="Itens" isActive={true} />
            </li>
            <li>
              <MenuButton title="Usuários" isActive={false} />
            </li>
            <li>
              <MenuButton title="Ordens" isActive={false} />
            </li>
            <li>
              <UserAvatar />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
