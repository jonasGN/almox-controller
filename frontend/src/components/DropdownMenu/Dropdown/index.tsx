import { Menu } from "../Menu";
import { MenuLine } from "../MenuLine";

import styles from "./styles.module.scss";

interface DropdownMenuProps {
  children: React.ReactElement;
}

export const DropdownMenu = (props: DropdownMenuProps): JSX.Element => {
  const { children } = props;

  return (
    <div className={styles.dropdownContainer}>
      <span>{children}</span>

      <Menu>
        <MenuLine title="Perfil" />
        <MenuLine title="Sair" />
      </Menu>
    </div>
  );
};
