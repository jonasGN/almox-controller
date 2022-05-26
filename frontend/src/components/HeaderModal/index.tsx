import React from "react";
import { useState } from "react";
import styles from "./styles.module.scss";

interface HeaderModalProps {
  children: React.ReactNode;
}

export function HeaderModal({ children }: HeaderModalProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className={styles.headerModal}>
      <ul>{children}</ul>
    </nav>
  );
}

interface OptionLineProps {
  title: string;
  onClick: () => void;
  warning?: boolean;
}

export function OptionLine({ title, onClick, ...props }: OptionLineProps) {
  const warningClass = props.warning ? styles.warning : "";

  return (
    <li className={warningClass}>
      <button onClick={onClick}>{title}</button>
    </li>
  );
}
