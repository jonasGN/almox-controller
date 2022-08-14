import styles from "./styles.module.scss";

interface SideBarNavItemProps {
  title: string;
}

export const SideBarNavItem = (props: SideBarNavItemProps): JSX.Element => {
  const { title } = props;

  return (
    <li className={styles.sideBarNavItemContainer}>
      <a href="">{title}</a>
    </li>
  );
};
