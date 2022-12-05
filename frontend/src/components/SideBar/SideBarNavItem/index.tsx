import { classNames } from "@/utils/styles";
import { Link, To, useLocation } from "@/wrappers/navigation";

import styles from "./styles.module.scss";

interface SideBarNavItemProps {
  title: string;
  currentPath?: string;
  navigateTo?: To;
}

export const SideBarNavItem = (props: SideBarNavItemProps): JSX.Element => {
  const { title, navigateTo } = props;

  const { pathname } = useLocation();

  // set a diferent color to link when the pathname match with the target path
  let isActive = false;
  if (pathname === navigateTo?.toString()) {
    isActive = true;
  }
  if (pathname.startsWith(navigateTo?.toString()!)) {
    isActive = true;
  }

  const itemClasses = classNames(
    styles.sideBarNavItemContainer,
    isActive ? styles.active : ""
  );

  return (
    <li className={itemClasses}>
      <Link to={navigateTo ?? ""}>{title}</Link>
    </li>
  );
};
