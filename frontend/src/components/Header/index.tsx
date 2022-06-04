import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";

import { MenuButton } from "../MenuButton";
import { UserAvatar } from "../UserAvatar";
import { ItemsPopupMenu } from "../ItemsPopupMenu";

import logo from "/images/logo.svg";
import styles from "./styles.module.scss";

export function Header() {
  const [isItemsPopupVisible, setIsItemsPopupVisible] = useState(false);

  function handleItemsPopup() {
    setIsItemsPopupVisible(!isItemsPopupVisible);
  }

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Link to={routes.home}>
          <img src={logo} alt="Almox Controller" />
        </Link>
        <nav className={styles.menuNav}>
          <ul className={styles.menuOptions}>
            <li className={styles.menuOption}>
              <MenuButton
                title="Itens"
                isActive={false}
                onClick={handleItemsPopup}
              />
              <ItemsPopupMenu isVisible={isItemsPopupVisible} />
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
