import type { MenuItem } from "../MenuItem";
import { Link } from "@/wrappers/navigation";
import { classNames } from "@/utils/styles";

import { RawButton } from "../../Buttons";

import styles from "./styles.module.scss";

interface ItemProps {
  isDanger?: boolean;
  children: React.ReactNode;
}

interface MenuLineProps {
  item: MenuItem;
}

const Item = (props: ItemProps): JSX.Element => {
  const { isDanger = false, children } = props;

  const classes = classNames(styles.menuLineContainer, isDanger ? styles.danger : "");

  return <li className={classes}>{children}</li>;
};

export const MenuLine = (props: MenuLineProps): JSX.Element => {
  const { title, icon, isDanger, onClick, url } = props.item;

  if (url) {
    return (
      <Item isDanger={isDanger}>
        <Link to={url}>
          {icon}
          {title}
        </Link>
      </Item>
    );
  }

  return (
    <Item isDanger={isDanger}>
      <RawButton onClick={onClick} style={{ width: "100%" }}>
        {icon}
        {title}
      </RawButton>
    </Item>
  );
};
