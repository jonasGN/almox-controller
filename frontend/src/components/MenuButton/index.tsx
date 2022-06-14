import React from "react";
import { classNameByCondition } from "../../utils/css-helper";

import styles from "./styles.module.scss";

interface MenuButtonProps {
  title: string;
  isActive: boolean;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export function MenuButton(props: MenuButtonProps) {
  function handleOnClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    if (props.isActive) return;
    props.onClick(event);
  }

  const activeClass = classNameByCondition(props.isActive, styles.active);

  return (
    <a
      href=""
      className={`${styles.menuButton} ${activeClass}`}
      onClick={handleOnClick}
    >
      {props.title}
    </a>
  );
}
