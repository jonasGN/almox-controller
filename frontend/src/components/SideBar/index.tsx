import { Link } from "react-router-dom";
import { Paths } from "@/routes";
import { config } from "@/config";

import { Logo } from "../Logo";
import { SideBarNavItem } from "./SideBarNavItem";
import { SideBarSection } from "./SideBarSection";

import styles from "./styles.module.scss";

interface SideBarProps {}

export const SideBar = (props: SideBarProps): JSX.Element => {
  const {} = props;

  return (
    <aside className={styles.sideBarContainer}>
      <header>
        <Link to={Paths.DASHBOARD}>
          <Logo />
        </Link>
      </header>

      <nav>
        <SideBarSection title="Itens">
          <SideBarNavItem title="Catálogo" navigateTo={Paths.ITEMS} />
          <SideBarNavItem title="Solicitações" navigateTo={Paths.ITEMS_REQUESTS} />
        </SideBarSection>

        <SideBarSection title="Usuários">
          <SideBarNavItem title="Catálogo" />
          <SideBarNavItem title="Solicitações" />
        </SideBarSection>
      </nav>

      <footer>v {config.appVersion}</footer>
    </aside>
  );
};
