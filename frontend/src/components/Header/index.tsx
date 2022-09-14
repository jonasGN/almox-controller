import { useState } from "react";
import { useSignOut } from "../../hooks/auth";
import { useOverlayElement } from "../../hooks/element";
import { retriveData } from "../../services/localStorage";

import { Avatar } from "../Avatar";
import { DropdownMenu, MenuItem } from "../DropdownMenu";
import { HourglassTopIcon, LogoutIcon, PersonIcon } from "../Icons";
import { FixedModal } from "../Modals";

import styles from "./styles.module.scss";

export const Header = (): JSX.Element => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const dropdownMenu = useOverlayElement<HTMLMenuElement>();

  const signOut = useSignOut();

  const handleSignOut = async () => {
    dropdownMenu.onCloseElement();
    setIsLogoutModalOpen(true);
    await signOut();
    setIsLogoutModalOpen(false);
  };

  const user = retriveData("user");

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
      onClick: handleSignOut,
    },
  ];

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerAvatarContainer}>
          <div className={styles.userInfo}>
            <strong>{user.name}</strong>
            <span>{user.internalCode}</span>
          </div>

          <DropdownMenu
            ref={dropdownMenu.elementRef}
            isVisible={dropdownMenu.isVisible}
            items={options}
          >
            <Avatar
              userName={user.name}
              userImage={user.avatar}
              onClick={dropdownMenu.isVisible ? undefined : dropdownMenu.onOpenElement}
            />
          </DropdownMenu>
        </div>
      </header>

      <FixedModal
        isOpen={isLogoutModalOpen}
        icon={<HourglassTopIcon />}
        title="Saindo da aplicação"
        description="Aguarde enquanto a aplicação é encerrada. Após finalizada, você será redirecionado para a tela de login."
      />
    </>
  );
};
