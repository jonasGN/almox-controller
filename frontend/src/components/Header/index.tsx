import { useAuth } from "../../context/AuthProvider";
import { useModal } from "../../hooks";

import { Avatar } from "../Avatar";
import { DropdownMenu, MenuItem } from "../DropdownMenu";
import { LogoutIcon, PersonIcon } from "../Icons";

import styles from "./styles.module.scss";

export const Header = (): JSX.Element => {
  const { user } = useAuth();
  const { isOpen, modalRef, onOpenModal } = useModal<HTMLMenuElement>();

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

        <DropdownMenu ref={modalRef} isVisible={isOpen} items={options}>
          <Avatar
            userName={user.name}
            userImage={user.avatar}
            onClick={isOpen ? undefined : onOpenModal}
          />
        </DropdownMenu>
      </div>
    </header>
  );
};
