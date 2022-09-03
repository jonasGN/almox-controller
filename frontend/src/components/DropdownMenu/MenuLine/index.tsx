import { Icon } from "../../Icons";

import styles from "./styles.module.scss";

interface MenuLineProps {
  title: string;
  leadingIcon?: Icon;
}

export const MenuLine = (props: MenuLineProps): JSX.Element => {
  const { title, leadingIcon } = props;

  return (
    <li className={styles.menuLineContainer}>
      {leadingIcon}
      {title}
    </li>
  );
};
