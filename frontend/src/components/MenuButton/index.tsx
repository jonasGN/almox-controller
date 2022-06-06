import React from "react";

import styles from "./styles.module.scss";

interface MenuButtonProps {
  title: string;
  isActive: boolean;
  onClick: React.MouseEventHandler;
}

export function MenuButton(props: MenuButtonProps) {
  const activeClass = props.isActive ? styles.active : "";

  function handleOnClick(event: React.MouseEvent) {
    event.preventDefault();

    if (props.isActive) return;
    props.onClick(event);
  }

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
