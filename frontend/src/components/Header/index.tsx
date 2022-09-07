import { useAuth } from "../../hooks/auth";
import { useOverlayElement } from "../../hooks/element";

import { Avatar } from "../Avatar";
import { DropdownMenu, MenuItem } from "../DropdownMenu";
import { LogoutIcon, PersonIcon } from "../Icons";

import styles from "./styles.module.scss";

export const Header = (): JSX.Element => {
  const { user } = useAuth();
  const { isVisible, elementRef, onOpenElement } = useOverlayElement<HTMLMenuElement>();

  const options: MenuItem[] = [
    {
      title: "Perfil",
      url: "#",
      icon: <PersonIcon />,
    },
    {
      title: "Sair",
      icon: <LogoutIcon />,
      isDanger: true,
      onClick: () => {},
    },
  ];

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerAvatarContainer}>
        <div className={styles.userInfo}>
          <strong>{user.name}</strong>
          <span>{user.internalCode}</span>
        </div>

        <DropdownMenu ref={elementRef} isVisible={isVisible} items={options}>
          <Avatar
            userName={user.name}
            userImage={user.avatar}
            onClick={isVisible ? undefined : onOpenElement}
          />
        </DropdownMenu>
      </div>
    </header>
  );
};
