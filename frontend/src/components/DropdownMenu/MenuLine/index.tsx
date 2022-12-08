import type { Icons } from "@Types/icons";
import type { VoidCallback } from "@Types/aliases";
import { Link } from "@/wrappers/navigation";
import { classNames } from "@/utils/styles";

import { RawButton } from "../../Buttons";
import { Icon } from "@/components/Icon";

import styles from "./styles.module.scss";

export interface MenuItem {
  title: string;
  url?: string;
  icon?: Icons;
  onClick?: VoidCallback;
  isDanger?: boolean;
}

interface ItemProps {
  isDanger?: boolean;
  children: React.ReactNode;
}

interface MenuLineProps {
  item: MenuItem;
}

// the wrapper element between the dropdown line
const Item = (props: ItemProps): JSX.Element => {
  const { isDanger = false, children } = props;

  const classes = classNames(styles.menuLineContainer, isDanger ? styles.danger : "");

  return <li className={classes}>{children}</li>;
};

export const MenuLine = (props: MenuLineProps): JSX.Element => {
  const { title, icon, isDanger, onClick, url } = props.item;

  const IconComponent = icon ? <Icon name={icon} /> : null;

  if (url) {
    return (
      <Item isDanger={isDanger}>
        <Link to={url}>
          {IconComponent}
          {title}
        </Link>
      </Item>
    );
  }

  return (
    <Item isDanger={isDanger}>
      <RawButton onClick={onClick} style={{ width: "100%" }}>
        {IconComponent}
        {title}
      </RawButton>
    </Item>
  );
};
