import type { MenuItem } from "../MenuLine";
import React from "react";

import { ShowWhen } from "@/layout";
import { MenuLine } from "../MenuLine";

import styles from "./styles.module.scss";

type ForwardRefRender = React.ForwardRefRenderFunction<
  HTMLMenuElement,
  DropdownMenuProps
>;

interface DropdownMenuProps {
  isVisible: boolean;
  items: Array<MenuItem>;
  children: React.ReactElement;
}

export const DropdownMenuBase: ForwardRefRender = (props, ref): JSX.Element => {
  const { isVisible, items, children } = props;

  return (
    <div className={styles.dropdownContainer}>
      <span>{children}</span>

      <ShowWhen condition={isVisible}>
        <menu ref={ref} className={styles.menu}>
          {items?.map((item) => (
            <MenuLine key={item.title} item={item} />
          ))}
        </menu>
      </ShowWhen>
    </div>
  );
};

export const DropdownMenu = React.forwardRef(DropdownMenuBase);
