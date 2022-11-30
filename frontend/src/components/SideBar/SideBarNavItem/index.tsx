import { Link, To } from "@/wrappers/navigation";

import styles from "./styles.module.scss";

interface SideBarNavItemProps {
  title: string;
  navigateTo?: To;
}

export const SideBarNavItem = (props: SideBarNavItemProps): JSX.Element => {
  const { title, navigateTo } = props;

  return (
    <li className={styles.sideBarNavItemContainer}>
      <Link to={navigateTo ?? ""}>{title}</Link>
    </li>
  );
};
