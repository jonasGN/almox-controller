import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";

import { MenuButton } from "../MenuButton";
import { UserAvatar } from "../UserAvatar";
import { PopupMenu, PopupOptions } from "../PopupMenu";

import logo from "/images/logo.svg";
import styles from "./styles.module.scss";

export function Header() {
  const [popupActive, setPopupActive] = useState("");

  const menuRef = useRef<HTMLUListElement>(null);

  useOnClickOutside(menuRef, () => {
    setPopupActive("");
  });

  const navigate = useNavigate();

  function handleActivePopup(popupName: string): void {
    setPopupActive(popupName);
  }

  function navigateTo(route: string): void {
    handleActivePopup("");
    navigate(route);
  }

  const itemsOptions: PopupOptions[] = [
    {
      title: "Catálogo",
      onClick: () => navigateTo(routes.items),
      warning: false,
    },
    {
      title: "Solicitações",
      onClick: () => navigateTo(routes.itemRequests),
      warning: false,
    },
    {
      title: "Adiciona novo item",
      onClick: () => navigateTo(routes.newItem),
      warning: false,
    },
  ];

  const userOptions: PopupOptions[] = [
    {
      title: "Sair",
      onClick: () => {},
      warning: true,
    },
  ];

  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Link to={routes.items}>
          <img src={logo} alt="Almox Controller" />
        </Link>
        <nav className={styles.menuNav}>
          <ul ref={menuRef} className={styles.menuOptions}>
            <li className={styles.menuOption}>
              <MenuButton
                title="Itens"
                isActive={popupActive === "items"}
                onClick={() => handleActivePopup("items")}
              />
              <PopupMenu
                options={itemsOptions}
                isVisible={popupActive === "items"}
              />
            </li>
            <li className={styles.menuOption}>
              <button
                className={styles.avatar}
                onClick={() => handleActivePopup("user")}
              >
                <UserAvatar userName="Fulano de Tal" size="button" />
              </button>
              <PopupMenu
                options={userOptions}
                isVisible={popupActive === "user"}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
