import { Logo } from "../Logo";
import { SideBarNavItem } from "./SideBarNavItem";
import { SideBarSection } from "./SideBarSection";

import styles from "./styles.module.scss";

interface SideBarProps {}

export const SideBar = (props: SideBarProps): JSX.Element => {
  const {} = props;

  return (
    <nav className={styles.sideBarContainer}>
      <header>
        <Logo />
      </header>

      <SideBarSection title="Itens">
        <SideBarNavItem title="Catálogo" />
        <SideBarNavItem title="Solicitações" />
      </SideBarSection>

      <SideBarSection title="Usuários">
        <SideBarNavItem title="Catálogo" />
        <SideBarNavItem title="Solicitações" />
      </SideBarSection>
    </nav>
  );
};
