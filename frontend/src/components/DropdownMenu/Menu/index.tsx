import styles from "./styles.module.scss";

interface MenuProps {
  children: React.ReactNode;
}

export const Menu = (props: MenuProps): JSX.Element => {
  const { children } = props;

  return <menu className={styles.menuContainer}>{children}</menu>;
};
